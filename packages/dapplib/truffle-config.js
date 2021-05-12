require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give envelope obscure top chaos note meadow cluster include clinic only security'; 
let testAccounts = [
"0x0861c11d4fc6de2b23c271f7db73710d4eea0e2c4c3c16ee84da27d7b88dfad6",
"0xe08f840634eafb37ef9f37d0e5928714533a40383cbdd13ca40d69fcdafceabf",
"0xe39307a6f656524b982059f836550b575676625dc922c9d990fe34bb3c25a1cf",
"0x8c901b65c05ff2f7b96764f49db0ab1655319fdc5f031d38f9fb5e23857f0b7d",
"0xfd496e7c6a75a95cf3c989e22542d657988e036983c2113aaa371782f2e872d2",
"0x73ef9052adb2aca50ec1f6d9d881798fc12abb5e218dacd53070f0e121402b8f",
"0x48593489f64bb755db69e104d0088f9286504c8b913373083cc7bc0e2f93d340",
"0x89909a347e47fe07a873162dea582e1f73acb305ce4bb625d37a6b59afe258cd",
"0x9deb869412b0d6538d85287fcee484006c18f2bce27e00b9570c6d11ed4c9eba",
"0x480b5d45769394788212b8a1d7e8ff80346a857691770797855ec4b9e3b5ebd8"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
