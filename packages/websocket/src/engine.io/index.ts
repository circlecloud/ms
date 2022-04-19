/**
 * Module dependencies.
 */

// const http = require("http")
// const Server = require("./server")
import { Server } from './server'

/**
 * Captures upgrade requests for a http.Server.
 *
 * @param {http.Server} server
 * @param {Object} options
 * @return {Server} engine server
 * @api public
 */

function attach(srv, options) {
    const engine = new Server(options)
    engine.attach(srv, options)
    return engine
}

export = {
    attach
}
