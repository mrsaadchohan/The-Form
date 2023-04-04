// alert("Pakistan")

function Clear1()
{
	document.getElementById('NameError').innerHTML="";
	// document.getElementById('Forname').innerHTML="";
}

function Clear2()
{
	document.getElementById('EmailError').innerHTML="";
	// document.getElementById('Forname').innerHTML="";
}
function Clear3()
{
	document.getElementById('PassError').innerHTML="";
	// document.getElementById('Forname').innerHTML="";
}
function Clear4()
{
	document.getElementById('PhoneError').innerHTML="";
	// document.getElementById('Forname').innerHTML="";
}

function Done()
{
	var forNameReg = /^[a-zA-Z. ]{3,20}$/;
	var forEmailReg = /^[a-zA-z.0-9]{3,}[@]{1}[a-zA-Z0-9-]{3,}[.]{1}[a-zA-Z]{2,3}$/;
	var forPassReg =/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    var Forcontact=/^ [0-9]{11,11}$/;




var username =document.getElementById('Forname').value
var email=document.getElementById('Foremail').value
var pass =document.getElementById('Forpass').value
var conta=document.getElementById('forcontact').value

	



if (!forNameReg.test(username)) 
{
	// alert("error")
	// document.getElementById("Forname").style.border = "2px solid red";
	document.getElementById('NameError').innerHTML=" Incorrect userName ";
	return false;
}

 else if (!forEmailReg.test(email)) 
{
	// alert("error")
	// document.getElementById("Forname").style.border = "2px solid red";
	document.getElementById('EmailError').innerHTML="  Incorrect Email ";
	return false;
}

 else if (!forPassReg.test(pass)) 
{
	// alert("error")
	// document.getElementById("Forname").style.border = "2px solid red";
	document.getElementById('PassError').innerHTML=" IncorrectPassword ";
	return false;
}


else if (!Forcontact.test(conta)) 
{
	// alert("error")
	// document.getElementById("Forname").style.border = "2px solid red";
	document.getElementById('PhoneError').innerHTML=" Incorrect Number ";
	return false;
}
















}