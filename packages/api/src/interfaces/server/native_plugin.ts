interface NativePluginManager {
    load(name: string): boolean;
    unload(name: string): boolean;
    reload(name: string): boolean;
    delete(name: string): boolean;
}