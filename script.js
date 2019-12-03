
function weatherForecast() {

    function getUserCity() {
        const searchButtonEl = document.getElementById('city');
        console.log(searchButtonEl);
        const cityInputEl = document.getElementById('search');
        searchButtonEl.addEventListener('click', function () {
            event.preventDefault();
            let input = document.getElementById('city').value;
            console.log(input);
            
            console.log('You searched for this city: ', userCity);
            storeInLocalStorage(userCity);
            searchForCityWeather(userCity);
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
        console.log("Local Storage: ", strCities)
    }

    storeInLocalStorage();

    // Function will be used to perform request to the weather API
    function searchForCityWeather(userCity) {

        const apiKey = "947af45bc8d7b63be4d0d313320202fb";
        const cityName = userCity;
        const units = "imperial";
        const oneDayWeatherURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=" + units + "&APPID=" + apiKey;
        let oneDayWeather = {
            city: "",
            date: "",
            weather: "",
            weatherDescription: "",
            weatherIcon: "",
            temp: "",
            humidity: "",
            windSpeed: "",
            lat: "",
            lon: "",
            uvIndex: ""
        };

    };

    searchForCityWeather();
};
weatherForecast();