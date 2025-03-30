async function getWeather() {
    let city = document.getElementById("cityInput").value;  
    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    let apiKey = "fa6ca55bfc9247e2915d89de7d45f4c9";  // Get a free API key from OpenWeatherMap
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        if (data.cod === 200) {
            let temp = data.main.temp;
            document.getElementById("temperature").innerText = `Temperature in ${city}: ${temp}°C`;
            
            // Change background based on temperature
            changeBackground(temp);
        } else {
            document.getElementById("temperature").innerText = "City not found!";
        }
    } catch (error) {
        console.error(error);
    }
}

function changeBackground(temp) {
    let body = document.body;
    if (temp > 35) {
        body.style.backgroundImage = "url('summer.jpg')";
    } else if (temp >= 15 && temp <= 35) {
        body.style.backgroundImage = "url('normal.jpg')";
    } else if (temp > 0 && temp < 15) {
        body.style.backgroundImage = "url('cold.jpg')";
    } else {
        body.style.backgroundImage = "url('snow.jpg')";
    }
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
}

