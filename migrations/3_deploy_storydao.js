var Migrations = artifacts.require("./Migrations.sol");
var StoryDao = artifacts.require("./StoryDao.sol");
var TNSToken = artifacts.require("./TNSToken.sol");

module.exports = function(deployer, network, accounts) {
  if (network == "development") {
    deployer.deploy(StoryDao, TNSToken.address, {from: accounts[0]});
  } else {
    deployer.deploy(StoryDao, TNSToken.address);
  }
};
