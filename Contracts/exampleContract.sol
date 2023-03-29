// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract tuition {
    address public owner;
    address payable wallet;
    mapping(address => uint) public tuitions;

    constructor(address payable _wallet) public {
        owner = msg.sender; 
        wallet = _wallet;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function setTuition(address person, uint amount) public onlyOwner {
        tuitions[person] = amount;
    }

    function payTuition(address person) public payable {
        wallet.transfer(msg.value);
        tuitions[person] -= msg.value;
    } 
}