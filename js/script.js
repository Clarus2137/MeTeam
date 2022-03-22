$(document).ready (function() {
  $('.question').each(function() {
    $(this).on('click', function() {
      $(this).parent().toggleClass('opened');
      if ($(this).parent().hasClass('opened')) {
        $(this).siblings('.answer').slideDown(300);
      } else {
        $(this).siblings('.answer').slideUp(300);
      }
    });
  });
});
