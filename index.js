const express = require('express');
const router = require('./router');
const mongoConnection = require('./mongo')
const cors = require('cors');
const bodyParser = require('body-parser')

const api = express();
const port = 3000;

api.listen(port, ()=>{
    console.log('port is running successfully');
});
api.use(cors())

api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json())

api.use(express.json());
api.use('/api', router);

mongoConnection();

