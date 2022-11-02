require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
  solidity: "0.8.9",
  networks: {
    arbitrum_goerli: {
      url: `${process.env.ARBITRUM_GOERLI_URL}`,
      accounts: [`0x${process.env.ARBITRUM_GOERLI_KEY}`],
    },
    local_network: {
      url: "http://127.0.0.1:8545/",
      accounts: [`0x${process.env.ARBITRUM_GOERLI_KEY}`],
    },
  }
};
