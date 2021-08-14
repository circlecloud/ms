import { Socket } from './socket'

export default (uri, opts) => new Socket(uri, opts)

/**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */
const protocol = Socket.protocol // this is an int
export { Socket, protocol }
// module.exports.Transport = require("./transport")
// module.exports.transports = require("./transports/index")
// module.exports.parser = require("../engine.io-parser")
export * from './transport'
export * from './transports/index'
export * from '../engine.io-parser'
