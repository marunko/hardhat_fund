// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// imports
const { ethers, run, network } = require("hardhat")

// async main
async function main() {
  const transfer = await ethers.getContractFactory("Transfer");

  transfer.deploy();
 
}
 

// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
