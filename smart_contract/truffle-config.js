const HDWalletProvider = require('@truffle/hdwallet-provider');
const privateKeys = ['3061357d8958844656c9c148365d59c548500a7412021ce3a7b02c184ec7aaff'];

module.exports = {
  networks: {
    sepolia: {
      provider: () => new HDWalletProvider({
        privateKeys: ['1d4e4a1694a233da4353987450d2ab19a0446a9cb966c9ab98a1a11b55168b6d'], // Replace with your private key
        providerOrUrl: 'https://ethereum-sepolia.publicnode.com', // Sepolia RPC URL
      }),
      network_id: 11155111, // Sepolia network ID
      gasPrice: 1000000000, // Customize gas price if needed
      confirmations: 2, // Number of confirmations to wait before deployment
      timeoutBlocks: 200, // Number of blocks before a deployment times out
      skipDryRun: true, // Skip dry run before migrations
    },

    sepoliaTest: {
      provider: () => new HDWalletProvider({
        privateKeys: ['1d4e4a1694a233da4353987450d2ab19a0446a9cb966c9ab98a1a11b55168b6d'], // Replace with your private key
        providerOrUrl: 'https://ethereum-sepolia.blockpi.network/v1/rpc/public', // Sepolia testnet RPC URL
      }),
      network_id:  11155111, // Sepolia testnet network ID
      gasPrice: 1000000000, // Customize gas price if needed
      gas: 8000000,
      confirmations: 2, // Number of confirmations to wait before deployment
      timeoutBlocks: 200, // Number of blocks before a deployment times out
      skipDryRun: true, // Skip dry run before migrations
      networkCheckTimeout: 1000000
    },

    polygon: {
      provider: () => new HDWalletProvider({
        privateKeys: ['1d4e4a1694a233da4353987450d2ab19a0446a9cb966c9ab98a1a11b55168b6d'], // Replace with your private key
        providerOrUrl: 'https://rpc-mumbai.maticvigil.com',
      }),
      network_id: 80001, // Polygon network ID
      gasPrice: 1000000000, // Customize gas price if needed
      gas: 8000000, // Set the gas limit slightly higher than the actual gas consumption
      confirmations: 2, // Number of confirmations to wait before deployment
      timeoutBlocks: 200, // Number of blocks before a deployment times out
      skipDryRun: true, // Skip dry run before migrations
      networkCheckTimeout: 1000000
    },

      
      matic: {
      provider: () => new HDWalletProvider(privateKeys,`wss://polygon-mumbai.infura.io/ws/v3/af2e33b48f9e469ca131d90ba0fdde05`,0,1),
      network_id: 80001,
      confirmations: 2,
      networkCheckTimeout: 10000,
      timeoutBlocks: 200,
      skipDryRun:true,
      }
  },

  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.11",      // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },
};