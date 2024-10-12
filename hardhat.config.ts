import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks: {
    development: {
      url: "http://127.0.0.1:7545" // Use Ganache's RPC server address
    }
  }
};

export default config;
