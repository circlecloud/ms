declare namespace cn {
    namespace nukkit {
        namespace network {
            namespace rcon {
                // @ts-ignore
                 class RCONPacket extends java.lang.Object {
                    // @ts-ignore
                    constructor(id: number, type: number, payload: number)
                    // @ts-ignore
                    constructor(buffer: java.nio.ByteBuffer)
                    // @ts-ignore
                    public toBuffer(): java.nio.ByteBuffer;
                    // @ts-ignore
                    public getId(): number;
                    // @ts-ignore
                    public getType(): number;
                    // @ts-ignore
                    public getPayload(): number[];
                }
            }
        }
    }
}
