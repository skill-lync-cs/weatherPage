window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    let setIcon = document.querySelector(".icon");
    let maxTemperature = document.querySelector(".maxTemp");
    let minTemperature = document.querySelector(".minTemp");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=ddfaba4398b491fa4ef3e29a5e934c6e`;


            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    const {temp} = data.main;
                    const {main} = data.weather[0];
                    const {icon} = data.weather[0];
                    const {temp_max} = data.main;
                    const {temp_min} = data.main;
                    console.log(data);

                    temperatureDegree.textContent = temp + '\xB0';
                    temperatureDescription.textContent = main;
                    locationTimezone.textContent = data.name;
                    maxTemperature.textContent = 'Max: ' + temp_max + '\xB0' +' C';
                    minTemperature.textContent = 'Min: ' + temp_min + '\xB0' +' C';
                    setIcon.innerHTML = setIconFunction(icon);
                });
        });
    }
    function setIconFunction(icon) {
        if(icon == "01d"){
            return `<img src="./animated/day.svg"></img>`;
        } else if(icon == "02d"){
            return `<img src="./animated/cloudy-day-1.svg"></img>`;
        } else if(icon == "03d"){
            return `<img src="./animated/cloudy-day-2.svg"></img>`;
        } else if(icon == "04d"){
            return `<img src="./animated/cloudy-day-3.svg"></img>`;
        } else if(icon == "09d"){
            return `<img src="./animated/rainy-1.svg"></img>`;
        } else if(icon == "10d"){
            return `<img src="./animated/rainy-2.svg"></img>`;
        } else if(icon == "11d"){
            return `<img src="./animated/rainy-3.svg"></img>`;
        } else if(icon == "13d"){
            return `<img src="./animated/snowy-6.svg"></img>`;
        } else if(icon == "50d"){
            return `<img src="./animated/50d@2x.svg"></img>`;
        } else if(icon == "01n"){
            return `<img src="./animated/night.svg"></img>`;
        } else if(icon == "02n"){
            return `<img src="./animated/cloudy-night-1.svg"></img>`;
        } else if(icon == "03n"){
            return `<img src="./animated/cloudy-night-2.svg"></img>`;
        } else if(icon == "04n"){
            return `<img src="./animated/cloudy-night-3.svg"></img>`;
        } else if(icon == "09n"){
            return `<img src="./animated/rainy-1.svg"></img>`;
        } else if(icon == "10n"){
            return `<img src="./animated/rainy-2.svg"></img>`;
        } else if(icon == "11n"){
            return `<img src="./animated/rainy-3.svg"></img>`;
        } else if(icon == "13n"){
            return `<img src="./animated/snowy-6.svg"></img>`;
        } else if(icon == "50n"){
            return `<img src="./animated/50n@2x.svg"></img>`;
        } 
    }

});
