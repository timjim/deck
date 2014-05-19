$(function() {
  
  // Lightbox fadeIn
  $('#how_it_works').click(function() {
    $('#lightbox').fadeIn();
    // Autoplay
    $('#video')[0].src += "&autoplay=1";
  });

  // Lightbox fadeOut
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