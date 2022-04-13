require("@nomiclabs/hardhat-waffle");
require("dotenv").config();


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
// module.exports = {
//   solidity: "0.8.4",
// };
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
    
      //WavePortal address:  0x884B7995fe4838F6054CbEfd462CF1d756E5E88e
      url: "https://eth-rinkeby.alchemyapi.io/v2/J7XkMq7g8CjaPuV58T_xsBMGYIDoENEy",
      accounts: ["ade2eaa91131340bd05e40f970ece4bc46d08ad6849962d2b8d9bc6a32c69978"]
    },
  },
};
