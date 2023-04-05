pragma solidity ^0.8.0;

contract Counter {

    int public count;

    constructor(int val) public {
        count = val;
    }

    function incrament() public {
        count++;
    }
}
