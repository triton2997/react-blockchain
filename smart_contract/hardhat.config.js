// https://eth-goerli.g.alchemy.com/v2/geACKaQaH1ZqEyyHT7igdKu0reJjra8d

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/geACKaQaH1ZqEyyHT7igdKu0reJjra8d',
      accounts: ['2b8e897c93c0160dd36ff4a816ab34b9a587613cc37927d422e7fdbeb130dd92']
    }
  }
};
