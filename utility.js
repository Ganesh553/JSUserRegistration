const readLine = require('readLine-sync')
class Utility{
    checkFirstName(){
        var flag=true;
        var regex = /^[A-Z]{1,}[a-z]{2,}/;
        while(flag){
            var FirstName = readLine.question("Enter the First Name: ")
            if(regex.test(FirstName))
                return;
            else
                flag=true;
        }
    }
    checkLastName(){
        var flag=true;
        var regex = /^[A-Z]{1,}[a-z]{2,}/;
        while(flag){
            var LastName = readLine.question("Enter the Last Name: ")
            if(regex.test(LastName))
                return;
            else
                flag=true;
        }
    }
    checkEmailId(){
        var flag=true;
        var regex = /^([a-zA-Z0-9_\.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        while(flag){
            let Email = readLine.question("Enter the Email_Id: ")
            if(regex.test(Email))
                return;
            else
                flag=true;
        }
    }
    checkPhoneNumber(){
        var flag=true;
        var regex = /^([0-9]{2})+ +([789]{1})+([0-9]{9})+$/;
        while(flag){
            let number = readLine.question("Enter the PhoneNumber: ")
            if(regex.test(number))
                return;
            else
                flag=true;
        }
    }
    checkPassword(){
        var flag=true;
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        while(flag){
            let password = readLine.question("Enter the Password: ")
            if(regex.test(password))
                return;
            else
                flag=true;
        }
    }
}
module.exports = new Utility();
