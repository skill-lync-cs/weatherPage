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
        <span id="result"></span>
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

- Step 6: Try to give margin to all the span elements
```css
span{
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

- Step 13: Importance of Developer tools and console.log()

- Step 14: Functions in JavaScript
    - Function Decalration
    ```javascript
    function add(a, b) {
        return a + b;
    }
    ```
    - Function Expression
    ```javascript
    const add = function(a,b) {
        return a + b;
    }
    ```
    - Arrow function
    ```javascript
    const add = (a,b) => a + b;
    ```
    How do you call a function
    ```javascript
    const c = add(4,5);
    console.log(c);
    ```

- Step 15: Adding delay in function call
```javascript
setTimeout(() => {
    console.log('I am going to be called after 5 seconds');
}, 5000)
```

- Step 16: Function as a first class citizen and Higher Order Function

*When a function can be passed as a normal argument just like number or string*

Example: In setTimeout a function is passed for later use. The passed function is called callback function, and the function which can accept another function as an argument is called Higher Order Function.

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

- Step 17: Create another project in codesandbox and try to get the current latitude and longitude
```javascript
if (navigator.geolocation) {
    navigator.getlocation.getCurrentPosition(position => {
        const long = position.coords.longitude;
        const lat = position.coords.latitude;
        console.log('Lat : ' + lat + ' Long : ' + long);
    })
}
```

- Step 18: understanding what is API

An API, or Application Programming Interface, is a way for different software programs to communicate with each other. Think of it like a waiter in a restaurant. Just like a waiter takes your order and brings your food to you, an API is a middleman that takes a request from a program and returns the desired information or service.

For example, let's say you use a weather app on your phone to check the forecast. The app doesn't make the weather forecast itself, but it uses an API to request the forecast from a weather service. The API acts as a translator, taking the request from the app and sending it to the weather service. The service then sends the forecast data back to the API, which in turn sends it back to the app to display on your screen.

- Step 19: Search for weather API over the internet and use the fetch function to get the weather data

```javascript

if (navigator.geolocation) {
    navigator.getlocation.getCurrentPosition(position => {
        const long = position.coords.longitude;
        const lat = position.coords.latitude;
        console.log('Lat : ' + lat + ' Long : ' + long);

        const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=ddfaba4398b491fa4ef3e29a5e934c6e`;

        let response = await fetch(api);
        let data = await response.json();

        console.log(data);
    })
}

```

- Step 20: Seperate the functionality for fetching weather data into sepearate function

```javascript
if (navigator.geolocation) {
    navigator.getlocation.getCurrentPosition(position => {
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

- Step 21: Render weather data on HTML

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
    const temp = data.main;
    const description = data.weather[0];
    const icon = data.weather[0];
    const temp_max = data.main;
    const temp_min = data.main;
    const speed = data.wind;

    const temperatureDescription = document.querySelector("#temperature-description");
    const temperatureDegree = document.querySelector("#temperature-degree");
    const locationTimezone = document.querySelector("#location-timezone");
    const maxTemperature = document.querySelector("#maxTemp");
    const minTemperature = document.querySelector("#minTemp");
    const windSpeed = document.querySelector("#windSpeed")


    temperatureDegree.textContent = temp + '\xB0' + ' C';
    temperatureDescription.textContent = description;
    locationTimezone.textContent = data.name;
    maxTemperature.textContent = 'Max: ' + temp_max + '\xB0' + ' C';
    minTemperature.textContent = 'Min: ' + temp_min + '\xB0' + ' C';
    windSpeed.textContent = 'Wind Speed: ' + speed + ' m/s';
}
```

# Day 2

