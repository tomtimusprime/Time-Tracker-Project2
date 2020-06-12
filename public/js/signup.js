$(document).ready(function () {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  let firstNameInput = $("input#first-name-input");
  let lastNameInput = $("input#last-name-input");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  let wageInput = $("input#wage-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {
      first_name: firstNameInput.val().trim(),
      last_name: lastNameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData);
    emailInput.val("");
    passwordInput.val("");
    firstNameInput.val("");
    lastNameInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  const signUpUser = (userData) => {
    $.post("/signup", userData, function (data) {
      console.log("account input success")
      addUser(firstNameInput.val().trim(), lastNameInput.val().trim(), wageInput.val().trim());
    })
  }

  const addUser = (firstName, lastName, wage) => {
    let newUser = {
      first_name: firstName,
      last_name: lastName,
      time_worked: 0,
      wage: wage,
      total_time: 0,
      total_earnings: 0
    };

    $.post("/user", newUser, function (data) {
      console.log("user input success");
      window.location.replace("/login");
    })
  };

  // const createTable = (userData, firstName, lastName, wage) => {
  //    signUpUser(userData);
  //    addUser(firstName, lastName, wage);
  // }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
