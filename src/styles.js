function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone == "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city" data-city="${cityTimeZone}">
        <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
    <div class="time">${cityTime.format("h:mm:ss")}<small> ${cityTime.format("A")}</small></div>
    </div>
    <a href="/">Take me back</a>`;
}

function updateTime() {
    const cities = document.querySelector('#cities')
    const allCities = cities.querySelectorAll('.city')

    allCities.forEach((city) => {
        console.log(city)
        const getTime = moment().tz(city.dataset.city)
        const date = city.querySelector('.date')
        const time = city.querySelector('.time')
        date.innerHTML = getTime.format('MMM Do YYYY')
        time.innerHTML = getTime.format('h:mm:ss[<small>] A[</small>]')
    })
}

updateTime()  
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);