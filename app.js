const express = require("express");

const app = express();
app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.use(express.static("public"));

app.listen(process.env.PORT || 3000, function(req,res){
    console.log("server is running")
});