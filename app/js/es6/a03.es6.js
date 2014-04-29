/* global moment */
/* jshint unused: false */

(function(){
  'use strict';

  $(document).ready(init);

  function init() {
    $('#go').click(makeDate);
  }

  function makeDate() {
    var daysLater = $('#date').val();
    $('#output').text(moment(daysLater).fromNow());
  }

})();
