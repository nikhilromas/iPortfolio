
var nameError=document.getElementById('name-error');
var emailError=document.getElementById('email-error');
var subjectError=document.getElementById('subject-error');
var messageError=document.getElementById('message-error');
var submitError=document.getElementById('submit-error');

function validatename(){
    var name=document.getElementById('name').value;
    if(name.length == 0){
    nameError.innerHTML='name is required';
    return false;
   }
   if(name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)){
    nameError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
   return true;
   }
  else if(name.match(/^[a-zA-Z]+ [a-zA-Z]+ [a-zA-Z]+$/)){
    nameError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
   return true;
   }
   nameError.innerHTML='write full name';
return false;
}


 function validateemail(){

    var email=document.getElementById('email').value;
    var atposition=email.indexOf("@");
    var dotpostion=email.indexOf('.');

    if(email.length == 0){
        emailError.innerHTML='Email is required';
        return false;
       }

    if(atposition<1 || dotpostion<atposition+2||dotpostion+2>email.length){
        emailError.innerHTML='write a valid email id';
        return false;
    }

    emailError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
   return true;

}

function validatesubject(){
    var subject=document.getElementById('subject').value;
    var require=10;
    var left=require-subject.length;

    if(subject.length == 0){
        subjectError.innerHTML='subject is required';
        return false;
       }
       if(left>0){
        subjectError.innerHTML=left +'more characters required';
 return false;
       }

       subjectError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
       return true;   

}
function validatemessage(){

    var message=document.getElementById('message').value;
    var required=30;
    var left1=required-message.length;

    if(subject.length == 0){
        messageError.innerHTML='message is required';
        return false;
       }
       if(left1>0){
        messageError.innerHTML=left1 +'more characters required';
 return false;
       }
         messageError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
         return true;   


}


