declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace passive {
                // @ts-ignore
                 class EntityVillagerV1 extends cn.nukkit.entity.EntityCreature implements cn.nukkit.entity.passive.EntityNPC, cn.nukkit.entity.EntityAgeable {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    public static PROFESSION_FARMER: number;
                    // @ts-ignore
                    public static PROFESSION_LIBRARIAN: number;
                    // @ts-ignore
                    public static PROFESSION_PRIEST: number;
                    // @ts-ignore
                    public static PROFESSION_BLACKSMITH: number;
                    // @ts-ignore
                    public static PROFESSION_BUTCHER: number;
                    // @ts-ignore
                    public static PROFESSION_GENERIC: number;
                    // @ts-ignore
                    public static NETWORK_ID: number;
                    // @ts-ignore
                    public getWidth(): number;
                    // @ts-ignore
                    public getHeight(): number;
                    // @ts-ignore
                    public getName(): string;
                    // @ts-ignore
                    public getNetworkId(): number;
                    // @ts-ignore
                    public initEntity(): void;
                    // @ts-ignore
                    public getProfession(): number;
                    // @ts-ignore
                    public setProfession(profession: number): void;
                    // @ts-ignore
                    public isBaby(): boolean;
                }
            }
        }
    }
}
