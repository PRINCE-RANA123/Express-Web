const city_name = document.getElementById("city_name");
const cityName = document.getElementById("cityname");
const submitBtn = document.getElementById("submitBtn");
const temp_status = document.getElementById("temp_status");
const temp = document.getElementById("temp");
const dataHide = document.querySelector('.middle_layer');
const day = document.getElementById("day");
today_date= document.getElementById('today_date');

dataHide.classList.add('data_hide');


//function defination
const getCurrentDay = () => {
    let currentTime = new Date();
    var weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day= weekday[currentTime.getDay()];
    return day;
};

const getCurrentDate = ()=>{
    let current = new Date();
    let date = current.getDate();
    return date;
}

const getCurMonth = ()=>{
    var months = new Array();
    months[0] = "Jan";
    months[1] = "Feb";
    months[2] = "Mar";
    months[3] = "Apr";
    months[4] = "May";
    months[5] = "Jun";
    months[6] = "Jul";
    months[7] = "Aug";
    months[8] = "Sep";
    months[9] = "Oct";
    months[10] = "Nov";
    months[11] = "Dec";
    let cur = new Date();
    let month = months[cur.getMonth()];
    return month;
}

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = "Please type a city name !!";
    } else {

        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=1d3ad68d46c821b2382d6ce05aa9b9b8`;
            const response = await fetch(url);            
            const data = await response.json();            
            const arrData = [data];
            city_name.innerText= `${arrData[0].name}, ${arrData[0].sys.country}`;            
            temp.innerText = arrData[0].main.temp;
            // temp_status.innerText = arrData[0].weather[0].main;

            //condition to check favicon
            const tempMood = arrData[0].weather[0].main;
            if(tempMood == "Clear"){
                temp_status.innerHTML = "<i class='fa fa-sun' style='color:#eccc68;'></i>";
            }
            else if(tempMood=="Clouds"){
                temp_status.innerHTML = "<i class='fa fa-cloud' style='color:#1f2f6;'></i>"
            }
            else if(tempMood=="Rain"){
                temp_status.innerHTML = "<i class='fa fa-rain' style='color:#a4b0be;'></i>"
            }
            else{
                temp_status.innerHTML = "<i class='fa fa-cloud' style='color:#f1f2f6;'></i>"
            }


            dataHide.classList.remove('data_hide');

        }
        catch{
            city_name.innerText = "Please type city name correctly  !!";
            dataHide.classList.add('data_hide');
        }

    }
};

submitBtn.addEventListener("click", getInfo);

day.innerText = getCurrentDay();
today_date.innerText = `${getCurrentDate()}|${getCurMonth()}` ;