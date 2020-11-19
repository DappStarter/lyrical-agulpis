require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey slide olympic short bitter birth machine upgrade hockey local fresh ghost'; 
let testAccounts = [
"0x43063ea166c3bc78e5ac2909053abc73d91fe6c20c332b12e036f0b3934a0b23",
"0x245e3afb94cdce211f470d7842555793ae5bb1fcd80abee4874828eef2acfd60",
"0x606288769b60852fc7cbca5338226915514db48aecd4da6465aab24af291b51f",
"0x1e175d799160f7eb4b661a5c755c6bbbbca9b9a710fb8e080a664158c84994b7",
"0x05db90decc1e0fda10155654372fd5cee9faa6beb21ea08a7bbe14f39a0a0e7f",
"0x3bdbbe5d95233e651ab44118d4a9f69fda7c68294f3ef7c98c7ad4344b8ec6c2",
"0x0cdbefb2bc8c16a9e568c9b1c0d8acf99dcc4a2fe85498070b23d2f2aebc47e2",
"0xb8b5588d85c95c5e5f6c2446cab1bccf70211b948720b52b052f8bec2b94ac5a",
"0xe5390ce7efa6fed1ad54c0016d087b7b527320918b5288674884a1f10772faf2",
"0x7252b6038cdcff2e44d8b52504113dd349d4b31d71117e35448a06f0c821b19c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
