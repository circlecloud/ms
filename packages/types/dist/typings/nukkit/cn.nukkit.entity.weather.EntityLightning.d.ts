declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace weather {
                // @ts-ignore
                 class EntityLightning extends cn.nukkit.entity.Entity implements cn.nukkit.entity.weather.EntityLightningStrike {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public state: number;
                    // @ts-ignore
                    public liveTime: number;
                    // @ts-ignore
                    public getNetworkId(): number;
                    // @ts-ignore
                    protected initEntity(): void;
                    // @ts-ignore
                    public isEffect(): boolean;
                    // @ts-ignore
                    public setEffect(e: boolean): void;
                    // @ts-ignore
                    public attack(source: cn.nukkit.event.entity.EntityDamageEvent): boolean;
                    // @ts-ignore
                    public onUpdate(currentTick: number): boolean;
                }
            }
        }
    }
}
