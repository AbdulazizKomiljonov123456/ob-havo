const input = document.querySelector('.weather__input'),
      degree = document.querySelector('.weather__degree'),
      dayText = document.querySelector('.weather__days'),
      monthText = document.querySelector('.weather__months'),
      day = document.querySelector('.weather__day'),
      month = document.querySelector('.weather__month'),
      year = document.querySelector('.weather__year'),
      city = document.querySelector('.weather__city'),
      country = document.querySelector('.weather__country'),
      humidity = document.querySelector('.weather__humidity span'),
      wind = document.querySelector('.weather__wind span'),
      rain = document.querySelector('.weather__rain span'),
      feel = document.querySelector('.weather__feel span'),
      pressure = document.querySelector('.weather__rain span');
      
const API_KEY = 'fbe4bf845d6e16c8cbded244c6df65df',
      API_URL = 'https://api.openweathermap.org/data/2.5/weather?q='
      input.addEventListener('keypress', function answer(e) {
          if (e.keyCode == 13) {
            info(input.value);
          }
      })
      
      function info(el) {
        fetch(`${API_URL}${el}&appid=${API_KEY}`)
        .then((obj)=> obj.json())
        .then((data)=> {
          console.log(data);
          degree.innerHTML = Math.round ((data.main.temp - 273.15)) + '°C'
          city.innerHTML = data.name
          country.innerHTML = data.sys.country
          humidity.innerHTML = data.main.humidity + '  %'
          wind.innerHTML = data.wind.speed + '  s/m'
          pressure.innerHTML = data.main.pressure + '  p'
          feel.innerHTML = data.main.feels_like + '  %'
        })
      }
      
      
      function date() {
        let time = new Date()
        day.innerHTML = time.getDate()
        month.innerHTML = time.getMonth() + 1
        year.innerHTML = time.getFullYear()
        let days = ['SUN','MON','TUE','WEN','THUR','FRI','SUT',]
        let months = ['Jan','Feb','March','April','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec',]
        dayText.innerHTML = days[time.getDate()]
      monthText.innerHTML = months[time.getMonth()]
      }