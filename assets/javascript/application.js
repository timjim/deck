$(function() {
  
  function desktop() {
    $('#how_it_works').click(function() {
      $('#lightbox').fadeIn();
      // Autoplay
      $('#video')[0].src += "&autoplay=1";
    });
  }

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

  // Check if device is iOS
  if( /iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
    // Open with native app
    $("#how_it_works").wrap("<a href='http://www.youtube.com/watch?v=frfUORPk2O0' style='text-decoration:none;'></a>");
  } else {
    // Fade in lightbox
    desktop();
  }

});