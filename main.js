(function(){

let quotes = [
    {
        "movie": "Avengers:",
        "quoteText": '"Bruce Banner/The Hulk: Sorry kids, guess you don\'t get to see my party trick after all."',
        "img": "./img/avengers.png"
    },
    {
        "movie": "The Godfather:",
        "quoteText": '"I\'m going to make him an offer he can\'t refuse."',
        "img": "./img/godfather.jpg"
    },
    {
        "movie": "Star Wars:",
        "quoteText": "May The Force be with you!",
        "img": "./img/star-wars.jpg"
    },
    {
        "movie": "The Terminator:",
        "quoteText": '"I will be back!"',
        "img": "./img/terminator.jpg"
    },
    {
        "movie": "The Lord of The Rings:",
        "quoteText": '"My precious."',
        "img": "./img/lotr.png"
    },
    {
        "movie": "The Wolf of Walstreet:",
        "quoteText": '"Let me give you some legal advice: Shut the fuck up!"',
        "img": "./img/wolf.jpg"
    },
    {
        "movie": "The Matrix:",
        "quoteText": '"This is your last chance. After this, there is no turning back. You take the blue pill - the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill - you stay in Wonderland and I show you how deep the rabbit-hole goes."',
        "img": "./img/matrix.jpg"
    },
    {
        "movie": "John Wick:",
        "quoteText": '"They call him Baba Yaga!"',
        "img": "./img/john-wick.jpg"
        
    },
    {
        "movie": "V for Vendetta:",
        "quoteText": '"The past cant hurt you anymore, unless you let it."',
        "img": "./img/v-for.jpg"
    }
];

  $(document).ready(function() {
  function newQuote() {
      
    let quoteNumber = Math.floor(Math.random() * (quotes.length));
      
    $("#movie, #quoteText, #img").html(quotes[quoteNumber].movie + "<br/> <br/>" + quotes[quoteNumber].quoteText+ "<br/>" + '<img src="'  + quotes[quoteNumber].img + '">');

    $("#facebookButton").attr("https://www.facebook.com/sharer/sharer.php?u=example.org" + quotes[quoteNumber].movie + " -" + quotes[quoteNumber].quoteText);
  }

    $("#generateButton").on("click", function() {
      newQuote();
    });
  });
    
})();