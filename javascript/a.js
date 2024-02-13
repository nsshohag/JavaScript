//https://jsonpathfinder.com/

const data=require("./a.json");
//console.log(data);
console.log(data.cse18[0].frineds[0].Name);
//delete
delete data.cse18[1].frineds[0];
console.log(data.cse18[1].frineds);