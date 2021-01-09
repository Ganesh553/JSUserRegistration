class Utility{
    checkFirstName(name){
        var regex = /^[A-Z]{1,}[a-z]{2,}/;
        if(regex.test(name)){
            console.log("True :",name);
            return name;
        }
        else{
            console.log("False :",name);
            return name;
        }
    }
    checkLastName(name){
        var regex = /^[A-Z]{1,}[a-z]{2,}/;
        if(regex.test(name)){
            console.log("True :",name);
            return name;
        }
        else{
            console.log("False :",name);
            return name;
        }
    }
    checkEmailId(mail){
        var regex = /^([a-zA-Z0-9_\.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(regex.test(mail)){
            console.log("True :",mail);
            return mail;
        }
        else{
            console.log("False :",mail);
            return mail;
        }
    }
    checkPhoneNumber(number){
        var regex = /^([0-9]{2})+ +([789]{1})+([0-9]{9})+$/;
        if(regex.test(number)){
            console.log("True :",number);
            return number;
        }
        else{
            console.log("False :",number);
            return number;
        }
    }
    checkPassword(password){
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(regex.test(password)){
            console.log("True: ",password);
            return password;
        }
        else{
            console.log("False: ",password);
            return password;
        }
    }
}
module.exports = new Utility();