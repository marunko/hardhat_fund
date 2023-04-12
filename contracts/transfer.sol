// SPDX-License-Identifier: UNLICENSED
pragma solidity >0.8.8;

contract Transfer{
    address to;
    uint256 v;
    
    mapping(address => uint256) private addrToBalance;

    constructor() payable{
        v =msg.value;
    }
    
    function addEth() public payable{
        addrToBalance[msg.sender] += msg.value;
        v = msg.value;
    } 
    function getValue() public view returns(uint256){
       
        return v;
    }
    function printAddress() public view returns(address){
        return msg.sender;
    }
    function printContractAddress() public view returns(address){
        return address(this);
    }
    function getContractBalance( ) public view returns(uint){
        return address(this).balance;
    }
    function getSenderBalance( ) public view returns(uint){
        return msg.sender.balance;
    }

    // transfer 
    function saveAddress(address toAddress)public{
        to = toAddress;
    }
    function getToAddress()public view returns(address){
        return to;
    }
    function transferEth() public payable{
        payable(to).call{value: address(this).balance}(""); 
        // function autamatically set balance to 0
    }
}