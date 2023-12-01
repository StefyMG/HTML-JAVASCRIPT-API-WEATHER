
fetch('https://goweather.herokuapp.com/weather/Villavicencio')
.then(Response => Response.json())
.then(data => {
    console.log('La temperatura es: ',data.temperature)
    console.log('El viento es: ',data.wind)
})

