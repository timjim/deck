$(function() {
  $('#how_it_works').click(function() {
    $('#lightbox').fadeIn();
  });

  $('#lightbox').click(function() {
    $(this).fadeOut();
  });

});