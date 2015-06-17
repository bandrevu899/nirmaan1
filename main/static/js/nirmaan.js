$(document).ready(function(){

  $('#link-2').click(function(){
    $('.j-4').hide('slow');
    $('.j-5').hide('slow');
      $('.j-3').slideToggle();
      var c=$('.j-3');
      $('html,body').animate({scrollTop:c.offset().top});

});

  $('#link-1').click(function(){
    $('.j-3').hide('slow');
    $('.j-5').hide('slow');
    $('.j-4').slideToggle();
    var b=$('.j-4');
    $('html,body').animate({scrollTop:b.offset().top});

  });
  $('#link-3').click(function(){
    $('.j-3').hide('slow');
    $('.j-4').hide('slow');
    $('.j-5').slideToggle();
    var a=$('.j-5');
    $('html,body').animate({scrollTop:a.offset().top});
  });
  $('#initiatives-1').click(function(){
      $('.initiatives-2').hide('slow');
      $('.initiatives-3').hide('slow');
      $('.initiatives-1').slideToggle();
  });
  $('#initiatives-2').click(function(){
      $('.initiatives-1').hide('slow');
      $('.initiatives-3').hide('slow');
      $('.initiatives-2').slideToggle();
  });
  $('#initiatives-3').click(function(){
      $('.initiatives-2').hide('slow');
      $('.initiatives-1').hide('slow');
      $('.initiatives-3').slideToggle();
  });


});
