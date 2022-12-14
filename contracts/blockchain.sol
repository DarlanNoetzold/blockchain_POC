// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract blockchain {
  string public greetings;
  constructor() public {
    greetings = "testee";
  }

  function sayHello() public view returns(string memory){
    return greetings;
  }

  function updateGreetings(string memory _newGreetings) public{
    greetings = _newGreetings;
  }
}
