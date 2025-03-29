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
            document.getElementById("temperature").innerText = 
                `Temperature in ${city}: ${data.main.temp}°C`;
        } else {
            document.getElementById("temperature").innerText = "City not found!";
        }
    } catch (error) {
        console.error(error);
    }
}
