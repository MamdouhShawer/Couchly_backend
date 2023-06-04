$(document).ready(function() {
  var requiredInputs = $('input[required]');
  var registerBtn = $('#bt');

  requiredInputs.on('keyup change', function() {
    var allInputsHaveValue = true;
    requiredInputs.each(function() {
      if ($(this).val().trim() === '') {
        allInputsHaveValue = false;
        return false;
      }
    });

    if (allInputsHaveValue) {
      registerBtn.prop('disabled', false);
    } else {
      registerBtn.prop('disabled', true);
    }
  });
});