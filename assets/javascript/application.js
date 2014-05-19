$(function() {
  // Lightbox fadeIn, fadeOut
  $('#how_it_works').click(function() {
    $('#lightbox').fadeIn();
  });

  $('#lightbox').click(function() {
    $(this).fadeOut();
  });

  // Laptop screenshot cycle
  $('#screenshots').cycle({ 
    fx: 'fade', 
    timeout:  3000 
  });

  // Responsive iFrame
  $('#video_container').fitVids();
});