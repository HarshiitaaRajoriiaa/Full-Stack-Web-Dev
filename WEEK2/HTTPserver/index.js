const express = require('express');
const app = express();
const port = 3000;

app.get('/routes', (req, res) => {
    res.json({
        name: "Harshita",
        age: 21,
        city: "Pune"
    });
});

app.get('/', (req, res) => {
    res.send("Hello, world! it's me Harshita");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
