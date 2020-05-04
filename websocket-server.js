const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: process.env.WS_PORT });

wss.on('connection', ws => {
    console.log('Connection established');

    ws.send(JSON.stringify({
        user: 'server',
        message: 'Welcome!'
    }));

    ws.on('message', event => {
        console.log('Received message: ', event);

        wss.clients.forEach(client => {
            if(client.readyState === WebSocket.OPEN)
                client.send(event);
        });
    });

    ws.on('close', () => {
        console.log('Connection closed by client');
    });
});

wss.on('error', error => {
    console.log('Error', error)
});