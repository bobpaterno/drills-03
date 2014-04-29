/* jshint unused: false */

(function(){
  'use strict';

  $(document).ready(init);

  function init() {
    $('#go').click(makeString);
  }

  function makeString() {
    var str;
    var f = $('#first').val();
    var l = $('#last').val();
    var flick = $('#movie').val();
    f = f.trim().toLowerCase();
    l = l.trim().toLowerCase();
    flick = flick.trim().toUpperCase();

    str = `${f} ${l} loves ${flick}`;
    $('#output').text(str);
  }

})();
