const main = async () => {
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy(
    {
      value: hre.ethers.utils.parseEther("0.1"),
    }
  );
  await waveContract.deployed();
  console.log("Contract addy:", waveContract.address);

  //GetContractBalance

  let contractBalance =await hre.ethers.provider.getBalance(waveContract.address);

  console.log(
    "Contract balance:",
    hre.ethers.utils.formatEther(contractBalance)
  );

    let waveTxn1 = await waveContract.wave("waver 1!");
  await waveTxn1.wait(); // Wait for the transaction to be mined


  let waveTxn2 = await waveContract.wave("waver 2");
  await waveTxn2.wait(); // Wait for the transaction to be mined


    /*
   * Get Contract balance to see what happened!
   */
    contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
    console.log(
      "Contract balance:",
      hre.ethers.utils.formatEther(contractBalance)
    );

  // let waveCount;
  // waveCount = await waveContract.getTotalWaves();
  // console.log(waveCount.toNumber());



  // /**
  //  * Let's send a few waves!
  //  */


  // const [_, randomPerson] = await hre.ethers.getSigners();
  // waveTxn = await waveContract.connect(randomPerson).wave("Another message!");
  // await waveTxn.wait(); // Wait for the transaction to be mined

  // let allWaves = await waveContract.getAllWaves();
  // console.log(allWaves);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
/**

The magic is on hre.ethers.utils.parseEther("0.1"),. This is where I say, 
"go and deploy my contract and fund it with 0.1 ETH". This will remove ETH 
from my wallet, and use it to fund the contract. That's it.
I then do hre.ethers.utils.formatEther(contractBalance) to test out to see if my contract
 actually has a balance of 0.1. I use a function that ethers gives me here called getBalance and pass 
 it my contract's address!
But then, we also want to see if when we call wave if 0.0001 ETH is properly removed from the contract!! 
That's why I print the balance out again after I call wave*/