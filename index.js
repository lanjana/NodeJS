const os = require('os');
const path = require('path');
const fs = require('fs'); // readFileSync is syncronous method which readFile is asynchronous method.

const http = require('http');

const server = http.createServer((req, res)=>{

    res.write(req.url);
    res.end();
});

server.listen(3000);