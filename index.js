const express = require('express');
const https = require('https');
const path = require('path')
const fs = require('fs')
const server = express();
const dataBase = require('./src/dataBase/dataBase');
const cors = require("cors");
const router = require('./src/routes/index');
const bodyParser = require('body-parser');


server.use(express.json());
server.use(cors());
server.use(bodyParser.urlencoded({extended: true}));;
server.use(bodyParser.json());
server.use(router);

// server.listen(3000, () => {
//     dataBase.sync({force: false});
//     console.log('Listen on port 3000');
// });
const sslServer = https.createServer({
    key: fs.readFileSync(path.join(__dirname, 'cert','key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert','cert.pem'))
},server)
sslServer.listen(3000, () => {
        dataBase.sync({force: false});
        console.log('Listen on port 3000');
    })