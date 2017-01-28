
$(document).ready(function() {
  console.log('app.js loaded!');

  var client = algoliasearch('', '');
  var index = client.initIndex('Tweet');

  autocomplete('#aa-search-input',
    { hint: false }, {
      source: autocomplete.sources.hits(index, {hitsPerPage: 5}),
      displayKey: 'tweet',
      templates: {

        suggestion: function(suggestion) {

          var tweetText = suggestion.text

          if (tweetText.indexOf('https://t.co/') >= 0 ) {

            var tweetTextIndexImage = tweetText.indexOf('https://t.co/');
            var imageHtml = tweetText.slice(tweetTextIndexImage, -1);
            var tweetHtml =
              '  <div class="tweet">' +
              '  <a href='+ imageHtml + '"/>' + imageHtml + '</a>' +
              '    <h5>' + tweetText + '</h5>' +
              '  </div>'

          } else {
            var tweetHtml =
              '  <div class="tweet">' +
              '    <h5>' + tweetText + '</h5>' +
              '  </div>'
          };

          $('#tweets').prepend(tweetHtml);
        }

      }
    }
  );

});
