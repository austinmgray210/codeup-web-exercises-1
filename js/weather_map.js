
//weather maps
// mapboxgl.accessToken = mapboxToken;
// var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/dark-v9',
//     center: [-98.48753, 29.42172]
// });



var weatherIcons = [
    {
        condition: "clear-day",
        url: "./Icons/Sun.svg"
    },
    {
        condition: "clear-night",
        url: "./icons/Moon.svg"
    },
    {
        condition: "rain",
        url: "./icons/Cloud-Rain.svg"
    },
    {
        condition: "snow",
        url: "./icons/Snowflake.svg"
    },
    {
        condition: "sleet",
        url: "./icons/Cloud-Hail.svg"
    },
    {
        condition: "wind",
        url: "./icons/Wind.svg"
    },
    {
        condition: "fog",
        url: "./icons/Cloud-Fog.svg"
    },
    {
        condition: "cloudy",
        url: "./icons/Cloud.svg"
    },
    {
        condition: "partly-cloudy-day",
        url: "./icons/Cloud-Sun.svg"
    },
    {
        condition: "partly-cloudy-night",
        url: "./icons/Cloud-Moon.svg"
    }
]


//var testHtml = '<img src="' + weatherIcons[0].url + '">';
//$("#today-icon").append(testHtml);


$("#search-button").click(function () {
    var lat =  $("#latitude").val();
    var long = $("#longitude").val();

    console.log(lat);
    console.log(long);


    //For the darksky api to work we need us a proxy server which is the "cors-anywhere.herokuapp" url
  $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" + lat + "," + long).done(function (response) {
      console.log(response);
      console.log(response.daily.data);
      console.log(response.daily.data[0].temperatureHigh);

      //Current Day Temps
      $("#today-temp").append("<h4>" + response.daily.data[0].temperatureHigh  + "/" + response.daily.data[0].temperatureLow + "</h4>");

      //Current Day Icon
      var todayIconFromDarkSky = response.currently.icon;
      weatherIcons.forEach(function(weatherIcon){
          if (weatherIcon.condition === todayIconFromDarkSky){
              $("#today-icon").append('<img src="' + weatherIcon.url + '">');
          }
      });


      //Append html with the data from dark sky. For Current Day
      $("#today-clouds").append(response.currently.summary);
      $("#today-humidity").append(response.currently.humidity * 100);
      $("#today-winds").append(response.currently.windSpeed);
      $("#today-pressure").append(response.currently.pressure);


      //Tomorrow


      //Day After Tomorrow


    });




})





////Pasted From Somewhere
//function that shows your postion
// var lat= position.coords.latitude;
// var long = position.coords.latitudel;
//
// function showPosition(position) {
//     var lat= position.coords.latitude;
//     var long = position.coords.latitudel
// }
// //function that cant find your position
// function positionNotFound() {
//     alert("Unable to retrieve your location.")
// }
// var darkSky = "https://api.darksky.net/forecast/1441981f17b80ddabcad6ec5ea8f21ff/37.8267,-122.4233";
// var latlng = lat + "," + long ;
//
// //to get where the weather is (the name)
// $.get(darkSky, function (data) {
//     var arr_address = data.results[0].address_components
//     arr_address.forEach(function (val) {
//         if (val.types[0] === "locality"){
//             cityName = val.long_name;
//         }
//         if (val.types[0] === "country"){
//             countryCode = val.short_name;
//             countryName = val.long_name
//         }
//     })
// });