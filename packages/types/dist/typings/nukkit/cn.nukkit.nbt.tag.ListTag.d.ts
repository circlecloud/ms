declare namespace cn {
    namespace nukkit {
        namespace nbt {
            namespace tag {
                // @ts-ignore
                 class ListTag extends cn.nukkit.nbt.tag.Tag {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(name: string)
                    // @ts-ignore
                    public type: number;
                    // @ts-ignore
                    public getId(): number;
                    // @ts-ignore
                    public toString(): string;
                    // @ts-ignore
                    public print(prefix: string, out: java.io.PrintStream): void;
                    // @ts-ignore
                    public add(tag: cn.nukkit.nbt.tag.Tag): cn.nukkit.nbt.tag.ListTag;
                    // @ts-ignore
                    public add(index: number, tag: cn.nukkit.nbt.tag.Tag): cn.nukkit.nbt.tag.ListTag;
                    // @ts-ignore
                    public parseValue(): java.util.List;
                    // @ts-ignore
                    public get(index: number): cn.nukkit.nbt.tag.Tag;
                    // @ts-ignore
                    public getAll(): java.util.List;
                    // @ts-ignore
                    public setAll(tags: java.util.List): void;
                    // @ts-ignore
                    public remove(tag: cn.nukkit.nbt.tag.Tag): void;
                    // @ts-ignore
                    public remove(index: number): void;
                    // @ts-ignore
                    public removeAll(tags: java.util.Collection): void;
                    // @ts-ignore
                    public size(): number;
                    // @ts-ignore
                    public copy(): cn.nukkit.nbt.tag.Tag;
                    // @ts-ignore
                    public equals(obj: java.lang.Object): boolean;
                }
            }
        }
    }
}
