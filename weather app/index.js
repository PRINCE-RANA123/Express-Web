// api.openweathermap.org/data/2.5/weather?q={Pune}&appid={1d3ad68d46c821b2382d6ce05aa9b9b8}
const curDate = document.getElementById("date");
const weatherCon = document.getElementById("weathercon");

const tempStatus = "{{tempstatus}}";

if(tempStatus == "Sunny"){
    weatherCon.innerHTML =  "<i class='fas fa-sun' style='color:#eccc68'></i>";
}
else if(tempStatus == "Clouds"){
    weatherCon.innerHTML =  "<i class='fas fa-cloud' style='color:#f1f2f5'></i>"
}
else if(tempStatus == "Rainy"){
    weatherCon.innerHTML =  "<i class='fas fa-cloud-rain' style='color:#a4b0be'></i>"
}
else{
    weatherCon.innerHTML =  "<i class='fas fa-cloud' style='color:#44c3de'></i>"
}

const getCurrentDay = () => {
    let currentTime = new Date();
    var weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day= weekday[currentTime.getDay()];
    return day;
};


const getCurrentTime = () => {
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

    let now = new Date();
    var date = now.getDate();
    var month = months[now.getMonth()];

    let hours = now.getHours();
    let mins = now.getMinutes();

    let period = "AM";

    if (hours > 11) {
        period = "PM";
        if (hours > 12) {
            hours = hours - 12;
        }
    }

    if (mins < 10) {
        mins = "0" + mins;
    }

    return `${month} ${date} | ${hours}:${mins}${period}`;

    // console.log(date + " | " + month + " | " + hours + ":" + mins + period);
}

curDate.innerHTML = getCurrentDay() + " | " + getCurrentTime();

// getCurrentDay();
// getCurrentTime();