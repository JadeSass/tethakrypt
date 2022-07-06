require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
    networks: {
      development: {
       host: "127.0.0.1",     // Localhost (default: none)
       port: 7545,
       url: 'http://127.0.0.1:8545',    // Standard Ethereum port (default: none)
       network_id: "*"        // Any network (default: none)
      }
  }
}
