document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phoneNumber').value;
  const gender = document.getElementById('gender').value;
  const membership = document.getElementById('member').value;
  const message = document.getElementById('message').value;

  const successMessage = `
      <h3>Registration Successful!</h3>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Gender:</strong> ${gender}</p>
      <p><strong>Membership:</strong> ${membership}</p>
      <p><strong>Message:</strong> ${message}</p>
  `;

  const successDiv = document.getElementById('successMessage');
  if (successDiv) {
      successDiv.innerHTML = successMessage;
      successDiv.style.display = 'block';
  } else {
      console.error("Element with ID 'successMessage' not found.");
      
  }
});

function Register(){
  alert("You have successfully registered!")
}