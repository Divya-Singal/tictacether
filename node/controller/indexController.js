//const web3 = require('web3');
//require('web3') returns a class. You need to instantiate it first. Note the capital W:
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
exports.newgame= function(req,res){
	//res.json({"error" : false,"message" : "Hello World"});

    const abi = [
        {
            "constant": false,
            "inputs": [],
            "name": "setUpPlayer2",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "player2Escrow",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "player1Escrow",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "player2",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "player1",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "constructor"
        }
    ]
    
    const bytecode = {
        "linkReferences": {},
        "object": "60806040526000341161001157600080fd5b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555034600281905550610240806100676000396000f3fe60806040526004361061004a5760003560e01c806303e1983c1461004f578063329f86a814610059578063451e408a1461008457806359a5f12d146100af578063d30895e414610106575b600080fd5b61005761015d565b005b34801561006557600080fd5b5061006e6101b4565b6040518082815260200191505060405180910390f35b34801561009057600080fd5b506100996101ba565b6040518082815260200191505060405180910390f35b3480156100bb57600080fd5b506100c46101c0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561011257600080fd5b5061011b6101e6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000341161016a57600080fd5b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555034600381905550565b60035481565b60025481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff168156fea265627a7a723158208d456aaa2c75020dcb8b326ed53e2c4d54eac0d9c7c7905c737a7c9655edc94864736f6c634300050b0032",
        "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 CALLVALUE GT PUSH2 0x11 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST CALLER PUSH1 0x0 DUP1 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP CALLVALUE PUSH1 0x2 DUP2 SWAP1 SSTORE POP PUSH2 0x240 DUP1 PUSH2 0x67 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x4A JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x3E1983C EQ PUSH2 0x4F JUMPI DUP1 PUSH4 0x329F86A8 EQ PUSH2 0x59 JUMPI DUP1 PUSH4 0x451E408A EQ PUSH2 0x84 JUMPI DUP1 PUSH4 0x59A5F12D EQ PUSH2 0xAF JUMPI DUP1 PUSH4 0xD30895E4 EQ PUSH2 0x106 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0x57 PUSH2 0x15D JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x65 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x6E PUSH2 0x1B4 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x90 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x99 PUSH2 0x1BA JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xBB JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xC4 PUSH2 0x1C0 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x112 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x11B PUSH2 0x1E6 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x0 CALLVALUE GT PUSH2 0x16A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST CALLER PUSH1 0x1 PUSH1 0x0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP CALLVALUE PUSH1 0x3 DUP2 SWAP1 SSTORE POP JUMP JUMPDEST PUSH1 0x3 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x2 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP JUMPDEST PUSH1 0x0 DUP1 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP INVALID LOG2 PUSH6 0x627A7A723158 KECCAK256 DUP14 GASLIMIT PUSH11 0xAA2C75020DCB8B326ED53E 0x2c 0x4d SLOAD 0xea 0xc0 0xd9 0xc7 0xc7 SWAP1 0x5c PUSH20 0x7A7C9655EDC94864736F6C634300050B00320000 ",
        "sourceMap": "26:432:0:-;;;234:1;223:9;:12;215:21;;;;;;256:10;246:7;;:20;;;;;;;;;;;;;;;;;;292:9;276:13;:25;;;;26:432;;;;;;"
    }

Contract = new web3.eth.Contract(abi)

//valueSelected comes from frontend
valueSelected = '2';

contractInstance = Contract.new({    
    value: web3.utils.toWei(valueSelected),
    data: bytecode.object,
    gas: 7e6
}, (err, result) => {
    console.log(result)
    // This callback will be called twice, the second time includes the contract address
    // if(!result.address) {
    //     console.log('wait until the block is mined with the contract creation transaction')
    // } else {

    //     res.json({'type': 'true' , 'address': result.address });
    // }
})

}


exports.oldgame = function(req,res){
    Contract = web3.eth.contract(abi)
    contractInstance = Contract.at(addressSelected)

    contractInstance.setupPlayer2({
    value: web3.toWei(valueSelected),
    gas: 4e6
  }, (err, result) => { 
      // Do something after executing the function
  })
}



