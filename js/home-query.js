<!-- HIDING FROM OTHER BROWSERS
expires = new Date();
expires.setTime (expires.getTime() + 24 * 60 * 60 * 150 * 1000);
function set(){

if (document.dataform.name.value == "")
{
    alert ("Please enter your name.");
	   document.dataform.name.focus();
	   return (false);
}

if (document.dataform.email.value == "")
{
    alert ("Please enter your Email ID");
	   document.dataform.email.focus();
   	return (false);
}

if(document.dataform.email.value.indexOf(" ") >= 0)
{
	alert("Please enter your email-id without any white space character.");
	document.dataform.email.focus();
	return (false);
}
if ( (document.dataform.email.value.indexOf("@") == -1) || (document.dataform.email.value.indexOf(".") == -1) )
{
	alert("Please enter a valid email-id"); 
	document.dataform.email.focus();
	return (false);
}

BeforeAtRate = document.dataform.email.value.substring(0,document.dataform.email.value.indexOf("@"));
AfterAtRate = document.dataform.email.value.substring(document.dataform.email.value.indexOf("@")+1,document.dataform.email.value.length);

if (AfterAtRate.indexOf(".") == -1)
{
	alert("Please enter a valid email-id"); 
	document.dataform.email.focus();
	return (false);
}

middle = AfterAtRate.substring(0, AfterAtRate.indexOf("."))
last = AfterAtRate.substring(AfterAtRate.indexOf(".") + 1,AfterAtRate.length)

if (BeforeAtRate.length == 0 || middle.length == 0 || last.length == 0)
{
	alert("Please enter a valid email-id"); 
	document.dataform.email.focus();
	return (false);
}
if ( document.dataform.phone.value == "")
{
    alert ("Please enter your Phone No.");
	   document.dataform.phone.focus();
    return (false);
}



if (document.dataform.desc.value == "")
{
    alert ("Please enter yourgoods details.");
	document.dataform.desc.focus();
	return (false);
}
}
//Getting parameter name from url ends

// STOP HIDING FROM OTHER BROWSERS -->
