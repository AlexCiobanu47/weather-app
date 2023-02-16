const display =(() => {
    function setResult(weatherData){
        if(!weatherData) return;
        
        const result = document.querySelector('#weather-result');
        const cityName = document.querySelector('#city-name');
        const currentTime = document.querySelector('#current-time');
        const currentWeather = document.querySelector('#weather-text');
        const weatherIcon = document.querySelector('#weather-icon');
        const temperature = document.querySelector('#temperature');
        const humidity = document.querySelector('#humidity');
        const windSpeed = document.querySelector('#wind-speed');

        cityName.textContent = `${weatherData.name}`;
        currentWeather.textContent = `${weatherData.weather[0].main}`;
        const date = new Date();
        let hours = date.getUTCHours() + weatherData.timezone/3600;
        let minutes = date.getUTCMinutes();
        //time format 
        if(minutes < 10){
            minutes = '0' + minutes;
        }
        if(hours > 23){
            hours -= 24;
        }
        const time = hours + ': ' + minutes;
        currentTime.textContent = time;
        const weatherId = weatherData.weather[0].icon;
        const url = `http://openweathermap.org/img/wn/${weatherId}@2x.png`;
        console.log(url);
        weatherIcon.src = url;
        temperature.textContent = `${weatherData.main.temp} ℃`;
        humidity.textContent = `Humidity: ${weatherData.main.humidity} %`;
        windSpeed.textContent = `Wind speed: ${weatherData.wind.speed} km/h`;
        result.classList.add('active-result');
    }

    return {setResult};
})();

export default display;