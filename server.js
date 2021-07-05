const express = require('express');

const log = console.log;
const app = express();
const path = require('path');
const PORT = process.env.port||8080;

app.use(express.static(__dirname + "/public"))

app.get('/', function(req, res) {
    res.send("index");
    //__dirname : It will resolve to your project folder.
});

app.listen(PORT, function(){
    log('app running');
});