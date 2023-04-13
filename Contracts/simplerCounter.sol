pragma solidity ^0.8.0;

contract Counter {

    int public count;

    function increment() public {
        count++;
    }

    function setCounter(int val) public {
        count = val;
    }

    function resetCounter() public {
        count = 0;
    }
}
