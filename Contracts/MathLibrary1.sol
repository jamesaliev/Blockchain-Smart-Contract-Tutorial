pragma solidity ^0.8.0;

contract MathLibrary {

    // This variable is available to easily view the result of the math operation
    int public result;

    function sum(int num1, int num2) public {
        int sum = num1 + num2;

        result = sum;

        // This function can also be shortened to just 
        // result = num1 + num2;
    }

    function difference(int num1, int num2) public {
        result = num1 - num2;
    }

    function multiplyOperator(int num1, int num2) public {
        result = num1 * num2;
    }

    function multiplyLoop(int num1, int num2) public {
        int product = 0;

        for (int i = 0; i < num2; i++) {
            product += num1;
        }

        result = product;
    }

    function divide(int num1, int num2) public {
        // Note that this function will not return rational numbers

        if (num2 == 0) {
            result = 0;
        }
        else {
            result = num1 / num2;
        }
    }
}
