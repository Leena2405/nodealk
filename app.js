const functions = require("./functions")
const path = require("path");
const express = require("express");
const app = express();

const sample= () => 'proba funkcji';

const port = 3000;

app.set("view engine","hbs");
app.use("/assets", express.static(path.join(__dirname, "./assets")))
app.use("/js", express.static(path.join(__dirname, "./js")));

app.get("/", function(req,res){
    // res.send("Główna domena");
    res.render("index", {
        pageTitle: "zajęcia 14.02.2021",
        subTitle: functions.subtitle,
        subusubTitle: functions.sample()
    })
})

app.get("/about",function(req,res){
    // res.send("<h3>Strona o mnie</h3> <h6> Nazywam się Mieszko I </h6>");
    res.render("about")


})

app.listen(port, (err) => {
    if (err) { return console.log(`błąd ${err}`)}
    console.log(`serwer działa na porcie ${port}`)
})
