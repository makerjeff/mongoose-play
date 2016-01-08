/**
 * WebSocket Server Test 00
 * Following Lynda Tutorial
 * Created by jefferson.wu on 1/7/16.
 */

var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 3000});

console.log('WebSocketServer Started on port 3000');

wss.on('connection', function(ws){
    console.log('A user connected!');

    ws.on('message', function(message){
        //add listeners here
        if(message === 'exit') {
            ws.close();
        }
        else {
            wss.clients.forEach(function(client){
                client.send(message);
            });
        }
    });

    ws.send('Welcome to cyber chat');
});

//wss.on('disconnect', function(ws){
//    console.log(ws.id + ' has disconnected.');
//});