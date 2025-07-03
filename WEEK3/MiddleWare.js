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



// another way 
const express = require("express");
const usernameValidation = (username, password) => {
    return username === 'Harshita' && password === 'Har02';
};

const idValidator = (id) => {
    return id === '1' || id === '2';
};

const firsttest = express();
firsttest.get("/kidney-test" , (req,res)=>{
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

