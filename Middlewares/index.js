const express = require('express');
const app = express();

//  Express always look for Methods + Route
// eg => get + /users

app.use(middlewares)    // USE is for middlewares as this comes in action execution of code goes to 
                        // line no.17 via ignoring all the code written before middlewares function.

app.get("ronapp",(req,res) => {
    return res.send("hello ronapp")
})

// Middlewares are like brokers we can say they can alter the REQUEST or RESPONSE.
// accepts 3 props - REQ,RES,NEXT.

function middlewares(req, res, next) {
    console.log("middleware are running");
    next();     // this next() will give execution of code just after whrere middlewares() app.USE called.
                // line no.9 to 12.
}