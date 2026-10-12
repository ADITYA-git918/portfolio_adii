$(function () {
  // Mobile menu toggle
  $('#burgerBtn').on('click', function () {
    $('#mobileMenu').toggleClass('open');
  });

  // Live age calculation from date of birth (Bio-data page only)
  if ($('#ageCell').length) {
    var dob = new Date(2004, 10, 3); // 3 November 2004
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    var m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
    $('#ageCell').text(age + ' years');
  }

  // Print / Save as PDF button (Resume page only)
  $('#printBtn').on('click', function (e) {
    e.preventDefault();
    window.print();
  });
});
