function Formvalidate(){
    var name=form.fullname.value;
    var emailid=form.email.value;
    var phone=form.phno.value;
    var pwd=form.pwd.value;
    var cpwd=form.cpwd.value;
    var s='password';
    var p='123456789';
    if(name.length<5){  
        alert("Name is too small");  
        return false;  
    }else if(emailid.indexOf('@')<=0){
        alert("Invalid email id");
        return false;
    }else if(phone.length!=10||phone.value==p){
         alert("Invalid phone number");
         return false;
    }else if(pwd==s||pwd.length<8||pwd==name){
        alert("choose strong password");
        return false;
    }else if(pwd!=cpwd){
        alert("password mismatch");
        return false;
    }else{
            alert("submitted successfully!!!");
            return false;
    }
    }