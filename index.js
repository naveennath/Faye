const http = require('http');
const faye = require('faye');

// Create a simple HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Faye WebSocket Server');
});

// Create a Faye instance attached to the HTTP server
const bayeux = new faye.NodeAdapter({ mount: '/faye', timeout: 45 });
bayeux.attach(server);

// Start the HTTP server
server.listen(8080, () => {
    console.log('Faye server is running on http://localhost:8080/faye');
});
