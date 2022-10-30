// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract NomadMap {

  struct City {
    string name;
    string long;
    string lat;
    string[] WaGroupArray;
    string[] FBGroupArray;
  }

  // address[] members;
  City[] cities;
  mapping(string => City) public mappingCities;

  constructor(string[] memory _name, string[] memory _long, string[] memory _lat, string[] memory _fbGroup) {

      for (uint i = 0; i < _name.length; i++) {
        City storage newCity = cities.push();
        newCity.name = _name[i];
        newCity.long = _long[i];
        newCity.lat = _lat[i];
        string group[] = _fbGroup[i];
        for (uint y = 0; i < _fbGroup.length; i++) {

        }
      }

    }


  function createCity(string memory _name, string memory _long, string memory _lat) public {
    // Does the city need to be an argument?
    City storage newCity = cities.push();
    newCity.name = _name;
    newCity.long = _long;
    newCity.lat = _lat;

  }

  function addWaGroup(string memory _city, string memory _group) public {
    mappingCities[_city].WaGroupArray.push(_group);
  }

  function addFBGroup(string memory _city, string memory _group) public {
    mappingCities[_city].FBGroupArray.push(_group);
  }

  function returnAllCities() public view returns(City[] memory) {
    return cities;
  }
}
