import { ethers } from "hardhat";

async function main() {
  const MyContractFactory = await ethers.getContractFactory("MyContract");

  try {
    const myContract = await MyContractFactory.deploy();

    console.log("Deploying contract...");

    // Wait for deployment to finish
    await myContract.waitForDeployment();

    console.log("MyContract deployed to:", await myContract.getAddress());
  } catch (error) {
    console.error("Error during contract deployment:", error);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
