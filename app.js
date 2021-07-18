const express = require("express");

const bodyParser = require("body-parser");



const ejs = require("ejs");

const app = express();

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}



app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req,res)=>{
  res.render("home");
})
app.get("/about", (req,res)=>{
  res.render("about");
})
app.get("/donate",(req,res)=>{
  res.render("donate");
})

app.listen(port, (req,res)=>{
  console.log("SUP?");
})
