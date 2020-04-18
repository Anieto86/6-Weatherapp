//Your API key is 55d4668e401dd24c5b4747bfa09769d0


$(document).ready(function () {

  $(".btn-search").on("click", function () {              //btn   // Angelo help me in this part
    var input = $("#search-input").val();     // input  for cities
    console.log(input);
    $(".city").text(input);

    var apiKey = "55d4668e401dd24c5b4747bfa09769d0";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + input + "&units=imperial&appid=" + apiKey; // Api using cities names

    // Current weather forcast.
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function (response) {
        // this will happen eventually.
        console.log(response);


        $(".temperature-value-big").text("Temp =" + response.main.temp);
        $(".conditions-big").text(response.weather[0].main);
        $(".wind-big").text("Wind =" + response.wind.speed);
        $(".humidity-big").text("Humidity =" + response.main.humidity + "%");



        return response.coord;  // The chaing of API  this was with the Gwilyn helps
      })

      // UV 5 day forcast.
      .then(function (coord) {
        var apiKey = "55d4668e401dd24c5b4747bfa09769d0";
        // "http://api.openweathermap.org/data/2.5/uvi/forecast?appid={appid}&lat={lat}&lon={lon}&cnt={cnt}";
        var uvURL = "http://api.openweathermap.org/data/2.5/uvi/forecast?appid=" + apiKey + "&lat=" + coord.lat + "&lon=" + coord.lon + "&cnt=5";  // new API using coordinates

        return $.ajax({
          url: uvURL,
          method: "GET"
        })
      })
      .then(function (response) {
        // this will happen eventually.
        console.log(response, 'esta linea es response 47');
        $(".UV-big").text("UV =" + response[0].value);
        console.log(response[0], "linea 51");
        return response[0];

      })

      // 5 days forcast.
      .then(function (coord) {
        var apiKey = "55d4668e401dd24c5b4747bfa09769d0";
        console.log(coord);

        // api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={your api key}

        var fivedayURL = "http://api.openweathermap.org/data/2.5/forecast?lat=" + coord.lat + "&lon=" + coord.lon + "&appid=" + apiKey;


        return $.ajax({
          url: fivedayURL,
          method: "GET"
        })
      })
      .then(function (response) {
        console.log(response, "linea 68");

        $(".date-1").text(response.list[8].dt_txt);
        $(".date-2").text(response.list[16].dt_txt);
        $(".date-3").text(response.list[24].dt_txt);
        $(".date-4").text(response.list[32].dt_txt);
        $(".date-5").text(response.list[39].dt_txt);

        // Convert the temp to fahrenheit

        var i;
        for (i = 0; i < 5; i++) {  // for loop for change the K to F 
          console.log(i, "81");

          var tempF = (response.list[i].main.temp - 273.15) * 1.80 + 32;
          console.log(tempF, "85");
          
          var values = `temperature-value-${i + 1}`;   //Recive help in this sintax, 
        
          $("." + values).text("Temp °F =" + tempF.toFixed(2));   // in kelvis change 
          // $(".temperature-value-2").text("Temp °F =" + tempF.toFixed(2));
          // $(".temperature-value-3").text("Temp °F =" + tempF.toFixed(2));
          // $(".temperature-value-4").text("Temp °F =" + tempF.toFixed(2));
          // $(".temperature-value-5").text("Temp °F =" + tempF.toFixed(2));
        }
        $(".humidity-1").text("Humidity =" + response.list[0].main.humidity + "%");
        $(".humidity-2").text("Humidity =" + response.list[1].main.humidity + "%");
        $(".humidity-3").text("Humidity =" + response.list[2].main.humidity + "%");
        $(".humidity-4").text("Humidity =" + response.list[3].main.humidity + "%");
        $(".humidity-5").text("Humidity =" + response.list[4].main.humidity + "%");



      })

    // this will happen immediately.

  });

  ////////////////////////////////////////////////////////////////

  // Buttons for Cities using the same code from line 6 I repeated the code and I pass the new parametre for call the cyties using the buttons (last part)
  function getDataForCity(cityName) {
    $(".city").text(cityName);
    var apiKey = "55d4668e401dd24c5b4747bfa09769d0";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=" + apiKey;

    // Current weather forcast.
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function (response) {
        // this will happen eventually.
        console.log(response);


        $(".temperature-value-big").text("Temp =" + response.main.temp);
        $(".conditions-big").text(response.weather[0].main);
        $(".wind-big").text("Wind =" + response.wind.speed);
        $(".humidity-big").text("Humidity =" + response.main.humidity + "%");



        return response.coord;
      })

      // UV 5 day forcast.
      .then(function (coord) {
        var apiKey = "55d4668e401dd24c5b4747bfa09769d0";
        // "http://api.openweathermap.org/data/2.5/uvi/forecast?appid={appid}&lat={lat}&lon={lon}&cnt={cnt}";
        var uvURL = "http://api.openweathermap.org/data/2.5/uvi/forecast?appid=" + apiKey + "&lat=" + coord.lat + "&lon=" + coord.lon + "&cnt=5";

        return $.ajax({
          url: uvURL,
          method: "GET"
        })
      })
      .then(function (response) {
        // this will happen eventually.
        console.log(response, 'esta linea es response 47');
        $(".UV-big").text("UV =" + response[0].value);
        console.log(response[0], "linea 51");
        return response[0];

      })

      // 5 day forcast.
      .then(function (coord) {
        var apiKey = "55d4668e401dd24c5b4747bfa09769d0";
        console.log(coord);

        // api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={your api key}

        var fivedayURL = "http://api.openweathermap.org/data/2.5/forecast?lat=" + coord.lat + "&lon=" + coord.lon + "&appid=" + apiKey;


        return $.ajax({
          url: fivedayURL,
          method: "GET"
        })
      })
      .then(function (response) {
        console.log(response, "linea 68");

        $(".date-1").text(response.list[8].dt_txt);
        $(".date-2").text(response.list[16].dt_txt);
        $(".date-3").text(response.list[24].dt_txt);
        $(".date-4").text(response.list[32].dt_txt);
        $(".date-5").text(response.list[39].dt_txt);

        // Convert the temp to fahrenheit

        var i;
        for (i = 0; i < 5; i++) {
          console.log(i, "81");

          var tempF = (response.list[i].main.temp - 273.15) * 1.80 + 32;
          console.log(tempF, "85");
          var values = `temperature-value-${i + 1}`;

          $("." + values).text("Temp °F =" + tempF.toFixed(2));   // in kelvis change 
          // $(".temperature-value-2").text("Temp °F =" + tempF.toFixed(2));
          // $(".temperature-value-3").text("Temp °F =" + tempF.toFixed(2));
          // $(".temperature-value-4").text("Temp °F =" + tempF.toFixed(2));
          // $(".temperature-value-5").text("Temp °F =" + tempF.toFixed(2));
        }
        $(".humidity-1").text("Humidity =" + response.list[0].main.humidity + "%");
        $(".humidity-2").text("Humidity =" + response.list[1].main.humidity + "%");
        $(".humidity-3").text("Humidity =" + response.list[2].main.humidity + "%");
        $(".humidity-4").text("Humidity =" + response.list[3].main.humidity + "%");
        $(".humidity-5").text("Humidity =" + response.list[4].main.humidity + "%");


      })
  }

  $("#btn-Austin").on("click", function () {
    getDataForCity("Austin");

  });
  $("#btn-chicago").on("click", function () {
    getDataForCity("Chicago");

  });

  $("#btn-new-york").on("click", function () {
    getDataForCity("New York");

  });

  $("#btn-orlando").on("click", function () {
    getDataForCity("Orlando");

  });

  $("#btn-san-francisco").on("click", function () {
    getDataForCity("San Francisco");

  });

  $("#btn-seattle").on("click", function () {
    getDataForCity("Seattle");

  });

  $("#btn-seattle").on("click", function () {
    getDataForCity("Seattle");

  });

  $("#btn-denver").on("click", function () {
    getDataForCity("Denver")
  });

  $("#btn-atlanta").on("click", function () {
    getDataForCity("Atlanta")
  });


});

