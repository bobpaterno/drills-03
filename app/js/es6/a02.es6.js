/* jshint unused: false */

(function(){
  'use strict';

  $(document).ready(init);

  function init() {
    $('#go').click(makeNums);
  }

  function makeNums() {
    var div = [];
    var n = $('#numbers').val();

    n = n.trim().split(',').map(n=>n*n);

    div = n.map(n=>{ return '<div class=\'box\'>'+n+'</div>';});
    $('#output').append(div);
  }

})();
