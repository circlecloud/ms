declare namespace cn {
    namespace nukkit {
        namespace network {
            // @ts-ignore
             class RakNetInterface extends java.lang.Object implements cn.nukkit.raknet.server.ServerInstance, cn.nukkit.network.AdvancedSourceInterface {
                // @ts-ignore
                constructor(server: cn.nukkit.Server)
                // @ts-ignore
                public setNetwork(network: cn.nukkit.network.Network): void;
                // @ts-ignore
                public process(): boolean;
                // @ts-ignore
                public closeSession(identifier: string, reason: string): void;
                // @ts-ignore
                public getNetworkLatency(player: cn.nukkit.Player): number;
                // @ts-ignore
                public close(player: cn.nukkit.Player): void;
                // @ts-ignore
                public close(player: cn.nukkit.Player, reason: string): void;
                // @ts-ignore
                public shutdown(): void;
                // @ts-ignore
                public emergencyShutdown(): void;
                // @ts-ignore
                public openSession(identifier: string, address: string, port: number, clientID: number): void;
                // @ts-ignore
                public handleEncapsulated(identifier: string, packet: cn.nukkit.raknet.protocol.EncapsulatedPacket, flags: number): void;
                // @ts-ignore
                public blockAddress(address: string): void;
                // @ts-ignore
                public blockAddress(address: string, timeout: number): void;
                // @ts-ignore
                public unblockAddress(address: string): void;
                // @ts-ignore
                public handleRaw(address: string, port: number, payload: number): void;
                // @ts-ignore
                public sendRawPacket(address: string, port: number, payload: number): void;
                // @ts-ignore
                public notifyACK(identifier: string, identifierACK: number): void;
                // @ts-ignore
                public setName(name: string): void;
                // @ts-ignore
                public setPortCheck(value: boolean): void;
                // @ts-ignore
                public handleOption(name: string, value: string): void;
                // @ts-ignore
                public putPacket(player: cn.nukkit.Player, packet: cn.nukkit.network.protocol.DataPacket): java.lang.Integer;
                // @ts-ignore
                public putPacket(player: cn.nukkit.Player, packet: cn.nukkit.network.protocol.DataPacket, needACK: boolean): java.lang.Integer;
                // @ts-ignore
                public putPacket(player: cn.nukkit.Player, packet: cn.nukkit.network.protocol.DataPacket, needACK: boolean, immediate: boolean): java.lang.Integer;
            }
        }
    }
}
