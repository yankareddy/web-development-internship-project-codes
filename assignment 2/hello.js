function validateForm(event) {
    event.preventDefault();
  
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const terms = document.getElementById('terms').checked;
  
    // Simple validation example
    if (!firstName || !lastName || !email || !password || !confirmPassword || !dob || !gender || !terms) {
      document.getElementById('errorMessage').textContent = 'All fields are required.';
    } else if (password !== confirmPassword) {
      document.getElementById('errorMessage').textContent = 'Passwords do not match.';
    } else {
      document.getElementById('errorMessage').textContent = '';
  
      // Perform further actions, e.g., submit the form to the server
      // You can add an AJAX request or use form submission as needed
      // For simplicity, let's just log the form data to the console
      console.log({
        firstName,
        lastName,
        email,
        password,
        dob,
        gender,
        terms
      });
    }
  }
  
  document.getElementById('registrationForm').addEventListener('submit', validateForm);