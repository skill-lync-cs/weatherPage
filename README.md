# Workshop - Weather Application

- Step 1: Use codesandbox for setup web project
Login into https://codesandbox.io/ and select new project from template, choose Vanilla JavaScript.

![](images/StartJavaScriptSandbox.gif)

- Step 2: Three Components of a Web Page
    - Content - HTML
    - Presentation - CSS
    - Behaviour - JavaScript

- Step 3: Update the html file to create a mock like the below images

![](/images/AddingNumbers.png)

```html
<div>
    <h2>Adding two numbers</h2>
  
    <section>
        <input type="text" id="number1" class="input-text">
        <span>+</span>
        <input type="text" id="number2" class="input-text">
        <span>=</span>
        <div id="result"></div>
        <button class="btn" id="submit-btn">Click to add Numbers</button>
    </section>
</div>
```
- Step 4 : Try to get all the elements horizontally aligned
```css
section {
  display: flex;
  align-items: center;
  
}
```

- Step 5: Try to give border-radius and padding and margin to input elements using css selector
```css
.input-text {
  border: 1px solid GREY;
  border-radius: 5px;
  padding: 5px;
  margin: 10px;
}
```

- Step 7: Try to give result span width and height of 50px and border-radius and border color RED
```css
#result {
  border-radius: 5px;
  border: 1px solid RED;
  width: 50px;
  height: 50px;
  display: inline-block;
}
```

- Step 8: Try to give border-radius to button and give font color of RED, on hover make the button background color to RED and font color to white
```css
#submit-btn {
  color: RED;
  padding: 5px;
  border-radius: 5px;
}

#submit-btn:hover {
  background-color: RED;
  color: white;
}
```

- Step 9: Add behavior to the button

Add a onClick function in html to alert Hello World on click of button
```html
<button class="btn" id="submit-btn"
    onClick="sayHello()">Click to add Numbers</button>
```
```javascript
function sayHello(){
    alert('Hello World')
}
```

- Step 10: Remove method from html and bind the click event in javascript
```javascript
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener('click', sayHello);

function sayHello(){
    alert('Hello World')
}
```

- Step 11: Try to get the value of both input text and update in the result box
```javascript
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener('click', addTwoNumbers);

function addTwoNumbers() {
    const number1 = document.getElementById('number1').value;
    const number2 = document.querySelector('#number2').value;
    const sum = number1 + number2;
    const resultBox = document.getElementById('result');
    resultBox.innerHTML = sum;
}
```

- Step 12: Understand var, let and const
    - var : function scope
    - let and const : block scope
```javascript
function foo() {
    var a = 5;
    var b = 10;
    var c = a + b;
}

foo();
console.log(c);

```

```javascript
function foo() {
    var a = 5;
    var b = 10;
    const c = a + b;
    if (b > a) {
        let c = a + b;
    }

    console.log(c);
    return c;
}

const sum = foo();
console.log(sum);

```
- Step 13: Importance of Developer tools and console.log()

- Step 14: Functions in JavaScript
    - Function Decalration
    ```javascript
    function add(a, b) {
        return a + b;
    }
    ```
    Question: Write a function for adding three numbers
    - Function Expression
    ```javascript
    const add = function(a,b) {
        return a + b;
    }
    ```
    Question: Write a function for adding three numbers
    - Arrow function
    ```javascript
    const add = (a,b) => a + b;
    ```
    Question: Write a function for adding three numbers with arrow function

    How do you call a function
    ```javascript
    const c = add(4,5);
    console.log(c);
    ```

- Step 15: Adding delay in function call
```javascript
setTimeout(() => {
    console.log('I am going to be called after 5 seconds');
    const c = add(4,5);
    console.log(c);
}, 5000)
```

- Step 15: Function as a first class citizen and Higher Order Function

*When a function can be passed as a normal argument just like number or string, this feature is called Function as first class citizen*

Example: In setTimeout a function is passed for later use. The passed function is called callback function, and the function which can accept another function as an argument is called Higher Order Function.

**Def: Any function which takes function as an argument or return function is called Higher Order Function**

```javascript
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener('click', addTwoNumbers);

function addTwoNumbers() {
    const number1 = document.getElementById('number1').value;
    const number2 = document.querySelector('#number2').value;
    const sum = number1 + number2;
    const resultBox = document.getElementById('result');
    resultBox.innerHTML = sum;
}
```
- addEventListener is also a Higher Order Function,
- addTwoNumbers passed in the addEventListner is a callback function.

- Step 16: Create another project in codesandbox and try to get the current latitude and longitude
```javascript
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        const long = position.coords.longitude;
        const lat = position.coords.latitude;
        console.log('Lat : ' + lat + ' Long : ' + long);
    })
}
```

- Step 17: understanding what is API

An API, or Application Programming Interface, is a way for different software programs to communicate with each other. Think of it like a waiter in a restaurant. Just like a waiter takes your order and brings your food to you, an API is a middleman that takes a request from a program and returns the desired information or service.

For example, let's say you use a weather app on your phone to check the forecast. The app doesn't make the weather forecast itself, but it uses an API to request the forecast from a weather service. The API acts as a translator, taking the request from the app and sending it to the weather service. The service then sends the forecast data back to the API, which in turn sends it back to the app to display on your screen.

- Step 18: Search for weather API over the internet and use the fetch function to get the weather data

```javascript

if (navigator.geolocation) {
    navigator.getlocation.getCurrentPosition(position => {
        const long = position.coords.longitude;
        const lat = position.coords.latitude;
        console.log('Lat : ' + lat + ' Long : ' + long);

        const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=ddfaba4398b491fa4ef3e29a5e934c6e`;

        const response = await fetch(api);
        const data = await response.json();

        console.log(data);
    })
}

```

- Step 19: Seperate the functionality for fetching weather data into sepearate function

```javascript
if (navigator.geolocation) {
    navigator.getlocation.getCurrentPosition(async position => {
        const long = position.coords.longitude;
        const lat = position.coords.latitude;
        console.log('Lat : ' + lat + ' Long : ' + long);

        const weatherData = await getWeatherData(lat, long);

        console.log(weatherData);
    })
}

async function getWeatherData(lat, long) {
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=ddfaba4398b491fa4ef3e29a5e934c6e`;

    let response = await fetch(api);
    let data = await response.json();

    return data;
}

```

- Step 20: Render weather data on HTML

Add the below code to html
```html
<div id="weather">
    <h1 id="place"></h1>
    <div id="temperature-description"></div>
    <h2 id="temperature-degree"></h2>
    <div id="maxTemp"></div>
    <div id="minTemp"></div>
    <div id="windSpeed"></div>
</div>
```
Create a function to display weather data on UI
```javascript
function weatherDataHandler(data) {
    document.querySelector('#place').innherHTML = data.name;
    document.querySelector("#temperature-description") = data.weather[0];
    document.querySelector("#temperature-degree").innerHTML = data.main.temp;
    document.querySelector("#maxTemp").innerHTML = data.main.temp_max;
    document.querySelector("#minTemp").innerHTML = data.main.temp_min;
    document.querySelector("#windSpeed").innerHTML = data.wind;
}
```
Call the weatherDataHandler()
```javascript
if (navigator.geolocation) {
    navigator.getlocation.getCurrentPosition(async position => {
        const long = position.coords.longitude;
        const lat = position.coords.latitude;
        console.log('Lat : ' + lat + ' Long : ' + long);

        const weatherData = await getWeatherData(lat, long);

        console.log(weatherData);
        weatherDataHandler(weatherData);
    })
}
```

## Congratulations, you are able to successfully consume the weather API.

# Day 2

- Step 21: Exploring how to add Map to our application
    
Possible options are 
- Google Maps
- Leaflet Map

https://leafletjs.com/examples/quick-start/

Steps to follow

- Include Leaflet CSS file in the head section of your document:
```html
 <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
     integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
     crossorigin=""/>
```
- Include Leaflet JavaScript file after Leaflet’s CSS:
```html
 <!-- Make sure you put this AFTER Leaflet's CSS -->
 <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
     integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM="
     crossorigin=""></script>
```

- Put a div element with a certain id where you want your map to be:
```html
<div id="map"></div>
<div id="weather">
    <h1 id="place"></h1>
    <div id="temperature-description"></div>
    <h2 id="temperature-degree"></h2>
    <div id="maxTemp"></div>
    <div id="minTemp"></div>
    <div id="windSpeed"></div>
</div>
```

- Make sure the map container has a defined height, for example by setting it in CSS:
```css
#map { height: 180px; }
```

- Initialize map
```javascript
const map = L.map('map').setView([51.505, -0.09], 13);
```

- Adding a tile layer
```javascript
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
```

### You must be able to see a map on your page

- Step 22: Let try to show full page india map

Increase the size of the map
```css
#map { height: 100vh; } /* vh = viewport height */
```

Change the coordinates as per the india map
```javascript
const map = L.map('map').setView([20.9716, 80.5946], 5);
```

- Step 23: Show weather data at right side of the page on top of map
```css
#weather {
    position: fixed;
    bottom: 100px;
    right: 200px;
    border-radius: 10px;
    opacity: .7;
    background-color: BLUE;
    border: 3px solid GREY;
}
```

- Step 24: Wrap this JavaScript code for creating Map in a function called drawMap

```javascript
function drawMap() {
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}
```

And Call this method Just after getting weather data

```javascript
if (navigator.geolocation) {
    navigator.getlocation.getCurrentPosition(async position => {
        const long = position.coords.longitude;
        const lat = position.coords.latitude;
        console.log('Lat : ' + lat + ' Long : ' + long);

        const weatherData = await getWeatherData(lat, long);

        console.log(weatherData);

        drawMap();
    })
}
```

- Step 25: Add marker to the map for current location
```javascript
if (navigator.geolocation) {
    navigator.getlocation.getCurrentPosition(async position => {
        const long = position.coords.longitude;
        const lat = position.coords.latitude;
        ...

        drawMap(lat, long, weatherData.name);
    })
}

function drawMap(lat, long, name) {
    var map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([lat, long]).addTo(map);
        marker.bindPopup(name).openPopup();

}
```

- Step 26: Add click event handler for map and get the lat long for the clicked place

```javascript
function drawMap(lat, long) {
    ...

    var marker = L.marker([lat, long]).addTo(map);
        marker.bindPopup(data.name).openPopup();

    map.on('click', function (e){
        console.log("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng)

    });

}

```
**Try clicking on the map to see the clicked place coordinates**

- Step 27: Now you have the coordinates of the place which you clicked on the map, try to get the weather data for these new coordinates

```javascript
function drawMap(lat, long, name) {
    ...

    var marker = L.marker([lat, long]).addTo(map);
        marker.bindPopup(name).openPopup();

    map.on('click', function (e){
        console.log("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng)

        const data = await getWeatherdata(e.latlng.lat, e.latlng.lng);

        // Draw the marker for the new place
        marker.setLatLng([e.latlng.lat, e.latlng.lng]);
        marker.bindPopup(data.name).openPopup();

    });
}
```
**Congratulations, you have complted the weather-app project**
