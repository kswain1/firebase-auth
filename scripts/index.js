const enrollmentList = document.querySelector('.enrollmentForm');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');

const setupUI = (user) => {
  if (user) {
    //account info
    db.collection('users').doc(user.uid).get().then(doc => {
      console.log(doc.data());
      const html = `
        <div> Logged in as ${user.email}</div>
        <div>Phone Number: ${doc.data().phoneNumber} </div>
      `;
      accountDetails.innerHTML = html;
    });

    // toggle UI elements if they are logged IN update the UI
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
    console.log()
  } else {
    //hide account info
    accountDetails.innerHTML = '';

    // toggle UI elements Logged out elements will be updated
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block')
  }
}

// setup enrollmentForm
const setupEnrollmentList = (enrollmentData) => {
  if (enrollmentData.length) {
    let html = '';
    enrollmentData.forEach(doc => {
      const enrollment = doc.data();
      console.log(enrollment);
      console.log("Name", enrollment.name, "Weight", enrollment.weight);
      const li = `
        <li>
          <div class ="collapsible-header grey lighten-4">${enrollment.name}</div>
          <div class="collapsible-body white">${enrollment.weight}</div>
        </li>
      `;
      html += li;
    });
    enrollmentList.innerHTML = html;
  }  else  {
    enrollmentList.innerHTML = `<h5 class="center-align"> Login to View Guides</h5>`
  }

};

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});
