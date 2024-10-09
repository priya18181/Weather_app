const apiKey = 'b363c03e043f69e0adbfa068e85b834d'; // Replace with your OpenWeatherMap API key

document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value.trim(); // Trim to remove extra spaces

    if (city) {
        getWeatherData(city);
    } else {
        alert('Please enter a city name.');
    }
});

function getWeatherData(city) {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            displayWeatherData(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert(error.message);
        });
}

function displayWeatherData(data) {
    document.getElementById('location').textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
    document.getElementById('description').textContent = `Weather: ${data.weather[0].description}`;
}
