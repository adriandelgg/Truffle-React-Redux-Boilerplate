// const HDWalletProvider = require('@truffle/hdwallet-provider');
// const infuraKey = "fj4jll3k.....";
//
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
	contracts_build_directory: './client/src/artifacts',
	networks: {
		development: {
			host: '127.0.0.1',
			port: 7545,
			network_id: '*' // Match any network id
		}
		// rinkeby: {
		// 	provider: function() {
		// 		return new HDWalletProvider(, "https://rinkeby.infura.io/v3/35903f94ae1640f39995a7e845c396c8");
		// 	},
		// 	network_id: 4
		// }
	},
	compilers: {
		solc: {
			version: '^0.8.0',
			optimizer: {
				enabled: true,
				runs: 200
			}
		}
	}
};
