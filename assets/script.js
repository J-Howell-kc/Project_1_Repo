fetch(`https://newsapi.org/v2/everything?q=kansas+city&apiKey=331040a253684eed8346e5eb64aabfe0`)
            .then((response) => response.json())
            .then(data => console.log(data)) 
           