import weather from './weather.js'
import display from './display.js';

//dark mode
let darkMode = false;
const body = document.querySelector('body');
const windIcon = document.querySelector('#wind-icon');
const humidityIcon = document.querySelector('#humidity-icon');
const weatherResult = document.querySelector("#weather-result");
const appIcon = document.querySelector('#app-icon')
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const githubIcon = document.querySelector('.github-icon');
//display
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#location-input');
const searchButton = document.querySelector('#submit-button');

searchForm.addEventListener('submit', (e) =>{
    e.preventDefault();
});

searchButton.addEventListener('click', async () => {
    if(searchInput.value === '') return;
    const weatherData = await weather.getWeatherData(searchInput.value);
    display.setResult(weatherData);
});

//dark mode
const modeButton = document.querySelector('#mode-button');
const modeImage = document.querySelector('#mode-image');
modeButton.addEventListener('click', () => {
    if(darkMode){
        modeImage.src = 'images/dark-mode.svg';
        darkMode = false;
        body.classList.remove('dark-mode-body');
        windIcon.src = 'images/wind-icon.svg';
        humidityIcon.src = 'images/humidity-icon.svg';
        weatherResult.classList.remove('dark-mode-result');
        header.classList.remove('dark-mode-header');
        footer.classList.remove('dark-mode-footer');
        githubIcon.src = 'images/github-icon.svg';
        appIcon.src = 'images/clouds.svg';
    }
    else{
        modeImage.src = 'images/light-mode.svg';
        darkMode = true;
        body.classList.add('dark-mode-body');
        windIcon.src = 'images/wind-icon-dark.svg';
        humidityIcon.src = 'images/humidity-icon-dark.svg';
        weatherResult.classList.add('dark-mode-result');
        header.classList.add('dark-mode-header');
        footer.classList.add('dark-mode-footer');
        githubIcon.src = 'images/github-icon-dark.svg';
        appIcon.src = 'images/clouds-dark.svg';
    }
});