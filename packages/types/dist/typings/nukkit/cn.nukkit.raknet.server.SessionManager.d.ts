declare namespace cn {
    namespace nukkit {
        namespace raknet {
            namespace server {
                // @ts-ignore
                 class SessionManager extends java.lang.Object {
                    // @ts-ignore
                    constructor(server: cn.nukkit.raknet.server.RakNetServer, socket: cn.nukkit.raknet.server.UDPServerSocket)
                    // @ts-ignore
                    protected packetPool: cn.nukkit.raknet.protocol.Packet.PacketFactory[];
                    // @ts-ignore
                    protected server: cn.nukkit.raknet.server.RakNetServer;
                    // @ts-ignore
                    protected socket: cn.nukkit.raknet.server.UDPServerSocket;
                    // @ts-ignore
                    protected receiveBytes: number;
                    // @ts-ignore
                    protected sendBytes: number;
                    // @ts-ignore
                    protected sessions: java.util.Map;
                    // @ts-ignore
                    protected name: string;
                    // @ts-ignore
                    protected packetLimit: number;
                    // @ts-ignore
                    protected shutdown: boolean;
                    // @ts-ignore
                    protected ticks: number;
                    // @ts-ignore
                    protected lastMeasure: number;
                    // @ts-ignore
                    protected block: java.util.Map;
                    // @ts-ignore
                    protected ipSec: java.util.Map;
                    // @ts-ignore
                    public portChecking: boolean;
                    // @ts-ignore
                    public serverId: number;
                    // @ts-ignore
                    protected currentSource: string;
                    // @ts-ignore
                    public getPort(): number;
                    // @ts-ignore
                    public getLogger(): cn.nukkit.utils.ThreadedLogger;
                    // @ts-ignore
                    public run(): void;
                    // @ts-ignore
                    public sendPacket(packet: cn.nukkit.raknet.protocol.Packet, dest: string, port: number): void;
                    // @ts-ignore
                    public sendPacket(packet: cn.nukkit.raknet.protocol.Packet, dest: java.net.InetSocketAddress): void;
                    // @ts-ignore
                    public streamEncapsulated(session: cn.nukkit.raknet.server.Session, packet: cn.nukkit.raknet.protocol.EncapsulatedPacket): void;
                    // @ts-ignore
                    public streamEncapsulated(session: cn.nukkit.raknet.server.Session, packet: cn.nukkit.raknet.protocol.EncapsulatedPacket, flags: number): void;
                    // @ts-ignore
                    public streamRAW(address: string, port: number, payload: number): void;
                    // @ts-ignore
                    protected streamClose(identifier: string, reason: string): void;
                    // @ts-ignore
                    protected streamInvalid(identifier: string): void;
                    // @ts-ignore
                    protected streamOpen(session: cn.nukkit.raknet.server.Session): void;
                    // @ts-ignore
                    protected streamACK(identifier: string, identifierACK: number): void;
                    // @ts-ignore
                    protected streamOption(name: string, value: string): void;
                    // @ts-ignore
                    public receiveStream(): boolean;
                    // @ts-ignore
                    public blockAddress(address: string): void;
                    // @ts-ignore
                    public blockAddress(address: string, timeout: number): void;
                    // @ts-ignore
                    public unblockAddress(address: string): void;
                    // @ts-ignore
                    public getSession(ip: string, port: number): cn.nukkit.raknet.server.Session;
                    // @ts-ignore
                    public removeSession(session: cn.nukkit.raknet.server.Session): void;
                    // @ts-ignore
                    public removeSession(session: cn.nukkit.raknet.server.Session, reason: string): void;
                    // @ts-ignore
                    public openSession(session: cn.nukkit.raknet.server.Session): void;
                    // @ts-ignore
                    public notifyACK(session: cn.nukkit.raknet.server.Session, identifierACK: number): void;
                    // @ts-ignore
                    public getName(): string;
                    // @ts-ignore
                    public getID(): number;
                    // @ts-ignore
                    public getPacketFromPool(id: number): cn.nukkit.raknet.protocol.Packet;
                }
            }
        }
    }
}
