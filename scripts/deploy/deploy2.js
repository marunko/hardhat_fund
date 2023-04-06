const hardhat = require("hardhat");


async function main(){
    const transferFuctory = await hardhat.ethers.getContractFactory("Transfer");
    const transfer = await transferFuctory.deploy();

    await transfer.deployed();
    console.log(transfer);
    let contractAddrr = await transfer.printContractAddress();
     console.log("address:   ===>>>> " + contractAddrr);
     let senderBalance = await transfer.getSenderBalance();
     console.log("balance:   ===>>>> " + senderBalance);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  