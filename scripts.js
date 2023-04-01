function validateForm(){
    var x = document.myForm.username.value;    
    var y = document. myForm.password.value;
        
    if ((x == "" || x == null) && (y == "" || y == null)){
        document.getElementById("error").innerHTML="Please enter your username and password.";
        console.log("login error");
        return false;
    }else if (x == "" || x == null) {  
        document.getElementById("error").innerHTML="Please enter your username.";                
        console.log("login error");
        return false; 
    }else if (y == "" || x == null){
        document.getElementById("error").innerHTML="Please enter your password.";
        console.log("login error");
        return false;       
    }    
    return true; 
}

