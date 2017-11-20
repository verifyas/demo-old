(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    // FastShell
    window.currentScreen = 1;
    window.currentModalScreen = 1;
  });

  window.switchScreen = function(n) {
    $('#screen-' + currentScreen).fadeOut(function(){
      $('#screen-' + n).fadeIn();
      currentScreen = n;
      // Remove Badge Block from checkout screens
      if(currentScreen >= 3 ){
        $('#verifyBadge').fadeOut();
      }          
    });



    return false; /* prevent form submissions */
  }


  window.switchModalScreen = function(n) {
    $('#modal-screen-' + currentModalScreen).fadeOut(function(){
      $('#modal-screen-' + n).fadeIn();
      currentModalScreen = n;
    });



    return false; /* prevent form submissions */
  }


  $("#close-modal").on("click" , function (){
    $("#verify-modal").removeClass("is-active");
    return false;
  });

  $("#verify-pay, #verify-pay-mobile").on("click", function (){
    $("#verify-modal").addClass("is-active");
    return false;
  })


})(jQuery, window, document);
