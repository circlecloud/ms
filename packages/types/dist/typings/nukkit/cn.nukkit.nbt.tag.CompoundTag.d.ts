declare namespace cn {
    namespace nukkit {
        namespace nbt {
            namespace tag {
                // @ts-ignore
                 class CompoundTag extends cn.nukkit.nbt.tag.Tag {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(name: string)
                    // @ts-ignore
                    public write(dos: cn.nukkit.nbt.stream.NBTOutputStream): void;
                    // @ts-ignore
                    public load(dis: cn.nukkit.nbt.stream.NBTInputStream): void;
                    // @ts-ignore
                    public getAllTags(): java.util.Collection;
                    // @ts-ignore
                    public getId(): number;
                    // @ts-ignore
                    public put(name: string, tag: cn.nukkit.nbt.tag.Tag): cn.nukkit.nbt.tag.CompoundTag;
                    // @ts-ignore
                    public putByte(name: string, value: number): cn.nukkit.nbt.tag.CompoundTag;
                    // @ts-ignore
                    public putShort(name: string, value: number): cn.nukkit.nbt.tag.CompoundTag;
                    // @ts-ignore
                    public putInt(name: string, value: number): cn.nukkit.nbt.tag.CompoundTag;
                    // @ts-ignore
                    public putLong(name: string, value: number): cn.nukkit.nbt.tag.CompoundTag;
                    // @ts-ignore
                    public putFloat(name: string, value: number): cn.nukkit.nbt.tag.CompoundTag;
                    // @ts-ignore
                    public putDouble(name: string, value: number): cn.nukkit.nbt.tag.CompoundTag;
                    // @ts-ignore
                    public putString(name: string, value: string): cn.nukkit.nbt.tag.CompoundTag;
                    // @ts-ignore
                    public putByteArray(name: string, value: number): cn.nukkit.nbt.tag.CompoundTag;
                    // @ts-ignore
                    public putIntArray(name: string, value: number): cn.nukkit.nbt.tag.CompoundTag;
                    // @ts-ignore
                    public putList(listTag: cn.nukkit.nbt.tag.ListTag): cn.nukkit.nbt.tag.CompoundTag;
                    // @ts-ignore
                    public putCompound(name: string, value: cn.nukkit.nbt.tag.CompoundTag): cn.nukkit.nbt.tag.CompoundTag;
                    // @ts-ignore
                    public putBoolean(string: string, val: boolean): cn.nukkit.nbt.tag.CompoundTag;
                    // @ts-ignore
                    public get(name: string): cn.nukkit.nbt.tag.Tag;
                    // @ts-ignore
                    public contains(name: string): boolean;
                    // @ts-ignore
                    public remove(name: string): cn.nukkit.nbt.tag.CompoundTag;
                    // @ts-ignore
                    public removeAndGet(name: string): cn.nukkit.nbt.tag.Tag;
                    // @ts-ignore
                    public getByte(name: string): number;
                    // @ts-ignore
                    public getShort(name: string): number;
                    // @ts-ignore
                    public getInt(name: string): number;
                    // @ts-ignore
                    public getLong(name: string): number;
                    // @ts-ignore
                    public getFloat(name: string): number;
                    // @ts-ignore
                    public getDouble(name: string): number;
                    // @ts-ignore
                    public getString(name: string): string;
                    // @ts-ignore
                    public getByteArray(name: string): number[];
                    // @ts-ignore
                    public getIntArray(name: string): number[];
                    // @ts-ignore
                    public getCompound(name: string): cn.nukkit.nbt.tag.CompoundTag;
                    // @ts-ignore
                    public getList(name: string): cn.nukkit.nbt.tag.ListTag;
                    // @ts-ignore
                    public getList(name: string, type: java.lang.Class): cn.nukkit.nbt.tag.ListTag;
                    // @ts-ignore
                    public getTags(): java.util.Map;
                    // @ts-ignore
                    public parseValue(): java.util.Map;
                    // @ts-ignore
                    public getBoolean(name: string): boolean;
                    // @ts-ignore
                    public toString(): string;
                    // @ts-ignore
                    public print(prefix: string, out: java.io.PrintStream): void;
                    // @ts-ignore
                    public isEmpty(): boolean;
                    // @ts-ignore
                    public copy(): cn.nukkit.nbt.tag.CompoundTag;
                    // @ts-ignore
                    public equals(obj: java.lang.Object): boolean;
                    /**
                     * Check existence of NBT tag
                     */
                    // @ts-ignore
                    public exist(name: string): boolean;
                    // @ts-ignore
                    public clone(): cn.nukkit.nbt.tag.CompoundTag;
                }
            }
        }
    }
}
