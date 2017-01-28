
$(document).ready(function() {
  console.log('app.js loaded!');

  var client = algoliasearch('', '');
  var index = client.initIndex('Tweet');


  $('#singlebutton').on('click', function(e) {
    e.preventDefault();

    var searchString = $('#textinput').serialize();

    index.search(searchString.substring(10), { hitsPerPage: 10, page: 0 })
      .then(function searchDone(content) {
        var hitsArray = content.hits;

        for (var tweetIndex = hitsArray.length - 1; tweetIndex > 0; tweetIndex--) {
          $('#tweets').append(hitsArray[tweetIndex].text);
        }

        $('#tweets').css( 'background-color', 'red' );

      })
      .catch(function searchFailure(err) {
        console.error(err);
      });

  });

});
