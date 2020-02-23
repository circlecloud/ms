declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace server {
                // @ts-ignore
                 class PlayerDataSerializeEvent extends cn.nukkit.event.server.ServerEvent {
                    // @ts-ignore
                    constructor(name: string, serializer: cn.nukkit.utils.PlayerDataSerializer)
                    // @ts-ignore
                    public getName(): java.util.Optional;
                    // @ts-ignore
                    public getUuid(): java.util.Optional;
                    // @ts-ignore
                    public getSerializer(): cn.nukkit.utils.PlayerDataSerializer;
                    // @ts-ignore
                    public setSerializer(serializer: cn.nukkit.utils.PlayerDataSerializer): void;
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                }
            }
        }
    }
}
