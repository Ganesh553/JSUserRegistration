const utility = require('./Utility')
const readLine = require('readLine-sync')

let FirstName = readLine.question("Enter the First Name: ")
let LastName = readLine.question("Enter the Last Name: ")
let Email = readLine.question("Enter the Email_Id: ")

const fName = utility.checkFirstName(FirstName);
const lName = utility.checkLastName(LastName);
const email = utility.checkEmailId(Email)

console.log("First Name is :", fName);
console.log("Last Name is :", lName);
console.log("Email_Id is :", email);


