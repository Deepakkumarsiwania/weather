const inputBox=document.querySelector('.input-box')
const searchBtn=document.querySelector('#searchBtn')
// console.log(searchBtn)
const weather_img=document.querySelector(".weather-img")
const tempreture=document.querySelector('.temperature');
// console.log(tempreture.innerHTML)
const description=document.querySelector('.description')
const humidity= document.getElementById('humidity')
// console.log(humidity)
const wind_speed=document.getElementById('Wind-speed');
async function checkWeather(city){
    const api_key = "d3928663e7a750466c40cc2da059d8fc";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());
    // console.log(weather_data)


    if(weather_data.cod === `404.png`){
        // location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }
    
    console.log("run");
    // location_not_found.style.display = "none";
    // weather_body.style.display = "flex";
    // print(tempreture.innerHTML)
    tempreture.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "/asset/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "/asset/clear.png";
            break;
        case 'Rain':
            weather_img.src = "/asset/rain.png";
            break;
        case 'Mist':
            weather_img.src = "/asset/mist.png";
            break;
        case 'Snow':
            weather_img.src = "/asset/snow.png";
            break;

    }

    // console.log(weather_data);
}

searchBtn.addEventListener('click', (e)=>{
    checkWeather(inputBox.value);
});





