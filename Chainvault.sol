// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Wallet {

    mapping (address=> uint) Balance ;

    event Deposit(uint amount , address wallet);
    function depositor() public payable {
        require(msg.value > 0, "invalid amount to transfer");
        Balance [msg.sender] += msg.value ;
        emit Deposit(msg.value, msg.sender);
    }
    
    
    event Withdraw(uint amount , address wallet);
    function withdrawal(uint amount) public {
    require(Balance[msg.sender] >= amount, "insufficient balance");
    Balance[msg.sender]-= amount ;
    (bool success ,) = msg.sender.call{value : amount}("");
    require( success == true, "transaction failed");
    emit Withdraw(amount , msg.sender);
    }

    function viewbalance() view public returns (uint) {
        return Balance[msg.sender];
    }
    
}