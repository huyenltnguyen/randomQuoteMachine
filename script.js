var getQuote = function() {
  $.ajax({
    url:'https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?',
    dataType:'json',
    data:'method=getQuote&format=json&lang=en',
    
    // If the request is successful
    success: function(data) {
      $('.quote').html(data.quoteText);
      if (data.quoteAuthor !== '') {
        $('.author').html('- ' + data.quoteAuthor + ' -');
      }
      else {
        $('.author').html('- Unknown -');
      }
    },
    
    // If errors occur
    error: function(xhr, status, error) {
    $('.quote').text("Oops, something is wrong here. Please try refreshing this page.");
  }
  });
};


$(document).ready(function(){
  $('#newQuote').on('click', function(){
    getQuote();
  });
  
  $('#tweetQuote').on('click', function(){
    window.open("http://twitter.com/intent/tweet?text=" + $('.quote').text())
  });
});