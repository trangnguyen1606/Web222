window.onload = function() {
  let form = document.querySelector('#contact-form');
  form.onsubmit = function(event) {
    var isValidated = true;
    //Check if the form is valid
    if (!form.checkValidity()) {
      // Update the CSS to indicate any invalid fields
      form.classList.add('was-validated');
      event.preventDefault();
      isValidated = false;
    }
    return isValidated;
  };

  var feedback = document.getElementById('feedback');
  var orderNumber = document.getElementById('orderNumber');

  document.getElementById('question').onclick = function() {
    feedback.style.display = 'block';
    orderNumber.style.display = 'none';
  };

  document.getElementById('comment').onclick = function() {
    feedback.style.display = 'block';
    orderNumber.style.display = 'none';
  };

  document.getElementById('order-problem').onclick = function() {
    orderNumber.style.display = 'block';
    feedback.style.display = 'none';
  };
};
