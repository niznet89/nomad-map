require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
  solidity: "0.8.9",
  networks: {
    arbitrum_goerli: {
      url: `${process.env.ARBITRUM_GOERLI_URL}`,
      accounts: [`0x${process.env.ARBITRUM_GOERLI_KEY}`],
    }
  }
};
