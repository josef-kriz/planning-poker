const http          = require('http');
const axios         = require('axios').default;
const express       = require('express');
const cors          = require('cors');
const { Server }    = require('socket.io');

const app           = express();
const server        = http.createServer(app);
const io            = new Server(server);

const AUTH_TOKEN    = 'NDUxOTE2MjgwODQ1OicIqKRctcS0OPq/BZmuxHxER1Pk';
const BASE_URL      = 'https://jira.eg.dk/rest/tests/1.0/';
const UI_BUILD      = __dirname + '/../../client/dist/index.html';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`;


app.get('/', (req, res) => {
    res.sendFile(UI_BUILD);
});

io.on('connection', (socket) => {
    console.log('a user connected');
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
