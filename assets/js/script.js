// JS of Weather
Navigator.geolocation;
  function success(position) {
    //console.log(position.coords.latitude);
    //console.log(position.coords.longitude);
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    //console.log(lat);
    //console.log(lon);
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=217731b2c4c4604614a6ee76ea8b8b9d&units=imperial`)
            .then((response) => response.json())
            .then((data) =>{ 
            console.log(data);
            var curTemp = data.list[0].main.temp;
            var curCity = data.city.name;
            var curWeatherType = data.list[0].weather[0].description;
            var curHumidity = data.list[0].main.humidity;
            var curFeelsLike = data.list[0].main.feels_like; 
            console.log(curTemp);
            console.log(curCity);
            console.log(curWeatherType);
            console.log(curHumidity);
            console.log(curFeelsLike);
            
            var cityMain = $("<div col-12>").append($("<p><h5>" + curCity  + "</h5><p>"));
            var image = $('<img class="imgsize">').attr('src', 'http://openweathermap.org/img/w/' + data.list[0].weather[0].icon + '.png');        
            var cityTemp = $('<p>').text('Temperature : ' + curTemp + ' °F');
            var cityHumid = $('<p>').text('Humidity : ' + curHumidity + '%');
            // var cityWind = $('<p>').text('Wind Speed : ' + data.wind.speed + 'MPH');       
      
            cityMain.append(cityTemp).append(cityHumid).append(image);
            $('#current-weather').empty();
            $('#current-weather').append(cityMain);
            displayForecast(lat,lon);
            })
  }

  function displayForecast(lat, lon) {
    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=217731b2c4c4604614a6ee76ea8b8b9d&units=imperial',
        method: "GET",
    }).then(function (response) {
        $("#fiveDay").empty()
        var arrayList = response.list;
        for (var i = 0; i < arrayList.length; i++) {
            if (arrayList[i].dt_txt.split(' ')[1] === '12:00:00') {
                var cityMain = $('<div>');
                cityMain.addClass('col bg-primary text-white ml-3 mb-3 rounded>');
                var fiveDayDate = $("<h6>").text(response.list[i].dt_txt.split(" ")[0]);
                var cityTemp = $('<p>').text('Temp : ' + arrayList[i].main.temp + ' °F ');
                var cityWind = $('<p>').text('Wind Speed : ' + arrayList[i].wind.speed + 'MPH');
                var cityHumid = $('<p>').text('Humidity : ' + arrayList[i].main.humidity + '%');
                var image = $('<img>').attr('src', 'https://openweathermap.org/img/w/' + arrayList[i].weather[0].icon + '.png');
                cityMain.append(fiveDayDate).append(cityTemp).append(cityWind).append(cityHumid).append(image);
                $('#fiveDay').append(cityMain);
            }
        }
    });
};
  
  
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


//js of Planner//
var timeDisplayEl = $('#dayTime');
var eventDisplayEl = $('#event-display');
var eventModalEl = $('#event-modal');
var eventFormEl = $('#event-form');
var eventNameInputEl = $('#event-name-input');
var eventTimeInputEl = $('#event-time-input');
var eventLocationInputEl = $('#event-location-input');
var dueDateInputEl = $('#due-date-input');  

function displayTime() {
  var rightNow = moment().format('hh:mm:ss a [on] MMM DD, YYYY ');
  timeDisplayEl.text(rightNow);
  }
  setInterval(displayTime, 1000);

function printEventData(name, time, eventLocation, dueDate) {
  var eventRowEl = $('<tr>');

  var eventNameTdEl = $('<td>').addClass('p-2').text(name);

  var eventTimeTdEl = $('<td>').addClass('p-2').text(time);

  var locationTdEl = $('<td>').addClass('p-2').text(eventLocation);

  var dueDateTdEl = $('<td>').addClass('p-2').text(dueDate);

  var daysToDate = moment(dueDate, 'MM/DD/YYYY').diff(moment(), 'days');

  var daysLeftTdEl = $('<td>').addClass('p-2').text(daysToDate);


  var deleteEventBtn = $('<td>')
    .addClass('p-2 delete-event-btn text-center')
    .text('X');

  eventRowEl.append(
    eventNameTdEl,
    eventTimeTdEl,
    locationTdEl,
    dueDateTdEl,
    daysLeftTdEl,
    deleteEventBtn
  );

  eventDisplayEl.append(eventRowEl);

  eventModalEl.modal('hide');
}

function handleDeleteEvent(event) {
  console.log(event.target);
  var btnClicked = $(event.target);
  btnClicked.parent('tr').remove();
}

function handleEventFormSubmit(event) {
  event.preventDefault();

  var eventName = eventNameInputEl.val().trim();
  var eventTime = eventTimeInputEl.val().trim();
  var eventLocation = eventLocationInputEl.val().trim();
  var dueDate = dueDateInputEl.val().trim();

  printEventData(eventName, eventTime, eventLocation, dueDate);

  eventFormEl.reset();
}

eventFormEl.on('submit', handleEventFormSubmit);
eventDisplayEl.on('click', '.delete-event-btn', handleDeleteEvent);
dueDateInputEl.datepicker({ minDate: 1 });

setInterval(displayTime, 1000);
//end js of planner//