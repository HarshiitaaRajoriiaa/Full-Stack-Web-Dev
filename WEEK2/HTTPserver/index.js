const express = require('express');
// This imports the Express module.Express is a Node.js framework that helps you easily create web servers.




const obj1 = express(); //define obj by which we use further use express() and it's provided function
const port = 3000;
// You are defining a port number.Your server will listen on port 3000. Port is like a door through which requests come in.

obj1.get('/routes', (req, res) => { //req  = request by user , res = response send by us
    res.json({
        name: "Harshita",
        age: 21,
        city: "Pune"
    });
});

obj1.get('/', (req, res) => {
    res.send("Hello, world! it's me Harshita");
});

obj1.get('/Display' , (req,res)=>{
    res.send("display");
});
// So when someone opens http://localhost:3000, they'll see:
//  "Hello, world! it's me Harshita"




obj1.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


