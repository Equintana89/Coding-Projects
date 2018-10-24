let attempt = 3;  // Varibale to count number of attempts



// Executes on click of login button
function validate(){   
      let username = document.getElementById('username');
      let password = document.getElementById('password');

      if(username === 'Equintana' && password === 'Snow1234') {
            alert('Login succesfully');
            window.location = "login-page.html"; // Redirecting to other page
            return true;
      } else {
            attempt --; //Decrementing by one
            alert('You have ' + attempt + ' attempts left');

            // Disabling fields after 3 attempts
            if(attempt === 0) {
                  document.getElementById('username').disbaled = true;
                  document.getElementById('password').disabled = true;
                  document.getElementById('login') = true;
                  return false;
            }
      }
}
