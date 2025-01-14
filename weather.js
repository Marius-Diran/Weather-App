const mainBody = document.querySelector('main-body');
const searchBtn = document.querySelector('.search-btn');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

searchBtn.addEventListener('click', () => {
  const APIkey = 'a85989d2ccc1b494920a4a9758266b73';
  const city = document.querySelector('.search-input').value;

  if (city == '')
    return;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`).then(response => response.json()).then(json => {
    const image = document.querySelector('.weather-img');
    const temperature = document.querySelector('.temp');
    const description = document.querySelector('.description');
    const humidity = document.querySelector('.humidity');
    const wind = document.querySelector('.wind-speed');

    switch (json.weather[0].main) {
      case 'Clear':
        image.src = 'images/clear.png';
        break;

      case 'Clouds': 
        image.src = 'images/cloud.png';
        break;

      case 'Rain':
        image.src = 'images/rain.png';
        break;

      case 'Snow':
        image.src = 'images/snow.png';
        break;

      case 'Mist':
        image.src = 'image/mist.png';
        break;

      case 'Haze':
        image.src = 'images/mist.png';
        break;

      default:
        image.src = 'images/cloud.png';
    }
  })
})