// first helloworld in the browser with node

// link node's http module
var http = require('http');

// start a local web server
http.createServer(function(req, res) {

    // set the response code to ok
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    // display a message and end the response
    res.write('Hello World');
    res.end();

    // - OR - print and end in a single command
    //res.end('Hello World');
}).listen(3000);

// print a message to the command line
console.log('Server running at http://localhost:3000');