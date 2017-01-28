
$(document).ready(function() {
  console.log('app.js loaded!');

  var client = algoliasearch('', '');
  var index = client.initIndex('Tweet');


  $('#singlebutton').on('click', function(e) {
    e.preventDefault();

    var searchString = $('#textinput').serialize();

    index.search(searchString.substring(10), { hitsPerPage: 100, page: 0 })
      .then(function searchDone(content) {
        var hitsArray = content.hits;

        for (var tweetIndex = hitsArray.length - 1; tweetIndex > 0; tweetIndex--) {
          var tweetText = hitsArray[tweetIndex].text
          // console.log(tweetText);
          if (tweetText.indexOf('https://t.co/') >= 0 ) {
            // console.log('this has an image');
            // console.log(tweetText.indexOf('https://t.co/'));
            var tweetTextIndexImage = tweetText.indexOf('https://t.co/');
            var imageHtml = tweetText.slice(tweetTextIndexImage, -1);
            console.log(imageHtml);
            var tweetHtml =
              '  <div class="tweet">' +
              '  <a href='+ imageHtml + '"/>' + imageHtml + '</a>' +
              '    <h5>' + tweetText + '</h5>' +
              '  </div>'

          } else {
            // console.log('NO image');
            var tweetHtml =
              '  <div class="tweet">' +
              '    <h5>' + tweetText + '</h5>' +
              '  </div>'
          };




          // console.log(hitsArray[tweetIndex].text);
          $('#tweets').append(tweetHtml);
        }

        // $('#tweets').css( 'background-color', 'red' );

      })
      .catch(function searchFailure(err) {
        console.error(err);
      });

  });

});
