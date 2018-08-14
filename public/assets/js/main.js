let TNSToken = web3.eth.contract([{
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [{
      "name": "",
      "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [{
      "name": "",
      "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{
      "name": "_newOwner",
      "type": "address"
    }],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Locked",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "previousOwner",
      "type": "address"
    }],
    "name": "OwnershipRenounced",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [{
        "name": "_owner",
        "type": "address"
      },
      {
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "increaseLockedAmount",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{
        "name": "_owner",
        "type": "address"
      },
      {
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "decreaseLockedAmount",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "unlockForAll",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{
        "name": "_to",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{
        "name": "_spender",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{
        "name": "_from",
        "type": "address"
      },
      {
        "name": "_to",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{
        "name": "_spender",
        "type": "address"
      },
      {
        "name": "_addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseApproval",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{
        "name": "_spender",
        "type": "address"
      },
      {
        "name": "_subtractedValue",
        "type": "uint256"
      }
    ],
    "name": "decreaseApproval",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{
      "name": "_owner",
      "type": "address"
    }],
    "name": "getLockedAmount",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{
      "name": "_owner",
      "type": "address"
    }],
    "name": "getUnlockedAmount",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{
      "name": "_owner",
      "type": "address"
    }],
    "name": "balanceOf",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{
        "name": "_owner",
        "type": "address"
      },
      {
        "name": "_spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
]);

let StoryDao = web3.eth.contract([
  {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "uint256"
    }],
    "name": "proposals",
    "outputs": [{
        "name": "description",
        "type": "string"
      },
      {
        "name": "executed",
        "type": "bool"
      },
      {
        "name": "currentResult",
        "type": "int256"
      },
      {
        "name": "typeFlag",
        "type": "uint8"
      },
      {
        "name": "target",
        "type": "bytes32"
      },
      {
        "name": "creationDate",
        "type": "uint256"
      },
      {
        "name": "deadline",
        "type": "uint256"
      },
      {
        "name": "submitter",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "active",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "withdrawableByOwner",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "uint256"
    }],
    "name": "submissionIndex",
    "outputs": [{
      "name": "",
      "type": "bytes32"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "whitelistedNumber",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "deadline",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "address"
    }],
    "name": "deletions",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "imageGapMin",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "imageGap",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "whitelistfee",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "address"
    }],
    "name": "whitelist",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "durationDays",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "nonDeletedSubmissions",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "bytes32"
    }],
    "name": "submissions",
    "outputs": [{
        "name": "content",
        "type": "bytes"
      },
      {
        "name": "image",
        "type": "bool"
      },
      {
        "name": "index",
        "type": "uint256"
      },
      {
        "name": "submitter",
        "type": "address"
      },
      {
        "name": "exists",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "daofee",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "submissionZeroFee",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "durationSubmissions",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{
      "name": "_newOwner",
      "type": "address"
    }],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "tokenToWeiRatio",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "address"
    }],
    "name": "blacklist",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "token",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{
      "name": "_token",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "name": "addr",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "status",
        "type": "bool"
      }
    ],
    "name": "Whitelisted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "name": "addr",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "status",
        "type": "bool"
      }
    ],
    "name": "Blacklisted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "token",
      "type": "address"
    }],
    "name": "TokenAddressChange",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "newFee",
      "type": "uint256"
    }],
    "name": "SubmissionFeeChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "name": "index",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "content",
        "type": "bytes"
      },
      {
        "indexed": false,
        "name": "image",
        "type": "bool"
      },
      {
        "indexed": false,
        "name": "submitter",
        "type": "address"
      }
    ],
    "name": "SubmissionCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "name": "index",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "content",
        "type": "bytes"
      },
      {
        "indexed": false,
        "name": "image",
        "type": "bool"
      },
      {
        "indexed": false,
        "name": "submitter",
        "type": "address"
      }
    ],
    "name": "SubmissionDeleted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "typeFlag",
        "type": "uint8"
      },
      {
        "indexed": false,
        "name": "hash",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "description",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "submitter",
        "type": "address"
      }
    ],
    "name": "ProposalAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "id",
      "type": "uint256"
    }],
    "name": "ProposalExecuted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [{
        "indexed": false,
        "name": "voter",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "vote",
        "type": "bool"
      },
      {
        "indexed": false,
        "name": "power",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "justification",
        "type": "string"
      }
    ],
    "name": "Voted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "newFee",
      "type": "uint256"
    }],
    "name": "SubmissionCommissionChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "newFee",
      "type": "uint256"
    }],
    "name": "WhitelistFeeChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "StoryEnded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [{
      "indexed": true,
      "name": "previousOwner",
      "type": "address"
    }],
    "name": "OwnershipRenounced",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "bigRedButton",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "endStory",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{
        "name": "_hash",
        "type": "bytes32"
      },
      {
        "name": "_description",
        "type": "string"
      }
    ],
    "name": "proposeDeletion",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{
        "name": "_hash",
        "type": "bytes32"
      },
      {
        "name": "_description",
        "type": "string"
      }
    ],
    "name": "proposeDeletionUrgent",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{
        "name": "_hash",
        "type": "bytes32"
      },
      {
        "name": "_description",
        "type": "string"
      }
    ],
    "name": "proposeDeletionUrgentImage",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{
      "name": "_id",
      "type": "uint256"
    }],
    "name": "executeProposal",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{
        "name": "_proposalId",
        "type": "uint256"
      },
      {
        "name": "_vote",
        "type": "bool"
      },
      {
        "name": "_description",
        "type": "string"
      },
      {
        "name": "_votePower",
        "type": "uint256"
      }
    ],
    "name": "vote",
    "outputs": [{
      "name": "",
      "type": "int256"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{
      "name": "_fee",
      "type": "uint256"
    }],
    "name": "changedaofee",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{
      "name": "_fee",
      "type": "uint256"
    }],
    "name": "changewhitelistfee",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{
      "name": "_fee",
      "type": "uint256"
    }],
    "name": "lowerSubmissionFee",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{
      "name": "_days",
      "type": "uint256"
    }],
    "name": "changedurationdays",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{
      "name": "_subs",
      "type": "uint256"
    }],
    "name": "changedurationsubmissions",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{
        "name": "_content",
        "type": "bytes"
      },
      {
        "name": "_image",
        "type": "bool"
      }
    ],
    "name": "createSubmission",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "unblacklistMe",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{
      "name": "_offender",
      "type": "address"
    }],
    "name": "unblacklistAddress",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{
      "name": "hash",
      "type": "bytes32"
    }],
    "name": "submissionExists",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [{
      "name": "hash",
      "type": "bytes32"
    }],
    "name": "getSubmission",
    "outputs": [{
        "name": "content",
        "type": "bytes"
      },
      {
        "name": "image",
        "type": "bool"
      },
      {
        "name": "submitter",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getAllSubmissionHashes",
    "outputs": [{
      "name": "",
      "type": "bytes32[]"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getSubmissionCount",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "daoTokenBalance",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{
      "name": "_token",
      "type": "address"
    }],
    "name": "changeTokenAddress",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{
        "name": "_buyer",
        "type": "address"
      },
      {
        "name": "_wei",
        "type": "uint256"
      }
    ],
    "name": "buyTokensThrow",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{
      "name": "_add",
      "type": "address"
    }],
    "name": "whitelistAddress",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "withdrawLeftoverTokens",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "unlockMyTokens",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "withdrawToOwner",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "withdrawEverythingPostDeadline",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{
      "name": "_amount",
      "type": "uint256"
    }],
    "name": "withdrawAmountToOwner",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "withdrawDividend",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]);

var token = TNSToken.at('0x3134bcded93e810e1025ee814e87eff252cff422');
var story = StoryDao.at('0x729400828808bc907f68d9ffdeb317c23d2034d5');

var loggedIn;

(function () {

  loggedIn = setLoggedIn(web3.currentProvider !== undefined && web3.eth.accounts.length > 0);

  if (loggedIn) {

    token.balanceOf(web3.eth.accounts[0], function (error, result) {
      console.log(JSON.stringify(result))
    });
    story.getSubmissionCount(function (error, result) {
      console.log(JSON.stringify(result))
    });

    web3.eth.defaultAccount = web3.eth.accounts[0];

    readUserStats().then(User => renderUserInfo(User));
    refreshSubmissions();
  } else {
    document.getElementById("submission-body-btn").disabled = "disabled";
  }

})();

async function readUserStats(address) {
  if (address === undefined) {
    address = web3.eth.accounts[0];
  }
  var User = {
    numberOfSubmissions: await getSubmissionsCountForUser(address),
    numberOfDeletions: await getDeletionsCountForUser(address),
    isWhitelisted: await isWhitelisted(address),
    isBlacklisted: await isBlacklisted(address),
    numberOfProposals: await getProposalCountForUser(address),
    numberOfVotes: await getVotesCountForUser(address)
  }
  return User;
}

function renderUserInfo(User) {
  console.log(User);

  document.querySelector('#user_submissions').innerHTML = User.numberOfSubmissions;
  document.querySelector('#user_deletions').innerHTML = User.numberOfDeletions;
  document.querySelector('#user_proposals').innerHTML = User.numberOfProposals;
  document.querySelector('#user_votes').innerHTML = User.numberOfVotes;
  document.querySelector('dd.user_blacklisted').style.display = User.isBlacklisted ? 'inline-block' : 'none';
  document.querySelector('dt.user_blacklisted').style.display = User.isBlacklisted ? 'inline-block' : 'none';
  document.querySelector('dt.user_whitelisted').style.display = User.isWhitelisted ? 'inline-block' : 'none';
  document.querySelector('dd.user_whitelisted').style.display = User.isWhitelisted ? 'inline-block' : 'none';
}

async function getSubmissionsCountForUser(address) {
  if (address === undefined) {
    address = web3.eth.accounts[0];
  }
  return new Promise(function (resolve, reject) {
    resolve(0);
  });
}
async function getDeletionsCountForUser(address) {
  if (address === undefined) {
    address = web3.eth.accounts[0];
  }
  return new Promise(function (resolve, reject) {
    resolve(0);
  });
}
async function getProposalCountForUser(address) {
  if (address === undefined) {
    address = web3.eth.accounts[0];
  }
  return new Promise(function (resolve, reject) {
    resolve(0);
  });
}
async function getVotesCountForUser(address) {
  if (address === undefined) {
    address = web3.eth.accounts[0];
  }
  return new Promise(function (resolve, reject) {
    resolve(0);
  });
}
async function isWhitelisted(address) {
  if (address === undefined) {
    address = web3.eth.accounts[0];
  }
  return new Promise(function (resolve, reject) {
    resolve(false);
  });
}
async function isBlacklisted(address) {
  if (address === undefined) {
    address = web3.eth.accounts[0];
  }
  return new Promise(function (resolve, reject) {
    resolve(false);
  });
}

function setLoggedIn(isLoggedIn) {
  let loggedInEl = document.querySelector('div.logged.in');
  let loggedOutEl = document.querySelector('div.logged.out');

  if (isLoggedIn) {
    loggedInEl.style.display = "block";
    loggedOutEl.style.display = "none";

    var icon = blockies.create({ // All options are optional
      seed: web3.eth.accounts[0], // seed used to generate icon data, default: random
      size: 20, // width/height of the icon in blocks, default: 8
      scale: 8, // width/height of each block in pixels, default: 4
    });

    document.querySelector("div.avatar").appendChild(icon);

  } else {
    loggedInEl.style.display = "none";
    loggedOutEl.style.display = "block";
  }

  return isLoggedIn;
}

// Submissions

document.getElementById("submission-body-btn").addEventListener("click", function (e) {
  if (!loggedIn) {
    return false;
  }

  var text = document.getElementById("submission-body-input").value;
  text = web3.toHex(text);

  story.createSubmission(text, false, {
    value: 0,
    gas: 400000
  }, function (error, result) {
    refreshSubmissions();
  });
});

function refreshSubmissions() {
  story.getAllSubmissionHashes(function (error, result) {
    var entries = [];
    for (var i = 0; i < result.length; i++) {
      story.getSubmission(result[i], (err, res) => {

        if (res[2] === web3.eth.accounts[0]) {
          res[2] = 'you';
        }
        let el = "";
        el += '<div class="submission">';
        el += '<div class="submission-body">' + web3.toAscii(res[0]) + '</div>';
        el += '<div class="submission-submitter">by: ' + res[2] + '</div>';
        el += '</div>';
        el += '</div>';
        document.querySelector('.content-submissions').innerHTML += el;
      });
    }
  });
}

// Events

var highestBlock = 0;
var WhitelistedEvent = story.Whitelisted({}, {
  fromBlock: 0,
  toBlock: "latest"
});
var SubmissionCreatedEvent = story.SubmissionCreated({}, {
  fromBlock: 0,
  toBlock: "latest"
});

var events = [WhitelistedEvent, SubmissionCreatedEvent];
for (let i = 0; i < events.length; i++) {
  events[i].get(historyCallback);
  events[i].watch(watchCallback);
}

function watchCallback(error, result) {
  if (!error && result.blockNumber > highestBlock) {
    printEvent(result.event, result);
  }
}

function historyCallback(error, eventResult) {
  if (error) {
    console.log('Error in event handler: ' + error);
  } else {
    console.log(eventResult);
    let len = eventResult.length;
    for (let i = 0; i < len; i++) {
      console.log(eventResult[i]);
      highestBlock = highestBlock < eventResult[i].blockNumber ? eventResult[i].blockNumber : highestBlock;
      printEvent(eventResult[i].event, eventResult[i]);
    }
  }
}

function printEvent(type, object) {
  let el;
  switch (type) {
    case "Whitelisted":
      if (object.args.status === true) {
        el = "<li>Whitelisted address " + object.args.addr + "</li>";
      } else {
        el = "<li>Removed address " + object.args.addr + " from whitelist!</li>";
      }
      document.querySelector("ul.eventlist").innerHTML += el;
      break;
    case "SubmissionCreated":
      el = "<li>User " + object.args.submitter + " created a" + ((object.args.image) ? "n image" : " text") + " entry: #" + object.args.index + " of content " + object.args.content + "</li>";
      document.querySelector("ul.eventlist").innerHTML += el;
      break;
    default:
      break;
  }
}