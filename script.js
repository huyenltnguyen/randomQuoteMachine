$(document).ready(function() {
  init();

  function getQuote() {
    $.ajax({
      url:'https://cors-anywhere.herokuapp.com/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        $('.quote').html(data[0].content.slice(0, 3) + '<i class="fa fa-quote-left" aria-hidden="true"></i>' + data[0].content.slice(3));
        data[0].title ? $('.author').text('- ' + data[0].title) : $('.author').text('- Unknown');
        console.log(data);
      },
      cache: false
    });
  }

  function randomColor() {
    var colors = ['rgb(137, 63, 117)', 'rgb(124, 168, 19)', 'rgb(125, 76, 70)', 'rgb(189, 64, 13)', 'rgb(6, 174, 74)', 'rgb(197, 108, 115)', 'rgb(0, 127, 154)', 'rgb(194, 139, 158)', 'rgb(88, 127, 114)', 'rgb(143, 124, 55)', 'rgb(139, 92, 59)', 'rgb(22, 172, 189)'];
    var randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  function setRandomColor(color) {
    $("body").css("background-color", color);
    $(".quote").css("color", color);
    $(".author").css("color", color);
    $(".btn").css("background-color", color);
  }

  function init() {
    getQuote();
    setRandomColor(randomColor());    
  }

  // EVENT HANDLERS
  $('#newQuoteBtn').on('click', function(){
    getQuote();
    setRandomColor(randomColor()); 
  });
  
  $('#tweetQuoteBtn').on('click', function(){
    window.open("http://twitter.com/intent/tweet?text=" + $('.quote').text())
  });
});

