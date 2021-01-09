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
}
module.exports = new Utility();