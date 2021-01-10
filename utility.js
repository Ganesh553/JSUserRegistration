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
}
module.exports = new Utility();
