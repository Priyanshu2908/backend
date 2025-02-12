const express = require('express');

const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello World!');
    });

app.get('/about', (req, res) => {
    res.send('About Us');
    });

    //getall
app.get('/getall', (req, res) => {
    res.send('Get All');
    });

    //delete
app.get('/delete', (req, res) => {
    res.send('Delete');
    });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});