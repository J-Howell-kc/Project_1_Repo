const searchItem2=document.getElementById("searchItem2")



//fetch(`https://newsapi.org/v2/everything?q=kansas+city&apiKey=331040a253684eed8346e5eb64aabfe0`) for all news
fetch(`https://newsapi.org/v2/top-headlines?q=kansas+city&apiKey=331040a253684eed8346e5eb64aabfe0`) //for top headlines
//fetch(`https://newsapi.org/v2/top-headlines?q=kansas+city&category=entertainment&apiKey=331040a253684eed8346e5eb64aabfe0`) //for top headlines for entertainment
//replace "kansas+city" with " + var name for city input + ", pull city name from same input as weather?
            .then((response) => response.json())
          .then(data => searchItem2.innerHTML=data.articles[0].description)
//.then(data => console.log(data))


           // function error() {
                //alert ('No results for that location. Please try again.')
                // card displays "News unavailable."?
           // }


           