/*var ck_name = /^[A-Za-z0-9 ]{3,20}$/;
var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i 
var ck_username = /^[A-Za-z0-9_]{1,20}$/;
var ck_password =  /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;

function validate(form){
var name = document.getElementById('zAppname_input').value;
var email = document.getElementById('zAppemail_input').value;
var username = document.getElementById('zAppphone_input').value;
var password = document.getElementById('zAppdate_input').value;
var gender = fdocument.getElementById('zAppshuttle_input').value;
var errors = [];
 
//document.getElementById('zAppmake_input').value="";
 if (!ck_name.test(name)) {
  errors[errors.length] = "You valid Name .";
 }
 if (!ck_email.test(email)) {
  errors[errors.length] = "You must enter a valid email address.";
 }
 if (!ck_username.test(username)) {
  errors[errors.length] = "You valid UserName no special char .";
 }
 if (!ck_password.test(password)) {
  errors[errors.length] = "You must enter a valid Password ";
 }
 if (gender==0) {
  errors[errors.length] = "Select Gender";
 }
 if (errors.length > 0) {

  reportErrors(errors);
  return false;
 }
  return true;
}
function reportErrors(errors){
 var msg = "Please Enter Valide Data...\n";
 for (var i = 0; i<errors.length; i++) {
 var numError = i + 1;
  msg += "\n" + numError + ". " + errors[i];
}
 alert(msg);
}

*/



function notEmpty(elem, helperMsg){
	if(elem.value.length == 0){
		alert(helperMsg);
		elem.focus();
		return false;
	}
	return true;
}

function sendMail() {
if(zAppname_input.value.length == 0){
notEmpty(zAppname_input,"Please enter the name.");
return false;
}
if(zAppemail_input.value.length == 0){
notEmpty(zAppemail_input,"Please enter the Email.");
return false;
}
/*if(zAppphone_input.value.length == 0){
notEmpty(zAppphone_input,"Please enter the Phone.All feilds are mandatory.");
return false;
}*/
if(zAppdate_input.value.length == 0){
notEmpty(zAppdate_input,"Please enter the Date.");
return false;
}
if(zAppshuttle_input.value.length == 0){
notEmpty(zAppshuttle_input,"Please enter the Shuttle.");
return false;
}
if(zAppmake_input.value.length == 0){
notEmpty(zAppmake_input,"Please enter the Make.");
return false;
}

var mailBodyContent= "Name:"+document.getElementById('zAppname_input').value +"\n"+
"Email:"+document.getElementById('zAppemail_input').value+"\n"+
"Phone:"+document.getElementById('zAppphone_input').value+"\n"+
"Date:"+document.getElementById('zAppdate_input').value+"\n"+
"Shuttle:"+document.getElementById('zAppshuttle_input').value+"\n"+
"Make:"+document.getElementById('zAppmake_input').value+"\n"+"\n"+
"Thanks & Regards"+"\n"+
"Zolmantire Mobile App." 
;

    var link = "mailto:me@example.com"
             + "?cc=myCCaddress@example.com"
             + "&subject=" + escape("This is my subject")
             + "&body=" + escape(mailBodyContent)
               ;

    window.location.href = link;
    reset();
}
function reset(){
document.getElementById('zAppname_input').value="";
document.getElementById('zAppemail_input').value="";
document.getElementById('zAppphone_input').value="";
document.getElementById('zAppdate_input').value="";
document.getElementById('zAppshuttle_input').value="";
document.getElementById('zAppmake_input').value="";

}