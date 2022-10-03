const http = require('http');
const app = require('./app/app');
require('dotenv').config();



// Create a server object
http.createServer(app).listen(process.env.port, () => {
    console.log(`Server is running on port ${process.env.port}) `);
});

