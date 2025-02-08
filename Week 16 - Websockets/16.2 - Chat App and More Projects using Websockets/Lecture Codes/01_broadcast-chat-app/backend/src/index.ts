import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8081 });

let userCount: number = 0;
let allSockets: WebSocket[] = [];

wss.on("connection", (socket) => {
    allSockets.push(socket);

    userCount = userCount + 1;
    console.log("User connected #" + userCount);

    socket.on("message", (message) => {
        console.log("Message Received: " + message.toString());

        for(let i = 0; i < allSockets.length; i++) {
            const s = allSockets[i];
            s.send(message.toString() + ": sent from the server");
        }

        // setTimeout(() => {
        //     socket.send(message.toString() + ": sent from the server");
        // }, 1000);
    });
});
