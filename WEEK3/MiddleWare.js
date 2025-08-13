// const express = require("express");
// const obj1 = express;
// obj1.get('/health-checkup' , (req,res)=>{
//     res.send("You are all set for next round")
// });
//above code simply checking the  patient one by one .


//! but we need pre authentications of users which called MIDDLEWARES.
//*1. User Authentication (login| username-password | DATABASE)
//*2. Ensure Input : whether user using right input to access any logic written in backend

//? let's add constraints to our route - before this logic we user need to pass kidney_id as parameter either 1 or 2, and user should send username password in headers.
//ugly way

const express = require("express");
const health = express();

health.get("/healthy-heart-checkup", (req, res) => {
    const id = req.query.id; //
    const user = req.headers.user;
    const password = req.headers.password;

    if (user !== 'Harshita' || password !== "Har02") {
        res.status(404).json({
            msg: "invalid username | password"
        });
        return;
    }

    if (id !== '1' && id !== '2') {
        res.status(411).json({
            msg: "invalid id"
        });
        return;
    }

    //  Only one final response
    res.send("✅ done with verification, your heart is healthy");
});

health.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});



//! another way = optimized way than above: 
const express = require("express");

//functions used for validation
const usernameValidation = (username, password) => {
    return username === 'Harshita' && password === 'Har02';
};

const idValidator = (id) => {
    return id === '1' || id === '2';
};

const firsttest = express();
firsttest.get("/kidney-test", (req, res) => {
    const id = req.query.id;
    const user = req.headers.user;
    const pass = req.headers.pass;


    if (!usernameValidation(user, pass)) {
        res.status(404).json({
            msg: "Incorrect username | password"
        });
        return;
    }

    if (!idValidator(id)) {
        res.status(414).json({
            msg: "Incorrect ID"
        });
        return;
    }

    res.send("correct input, clean for second test")
})

firsttest.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});





const secondtest = express();
secondtest.get("/replace-kidney", (req, res) => {
    const id = req.query.id;
    const user = req.headers.user;
    const pass = req.headers.pass;

    if (!usernameValidation(user, pass)) {
        res.status(404).send("Invalid username | password");
        return;
    }

    if (!idValidator(id)) {
        res.status(411).send("Invalid ID");
        return;
    }

    res.send("✅ Clean for kidney replacement");
});

secondtest.listen(2000, () => {
    console.log("Server running on http://localhost:2000");
});




//todo using middlewares:
//express let you chain the pre check functions one by one and pass the result to next 
// function = (req, res, next)=>{

// },next();
// .. so on


const obj3 = express();
function userMiddleWares(req, res, next) {
    const user = req.headers.user;
    const pass = req.headers.pass;
    if (user != "Harshita" && pass != "Har02") {
        res.status(403).json({
            msg: "Incorrect Password"
        })
    }
    else {
        next();
    }
}

function idMiddleWare(req, res, next) {
    const id = req.query.id;
    if (id != "1" || id != "2") {
        res.status(403).json({
            msg: "Incorrect id"
        })
    }
    else {
        next();
    }
}


obj3.use(userMiddleware);
// Middleware runs for every route in your app (like /, /login, /about, etc.)



//Middlewares run only for that specific route (/kidney-checkup)
obj3.get("/kidney-checkup" , userMiddleWares , idMiddleWare , (req,res)=>{
    res.send("kidney check up done");
})



// express.json() is a middleware that converts it into a usable JavaScript object inside req.body.
obj3.use(express.json()); // add this once at the top

obj3.post("/data", (req, res) => {
  console.log(req.body); // ✅ { name: "Harshita", age: 21 }
});


obj3.listen(2000 , ()=>{
    console.log("server running on host 2000"    );
})




//? FIND THE AVERAGE TIME TO HANDLE ONE REQUEST:
//todo it after some time-


const express = require('express');
const app = express();

let totalTime = 0;
let requestCount = 0;

app.use((req, res, next) => {
  const start = Date.now();

  // When the response finishes, calculate duration
  res.on('finish', () => {
    const duration = Date.now() - start;
    totalTime += duration;
    requestCount++;
    console.log(`Request took ${duration}ms`);
  });

  next();
});

app.get('/', (req, res) => {
  setTimeout(() => { // simulate delay
    res.send("Hello!");
  }, Math.floor(Math.random() * 100)); // delay 0–100ms
});

app.get('/average-time', (req, res) => {
  if (requestCount === 0) {
    return res.send("No requests yet!");
  }
  const average = totalTime / requestCount;
  res.send(`Average time to handle one request: ${average.toFixed(2)} ms`);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
