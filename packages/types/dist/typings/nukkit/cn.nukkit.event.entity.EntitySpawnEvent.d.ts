declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class EntitySpawnEvent extends cn.nukkit.event.entity.EntityEvent {
                    // @ts-ignore
                    constructor(entity: cn.nukkit.entity.Entity)
                    // @ts-ignore
                    public static getHandlers(): cn.nukkit.event.HandlerList;
                    // @ts-ignore
                    public getPosition(): cn.nukkit.level.Position;
                    // @ts-ignore
                    public getType(): number;
                    // @ts-ignore
                    public isCreature(): boolean;
                    // @ts-ignore
                    public isHuman(): boolean;
                    // @ts-ignore
                    public isProjectile(): boolean;
                    // @ts-ignore
                    public isVehicle(): boolean;
                    // @ts-ignore
                    public isItem(): boolean;
                }
            }
        }
    }
}
