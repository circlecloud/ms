declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace server {
                // @ts-ignore
                 class BatchPacketsEvent extends cn.nukkit.event.server.ServerEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(players: cn.nukkit.Player, packets: cn.nukkit.network.protocol.DataPacket, forceSync: boolean)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getPlayers(): cn.nukkit.Player[];
                    // @ts-ignore
                    public getPackets(): cn.nukkit.network.protocol.DataPacket[];
                    // @ts-ignore
                    public isForceSync(): boolean;
                }
            }
        }
    }
}
