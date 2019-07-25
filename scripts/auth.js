//sign-up
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener("submit", (buttonClick) =>{
  buttonClick.preventDefault();

  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  //sign up the user
  //promise functin .then() and callback function
  auth.createUserWithEmailAndPassword(email, password).then(userCredentials => {
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
   signupForm.reset();
 });
});

//logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (clickedLogout) => {
  clickedLogout.preventDefault();
  auth.signOut().then( () => {
    console.log('user signed out');
  });
});

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (clickedLogin) => {

  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  //this is so sexy! Django rest api required 5 lines, and not a a nice web dashboard
  //promise and callback (have to wait for internet to complete. Like a passing play)
  auth.signInWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user)
    // close the login modal and reset the form

    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  });
});
