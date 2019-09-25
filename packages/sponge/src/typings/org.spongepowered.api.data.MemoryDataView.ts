declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                // @ts-ignore
                 class MemoryDataView implements org.spongepowered.api.data.DataView {
                    constructor(safety: org.spongepowered.api.data.DataView.SafetyMode)
                    constructor(parent: org.spongepowered.api.data.DataView, path: org.spongepowered.api.data.DataQuery, safety: org.spongepowered.api.data.DataView.SafetyMode)
                    // @ts-ignore
                    public getContainer(): org.spongepowered.api.data.DataContainer;
                    // @ts-ignore
                    public getCurrentPath(): org.spongepowered.api.data.DataQuery;
                    // @ts-ignore
                    public getName(): string;
                    // @ts-ignore
                    public getParent(): any;
                    // @ts-ignore
                    public getKeys(deep: boolean): any[] /*java.util.Set*/;
                    // @ts-ignore
                    public getValues(deep: boolean): Map<any, any> /*java.util.Map*/;
                    // @ts-ignore
                    public contains(path: org.spongepowered.api.data.DataQuery): boolean;
                    // @ts-ignore
                    public contains(path: org.spongepowered.api.data.DataQuery, paths: org.spongepowered.api.data.DataQuery): boolean;
                    // @ts-ignore
                    public get(path: org.spongepowered.api.data.DataQuery): any;
                    // @ts-ignore
                    public set(path: org.spongepowered.api.data.DataQuery, value: any): org.spongepowered.api.data.DataView;
                    // @ts-ignore
                    public set(key: org.spongepowered.api.data.key.Key, value: any): org.spongepowered.api.data.DataView;
                    // @ts-ignore
                    public remove(path: org.spongepowered.api.data.DataQuery): org.spongepowered.api.data.DataView;
                    // @ts-ignore
                    public createView(path: org.spongepowered.api.data.DataQuery): org.spongepowered.api.data.DataView;
                    // @ts-ignore
                    public createView(path: org.spongepowered.api.data.DataQuery, map: Map<any, any> /*java.util.Map*/): org.spongepowered.api.data.DataView;
                    // @ts-ignore
                    public getView(path: org.spongepowered.api.data.DataQuery): any;
                    // @ts-ignore
                    public getMap(path: org.spongepowered.api.data.DataQuery): any;
                    // @ts-ignore
                    public getBoolean(path: org.spongepowered.api.data.DataQuery): any;
                    // @ts-ignore
                    public getByte(path: org.spongepowered.api.data.DataQuery): any;
                    // @ts-ignore
                    public getShort(path: org.spongepowered.api.data.DataQuery): any;
                    // @ts-ignore
                    public getInt(path: org.spongepowered.api.data.DataQuery): any;
                    // @ts-ignore
                    public getLong(path: org.spongepowered.api.data.DataQuery): any;
                    // @ts-ignore
                    public getFloat(path: org.spongepowered.api.data.DataQuery): any;
                    // @ts-ignore
                    public getDouble(path: org.spongepowered.api.data.DataQuery): any;
                    // @ts-ignore
                    public getString(path: org.spongepowered.api.data.DataQuery): any;
                    // @ts-ignore
                    public getList(path: org.spongepowered.api.data.DataQuery): any;
                    // @ts-ignore
                    public getStringList(path: org.spongepowered.api.data.DataQuery): any;
                    // @ts-ignore
                    public getCharacterList(path: org.spongepowered.api.data.DataQuery): any;
                    // @ts-ignore
                    public getBooleanList(path: org.spongepowered.api.data.DataQuery): any;
                    // @ts-ignore
                    public getByteList(path: org.spongepowered.api.data.DataQuery): any;
                    // @ts-ignore
                    public getShortList(path: org.spongepowered.api.data.DataQuery): any;
                    // @ts-ignore
                    public getIntegerList(path: org.spongepowered.api.data.DataQuery): any;
                    // @ts-ignore
                    public getLongList(path: org.spongepowered.api.data.DataQuery): any;
                    // @ts-ignore
                    public getFloatList(path: org.spongepowered.api.data.DataQuery): any;
                    // @ts-ignore
                    public getDoubleList(path: org.spongepowered.api.data.DataQuery): any;
                    // @ts-ignore
                    public getMapList(path: org.spongepowered.api.data.DataQuery): any;
                    // @ts-ignore
                    public getViewList(path: org.spongepowered.api.data.DataQuery): any;
                    // @ts-ignore
                    public getSerializable(path: org.spongepowered.api.data.DataQuery, clazz: any): any;
                    // @ts-ignore
                    public getSerializableList(path: org.spongepowered.api.data.DataQuery, clazz: any): any;
                    // @ts-ignore
                    public getCatalogType(path: org.spongepowered.api.data.DataQuery, catalogType: any): any;
                    // @ts-ignore
                    public getCatalogTypeList(path: org.spongepowered.api.data.DataQuery, catalogType: any): any;
                    // @ts-ignore
                    public getObject(path: org.spongepowered.api.data.DataQuery, objectClass: any): any;
                    // @ts-ignore
                    public getObjectList(path: org.spongepowered.api.data.DataQuery, objectClass: any): any;
                    // @ts-ignore
                    public copy(): org.spongepowered.api.data.DataContainer;
                    // @ts-ignore
                    public copy(safety: org.spongepowered.api.data.DataView.SafetyMode): org.spongepowered.api.data.DataContainer;
                    // @ts-ignore
                    public isEmpty(): boolean;
                    // @ts-ignore
                    public getSafetyMode(): org.spongepowered.api.data.DataView.SafetyMode;
                    // @ts-ignore
                    public hashCode(): number;
                    // @ts-ignore
                    public equals(obj: any): boolean;
                    // @ts-ignore
                    public toString(): string;
                }
            }
        }
    }
}
