import EventEmitter = require("events")
import { deconstructPacket, reconstructPacket } from "./binary"
import { isBinary, hasBinary } from "./is-binary"

// const debug = require("debug")("socket.io-parser")

/**
 * Protocol version.
 *
 * @public
 */

export const protocol: number = 5

export enum PacketType {
    CONNECT,
    DISCONNECT,
    EVENT,
    ACK,
    CONNECT_ERROR,
    BINARY_EVENT,
    BINARY_ACK,
}

export interface Packet {
    type: PacketType
    nsp: string
    data?: any
    id?: number
    attachments?: number
}

/**
 * A socket.io Encoder instance
 */

export class Encoder {
    /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param {Object} obj - packet object
     */
    public encode(obj: Packet) {
        console.trace("encoding packet", JSON.stringify(obj))

        if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
            if (hasBinary(obj)) {
                obj.type =
                    obj.type === PacketType.EVENT
                        ? PacketType.BINARY_EVENT
                        : PacketType.BINARY_ACK
                return this.encodeAsBinary(obj)
            }
        }
        return [this.encodeAsString(obj)]
    }

    /**
     * Encode packet as string.
     */

    private encodeAsString(obj: Packet) {
        // first is type
        let str = "" + obj.type

        // attachments if we have them
        if (
            obj.type === PacketType.BINARY_EVENT ||
            obj.type === PacketType.BINARY_ACK
        ) {
            str += obj.attachments + "-"
        }

        // if we have a namespace other than `/`
        // we append it followed by a comma `,`
        if (obj.nsp && "/" !== obj.nsp) {
            str += obj.nsp + ","
        }

        // immediately followed by the id
        if (null != obj.id) {
            str += obj.id
        }

        // json data
        if (null != obj.data) {
            str += JSON.stringify(obj.data)
        }

        console.trace("encoded", JSON.stringify(obj), "as", str)
        return str
    }

    /**
     * Encode packet as 'buffer sequence' by removing blobs, and
     * deconstructing packet into object with placeholders and
     * a list of buffers.
     */

    private encodeAsBinary(obj: Packet) {
        const deconstruction = deconstructPacket(obj)
        const pack = this.encodeAsString(deconstruction.packet)
        const buffers = deconstruction.buffers

        buffers.unshift(pack) // add packet info to beginning of data list
        return buffers // write all the buffers
    }
}

/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 */
export class Decoder extends EventEmitter {
    private reconstructor: BinaryReconstructor

    constructor() {
        super()
    }

    /**
     * Decodes an encoded packet string into packet JSON.
     *
     * @param {String} obj - encoded packet
     */

    public add(obj: any) {
        let packet
        if (typeof obj === "string") {
            packet = this.decodeString(obj)
            if (
                packet.type === PacketType.BINARY_EVENT ||
                packet.type === PacketType.BINARY_ACK
            ) {
                // binary packet's json
                this.reconstructor = new BinaryReconstructor(packet)

                // no attachments, labeled binary but no binary data to follow
                if (packet.attachments === 0) {
                    super.emit("decoded", packet)
                }
            } else {
                // non-binary full packet
                super.emit("decoded", packet)
            }
        } else if (isBinary(obj) || obj.base64) {
            // raw binary data
            if (!this.reconstructor) {
                throw new Error("got binary data when not reconstructing a packet")
            } else {
                packet = this.reconstructor.takeBinaryData(obj)
                if (packet) {
                    // received final buffer
                    this.reconstructor = null
                    super.emit("decoded", packet)
                }
            }
        } else {
            throw new Error("Unknown type: " + obj)
        }
    }

    /**
     * Decode a packet String (JSON data)
     *
     * @param {String} str
     * @return {Object} packet
     */
    private decodeString(str): Packet {
        let i = 0
        // look up type
        const p: any = {
            type: Number(str.charAt(0)),
        }

        if (PacketType[p.type] === undefined) {
            throw new Error("unknown packet type " + p.type)
        }

        // look up attachments if type binary
        if (
            p.type === PacketType.BINARY_EVENT ||
            p.type === PacketType.BINARY_ACK
        ) {
            const start = i + 1
            while (str.charAt(++i) !== "-" && i != str.length) { }
            const buf = str.substring(start, i)
            if (buf != Number(buf) || str.charAt(i) !== "-") {
                throw new Error("Illegal attachments")
            }
            p.attachments = Number(buf)
        }

        // look up namespace (if any)
        if ("/" === str.charAt(i + 1)) {
            const start = i + 1
            while (++i) {
                const c = str.charAt(i)
                if ("," === c) break
                if (i === str.length) break
            }
            p.nsp = str.substring(start, i)
        } else {
            p.nsp = "/"
        }

        // look up id
        const next = str.charAt(i + 1)
        if ("" !== next && Number(next) == next) {
            const start = i + 1
            while (++i) {
                const c = str.charAt(i)
                if (null == c || Number(c) != c) {
                    --i
                    break
                }
                if (i === str.length) break
            }
            p.id = Number(str.substring(start, i + 1))
        }

        // look up json data
        if (str.charAt(++i)) {
            const payload = tryParse(str.substr(i))
            if (Decoder.isPayloadValid(p.type, payload)) {
                p.data = payload
            } else {
                throw new Error("invalid payload")
            }
        }

        console.trace("decoded", str, "as", p)
        return p
    }

    private static isPayloadValid(type: PacketType, payload: any): boolean {
        switch (type) {
            case PacketType.CONNECT:
                return typeof payload === "object"
            case PacketType.DISCONNECT:
                return payload === undefined
            case PacketType.CONNECT_ERROR:
                return typeof payload === "string" || typeof payload === "object"
            case PacketType.EVENT:
            case PacketType.BINARY_EVENT:
                return Array.isArray(payload) && payload.length > 0
            case PacketType.ACK:
            case PacketType.BINARY_ACK:
                return Array.isArray(payload)
        }
    }

    /**
     * Deallocates a parser's resources
     */
    public destroy() {
        if (this.reconstructor) {
            this.reconstructor.finishedReconstruction()
        }
    }
}

function tryParse(str) {
    try {
        return JSON.parse(str)
    } catch (error: any) {
        return false
    }
}

/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 */

class BinaryReconstructor {
    private reconPack
    private buffers: Array<Buffer | ArrayBuffer> = [];

    constructor(readonly packet: Packet) {
        this.reconPack = packet
    }

    /**
     * Method to be called when binary data received from connection
     * after a BINARY_EVENT packet.
     *
     * @param {Buffer | ArrayBuffer} binData - the raw binary data received
     * @return {null | Object} returns null if more binary data is expected or
     *   a reconstructed packet object if all buffers have been received.
     */
    public takeBinaryData(binData) {
        this.buffers.push(binData)
        if (this.buffers.length === this.reconPack.attachments) {
            // done with buffer list
            const packet = reconstructPacket(this.reconPack, this.buffers)
            this.finishedReconstruction()
            return packet
        }
        return null
    }

    /**
     * Cleans up binary packet reconstruction variables.
     */
    public finishedReconstruction() {
        this.reconPack = null
        this.buffers = []
    }
}
