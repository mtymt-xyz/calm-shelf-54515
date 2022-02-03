require('newrelic');

const http = require('http');

function requestListener(_, response) {
    response.writeHead(200);
    response.end('');
}

const server = http.createServer(requestListener);

server.listen(8080);
