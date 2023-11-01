const tempTag = document.querySelector('.temperature');
const cityNameTag = document.querySelector('#cityName');
const humidityTag = document.querySelector('.humidity');
const windSpeedTag = document.querySelector('.windSpeed');
const inputTag = document.getElementById('inputCity');
const imgTag = document.getElementById('image');
console.log(inputTag);

fetchData(cityName = 'Pachpadra');


async function fetchData(cityName){
    try{
    const key = '2b58279b2f854cc0867150737233010';
    const API = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${cityName}`
    let response = await fetch(API);
    let result = await response.json();
    console.log(result);
    upadateData(result);
     }catch(error){
           console.log(error);
           alert("Please search valid city name.");
     }
}

document.querySelector('.fa-solid').addEventListener('click',()=>{
    cityName = inputTag.value;
    fetchData(cityName);
})

function upadateData(currentData){
    imgTag.src = currentData.current.condition.icon;
    cityNameTag.textContent = currentData.location.name;
    tempTag.textContent = `${currentData.current.temp_c}°C`;
    windSpeedTag.textContent = `${currentData.current.wind_kph}km/h`;
    humidityTag.textContent = `${currentData.current.humidity}%`
}