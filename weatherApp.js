const api = {
    key : "e2091dcc0e42dfe6d6e0ba849440766b", 
    base : "http://api.openweathermap.org/data/2.5/"
}

let city = document.querySelector('.cityName')
let date = document.querySelector ('.date');
let weather = document.querySelector ('.weatherName');
let weatherDescription = document.querySelector ('.weatherDesc')
let WeatherIcon = document.querySelector ('icon'); 
let temperatureDegree = document.querySelector ('.temp');
let humidity = document.querySelector ('.humid');


const weatherInfo = (id) => {
    //add fetch data 
    fetch(`${api.base}weather?q=vancouver&units=metric&APPID=${api.key}`)
    .then(response => {
   
         //Check the status of the request.
        if (response.status !== 200) {
            console.log(`error ${response.status}`)
            return;
        }
        //change the data into json
        response.json()
        .then (data => {
            console.log(data)
            //set DOM Elements from the API
            city.textContent="Weather in" + " "+ data.name;
            weather.textContent = "Weather" + " : " +data.weather[0].main;
            weatherDescription.textContent= "Description" + " : " + data.weather[0].description ; 
            temperatureDegree.textContent = "Temperature"+ " : " + data.main.temp+"°C"; 
             humidity.textContent = "Humidity" + " : " + data.main.humidity + "%";
        })
        .catch (error => {
            console.log(`error ${error}`);
        })
    })
}


//This is the codes for searching box, but it's not working yet....

$(document).ready(()=>{

    weatherInfo(); 
    //when we load the page
    let searchButton = $(".button"); 

    searchButton.on('click',()=> { 
        //when we search for a user
        $(".data").empty();
         let idValue  = parseInt($(".search-bar").val());
        //convert the value to number
        weatherInfo(idValue); 
    });

})

