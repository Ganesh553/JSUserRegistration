const utility = require('./Utility')
const readLine = require('readLine-sync')

let FirstName = readLine.question("Enter the First Name: ")
let LastName = readLine.question("Enter the Last Name: ")

const fName = utility.checkFirstName(FirstName);
const lName = utility.checkLastName(LastName);

console.log("First Name is :", fName);
console.log("Last Name is :", lName);