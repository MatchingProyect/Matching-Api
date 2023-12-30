const express = require('express');
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

server.listen(3000, () => {
    dataBase.sync({force: false});
    console.log('Listen on port 3000');
});