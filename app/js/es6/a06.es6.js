/* global _ */
/* jshint unused: false */
/* jshint camelcase: false */

(function(){
  'use strict';

  $(document).ready(init);

  function init() {
    $('#go').click(getBoxOffice);
  }

  function getBoxOffice() {
    var num = $('#num-movies').val();
    var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit='+num+'&country=us&apikey=q9dxvu9wxvafw6c9h7gabvv8&callback=?';
    $.getJSON(url, displayBoxOffice);
  }

  function displayBoxOffice(bo) {
    var movies = bo.movies;
    var minScore = $('#min-score').val();
    movies = _.remove(movies, x=>x.ratings.critics_score>=minScore);
    var titles = movies.map(function(x){return x.title;});
    var imgurls = movies.map(function(x){return x.posters.thumbnail;});

    for(var i=0; i<titles.length; i++) {
      var divbox=$('<div class=\'box\'></div>');
      var divtitle = $(`<div class='name'>${titles[i]} ${movies[i].ratings.critics_score}</div>`);
      var img = $('<div><img src=\''+imgurls[i]+'\'></div>');
      $(divbox).append(img);
      $(divbox).append(divtitle);
      $('#output').append(divbox);
    }

  }

})();
