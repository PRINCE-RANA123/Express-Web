const http = require("http");
const fs = require("fs");
const requests = require("requests");

const homeFile = fs.readFileSync("./home.html", "utf-8");

const replaceVal = (tempVal, orgval)=>{
    let temperature = tempVal.replace("{%tempval%}",orgval.main.temp);
    temperature = temperature.replace("{%tempmin%}",orgval.main.temp_min);
    temperature = temperature.replace("{%tempmax%}",orgval.main.temp_max);
    temperature = temperature.replace("{%location%}",orgval.name);
    temperature = temperature.replace("{%country%}",orgval.sys.country);
    temperature = temperature.replace("{%tempstatus%}",orgval.weather[0].main);
    return temperature;
}

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        requests("https://api.openweathermap.org/data/2.5/weather?q=kathmandu&appid=1d3ad68d46c821b2382d6ce05aa9b9b8")
        .on('data', function (chunk) {
            const objdata = JSON.parse(chunk);
            const arrData = [objdata];
            const realTimeData = arrData.map((val)=>replaceVal(homeFile,val)).join("");
            // console.log(realTimeData);
            
            res.write(realTimeData);
            // console.log((Math.floor(arrData[0].main.temp)-273));
            // res.end();
        })
        .on('end', function (err) {
          if (err) return console.log('connection closed due to errors', err);
         res.end();
          
        });
    }
});

server.listen(8000, () => {
    console.log("Listening 8000");
})