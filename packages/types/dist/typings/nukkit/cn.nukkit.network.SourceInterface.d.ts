declare namespace cn {
    namespace nukkit {
        namespace network {
            // @ts-ignore
            interface SourceInterface {
                // @ts-ignore
                 putPacket(player: cn.nukkit.Player, packet: cn.nukkit.network.protocol.DataPacket): java.lang.Integer;
                // @ts-ignore
                 putPacket(player: cn.nukkit.Player, packet: cn.nukkit.network.protocol.DataPacket, needACK: boolean): java.lang.Integer;
                // @ts-ignore
                 putPacket(player: cn.nukkit.Player, packet: cn.nukkit.network.protocol.DataPacket, needACK: boolean, immediate: boolean): java.lang.Integer;
                // @ts-ignore
                 getNetworkLatency(player: cn.nukkit.Player): number;
                // @ts-ignore
                 close(player: cn.nukkit.Player): void;
                // @ts-ignore
                 close(player: cn.nukkit.Player, reason: string): void;
                // @ts-ignore
                 setName(name: string): void;
                // @ts-ignore
                 process(): boolean;
                // @ts-ignore
                 shutdown(): void;
                // @ts-ignore
                 emergencyShutdown(): void;
            }
        }
    }
}
