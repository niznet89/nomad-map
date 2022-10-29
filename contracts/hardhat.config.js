require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
  solidity: "0.8.9",
  networks: {
    arbitrum: {
      url: `${process.env.ALCHEMY_ARBITRUM_URL}`,
      accounts: [`0x${process.env.ALCHEMY_ARBITRUM_KEY}`],
    }
  }
};
