//fetch(`https://newsapi.org/v2/everything?q=kansas+city&apiKey=331040a253684eed8346e5eb64aabfe0`) for all news
fetch(`https://newsapi.org/v2/top-headlines?q=kansas+city&apiKey=331040a253684eed8346e5eb64aabfe0`) //for top headlines
// fetch(`https://newsapi.org/v2/top-headlines?q=kansas+city&category=entertainment&apiKey=331040a253684eed8346e5eb64aabfe0`) //for top headlines for entertainment
// replace "kansas+city" with " + var name for city input + ", pull city name from same input as weather?
            .then((response) => response.json())
            .then(data => console.log(data)) 

           // function error() {
                //alert ('No results for that location. Please try again.')
                // card displays "News unavailable."?
           // }

var newsAPIFetch = {method: 'GET',
params: {q: 'Bitcoin', lang: 'en', sort_by: 'relevancy', page: '1'},
headers: {'x-api-key': 'o7m9aVqJxEd2xKm6WMTUn7ZdiDMYfkfqgsxC3a7Woxs'}}

fetch('https://api.newscatcherapi.com/v2/search', newsAPIFetch).then(function(rq){
     return rq.json();
     
}).then(function(data){
     console.log(data);
})