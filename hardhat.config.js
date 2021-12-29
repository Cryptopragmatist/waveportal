require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/ij_LfhRc0vbk07WOQSuo7CtKyy098hyM",
      accounts: ["dd6aeeec9034ee7c5e8af3774c1d22fc6d20d84ed1561bd5dfc8692862aa99d7"],
    },
  },
};
