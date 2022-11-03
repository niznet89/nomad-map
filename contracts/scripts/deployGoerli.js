// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const { Wallet } = require("ethers");
const { ethers } = require("hardhat");
require('dotenv').config()
const nomad_groups = require("../../client/src/assets/nomad-groups.json");

const provider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545/");
const wallet = new ethers.Wallet("", provider);

async function main() {
  const NomadMap = await hre.ethers.getContractFactory("NomadMap");
  console.log("hello");
  const city = [];
  const long = [];
  const lat = [];
  const fbGroup = [];

  function matchString(string) {
    return string.match(/((\w+:\/\/)[-a-zA-Z0-9:@;?&=\/%\+\.\*!'\(\),\$_\{\}\^~\[\]`#|]+)/g);
  }

  nomad_groups.features.map((group, i) => {
    city.push(group.properties.name);
    lat.push(group.geometry.coordinates[1].toString());
    long.push(group.geometry.coordinates[0].toString());
    const test = matchString(group.properties.description)
    fbGroup.push(test);

  })

  const nomad = await NomadMap.deploy(city, long, lat, fbGroup);

  console.log(nomad.address)

  const result = await nomad.returnAllCities();

  console.log(result[0]);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
