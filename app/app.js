const express = require('express');
const router = require('../router/router');
const app = express();


//middleware
app.use(express.json());


//default service call (actuaor)
app.get('/', (req, res) => {
    res.status(200).send('Welcome to the default service call');
});

//routes
// Localhost:3000
app.use("/example", router);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
            status: error.status,

        }
    });
});

//export app
module.exports = app;