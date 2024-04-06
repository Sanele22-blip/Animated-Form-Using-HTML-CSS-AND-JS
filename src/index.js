const signinLink = document.querySelector('.signin-link');
const signupLink = document.querySelector('.signup-link');
const authContainer = document.querySelector('.auth-container');

signupLink.addEventListener('click', () => {
    authContainer.classList.add('active');
});

signinLink.addEventListener('click', () => {
    authContainer.classList.remove('active');
});