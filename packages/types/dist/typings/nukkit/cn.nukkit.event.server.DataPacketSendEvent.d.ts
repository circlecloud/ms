declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace server {
                // @ts-ignore
                 class DataPacketSendEvent extends cn.nukkit.event.server.ServerEvent implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(player: cn.nukkit.Player, packet: cn.nukkit.network.protocol.DataPacket)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getPlayer(): cn.nukkit.Player;
                    // @ts-ignore
                    public getPacket(): cn.nukkit.network.protocol.DataPacket;
                }
            }
        }
    }
}
