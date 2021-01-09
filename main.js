const utility = require('./Utility')
const readLine = require('readLine-sync')

let FirstName = readLine.question("Enter the First Name: ")

const fName = utility.checkFirstName(FirstName);

console.log("First Name is :", fName);