const http = require('http');
require('dotenv').config();


// Create a server object
http.createServer().listen(process.env.port, () => {
    console.log(`Server is running on port ${process.env.port}) `);
});