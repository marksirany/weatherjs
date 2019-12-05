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
                document.getElementById("humidity").innerHTML="Humidity: "+response.data.main.humidity + " %";
                document.getElementById("wind").innerHTML="Wind: "+response.data.wind.speed + " mph";
                
            })
     
    };

    function searchForForecast(userCity) {
        const apiKey = "76276e859a5fc64d330030ae4dae33a3";
        const cityName = userCity;
        const units = "imperial";
        const fiveDayWeatherURL = "https//api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=" + units + "&appid=" + apiKey;
        axios.get(fiveDayWeatherURL)
            .then(function (response) {
                console.log(response)
                // document.getElementById("name").innerHTML = response.data.name;
                // document.getElementById("temp").innerHTML = "Temperature: " + response.data.main.temp + " °F";
                // document.getElementById("humidity").innerHTML = "Humidity: " + response.data.main.humidity + " %";
                // document.getElementById("wind").innerHTML = "Wind: " + response.data.wind.speed + " mph";

            })

    };
    
    
};
weatherForecast();

