import parseKML from 'parse-kml';
import fs from "fs";



parseKML
  .toJson('./assets/Digital-Nomad-Facebook-Groups.kml')
  .then((data) => {
    console.log(data.features.length)
    //var fs = require('fs');
    const cool = JSON.stringify(data, null, 2);
    fs.writeFileSync("./assets/nomad-groups.json", cool, (err) => {
      if (err)
        console.log(err);
      else {
        console.log("File written successfully\n");
        console.log("The written has the following contents:");
        //console.log(fs.readFileSync("books.txt", "utf8"));
      }
    });
  });
