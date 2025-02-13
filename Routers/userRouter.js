const express = require('express');
const userRouter = require('./routers/userRouter');

const app = express();

const port = 5000;

// middleware
app.use('/user', userRouter);

// route or endpoint
app.get('/', (req, res) => {
    res.send('response from express');
});

app.post('/add', (req, res) => {
    res.send('response from add');
});

// getall
app.get('/getall', (req, res) => {
    res.send('response from getall');
});

// delete
app.get('/delete', (req, res) => {
    res.send('response from delete');
});

app.listen(port, () => {
    console.log('server started');
});