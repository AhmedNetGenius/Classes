

$(document).ready(function(){  
let form                = $('#submitform');
let name                = $('input[name="name"]');
let email               = $('input[name="email"]');
let password            = $('input[name="password"]');
// errors
let nameError           = $('#error_name');
let emailError          = $('#error_email');
let passwordError       = $('#error_password');
// buttons
let ShowBtn             = $('#ShowPassword');
let HideBtn             = $('#HidePassword');
let submitBtn           = $('#SubmitBtn');
// password hide on pageload
password.prop('type' , 'password');

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
    
    if(email.val() != '')
    {
        e.preventDefault(); 
        emailError.html('');
        submitBtn.prop('disabled' , false);

        

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

//   password hide and show



});




