const http = require('http');
const hostname = '127.0.0.1';
const port = 3300;
const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('MinHyeok Park\n');
});
server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});