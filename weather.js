const mainBody = document.querySelector('.main-body');
const searchBtn = document.querySelector('.search-btn');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const searchInput = document.querySelector('.search-input');
const error404 = document.querySelector('.error-box')

searchBtn.addEventListener('click', () => {
  performSearch();
});

searchInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    performSearch();
  }
});

function performSearch() {
  const APIkey = 'a85989d2ccc1b494920a4a9758266b73';
  const city = searchInput.value;

  if (city.trim() === '') {
    console.log('City input is empty');
    error404.classList.remove('hidden');
    error404.classList.add('active');
    weatherBox.classList.add('hidden');
    weatherBox.classList.remove('active');
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(json => {
      console.log('API response:', json);
      if (json.cod === '404') {
        console.log('City not found');
        error404.classList.remove('hidden');
        error404.classList.add('active');
        weatherBox.classList.add('hidden');
        weatherBox.classList.remove('active');
        return;
      }

      error404.classList.add('hidden');
      error404.classList.remove('active');
      weatherBox.classList.remove('hidden');
      weatherBox.classList.add('active');

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
          image.src = 'images/mist.png';
          break;

        case 'Haze':
          image.src = 'images/mist.png';
          break;

        default:
          image.src = 'images/cloud.png';
      }

      temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
      description.innerHTML = `${json.weather[0].description}`.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
      error404.classList.remove('hidden');
      error404.classList.add('active');
      weatherBox.classList.add('hidden');
      weatherBox.classList.remove('active');
    });
}