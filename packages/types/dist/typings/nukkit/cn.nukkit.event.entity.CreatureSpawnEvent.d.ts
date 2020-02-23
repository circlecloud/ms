declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class CreatureSpawnEvent extends cn.nukkit.event.Event implements cn.nukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(networkId: number, position: cn.nukkit.level.Position, nbt: cn.nukkit.nbt.tag.CompoundTag, reason: cn.nukkit.event.entity.CreatureSpawnEvent.SpawnReason)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getReason(): cn.nukkit.event.entity.CreatureSpawnEvent.SpawnReason;
                    // @ts-ignore
                    public getEntityNetworkId(): number;
                    // @ts-ignore
                    public getCompoundTag(): cn.nukkit.nbt.tag.CompoundTag;
                    // @ts-ignore
                    public getPosition(): cn.nukkit.level.Position;
                }
            }
        }
    }
}
