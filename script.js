const api = {
    key: 'cbccfbb77a3fe1ba1837ea463db17741',
    baseurl: 'https://api.openweathermap.org/data/2.5/',


}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt){
    if(evt.keyCode == 13){
        getResult(searchbox.value);
        console.log(searchbox.value);
    }

}

function getResult(query){
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather =>{
        return weather.json();
    }).then(displayResults);
}

function displayResults(weather) {
    console.log(weather);

    city = document.querySelector('.city');
    city.innerText = weather.name + ',' + weather.sys.country;

    let now = new Date();
    let date = document.querySelector('.date');
    date.innerText = dateBuilder(now);

    pippo = document.querySelector('.weather');
    pippo.innerText = weather.weather[0].description;

    temp = document.querySelector('.temp');
    temp.innerText = Math.round(weather.main.temp) + 'ºc';

    tempHiLow = document.querySelector('.hi-low');
    tempHiLow.innerText =  Math.round(weather.main.temp_min) + 'ºc / ' + Math.round(weather.main.temp_max) + 'ºc';
}

function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday","Monday","Tuesday","Wednesday","thursday","Friday","Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return day + ' ' + date +' '+ month + ' ' + year;
}