//fetch(`https://newsapi.org/v2/everything?q=kansas+city&apiKey=331040a253684eed8346e5eb64aabfe0`) for all news
fetch(`https://newsapi.org/v2/top-headlines?q=kansas+city&apiKey=331040a253684eed8346e5eb64aabfe0`) //for top headlines
//replace "kansas+city" with " + var name for city input + "&apikey...
            .then((response) => response.json())
            .then(data => console.log(data)) 
           