const main = async () => {
    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal'); //boiler function for generating the contract
    const waveContract = await waveContractFactory.deploy(); //creates local network and refresh it everytime
    await waveContract.deployed(); //wait to be deployed in local blockchain
    console.log("Contract deployed to:", waveContract.address);
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