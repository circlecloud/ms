declare namespace cn {
    namespace nukkit {
        namespace utils {
            // @ts-ignore
            abstract class SimpleConfig extends java.lang.Object {
                // @ts-ignore
                constructor(plugin: cn.nukkit.plugin.Plugin)
                // @ts-ignore
                constructor(plugin: cn.nukkit.plugin.Plugin, fileName: string)
                // @ts-ignore
                constructor(file: java.io.File)
                // @ts-ignore
                public save(): boolean;
                // @ts-ignore
                public save(async: boolean): boolean;
                // @ts-ignore
                public load(): boolean;
            }
        }
    }
}
