// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract NomadMap is ERC20 {

  struct cities {
    string location;
    string[] WaGroupNames;
    string[] WaUrls;
  }

  address[] members;

  constructor() ERC20("NomadMap", "DMM") {
    }

  function addMember() public {
    members.push(msg.sender);
  }
}
