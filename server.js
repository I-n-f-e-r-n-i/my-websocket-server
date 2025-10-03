// server.js
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: process.env.PORT || 8080 });

wss.on('connection', ws => {
    console.log('Client connected');
    ws.on('message', message => {
        console.log('received: %s', message);
        ws.send('Hello from server');
    });
});
