const login_form = document.getElementById("login_form");
const registration_form = document.getElementById("registration_form");
const signupBtn = document.getElementById("signup");
const loginBtn = document.getElementById("login");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm_password");
const registerBtn = document.getElementById("register");
const average = document.getElementById("average");
const strong = document.getElementById("strong");

registerBtn.disabled = true;

signupBtn.addEventListener("click", function (event) {
  event.preventDefault();
  login_form.style.display = "none";
  registration_form.style.display = "block";
});

loginBtn.addEventListener("click", function (event) {
  event.preventDefault();
  registration_form.style.display = "none";
  login_form.style.display = "block";
});

function validateForm() {
  passwordIndicator();
  if (!email.value || !password.value) {
    registerBtn.disabled = true;
    registerBtn.style.background = "gray";
    return false;
  } else {
    registerBtn.disabled = false;
    registerBtn.style.background = "#2691d9";
    return true;
  }
}

function passwordIndicator() {
  var text = password.value;
  // Minimum eight characters, at least one letter and one number:

  const averageRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  //   Minimum eight characters, at least one letter, one number and one special character:
  const strongRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

  if (averageRegExp.test(text)) {
    average.style.display = "inline-block";
  } else if (strongRegExp.test(text)) {
    strong.style.display = "inline-block";
  } else {
    average.style.display = "none";
    strong.style.display = "none";
  }
}
