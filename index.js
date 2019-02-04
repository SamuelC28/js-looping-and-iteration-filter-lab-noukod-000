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
 return drivers.filter(function (driver){return driver.slice(0, chars.length) == chars});
}
