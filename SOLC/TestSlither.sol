// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter 
{
    uint public count;
    function inc() external
    {
        count +=1;
    }
    function dec() public
    {
        count -=1;
    }
}

contract TestCounter is Counter
{
    function slither_test_pass()public view returns (bool)
    {
        return true;
    }

    function slither_test_fails()public view returns (bool)
    {
        return false;
    }

    function slither_test_count()public view returns (bool)
    {
        return count <= 5;
    }

}

