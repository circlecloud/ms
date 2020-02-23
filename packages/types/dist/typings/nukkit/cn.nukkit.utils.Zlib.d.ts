declare namespace cn {
    namespace nukkit {
        namespace utils {
            // @ts-ignore
            abstract class Zlib extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static setProvider(providerIndex: number): void;
                // @ts-ignore
                public static deflate(data: number): number[];
                // @ts-ignore
                public static deflate(data: number, level: number): number[];
                // @ts-ignore
                public static deflate(data: number, level: number): number[];
                // @ts-ignore
                public static inflate(stream: java.io.InputStream): number[];
                // @ts-ignore
                public static inflate(data: number): number[];
                // @ts-ignore
                public static inflate(data: number, maxSize: number): number[];
            }
        }
    }
}
