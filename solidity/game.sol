pragma solidity ^0.5.11;

contract TicTacGame{
    address public player1;
    address public player2;
    uint256 public player1Escrow;
    uint256 public player2Escrow;

    constructor() public payable{

        require(msg.value >0);
        player1 = msg.sender;
        player1Escrow = msg.value;
    }

    function setUpPlayer2() public payable{

        require(msg.value >0);
        player2 = msg.sender;
        player2Escrow = msg.value;
    }
}

/// payable allows a function to receive ether while being called. 
/// It's mandatory to include the payable keyword from Solidity 0.4.x.

/*
msg.value contains the amount of wei (ether / 1e18) sent in the transaction.
msg.sender is the address of person/different contract interacting with the contract.
*/