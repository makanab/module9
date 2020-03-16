//webserver.js
// load module 

const http = require('http');
//add express middleware
const app = require('./serverside/app');

// create a new instance of http.server 
//Reference https://nodejs.org/api/http.html#http_http_createserver_options_requestlistener

const server = http.createServer(app);

/* process.env.PORT||8000 config description not given if used we are likely to get
  error: Process.env.PORT||8000 is not define 
  alternatively we can tell the server to listen on port 8000 directly */

server.listen(8000);
console.log('server running on port 8000');