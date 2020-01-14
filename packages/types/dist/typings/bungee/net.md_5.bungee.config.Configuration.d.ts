declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace config {
                // @ts-ignore
                 class Configuration extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    constructor(defaults: any /*net.md_5.bungee.config.Configuration*/)
                    // @ts-ignore
                    public get(path: string, def: java.lang.Object): java.lang.Object;
                    // @ts-ignore
                    public contains(path: string): boolean;
                    // @ts-ignore
                    public get(path: string): java.lang.Object;
                    // @ts-ignore
                    public getDefault(path: string): java.lang.Object;
                    // @ts-ignore
                    public set(path: string, value: java.lang.Object): void;
                    // @ts-ignore
                    public getSection(path: string): any /*net.md_5.bungee.config.Configuration*/;
                    /**
                     * Gets keys, not deep by default.
                     */
                    // @ts-ignore
                    public getKeys(): java.util.Collection;
                    // @ts-ignore
                    public getByte(path: string): number;
                    // @ts-ignore
                    public getByte(path: string, def: number): number;
                    // @ts-ignore
                    public getByteList(path: string): java.util.List;
                    // @ts-ignore
                    public getShort(path: string): number;
                    // @ts-ignore
                    public getShort(path: string, def: number): number;
                    // @ts-ignore
                    public getShortList(path: string): java.util.List;
                    // @ts-ignore
                    public getInt(path: string): number;
                    // @ts-ignore
                    public getInt(path: string, def: number): number;
                    // @ts-ignore
                    public getIntList(path: string): java.util.List;
                    // @ts-ignore
                    public getLong(path: string): number;
                    // @ts-ignore
                    public getLong(path: string, def: number): number;
                    // @ts-ignore
                    public getLongList(path: string): java.util.List;
                    // @ts-ignore
                    public getFloat(path: string): number;
                    // @ts-ignore
                    public getFloat(path: string, def: number): number;
                    // @ts-ignore
                    public getFloatList(path: string): java.util.List;
                    // @ts-ignore
                    public getDouble(path: string): number;
                    // @ts-ignore
                    public getDouble(path: string, def: number): number;
                    // @ts-ignore
                    public getDoubleList(path: string): java.util.List;
                    // @ts-ignore
                    public getBoolean(path: string): boolean;
                    // @ts-ignore
                    public getBoolean(path: string, def: boolean): boolean;
                    // @ts-ignore
                    public getBooleanList(path: string): java.util.List;
                    // @ts-ignore
                    public getChar(path: string): string;
                    // @ts-ignore
                    public getChar(path: string, def: string): string;
                    // @ts-ignore
                    public getCharList(path: string): java.util.List;
                    // @ts-ignore
                    public getString(path: string): string;
                    // @ts-ignore
                    public getString(path: string, def: string): string;
                    // @ts-ignore
                    public getStringList(path: string): java.util.List;
                    // @ts-ignore
                    public getList(path: string): java.util.List;
                    // @ts-ignore
                    public getList(path: string, def: java.util.List): java.util.List;
                }
            }
        }
    }
}
