/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2017. MIT licensed.
 */
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
