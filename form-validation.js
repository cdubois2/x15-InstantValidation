
function register()
{
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  alert(userEntered);
  alert(passEntered);
}

function validateUsername() 
{
  var passEntered = document.getElementById("pass").value;
  var userEntered = document.getElementById("user").value;
  if(userEntered.length > 6)
  {
    document.getElementById("usernameGroup").classList.add("has-success");
    document.getElementById("usernameGroup").classList.remove("has-error");
  }
  if(userEntered.length < 6)
  {
    document.getElementById("usernameError").innerHTML="Username must be over 6 characters.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");  
    document.getElementById("usernameGroup").classList.add("has-error");
    document.getElementById("usernameGroup").classList.remove("has-success");
  }
  if(userEntered.indexOf(' ') >= 0)
  {
    document.getElementById("usernameError").innerHTML="Username cannot have spaces.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");  
    document.getElementById("usernameGroup").classList.add("has-error");
    document.getElementById("usernameGroup").classList.remove("has-success"); 
  }
}

function validatePassword() 
{
  var passEntered = document.getElementById("pass").value;
  var userEntered = document.getElementById("user").value;
  if(passEntered != "password")
  {
    document.getElementById("passwordGroup").classList.add("has-success");
    document.getElementById("passwordGroup").classList.remove("has-error");
    console.log("dsadasd");
  }
  if(passEntered == "password")
  {
    document.getElementById("passwordError").innerHTML="Password cannot be: [password]";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
    document.getElementById("passwordGroup").classList.remove("has-success");
  }
  if(passEntered == "Password")
  {
    document.getElementById("passwordError").innerHTML="Password cannot be: [Password]";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
    document.getElementById("passwordGroup").classList.remove("has-success");
  }
  if(passEntered == userEntered)
  {
    document.getElementById("passwordError").innerHTML="Password cannot be same as username.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
    document.getElementById("passwordGroup").classList.remove("has-success");
  }

  if(passEntered.length < 6 || passEntered.length > 20)
  {
    document.getElementById("passwordError").innerHTML="Password must be between 6 and 20 characters.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
    document.getElementById("passwordGroup").classList.remove("has-success");
  }    
}

