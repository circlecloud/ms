declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace data {
                // @ts-ignore
                 class NBTEntityData extends cn.nukkit.entity.data.EntityData {
                    // @ts-ignore
                    constructor(id: number, tag: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    public tag: cn.nukkit.nbt.tag.CompoundTag;
                    // @ts-ignore
                    public getData(): cn.nukkit.nbt.tag.CompoundTag;
                    // @ts-ignore
                    public setData(tag: cn.nukkit.nbt.tag.CompoundTag): void;
                    // @ts-ignore
                    public getType(): number;
                }
            }
        }
    }
}
