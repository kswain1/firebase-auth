// listen for auth status
auth.onAuthStateChanged(user => {
  if (user) {
    db.collection('enrollmentForm').onSnapshot(snapshot => {
      setupEnrollmentList(snapshot.docs);
      setupUI(user);
    }, err => console.log(err.message));
  } else {
    console.log('user logged out');
    setupUI();
    setupEnrollmentList([]);
  }
})

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
    return db.collection('users').doc(userCredentials.user.uid).set({
      phoneNumber: signupForm['phone-number'].value
    });
 }).then(() => {
   const modal = document.querySelector('#modal-signup');
   M.Modal.getInstance(modal).close();
  signupForm.reset();
 });
});

const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit',(enrollmentSubmitted) => {
  enrollmentSubmitted.preventDefault();

  db.collection('enrollmentForm').add({
    name: createForm["name"].value,
    height: createForm["height"].value,
    weight: createForm["weight"].value
  }).then(() => {
    // close the modal after the submission has been complete
    const modal = document.querySelector("#modal-create");
    M.Modal.getInstance(modal).close();
    createForm.reset();
  }).catch(err => {
    console.log(err.message);
  })
})

//logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (clickedLogout) => {
  clickedLogout.preventDefault();
  auth.signOut()
});

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (clickedLogin) => {

  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  //this is so sexy! Django rest api required 5 lines, and not a a nice web dashboard
  //promise and callback (have to wait for internet to complete. Like a passing play)
  auth.signInWithEmailAndPassword(email, password).then(cred => {
    // close the login modal and reset the form

    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  });
});
