declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace format {
                // @ts-ignore
                abstract class LevelProviderManager extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    protected static providers: java.util.Map;
                    // @ts-ignore
                    public static addProvider(server: cn.nukkit.Server, clazz: java.lang.Class): void;
                    // @ts-ignore
                    public static getProvider(path: string): java.lang.Class;
                    // @ts-ignore
                    public static getProviderByName(name: string): java.lang.Class;
                }
            }
        }
    }
}
