// Import module
var {fromIsoToHuman, fromHumanToIso} = require('@sineverba/date-convert');

var humanDate = fromIsoToHuman("20200102");
console.log(humanDate); // returns 02/01/2020

var humanDate = fromIsoToHuman("20200102", "AAAA-MM-DD");
console.log(humanDate); // returns 2020-01-02

var isoDate = fromHumanToIso("02/01/2020")
console.log(isoDate); // returns 20200102