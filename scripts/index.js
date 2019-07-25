const enrollmentList = document.querySelector('.enrollmentForm');

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
