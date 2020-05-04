const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: process.env.WS_PORT });

wss.on('connection', ws => {
    console.log('Connection established');

    ws.on('error', () => {
        console.log('Error')
    });

    ws.on('close', () => {
        console.log('Connection closed by client');
    });
});