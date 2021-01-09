const utility = require('./Utility')
const readLine = require('readLine-sync')

let FirstName = readLine.question("Enter the First Name: ")
let LastName = readLine.question("Enter the Last Name: ")
let Email = readLine.question("Enter the Email_Id: ")
let number = readLine.question("Enter the PhoneNumber: ")

const fName = utility.checkFirstName(FirstName);
const lName = utility.checkLastName(LastName);
const email = utility.checkEmailId(Email)
const phoneNumber = utility.checkPhoneNumber(number)

console.log("First Name is :", fName);
console.log("Last Name is :", lName);
console.log("Email_Id is :", email);
console.log("Phone Number is :", phoneNumber);