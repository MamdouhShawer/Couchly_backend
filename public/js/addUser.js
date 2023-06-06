function validateForm() {
  // Get the values from the form
  var firstname = document.getElementById("firstname").value.trim();
  var lastname = document.getElementById("lastname").value.trim();
  var username = document.getElementById("username").value.trim();
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value.trim();
  var confirmpassword = document.getElementById("confirmpassword").value.trim();
  var role = document.getElementById("role").value.trim();

  // Validate the inputs
  var hasErrors = false;
  if (firstname === "") {
    hasErrors = true;
    document.getElementById("firstnameError").innerText =
      "First name is required";
  } else {
    document.getElementById("firstnameError").innerText = "";
  }

  if (lastname === "") {
    hasErrors = true;
    document.getElementById("lastnameError").innerText =
      "Last name is required";
  } else {
    document.getElementById("lastnameError").innerText = "";
  }

  if (username === "") {
    hasErrors = true;
    document.getElementById("usernameError").innerText = "Username is required";
  } else {
    document.getElementById("usernameError").innerText = "";
  }

  if (email === "") {
    hasErrors = true;
    document.getElementById("emailError").innerText = "Email is required";
  } else if (!isValidEmail(email)) {
    hasErrors = true;
    document.getElementById("emailError").innerText = "Invalid email address";
  } else {
    document.getElementById("emailError").innerText = "";
  }

  if (password === "") {
    hasErrors = true;
    document.getElementById("passwordError").innerText = "Password is required";
  } else if (password.length < 8) {
    hasErrors = true;
    document.getElementById("passwordError").innerText =
      "Password must be at least 8 characters";
  } else {
    document.getElementById("passwordError").innerText = "";
  }

  if (confirmpassword === "") {
    hasErrors = true;
    document.getElementById("confirmpasswordError").innerText =
      "Confirm password is required";
  } else if (confirmpassword !== password) {
    hasErrors = true;
    document.getElementById("confirmpasswordError").innerText =
      "Passwords do not match";
  } else {
    document.getElementById("confirmpasswordError").innerText = "";
  }

  if (role === "") {
    hasErrors = true;
    document.getElementById("roleError").innerText = "Role is required";
  } else {
    document.getElementById("roleError").innerText = "";
  }

  // If there are errors, prevent the form from submitting
  if (hasErrors) {
    return false;
  }

  // If there are no errors, allow the form to submit
  return true;
}

function isValidEmail(email) {
  // Use a regular expression to validate the email address
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
