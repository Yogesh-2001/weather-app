const value = document.getElementById('submit');
const city = document.getElementById('city');
const cityname = document.getElementById('cityname');
const degree = document.getElementById('degree');
const icon  = document.getElementById('icon');
const  getInfo = async(event)=>{
event.preventDefault();
if(city.value==='')
{
     cityname.innerHTML = `Please enter city name`;
}else{
try{
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=3959f10e63616528157c8bf2669444fa`);
    const data = await response.json();
    console.log(data);
    if(data.weather[0].main==='Clouds'){
       icon.innerHTML = `<i class="fas fa-cloud"></i>`;
    }else if(data.weather[0].main==='Haze'){
        icon.innerHTML=`<i class="fas fa-cloud-sun"></i>`;
    }else{
        icon.innerHTML=`<i class="fas fa-cloud-rain"></i>`;
    }
    cityname.innerHTML = `${data.name}, ${data.sys.country}`;
    degree.innerHTML = `${data.main.temp}°C`;
}catch{
    cityname.innerHTML = `Please enter city name properly`;
}

}


}
value.addEventListener('click',getInfo);


