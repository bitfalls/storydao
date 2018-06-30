pragma solidity ^0.4.24;

// File: node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol

/**
 * @title SafeMath
 * @dev Math operations with safety checks that throw on error
 */
library SafeMath {

  /**
  * @dev Multiplies two numbers, throws on overflow.
  */
  function mul(uint256 a, uint256 b) internal pure returns (uint256 c) {
    // Gas optimization: this is cheaper than asserting 'a' not being zero, but the
    // benefit is lost if 'b' is also tested.
    // See: https://github.com/OpenZeppelin/openzeppelin-solidity/pull/522
    if (a == 0) {
      return 0;
    }

    c = a * b;
    assert(c / a == b);
    return c;
  }

  /**
  * @dev Integer division of two numbers, truncating the quotient.
  */
  function div(uint256 a, uint256 b) internal pure returns (uint256) {
    // assert(b > 0); // Solidity automatically throws when dividing by 0
    // uint256 c = a / b;
    // assert(a == b * c + a % b); // There is no case in which this doesn't hold
    return a / b;
  }

  /**
  * @dev Subtracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).
  */
  function sub(uint256 a, uint256 b) internal pure returns (uint256) {
    assert(b <= a);
    return a - b;
  }

  /**
  * @dev Adds two numbers, throws on overflow.
  */
  function add(uint256 a, uint256 b) internal pure returns (uint256 c) {
    c = a + b;
    assert(c >= a);
    return c;
  }
}

// File: node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol

/**
 * @title Ownable
 * @dev The Ownable contract has an owner address, and provides basic authorization control
 * functions, this simplifies the implementation of "user permissions".
 */
contract Ownable {
  address public owner;


  event OwnershipRenounced(address indexed previousOwner);
  event OwnershipTransferred(
    address indexed previousOwner,
    address indexed newOwner
  );


  /**
   * @dev The Ownable constructor sets the original `owner` of the contract to the sender
   * account.
   */
  constructor() public {
    owner = msg.sender;
  }

  /**
   * @dev Throws if called by any account other than the owner.
   */
  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }

  /**
   * @dev Allows the current owner to relinquish control of the contract.
   */
  function renounceOwnership() public onlyOwner {
    emit OwnershipRenounced(owner);
    owner = address(0);
  }

  /**
   * @dev Allows the current owner to transfer control of the contract to a newOwner.
   * @param _newOwner The address to transfer ownership to.
   */
  function transferOwnership(address _newOwner) public onlyOwner {
    _transferOwnership(_newOwner);
  }

  /**
   * @dev Transfers control of the contract to a newOwner.
   * @param _newOwner The address to transfer ownership to.
   */
  function _transferOwnership(address _newOwner) internal {
    require(_newOwner != address(0));
    emit OwnershipTransferred(owner, _newOwner);
    owner = _newOwner;
  }
}

// File: contracts/StoryDao.sol

contract LockableToken is Ownable {
    function totalSupply() public view returns (uint256);
    function balanceOf(address who) public view returns (uint256);
    function transfer(address to, uint256 value) public returns (bool);
    event Transfer(address indexed from, address indexed to, uint256 value);
    function allowance(address owner, address spender) public view returns (uint256);
    function transferFrom(address from, address to, uint256 value) public returns (bool);
    function approve(address spender, uint256 value) public returns (bool);
    event Approval(address indexed owner, address indexed spender, uint256 value);
    function approveAndCall(address _spender, uint256 _value, bytes _data) public payable returns (bool);
    function transferAndCall(address _to, uint256 _value, bytes _data) public payable returns (bool);
    function transferFromAndCall(address _from, address _to, uint256 _value, bytes _data) public payable returns (bool);
    function decimals() public view returns (uint256);

    function increaseLockedAmount(address _owner, uint256 _amount) public returns (uint256);
    function decreaseLockedAmount(address _owner, uint256 _amount) public returns (uint256);
    function getLockedAmount(address _owner) view public returns (uint256);
    function getUnlockedAmount(address _owner) view public returns (uint256);
}

contract StoryDao is Ownable {
    using SafeMath for uint256;

    mapping(address => bool) public whitelist;
    uint256 public whitelistedNumber = 0;
    mapping(address => bool) public blacklist;
    event Whitelisted(address addr, bool status);
    event Blacklisted(address addr, bool status);

    LockableToken public token;
    event TokenAddressChange(address token);

    uint256 public tokenToWeiRatio = 10000;

    mapping (bytes32 => Submission) public submissions;
    mapping (address => uint256) public deletions;
    bytes32[] public submissionIndex;

    uint256 public submissionZeroFee = 0.0001 ether;
    uint256 public nonDeletedSubmissions = 0;
    event SubmissionFeeChanged(uint256 newFee);
    event SubmissionCreated(uint256 index, bytes content, bool image, address submitter);
    event SubmissionDeleted(uint256 index, bytes content, bool image, address submitter);

    struct Submission {
        bytes content;
        bool image;
        uint256 index;
        address submitter;
        bool exists;
    }

    uint256 public daofee = 100; // hundredths of a percent, i.e. 100 is 1%
    uint256 public whitelistfee = 10000000000000000; // in Wei, this is 0.01 ether
    uint256 public withdrawableByOwner = 0;

    struct Proposal {
        string description;
        bool executed;
        int256 currentResult;
        uint8 typeFlag; // 1 = delete
        bytes32 target; // ID of the proposal target. I.e. flag 1, target XXXXXX (hash) means proposal to delete submissions[hash]
        uint256 creationDate;
        uint256 deadline;
        mapping (address => bool) voters;
        Vote[] votes;
        address submitter;
    }

    Proposal[] public proposals;
    uint256 proposalCount = 0;
    event ProposalAdded(uint256 id, uint8 typeFlag, bytes32 hash, string description, address submitter);
    event ProposalExecuted(uint256 id);
    event Voted(address voter, bool vote, uint256 power, string justification);

    struct Vote {
        bool inSupport;
        address voter;
        string justification;
        uint256 power;
    }

    event SubmissionCommissionChanged(uint256 newFee);
    event WhitelistFeeChanged(uint256 newFee);

    uint256 public durationDays = 21; // duration of story's chapter in days
    uint256 public deadline;
    uint256 public durationSubmissions = 1000; // duration of story's chapter in entries
    bool public active = true;
    event StoryEnded();

    uint256 public imageGapMin = 50;
    uint256 public imageGap = 0;

    modifier memberOnly() {
        require(whitelist[msg.sender]);
        require(!blacklist[msg.sender]);
        _;
    }

    modifier tokenHoldersOnly() {
        require(token.balanceOf(msg.sender) >= 10**token.decimals());
        _;
    }

    modifier storyActive() {
        require(active == true);
        _;
    }

    constructor(address _token) public {
        require(_token != address(0), "Token address cannot be null-address");
        token = LockableToken(_token);
        deadline = now + durationDays * 1 days;
    }

    function endStory() storyActive public {
        withdrawToOwner();
        active = false;
        emit StoryEnded();
    }

    function proposeDeletion(bytes32 _hash, string _description) storyActive memberOnly public {

        require(submissionExists(_hash), "Submission must exist to be deletable");

        uint256 proposalId = proposals.length++;
        Proposal storage p = proposals[proposalId];
        p.description = _description;
        p.executed = false;
        p.creationDate = now;
        p.submitter = msg.sender;
        p.typeFlag = 1;
        p.target = _hash;

        p.deadline = now + 2 days;

        emit ProposalAdded(proposalId, 1, _hash, _description, msg.sender);
        proposalCount = proposalId + 1;
    }

    function proposeDeletionUrgent(bytes32 _hash, string _description) storyActive onlyOwner public {

        require(submissionExists(_hash), "Submission must exist to be deletable");

        uint256 proposalId = proposals.length++;
        Proposal storage p = proposals[proposalId];
        p.description = _description;
        p.executed = false;
        p.creationDate = now;
        p.submitter = msg.sender;
        p.typeFlag = 1;
        p.target = _hash;

        p.deadline = now + 12 hours;

        emit ProposalAdded(proposalId, 1, _hash, _description, msg.sender);
        proposalCount = proposalId + 1;
    }    

    function proposeDeletionUrgentImage(bytes32 _hash, string _description) storyActive onlyOwner public {

        require(submissions[_hash].image == true, "Submission must be existing image");

        uint256 proposalId = proposals.length++;
        Proposal storage p = proposals[proposalId];
        p.description = _description;
        p.executed = false;
        p.creationDate = now;
        p.submitter = msg.sender;
        p.typeFlag = 1;
        p.target = _hash;

        p.deadline = now + 4 hours;

        emit ProposalAdded(proposalId, 1, _hash, _description, msg.sender);
        proposalCount = proposalId + 1;
    }    

    function executeProposal(uint256 _id) storyActive public {
        Proposal storage p = proposals[_id];
        require(now >= p.deadline && !p.executed);

        if (p.typeFlag == 1 && p.currentResult > 0) {
            assert(deleteSubmission(p.target));
        }

        uint256 len = p.votes.length;
        for (uint i = 0; i < len; i++) {
            token.decreaseLockedAmount(p.votes[i].voter, p.votes[i].power);
        }

        p.executed = true;
        emit ProposalExecuted(_id);
    }

    function vote(uint256 _proposalId, bool _vote, string _description, uint256 _votePower) storyActive tokenHoldersOnly public returns (int256) {

        require(_votePower > 0, "At least some power must be given to the vote.");
        require(uint256(_votePower) <= token.balanceOf(msg.sender), "Voter must have enough tokens to cover the power cost.");

        Proposal storage p = proposals[_proposalId];

        require(p.executed == false, "Proposal must not have been executed already.");
        require(p.deadline > now, "Proposal must not have expired.");
        require(p.voters[msg.sender] == false, "User must not have already voted.");
        
        uint256 voteid = p.votes.length++;
        Vote storage pvote = p.votes[voteid];
        pvote.inSupport = _vote;
        pvote.justification = _description;
        pvote.voter = msg.sender;
        pvote.power = _votePower;

        p.voters[msg.sender] = true;

        p.currentResult = (_vote) ? p.currentResult + int256(_votePower) : p.currentResult - int256(_votePower);
        token.increaseLockedAmount(msg.sender, _votePower);

        emit Voted(msg.sender, _vote, _votePower, _description);
        return p.currentResult;
    }

    function changedaofee(uint256 _fee) onlyOwner storyActive external {
        require(_fee < daofee, "New fee must be lower than old fee.");
        daofee = _fee;
        emit SubmissionCommissionChanged(_fee);
    }

    function changewhitelistfee(uint256 _fee) onlyOwner storyActive external {
        require(_fee < whitelistfee, "New fee must be lower than old fee.");
        whitelistfee = _fee;
        emit WhitelistFeeChanged(_fee);
    }

    function lowerSubmissionFee(uint256 _fee) onlyOwner storyActive external {
        require(_fee < submissionZeroFee, "New fee must be lower than old fee.");
        submissionZeroFee = _fee;
        emit SubmissionFeeChanged(_fee);
    }

    function changedurationdays(uint256 _days) onlyOwner storyActive external {
        require(_days >= 1);
        durationDays = _days;
    }

    function changedurationsubmissions(uint256 _subs) onlyOwner storyActive external {
        require(_subs > 99);
        durationSubmissions = _subs;
    }

    function createSubmission(bytes _content, bool _image) storyActive external payable {
        
        require(token.balanceOf(msg.sender) >= 10**token.decimals());
        require(whitelist[msg.sender], "Must be whitelisted");
        require(!blacklist[msg.sender], "Must not be blacklisted");
        
        uint256 fee = calculateSubmissionFee();
        require(msg.value >= fee, "Fee for submitting an entry must be sufficient.");
        
        bytes32 hash = keccak256(abi.encodePacked(_content, block.number));
        require(!submissionExists(hash), "Submission must not already exist in same block!");
        
        if (_image) {
            require(imageGap >= imageGapMin, "Image can only be submitted if more than {imageGapMin} texts precede it.");
            imageGap = 0;
        } else {
            imageGap += 1;
        }
        
        submissions[hash] = Submission(
            _content, 
            _image, 
            submissionIndex.push(hash),
            msg.sender,
            true
        );
        
        emit SubmissionCreated(
            submissions[hash].index, 
            submissions[hash].content, 
            submissions[hash].image, 
            submissions[hash].submitter
        );
        
        nonDeletedSubmissions += 1;
        withdrawableByOwner += fee / daofee;
        if (nonDeletedSubmissions >= durationSubmissions) {
            endStory();
        }
    }

    function deleteSubmission(bytes32 hash) storyActive internal returns (bool) {
        require(submissionExists(hash), "Submission must exist to be deletable.");
        Submission storage sub = submissions[hash];
        
        sub.exists = false;
        deletions[submissions[hash].submitter] += 1;
        if (deletions[submissions[hash].submitter] >= 5) {
            blacklistAddress(submissions[hash].submitter);
        }
        
        emit SubmissionDeleted(
            sub.index, 
            sub.content, 
            sub.image, 
            sub.submitter
        );
        
        nonDeletedSubmissions -= 1;
        return true;
    }

    function blacklistAddress(address _offender) storyActive internal {
        require(blacklist[_offender] == false, "Can't blacklist a blacklisted user :/");
        blacklist[_offender] == true;
        token.increaseLockedAmount(_offender, token.getUnlockedAmount(_offender));
        emit Blacklisted(_offender, true);
    }

    function unblacklistMe() payable public {
        unblacklistAddress(msg.sender);
    }

    function unblacklistAddress(address _offender) storyActive payable public {
        require(msg.value >= 0.05 ether, "Unblacklisting fee");
        require(blacklist[_offender] == true, "Can't unblacklist a non-blacklisted user :/");
        require(notVoting(_offender), "Offender must not be involved in a vote.");
        withdrawableByOwner = withdrawableByOwner.add(msg.value);
        blacklist[_offender] == false;
        token.decreaseLockedAmount(_offender, token.balanceOf(_offender));
        emit Blacklisted(_offender, false);
    }

    function notVoting(address _voter) storyActive internal view returns (bool) {
        for (uint256 i = 0; i < proposalCount; i++) {
            if (proposals[i].executed == false && proposals[i].voters[_voter] == true) {
                return false;
            }
        }
        return true;
    }

    function calculateSubmissionFee() view internal returns (uint256) {
        return submissionZeroFee * nonDeletedSubmissions;
    }
    
    function submissionExists(bytes32 hash) public view returns (bool) {
        return submissions[hash].exists;
    }
    
    function getSubmission(bytes32 hash) public view returns (bytes content, bool image, address submitter) {
        return (submissions[hash].content, submissions[hash].image, submissions[hash].submitter);
    }
    
    function getAllSubmissionHashes() public view returns (bytes32[]) {
        return submissionIndex;
    }
    
    function getSubmissionCount() public view returns (uint256) {
        return submissionIndex.length;
    }

    function daoTokenBalance() public view returns (uint256) {
        return token.balanceOf(address(this));
    }

    function changeTokenAddress(address _token) storyActive onlyOwner public {
        require(_token != address(0), "Token address cannot be null-address");
        token = LockableToken(_token);
        emit TokenAddressChange(_token);
    }

    function buyTokensThrow(address _buyer, uint256 _wei) storyActive external {

        require(whitelist[_buyer], "Candidate must be whitelisted.");
        require(!blacklist[_buyer], "Candidate must not be blacklisted.");

        uint256 tokens = _wei * tokenToWeiRatio;
        require(daoTokenBalance() >= tokens, "DAO must have enough tokens for sale");
        token.transfer(_buyer, tokens);
    }

    function buyTokensInternal(address _buyer, uint256 _wei) storyActive internal {
        require(!blacklist[_buyer], "Candidate must not be blacklisted.");
        uint256 tokens = _wei * tokenToWeiRatio;
        if (daoTokenBalance() < tokens) {
            msg.sender.transfer(_wei);
        } else {
            token.transfer(_buyer, tokens);
        }
    }

    function whitelistAddress(address _add) storyActive public payable {
        require(!whitelist[_add], "Candidate must not be whitelisted.");
        require(!blacklist[_add], "Candidate must not be blacklisted.");
        require(msg.value >= whitelistfee, "Sender must send enough ether to cover the whitelisting fee.");

        withdrawableByOwner += msg.value;

        whitelist[_add] = true;
        whitelistedNumber++;
        emit Whitelisted(_add, true);

        if (msg.value > whitelistfee) {
            buyTokensInternal(_add, msg.value.sub(whitelistfee));
        }
    }

    function withdrawLeftoverTokens() external onlyOwner {
        require(active == false);
        token.transfer(msg.sender, token.balanceOf(address(this)));
        token.transferOwnership(msg.sender);
    }

    function unlockMyTokens() external {
        require(active == false);
        require(token.getLockedAmount(msg.sender) > 0);
        
        token.decreaseLockedAmount(msg.sender, token.getLockedAmount(msg.sender));
    }

    function withdrawToOwner() public {
        owner.transfer(withdrawableByOwner);
        withdrawableByOwner = 0;
    }

    function withdrawEverythingPostDeadline() external onlyOwner {
        require(active == false);
        require(now > deadline + 14 days);
        owner.transfer(address(this).balance);
    }

    function withdrawAmountToOwner(uint256 _amount) public {
        uint256 withdraw = _amount;
        if (withdraw > withdrawableByOwner) {
            withdraw = withdrawableByOwner;
        }
        owner.transfer(withdraw);
        withdrawableByOwner = withdrawableByOwner.sub(withdraw);
    }

    function withdrawDividend() external {
        require(active == false);
        uint256 owed = address(this).balance.div(whitelistedNumber);
        msg.sender.transfer(owed);
        whitelist[msg.sender] = false;
        whitelistedNumber--;
    }

    function() storyActive external payable {

        if (!whitelist[msg.sender]) {
            whitelistAddress(msg.sender);
        } else {
            buyTokensInternal(msg.sender, msg.value);
        }
    }

}
