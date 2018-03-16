var pa1 ="bilkis"
var mail1 = "attafatimah@gmail.com"
//document.getElementById('phone_div').style.visibility = 'hidden'
function showField(field){
    if(field == "email"){
        document.getElementById('phone_div').style.visibility = 'hidden'
        document.getElementById('email_div').style.visibility = 'visible'
    }
    else{
       document.getElementById('phone_div').style.visibility = 'visible'
        document.getElementById('email_div').style.visibility = 'hidden' 
    }
}
function login(mail, pa){
    if(mail1== my_email && pa1 == pwd){
        alert('Welcome')
    }
    else{
        alert('Email or password incorrect')
    }
        
}
function welcome(email){
    alert('welcome '+ email)
}
function signin(){
    var mail = document.getElementById('my_email').value
    var pa = document.getElementById('pwd').value
     if( mail1== mail  &&  pa == pa1){
        welcome(mail)
    }
    else{
        alert('Email or password incorrect')
    }
        
}
