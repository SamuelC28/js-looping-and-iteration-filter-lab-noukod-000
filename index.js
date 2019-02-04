// Code your solution in this file
// function findMatching(collection, name) {
//   for (const drivers of collection) {
//     if (drivers.name ===name){
//       console.log(drivers.name);
//     else if (drivers !==name) {
//       console.log(" ");
//     }
//
//   }
// }

function findMatching (collection, attribute, value) {
  for (const drivers of collection) {
    if (drivers[attribute] === value) {
      console.log(drivers.firstName);
    }
  }
}


// function blueFilter (collection) {
//   for (const user of collection) {
//     if (user.favoriteColor === 'Blue') {
//       console.log(user.firstName);
//     }
//   }
// }
