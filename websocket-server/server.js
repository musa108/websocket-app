const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

const events = ["event1", "event2", "event3", "event4", "event5"];

wss.on("connection", (ws) => {
    console.log("Client connected");

    setInterval(() => {
        const event = events[Math.floor(Math.random() * events.length)];
        ws.send(JSON.stringify({ type: event, payload: `Message for ${event}` }));
    }, 1000);

    ws.on("close", () => {
        console.log("Client disconnected");
    });
});
