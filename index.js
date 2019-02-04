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




function findMatching(drivers, word){
    return drivers.filter(driver => driver == word);
}
