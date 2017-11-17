(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    // FastShell
    window.currentScreen = 1;
  });

  window.switchScreen = function(n) {
    $('#screen-' + currentScreen).fadeOut(function(){
      $('#screen-' + n).fadeIn();
      currentScreen = n;
    });

    return false; /* prevent form submissions */
  }

})(jQuery, window, document);
