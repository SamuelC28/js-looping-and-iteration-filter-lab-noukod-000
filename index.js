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

function fuzzyMatch(filterText, char) {
  // const filtreTexte = (requete) => { 
  return filterText.filter(char =>  el.toLowerCase().indexOf(requete.toLowerCase()) > -1);
}