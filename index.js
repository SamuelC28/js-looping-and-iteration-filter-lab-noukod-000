// Code your solution in this file
// function filter (collection) {
//   for (const drivers of collection) {
//     if (findMatching(drivers, attribute, value)) {
//       console.log(drivers.attribute);
//     }
//   }
// }
//
// function findMatching (drivers) {
//   return user.attribute === value;
// }




function findMatching(drivers, fullname){
    return drivers.filter(driver => driver.toLowerCase() === fullname.toLowerCase());
}

function fuzzyMatch(drivers, chars) {
  // const filtreTexte = (requete) => {
  return drivers.filter(function (driver) {return driver(0, char.length.toLowerCase().indexOf(char.toLowerCase()) == char);
 // return drivers.filter(function (driver){return driver.slice(0, partialWrold.length) == partialWrold});
}
