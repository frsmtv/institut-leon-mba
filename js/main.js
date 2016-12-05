jQuery(function($){



  // ********* LOADING FADEIN *******************
  // ==== FADEIN INTRO PAGE ==== //
  $('body').css('display', 'none');
  $('body').fadeIn(500);

  // ********* DISPLAY WORK IN PROGRESS *********
  $('header').on('mouseover', function(event){
    $(this).find('#construction').fadeIn().stop();
  });

  $('header').on('mouseout', function(event){
    $(this).find('#construction').stop().fadeOut();
  });



  // ========================= //
  }); // == CLOSING JQUERY == //
