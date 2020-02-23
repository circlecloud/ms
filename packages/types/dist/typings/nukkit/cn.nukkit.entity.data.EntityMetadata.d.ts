declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace data {
                // @ts-ignore
                 class EntityMetadata extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public get(id: number): cn.nukkit.entity.data.EntityData;
                    // @ts-ignore
                    public getOrDefault(id: number, defaultValue: cn.nukkit.entity.data.EntityData): cn.nukkit.entity.data.EntityData;
                    // @ts-ignore
                    public exists(id: number): boolean;
                    // @ts-ignore
                    public put(data: cn.nukkit.entity.data.EntityData): cn.nukkit.entity.data.EntityMetadata;
                    // @ts-ignore
                    public getByte(id: number): number;
                    // @ts-ignore
                    public getShort(id: number): number;
                    // @ts-ignore
                    public getInt(id: number): number;
                    // @ts-ignore
                    public getLong(id: number): number;
                    // @ts-ignore
                    public getFloat(id: number): number;
                    // @ts-ignore
                    public getBoolean(id: number): boolean;
                    // @ts-ignore
                    public getNBT(id: number): cn.nukkit.nbt.tag.CompoundTag;
                    // @ts-ignore
                    public getString(id: number): string;
                    // @ts-ignore
                    public getPosition(id: number): cn.nukkit.math.Vector3;
                    // @ts-ignore
                    public getFloatPosition(id: number): cn.nukkit.math.Vector3f;
                    // @ts-ignore
                    public putByte(id: number, value: number): cn.nukkit.entity.data.EntityMetadata;
                    // @ts-ignore
                    public putShort(id: number, value: number): cn.nukkit.entity.data.EntityMetadata;
                    // @ts-ignore
                    public putInt(id: number, value: number): cn.nukkit.entity.data.EntityMetadata;
                    // @ts-ignore
                    public putLong(id: number, value: number): cn.nukkit.entity.data.EntityMetadata;
                    // @ts-ignore
                    public putFloat(id: number, value: number): cn.nukkit.entity.data.EntityMetadata;
                    // @ts-ignore
                    public putBoolean(id: number, value: boolean): cn.nukkit.entity.data.EntityMetadata;
                    // @ts-ignore
                    public putNBT(id: number, tag: cn.nukkit.nbt.tag.CompoundTag): cn.nukkit.entity.data.EntityMetadata;
                    // @ts-ignore
                    public putSlot(id: number, value: cn.nukkit.item.Item): cn.nukkit.entity.data.EntityMetadata;
                    // @ts-ignore
                    public putString(id: number, value: string): cn.nukkit.entity.data.EntityMetadata;
                    // @ts-ignore
                    public getMap(): java.util.Map;
                }
            }
        }
    }
}
