
emailjs.init('nsl1_nl9gTWzl8moK'); 


function sendEmail(templateParams) {
    emailjs.send('gmail_service', 'template_6bo8kgh', templateParams)
        .then((response) => {
            console.log('Success:', response);
        }, (error) => {
            console.log('Failed:', error);
        });
}


function handleSignUp(event) {
    event.preventDefault();

    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;
    const email = document.querySelector('#email').value;

    
    const templateParams = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        message: "A new user has signed up!"
    };

    
    sendEmail(templateParams);

    
    alert('Thank you for signing up!');
}


function handleLogin(event) {
    event.preventDefault();

    const email = document.querySelector('#emailLogin').value;
    const password = document.querySelector('#passwordLogin').value;

    
    const templateParams = {
        email: email,
        message: "A user has logged in."
    };

    
    sendEmail(templateParams);

    
    alert('Login successful!');
}


document.querySelector('#signUpForm').addEventListener('submit', handleSignUp);
document.querySelector('#loginForm').addEventListener('submit', handleLogin);


function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('sign-up-form').style.display = 'none';
}


function showSignUp() {
    document.getElementById('sign-up-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
}


window.onload = showLogin;
