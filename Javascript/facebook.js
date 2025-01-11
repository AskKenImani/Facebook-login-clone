function showLogin() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("sign-up-form").style.display = "none";
}

function showSignUp() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("sign-up-form").style.display = "block";
}


showLogin();
