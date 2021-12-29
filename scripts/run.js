const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners(); //wallet addresses
    const saluteContractFactory = await hre.ethers.getContractFactory('SalutePortal'); //boiler function for generating the contract
    const saluteContract = await saluteContractFactory.deploy(); //creates local network and refresh it everytime
    await saluteContract.deployed(); //wait to be deployed in local blockchain
    console.log("Contract deployed to:", saluteContract.address);


    console.log("Contract deployed to:", saluteContract.address);
    console.log("Contract deployed by:", owner.address);


    let saluteCount;
    saluteCount = await saluteContract.getTotalSalutes();
  
    let saluteTxn = await saluteContract.salute();
    await saluteTxn.wait();
  
    saluteCount = await saluteContract.getTotalSalutes();
    saluteTxn = await saluteContract.connect(randomPerson).salute();
    await saluteTxn.wait();
  
    saluteCount = await saluteContract.getTotalSalutes();

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