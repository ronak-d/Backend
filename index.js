const express = require('express');
const app = express();

// rest api's => Representational State Transfer

//  Express always look for Methods + Route
// eg => get + /users

app.get("/users", function(req, res) {
    res.send({name:"Ronak ddeja"});
})

app.get("/student", function(req, res) {
    res.send({name:"Ron"});
})

app.listen(5000, ()=>{
    console.log("hey reaced and listening at http://localhost:5000");
})