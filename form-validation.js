
function validate()
{
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  //validate user green/red

  if(userEntered.length > 6)
  {
    document.getElementById("usernameGroup").classList.add("has-success");
  }
  if(userEntered.length < 6)
  {
    document.getElementById("usernameError").innerHTML="Username must be over 6 characters.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");  
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  if(userEntered.indexOf(' ') >= 0)
  {
    document.getElementById("usernameError").innerHTML="Username cannot have spaces.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");  
    document.getElementById("usernameGroup").classList.add("has-error");
    console.log("has space");
  }
  //Show message that there is an error with the password...
  if(passEntered != "password")
  {
    document.getElementById("passwordGroup").classList.add("has-success");
  }
  if(passEntered == "password")
  {
    document.getElementById("passwordError").innerHTML="Password cannot be: [password]";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  if(passEntered == "Password")
  {
    document.getElementById("passwordError").innerHTML="Password cannot be: [Password]";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  if(passEntered == userEntered)
  {
    document.getElementById("passwordError").innerHTML="Password cannot be same as username.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
  }

  if(passEntered.length < 6 || passEntered.length > 20)
  {
    document.getElementById("passwordError").innerHTML="Password must be between 6 and 20 characters.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
    console.log("has < 6 > 20");
  }    
}
