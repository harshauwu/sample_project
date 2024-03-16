import App from '../app';
import debug from 'debug';
import * as http from 'http';
import config from "../configs/config";

debug('ts-express:server');


/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: string) {
    const _port = parseInt(val, 10);

    if (isNaN(_port)) {
        // named pipe
        return val;
    }

    if (_port >= 0) {
        // port number
        return _port;
    }

    return false;
}

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(config.port);
App.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(App);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

export default server;


/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: any) {
    console.log(error)
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.log(error)
            // process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    const addr: any = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
    console.log('Server listening on port : ' + addr.port);
}