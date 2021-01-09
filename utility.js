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
}
module.exports = new Utility();