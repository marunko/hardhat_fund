const hardhat = require("hardhat");


async function main(){
    const transferFuctory = await hardhat.ethers.getContractFactory("Transfer");
    const transfer = await transferFuctory.deploy();

    await transfer.deployed();
    await transfer.addEth({value: hardhat.ethers.utils.parseEther("0.1")});
    let contractAddrr = await transfer.printContractAddress();
     console.log("address:   ===>>>> " + contractAddrr);
     let senderBalance = await transfer.getContractBalance();
     console.log("balance:   ===>>>> " + senderBalance);
     await transfer.saveAddress("0xc3C9E56e1d9A37ce07d8dB64494354ccC484FA9b");
     let resp = await transfer.getToAddress();
     console.log(resp);
     await transfer.transferEth();
     let senderBalance2 = await transfer.getContractBalance();
     console.log("balance:   ===>>>> " + senderBalance2);
 }

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  