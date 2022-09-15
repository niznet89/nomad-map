// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract NomadMap is ERC20 {

  struct City {
    string name;
    string country;
    mapping(string => int8) WaGroupNames;
    mapping(string => string) WaUrls;
    string[] WaGroupNamesArray;
  }

  address[] members;
  City[] cities;

  constructor() ERC20("NomadMap", "DMM") {
    }

  function addMember() public {
    // Payable?
    members.push(msg.sender);
    // User gets 3 DMM tokens once he signs up
    _mint(msg.sender, 3000000000000000000);
  }

  function createCity(string calldata _name, string calldata _country) public {
    // Does the city need to be an argument?
    City newCity = City();
    newCity.name = _name;
    newCity.country = _country;

  }
}
