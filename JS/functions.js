function myFunction() {
  var firstname=document.getElementById("t1");
  var lastname=document.getElementById("t2");
  var output=document.getElementById("output");
  var x=isRadioChecked();
  if(firstname.value=='') {
    output.innerHTML=firstname.name+" is required";
  } else if(lastname.value=="") {
	output.innerHTML=lastname.name+" is required";
  } else  if(x!=true) {
	output.innerHTML=radio1.name+" is required";
  } else {
	output.innerHTML="Thank you for successfully submitting the form";
	document.getElementById('myform').style.display="none";
  }	
}

function isRadioChecked() {
  var radioButtons=document.getElementsByName("gender");
  for(var x=0; x<radioButtons.length; x++) {
    if(radioButtons[x].checked) {
	  return true;
	}
  }
	return false;
}