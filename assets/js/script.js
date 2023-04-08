

$(document).ready(function(){  
let form                = $('#submitform');
let name                = $('input[name="name"]');
let email               = $('input[name="email"]');
let password            = $('input[name="password"]');
let confirmPassword     = $('input[name="confirmPassword"]');
// errors
let nameError           = $('#error_name');
let emailError          = $('#error_email');
let passwordError       = $('#error_password');
let confirmError        = $('#error_confirm');
// buttons
let ShowBtn             = $('#ShowPassword');
let HideBtn             = $('#HidePassword');
let ShowBtn2            = $('#ShowPassword1');
let HideBtn2            = $('#HidePassword1');
let submitBtn           = $('#SubmitBtn');
// password hide on pageload
password.prop('type' , 'password');
confirmPassword.prop('type' , 'password');
// password function
$(ShowBtn).on('click' , function(e){

    e.preventDefault();
    password.prop('type' , 'text') ;
    ShowBtn.hide();
    HideBtn.show();

});

// hide password function
$(HideBtn).on('click' , function(e){
    e.preventDefault();
    password.prop('type' , 'password');
    ShowBtn.show();
    HideBtn.hide();
});
// hide show confirm password
$(ShowBtn2).on('click' , function(e){

    e.preventDefault();
    confirmPassword.prop('type' , 'text') ;
    ShowBtn2.hide();
    HideBtn2.show();

});

// hide password function
$(HideBtn2).on('click' , function(e){
    e.preventDefault();
    confirmPassword.prop('type' , 'password');
    ShowBtn2.show();
    HideBtn2.hide();
});

// ends here
$(form).submit(function(e){
    if(name.val() == '')
    {
        e.preventDefault(); 
        nameError.html('<label style = "color:red;">Plese type your name</label>');
    }
    if(email.val() == '')
    {
        e.preventDefault(); 
        emailError.html('<label style = "color:red;">Plese type your email</label>');
    }

    if(password.val() == '')
    {
        e.preventDefault(); 
        passwordError.html('<label style = "color:red;">Plese type your password</label>');
    }
    if(confirmPassword.val() == '')
    {
        e.preventDefault();
        confirmError.html('<label style="color:red">Please Confirm Your Password</label>');
    }
    
    
});

// validation on type
        // name
        
$(name).on('keyup' , function(e){
    
    if(name.val() != '')
    {
        e.preventDefault(); 
        nameError.html('');
        submitBtn.prop('disabled' , false);


    }
    else{
       
       e.preventDefault(); 
       nameError.html('<label style = "color:red;">Plese type your name</label>');
       submitBtn.prop('disabled' , true);
        
        
    }
    
   });
// email

$(email).on('keyup' , function(e){
    
    if(email.val() != '' && email.val().match(/^\S+\@\S+\.\S+$/))
    {
        e.preventDefault(); 
        emailError.html('');
        submitBtn.prop('disabled' , false);

    }
    if(!email.val().match(/^\S+\@\S+\.\S+$/)){
        e.preventDefault(); 
        emailError.html('<label style="color:red">Invalid Email e.g Example@gmail.com');
        submitBtn.prop('disabled' , true);
    }
    if(email.val() == ''){
       
       e.preventDefault(); 
       emailError.html('<label style = "color:red;">Plese type your email</label>');
       submitBtn.prop('disabled' ,true);



    }
    
   });
// password

$(password).on('keyup' , function(e){
    
    if(password.val() != '' && password.val().length >= 8)
    {
        e.preventDefault(); 
        passwordError.html('');
        submitBtn.prop('disabled' , false);
      


    }
    if(password.val() == ''){
       
       e.preventDefault(); 
       passwordError.html('<label style = "color:red;">Plese type your password</label>');
       submitBtn.prop('disabled' , true);
       
        

    }
    if(password.val().length <  8)
    {

        e.preventDefault(); 
        passwordError.html('<label style = "color:red;">Password must be greater then 8 digits or characters</label>');
       submitBtn.prop('disabled' , true);

    }
   });   
// confirm password function
   $(confirmPassword).on('keyup' , function(e){
       
    if(confirmPassword.val() == password.val() && confirmPassword.val().length >= 8)
    {    e.preventDefault();
        confirmError.html('<label style = "color:green">Password matched</label>');
        submitBtn.prop('disabled' , false);

    }

    if(confirmPassword.val() != password.val() &&  confirmPassword.val().length < 8)
    {
        e.preventDefault();
        confirmError.html('<label style = "color:red">Password does not matched </label>');
        submitBtn.prop('disabled' , true);
    }

   })

//   password hide and show



});




