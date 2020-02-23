declare namespace cn {
    namespace nukkit {
        namespace plugin {
            // @ts-ignore
             class PluginClassLoader extends java.net.URLClassLoader {
                // @ts-ignore
                constructor(loader: cn.nukkit.plugin.JavaPluginLoader, parent: java.lang.ClassLoader, file: java.io.File)
                // @ts-ignore
                protected findClass(name: string): java.lang.Class;
                // @ts-ignore
                protected findClass(name: string, checkGlobal: boolean): java.lang.Class;
            }
        }
    }
}
