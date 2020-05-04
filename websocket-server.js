const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: process.env.WS_PORT });

wss.on('connection', ws => {
    console.log('Connection established');

    ws.send(JSON.stringify({
        user: 'server',
        message: 'Welcome!'
    }));

    ws.on('message', message => {
        console.log('Received message: ', message);
        ws.send(message)
    });

    ws.on('close', () => {
        console.log('Connection closed by client');
    });
});

wss.on('error', error => {
    console.log('Error', error)
});