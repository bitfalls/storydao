pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/StoryDao.sol";

contract TestStoryDao {
    
    function testDeploymentIsFine() public {
        StoryDao sd = StoryDao(DeployedAddresses.StoryDao());
        
        uint256 daofee = 100; // hundredths of a percent, i.e. 100 is 1%
        uint256 whitelistfee = 10000000000000000; // in Wei, this is 0.01 ether

        uint256 durationDays = 21; // duration of story's chapter in days
        uint256 durationSubmissions = 1000; // duration of story's chapter in entries

        Assert.equal(sd.daofee(), daofee, "Initial DAO fee should be 100");
        Assert.equal(sd.whitelistfee(), whitelistfee, "Initial whitelisting fee should be 0.01 ether");
        Assert.equal(sd.durationDays(), durationDays, "Initial day duration should be set to 3 weeks");
        Assert.equal(sd.durationSubmissions(), durationSubmissions, "Initial submission duration should be set to 1000 entries");
    }
}