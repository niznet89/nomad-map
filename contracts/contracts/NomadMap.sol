// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract NomadMap {

  struct City {
    string name;
    string country;
    uint long;
    uint lat;
    string[] WaGroupArray;
    string[] FBGroupArray;
  }

  address[] members;
  City[] cities;
  mapping(string => City) public mappingCities;

  constructor() {
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

  function addWaGroup(string memory _city, string memory _group) public {

  }
}
