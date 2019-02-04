// Code your solution in this file
function findMatching(collection, name) {
  for (const drivers of collection) {
    if (drivers.name == name)
    console.log(drivers.name);
  }
}

function blueFilter (collection) {
  for (const user of collection) {
    if (user.favoriteColor === 'Blue') {
      console.log(user.firstName);
    }
  }
}