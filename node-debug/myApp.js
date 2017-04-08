const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    debugger;
    res.send('Hey, it works');
});

app.listen((PORT), () => console.log(`Server is up on ${PORT}, welcome`));