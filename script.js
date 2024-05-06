const apiKeys ="004fe90161c37a001b5f67fdb51e9e2f"
const apiBase = "https://api.openweathermap.org/data/2.5/weather"
let city

const searchInput = document.getElementById("search-bar");
const searchButton = document.getElementById("btn-search");
let WeatherIcon = document.querySelector(".weather-icon");

searchInput.addEventListener("input", () => {
     
        city =searchInput.value;
        // console.log(city);
        document.getElementById("loader1").style.opacity = "1";
}); 

searchButton.addEventListener("click",  async () => {
    const response = await fetch(`${apiBase}?q=${city}&appid=${apiKeys}`);
    if(response.status === "404"){
        document.getElementById('error1').style.opacity = "1";
        console.log("error")
     }
     else{
        const data =  await response.json();
        document.getElementById("loader1").style.opacity = "0";
   
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp-273) + "°C";
        document.getElementById("humidity").innerHTML = data.main.humidity + "%";
        document.getElementById("wind-speed").innerHTML = data.wind.speed + "m/s";
    
       
        
      
        if(data.weather[0].main === "Haze"){
            WeatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main === "Clouds"){
            WeatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main === "Rain"){
            WeatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main === "Clear"){
            WeatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main === "Snow"){
            WeatherIcon.src = "images/snow.png";
        }
        else if(data.weather[0].main === "Mist"){
            WeatherIcon.src = "images/mist.png";
        }
        else if(data.weather[0].main === "Drizzle"){
            WeatherIcon.src = "images/drizzle.png";
        }
        document.querySelector(".weather").style.display = "block";
     }
  
});



// searchButton.addEventListener("click",  () => {
//     console.log("husnain");
//     console.log(searchInput);
//     // const response = await fetch(`${apiBase}?q=${searchInput.}&appid=${apiKeys}`);
//     // const data = await response.json();
//     // console.log(data);
//     // document.querySelector(".city").innerHTML = data.name;
// });

