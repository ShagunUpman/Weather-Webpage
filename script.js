async function getWeather() {
    let city = document.getElementById("cityInput").value.trim();  
    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    let apiKey = "fa6ca55bfc9247e2915d89de7d45f4c9";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        let response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        let data = await response.json();
        let temp = data.main.temp;
        let description = data.weather[0].description;

        document.getElementById("temperature").innerText = `Temperature in ${city}: ${temp}°C`;
        document.getElementById("description").innerText = `Condition: ${description}`;

        changeBackground(temp);
    } catch (error) {
        document.getElementById("temperature").innerText = "";
        document.getElementById("description").innerText = error.message;
        console.error("Error fetching weather:", error);
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

