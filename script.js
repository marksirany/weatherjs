let userCity = "minneapolis";

function weatherForecast() {

    function getUserCity() {
        const searchButtonEl = document.getElementById('cityButton');
        console.log(searchButtonEl);
        // const cityInputEl = document.getElementById('search');
        searchButtonEl.addEventListener('click', function () {
            event.preventDefault();
            userCity = document.getElementById('city').value;
            
                console.log('You searched for this city: ', userCity);
            storeInLocalStorage(userCity);
            searchForCityWeather(userCity);
            searchForForecast(userCity);
            searchForCityCoord(userCity);
            displayLocalStorage(userCity);
        });

    }
    getUserCity();

    function storeInLocalStorage(userCity) {
        const cityToStore = userCity;
        let strCities = window.localStorage.getItem("strCities") || "[]";
        console.log(strCities);
        const cities = JSON.parse(strCities);
        cities.push(cityToStore);
        strCities = JSON.stringify(cities);
        localStorage.setItem('user', strCities);
        console.log("Local Storage: ", strCities)
    }

    storeInLocalStorage();

    // Function will be used to perform request to the weather API
    function searchForCityWeather(userCity) {

        const apiKey = "76276e859a5fc64d330030ae4dae33a3";
        const cityName = userCity;
        const units = "imperial";
        const oneDayWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=" + units + "&appid=" + apiKey;
        axios.get(oneDayWeatherURL)
            .then(function(response){
                console.log(response)
                document.getElementById("name").innerHTML=response.data.name;
                document.getElementById("temp").innerHTML = "Temperature: " + response.data.main.temp + " °F";
                document.getElementById("humidity").innerHTML="Humidity: "+response.data.main.humidity + "%";
                document.getElementById("wind").innerHTML="Wind Speed: "+response.data.wind.speed + " mph";
                
            })
    };
    function searchForCityCoord(userCity) {

        const apiKey = "76276e859a5fc64d330030ae4dae33a3";
        const cityName = userCity;
        const units = "imperial";
        const oneDayWeatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=" + units + "&APPID=" + apiKey;
        axios.get(oneDayWeatherURL)
            .then(function(response){
                console.log(response)
                
                document.getElementById("lat").innerHTML="Latitude: "+response.data.city.coord.lat;
                document.getElementById("lon").innerHTML="Longitude: "+response.data.city.coord.lon;
                
            })
     
    };

    function displayLocalStorage(userCity) {
        var i;

        console.log("local storage");
        for (i = 0; i < localStorage.length; i++) {
            console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
            document.getElementById("local1").innerHTML="recent: " + i++;
        }
    };    

    function searchForForecast(userCity) {
        const apiKey = "76276e859a5fc64d330030ae4dae33a3";
        const cityName = userCity;
        const units = "imperial";
        const oneDayWeatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=" + units + "&APPID=" + apiKey;
        axios.get(oneDayWeatherURL)
            .then(function (response) {
                console.log(response)
                document.getElementById("date0").innerHTML = "Date: " + response.data.list[0].dt_txt;
                document.getElementById("temp0").innerHTML = "Temperature: " + response.data.list[0].main.temp + " °F";
                document.getElementById("humidity0").innerHTML = "Humidity: " + response.data.list[0].main.humidity + "%";
                // document.getElementById("icon0").innerHTML = ": " + response.data.list[0].weather[0].icon;
                
            })
        axios.get(oneDayWeatherURL)
            .then(function (response) {
                document.getElementById("date1").innerHTML = "Date: " + response.data.list[10].dt_txt;
                document.getElementById("temp1").innerHTML = "Temperature: " + response.data.list[10].main.temp + " °F";
                document.getElementById("humidity1").innerHTML = "Humidity: " + response.data.list[10].main.humidity + "%";
                

                

            })
        axios.get(oneDayWeatherURL)
            .then(function (response) {
                document.getElementById("temp2").innerHTML = "Temperature: " + response.data.list[18].main.temp + " °F";
                document.getElementById("date2").innerHTML = "Date: " + response.data.list[18].dt_txt;
                document.getElementById("humidity2").innerHTML = "Humidity: " + response.data.list[18].main.humidity + "%";
                

                

            })
        axios.get(oneDayWeatherURL)
            .then(function (response) {
                document.getElementById("date3").innerHTML = "Date: " + response.data.list[26].dt_txt;
                document.getElementById("temp3").innerHTML = "Temperature: " + response.data.list[26].main.temp + " °F";
                document.getElementById("humidity3").innerHTML = "Humidity: " + response.data.list[26].main.humidity + "%";
                



            })
        axios.get(oneDayWeatherURL)
            .then(function (response) {
                document.getElementById("temp4").innerHTML = "Temperature: " + response.data.list[34].main.temp + " °F";
                document.getElementById("date4").innerHTML = "Date: " + response.data.list[34].dt_txt;
                document.getElementById("humidity4").innerHTML = "Humidity: " + response.data.list[34].main.humidity + "%";
                



            })

        
    };

    
    

};
weatherForecast();

