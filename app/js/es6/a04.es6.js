/* global _ */
/* jshint unused: false */

(function(){
  'use strict';

  $(document).ready(init);

  function init() {
    $('#go').click(makeNums);
  }

function makeNums() {
  var div = [];
  var n = $('#nums').val();
  var out = [];
  n = n.trim().split(',');
  out = _(_.range(n[0],n[1],n[2])).map(n=>n*n).shuffle(n).value();

  out = _.map(out=>'<div class=\'box\'>'+out+'</div>');
}


})();
