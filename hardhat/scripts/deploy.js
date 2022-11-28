// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");
const fs = require('fs');

async function main() {

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))


  const piggyContract = await ethers.getContractFactory('PiggyBank')
  const deployedPiggyContract = await piggyContract.deploy()
  await deployedPiggyContract.deployed()
  console.log('PiggyContract Address', deployedPiggyContract.address)

  console.log("Sleeping...");
  await sleep(30000)

 await hre.run("verify:verify", {
    address: deployedPiggyContract.address,
    constructorArguments: [],
  });

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
