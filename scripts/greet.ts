import { ethers } from "hardhat";

// Define the interface for your contract
interface MyContract {
  greet(): Promise<string>; // Getter for the greet variable
  luka(): Promise<string>;   // Getter for the luka variable
}

async function main() {
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Your deployed contract address
  const MyContractFactory = await ethers.getContractFactory("MyContract");
  
  // Use unknown before casting
  const myContract = MyContractFactory.attach(contractAddress) as unknown as MyContract;

  // Call the getter functions for 'greet' and 'luka'
  const greeting = await myContract.greet(); 
  const lukaMessage = await myContract.luka();

  console.log("Greeting from contract:", greeting);
  console.log("Luka message from contract:", lukaMessage);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
