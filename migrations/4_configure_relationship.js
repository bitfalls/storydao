var Migrations = artifacts.require("./Migrations.sol");
var StoryDao = artifacts.require("./StoryDao.sol");
var TNSToken = artifacts.require("./TNSToken.sol");

var storyInstance, tokenInstance;

module.exports = function (deployer, network, accounts) {

    deployer.then(function () {
            return TNSToken.deployed();
        }).then(function (tIns) {
            tokenInstance = tIns;
            return StoryDao.deployed();
        }).then(function (sIns) {
            storyInstance = sIns;
            return balance = tokenInstance.totalSupply();
        }).then(function (bal) {
            return tokenInstance.transfer(storyInstance.address, bal);
        })
        .then(function (something) {
            return tokenInstance.transferOwnership(storyInstance.address);
        });
}