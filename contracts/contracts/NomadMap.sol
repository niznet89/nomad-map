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
  mapping(string => uint) public mappingCities;
  uint index = 0;

  constructor(string[] memory _name, string[] memory _long, string[] memory _lat, string[][] memory  _fbGroup) {

      for (uint i = 0; i < _name.length; i++) {
        City storage newCity = cities.push();
        newCity.name = _name[i];
        newCity.long = _long[i];
        newCity.lat = _lat[i];
        newCity.FBGroupArray = _fbGroup[i];
        mappingCities[_name[i]] = index;
        index++;
      }

    }


  function createCity(string memory _name, string memory _long, string memory _lat) public {
    // Does the city need to be an argument?
    City storage newCity = cities.push();
    newCity.name = _name;
    newCity.long = _long;
    newCity.lat = _lat;
    mappingCities[_name] = index;
    index++;

  }

  function addWaGroup(string memory _city, string memory _group) public {
    uint localIndex = mappingCities[_city];
    cities[localIndex].WaGroupArray.push(_group);
  }

  function addFBGroup(string memory _city, string memory _group) public {
    uint localIndex = mappingCities[_city];
    cities[localIndex].FBGroupArray.push(_group);
  }

  function returnAllCities() public view returns(City[] memory) {
    return cities;
  }
}
