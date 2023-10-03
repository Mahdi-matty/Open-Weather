let cityLocal;
let posLat;
let postLng;
let pastCities = [];
function getLat() {
    let cityName = document.querySelector("#latCity").value;
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=26f0afb86e9cf6226ab49ee5e767a358`)
    .then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
        posLat = data[0].lat;
        postLng = data[0].lon;
        pastCities.push(cityName);
        localStorage.setItem("cities", JSON.stringify(pastCities));
        unList = document.querySelector("ul");
        unList.innerHTML="";
            pastCities.forEach(function(city){
                var listI = document.createElement("li");
                listI.textContent= city;
                listI.addEventListener("click", function() {
                    document.querySelector("#latCity").value=city;
                    getLat();
                });unList.appendChild(listI);
            })
                
            

        
        getWeather();
        
        
    })
}

function getWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${posLat}&lon=${postLng}&appid=26f0afb86e9cf6226ab49ee5e767a358`)
    .then (function(response) {
        return response.json();
    }).then (function(data){
        console.log(data)
        document.querySelector("#fourthCrap").textContent = data.list[0].main.temp;
        document.querySelector("#secondCrap").textContent = data.list[0].main.humidity;
        document.querySelector("#thirdCrap").textContent=data.list[0].wind.speed;
        document.querySelector("#firstCrap").textContent=data.city.name;
        document.querySelector("#fourthCrap").textContent=data.list[0].dt_txt;
        let weatherIcon = data.list[0].weather[0].icon;
        let fifthCrap =document.querySelector("#fifthCrap");
        let iconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`
        fifthCrap.src= iconUrl;
        document.querySelector("#firstTom").textContent=data.list[2].dt_txt;
        let secondTom =document.querySelector("#secondTom");
        let weatherIcomTom =data.list[2].weather[0].icon;
        let iconUrlTom = `https://openweathermap.org/img/wn/${weatherIcomTom}@2x.png`;
        secondTom.src= iconUrlTom;
        document.querySelector("#thirdTom").textContent= data.list[2].main.temp;
        document.querySelector("#fourthTom").textContent= data.list[2].wind.speed;
        document.querySelector("#fifthTom").textContent-=data.list[2].main.humidity;
        document.querySelector("#firstThird").textContent=data.list[10].dt_txt;
        let secondThird =document.querySelector("#secondThird");
        let weatherIcomThird =data.list[10].weather[0].icon;
        let iconUrlThird = `https://openweathermap.org/img/wn/${weatherIcomThird}@2x.png`;
        secondThird.src= iconUrlThird;
        document.querySelector("#thirdThird").textContent= data.list[10].main.temp;
        document.querySelector("#fourthThird").textContent= data.list[10].wind.speed;
        document.querySelector("#fifthThird").textContent-=data.list[10].main.humidity;
        document.querySelector("#firstFourth").textContent=data.list[18].dt_txt;
        let secondFourth =document.querySelector("#secondFourth");
        let weatherIcomFourth =data.list[18].weather[0].icon;
        let iconUrlFourth = `https://openweathermap.org/img/wn/${weatherIcomFourth}@2x.png`;
        secondFourth.src= iconUrlFourth;
        document.querySelector("#thirdFourth").textContent= data.list[18].main.temp;
        document.querySelector("#fourthFourth").textContent= data.list[18].wind.speed;
        document.querySelector("#fifthFourth").textContent-=data.list[18].main.humidity;
        document.querySelector("#firstFifth").textContent=data.list[26].dt_txt;
        let secondFifth =document.querySelector("#secondFifth");
        let weatherIcomFifth =data.list[26].weather[0].icon;
        let iconUrlFifth = `https://openweathermap.org/img/wn/${weatherIcomFifth}@2x.png`;
        secondFifth.src= iconUrlFifth;
        document.querySelector("#thirdFifth").textContent= data.list[26].main.temp;
        document.querySelector("#fourthFifth").textContent= data.list[26].wind.speed;
        document.querySelector("#fifthFifth").textContent-=data.list[26].main.humidity;
        document.querySelector("#firstSix").textContent=data.list[34].dt_txt;
        let secondSix =document.querySelector("#secondFifth");
        let weatherIcomSix =data.list[34].weather[0].icon;
        let iconUrlSix = `https://openweathermap.org/img/wn/${weatherIcomSix}@2x.png`;
        secondSix.src= iconUrlSix;
        document.querySelector("#thirdSix").textContent= data.list[34].main.temp;
        document.querySelector("#fourthSix").textContent= data.list[34].wind.speed;
        document.querySelector("#fifthSix").textContent-=data.list[34].main.humidity;

    }) .catch(function(error) {
        console.error('Error:', error);})
}
document.querySelector("#citySearch").addEventListener("click", getLat)


