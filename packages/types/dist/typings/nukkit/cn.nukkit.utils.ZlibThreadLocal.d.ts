declare namespace cn {
    namespace nukkit {
        namespace utils {
            // @ts-ignore
             class ZlibThreadLocal extends java.lang.Object implements cn.nukkit.utils.ZlibProvider {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static buf: cn.nukkit.utils.IterableThreadLocal;
                // @ts-ignore
                public static def: cn.nukkit.utils.IterableThreadLocal;
                // @ts-ignore
                public deflate(datas: number, level: number): number[];
                // @ts-ignore
                public deflate(data: number, level: number): number[];
                // @ts-ignore
                public inflate(stream: java.io.InputStream): number[];
            }
        }
    }
}
