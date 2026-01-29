// Get the form element
const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  if (form.checkValidity()) {
    // If all fields are valid, navigate to index.html
    window.location.href = 'index.html';
  } else {
    // If form is invalid, show Bootstrap validation feedback
    form.classList.add('was-validated');
  }
});
