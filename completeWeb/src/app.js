const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
// const port = process.evn.PORT || 3000;

hbs.registerPartials(path.join(__dirname, "../partials"));
// console.log(path.join(__dirname, "../partials"));


app.set("view engine", "hbs");
// console.log(app.get("view engine"));

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
    res.render("index", {
        title: "Prince HomePage"
    });
})

app.get("/about", (req, res) => {
    res.render("aboutpg",{
        prince:"Prince Title"
    });
})

app.get("/weather", (req, res) => {
    res.render("weather");
})


app.get("*", (req, res) => {
    res.render("404",{
        errormssg:"Oops!! Page not Found"
    });
})


app.listen(8000, () => {
    console.log("listening to 8000");
})