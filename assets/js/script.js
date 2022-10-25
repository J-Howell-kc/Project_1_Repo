Navigator.geolocation;
  function success(position) {
    //console.log(position.coords.latitude);
    //console.log(position.coords.longitude);
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=217731b2c4c4604614a6ee76ea8b8b9d&units=imperial`)
            .then((response) => response.json())
            .then((data) =>{ 
            var curTemp = data.list[0].main.temp;  
            console.log(curTemp)
            })
  }
  function error() {
    //alert('Sorry, no position available.');
    // Make weather card say "weather data not available"
  }
  const options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000
  };
  const watchID = navigator.geolocation.watchPosition(success, error, options);

  /* function weather(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=217731b2c4c4604614a6ee76ea8b8b9d&units=imperial`)
            .then((response) => response.json())
            .then((data) =>{ 
            var curTemp = data.list[0].temp;  
            console.log(curTemp)
            })};
    */