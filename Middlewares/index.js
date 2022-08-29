const express = require('express');
const app = express();

//  Express always look for Methods + Route
// eg => get + /users

app.use(middlewares1)    // USE is for middlewares as this comes in action execution of code goes to 
app.use(middlewares2)    // line no.17 via ignoring all the code written before middlewares function.

app.get("/users",(req,res) => {
    console.log("Iam working after middlewares, and arrow function will not be executed");
    return res.send("hello ronapp")
})

// Middlewares are like brokers we can say they can alter the REQUEST or RESPONSE.
// accepts 3 props - REQ,RES,NEXT.

function middlewares1(req, res, next) {
    console.log("First middleware are running");
    next();     // this next() will give execution of code just after whrere middlewares() app.USE called.
    console.log('middleOne over')   // line no.9 to 12.
}

function middlewares2(req, res, next) {
    console.log("Second middleware are running");
    next();     // this next() will give execution of code just after whrere middlewares() app.USE called.
    console.log('middleTwo over');
}



// to listen the server on the browser
app.listen(3000, ()=>{
    console.log("listening on port 3000")
});


// think this all in the execution context output will be like this;

// First middleware are running
// Second middleware are running       
// Iam working after middlewares and arrow function will not be executed   
// middleTwo over
// middleOne over