let attempt = 3;  // Varibale to count number of attempts



// Executes on click of login button
function validate(){   
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;

      if(username === 'Equintana' && password === 'Snow1234') {
            alert('Login succesfully');
            window.location = "login-page.html"; // Redirecting to other page
      } else {
            // attempt --; //Decrementing by one
            // alert('Login Failed. You have ' + attempt + ' attempts left');

            // Disabling fields after 3 attempts
            if(attempt === 0) {
                  alert("No Login Attempts Available");
                  document.getElementById("username").disabled = true;
                  document.getElementById("password").disabled = true;
                  document.getElementById("login").disabled = true;
                  return false;
            } else {
                  attempt --;
                  alert("Login Failed. You now have only " + attempt + " Login attempts");
                  
            }
            
      }
}

// function disableField() {
//       var isDisabled = document.getElementById("username").value.length > 0;

//       document.getElementById("password").disabled = isDisabled;
// }