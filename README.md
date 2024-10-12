# Hardhat Greet Contract

This repository contains a simple Solidity contract deployed using Hardhat. The contract includes two string variables and allows interaction to retrieve their values.

## Prerequisites

- Node.js (version 16.x or later)
- npm (Node package manager)
- Hardhat

## Getting Started

Follow these steps to set up and run the project locally.

### 1. Clone the Repository

git clone https://github.com/yourusername/hardhat-greet-contract.git
cd hardhat-greet-contract

### 2. Install Dependencies

npm install

### 3. Start Hardhat Node
Start the Hardhat local blockchain network by running:

npx hardhat node
This command will start a local Ethereum network for testing.

### 4. Deploy the Contract
In a new terminal window (keeping the Hardhat Node running), deploy the contract:

npx hardhat run --network localhost scripts/deploy.ts
Note: After the deployment, take note of the contract address printed in the terminal. It will look something like this:

MyContract deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3
### 5. Update the Interaction Script
Open the scripts/greet.ts file and replace the contract address with the one you copied from the deployment step. Look for the line that defines the contractAddress variable:

const contractAddress = "PASTE_YOUR_CONTRACT_ADDRESS_HERE"; // Update with your deployed contract address
### 6. Run the Interaction Script
Now, you can run the interaction script to call the greet function and see the output:

npx hardhat run --network localhost scripts/greet.ts
You should see output similar to:

Greeting from contract: Hello, World!
Luka message from contract: Luka, kaka
License
This project is licensed under the MIT License - see the LICENSE file for details.

### Additional Notes
- Replace `https://github.com/yourusername/hardhat-greet-contract.git` with the actual URL of your GitHub repository.
- Adjust the license section as needed depending on your preferences.
- You can also add any additional features or usage examples if your project expands in the future.

Feel free to modify the README to suit your style or add more detailed instructions as necessary! Let me know if you need further assistance.