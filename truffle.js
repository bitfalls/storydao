require('dotenv').config();

require('babel-register');
require('babel-polyfill');

const WalletProvider = require("truffle-wallet-provider");
const Wallet = require('ethereumjs-wallet');
const Web3 = require("web3");
const w3 = new Web3();

const PRIVKEY = process.env["PRIVKEY"];
const INFURAKEY = process.env["INFURAKEY"];

module.exports = {
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
      gas: 4600000,
    },
    rinkeby: {
      provider: function() {
        return new WalletProvider(
          Wallet.fromPrivateKey(
            Buffer.from(PRIVKEY, "hex")), "https://rinkeby.infura.io/"+INFURAKEY
        );
      },
      gas: 4600000,
      gasPrice: w3.toWei("50", "gwei"),
      network_id: "3",
    },
    mainnet: {
      provider: function() {
        return new WalletProvider(
          Wallet.fromPrivateKey(
            Buffer.from(PRIVKEY, "hex")), "https://mainnet.infura.io/"+INFURAKEY
        );
      },
      gasPrice: w3.toWei("20", "gwei"),
      network_id: "1",
    },
  }
};