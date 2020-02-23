declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace format {
                namespace leveldb {
                    namespace key {
                        // @ts-ignore
                         class BaseKey extends java.lang.Object {
                            // @ts-ignore
                            constructor(chunkX: number, chunkZ: number, type: number)
                            // @ts-ignore
                            public static DATA_VERSION: number;
                            // @ts-ignore
                            public static DATA_FLAGS: number;
                            // @ts-ignore
                            public static DATA_EXTRA_DATA: number;
                            // @ts-ignore
                            public static DATA_TICKS: number;
                            // @ts-ignore
                            public static DATA_ENTITIES: number;
                            // @ts-ignore
                            public static DATA_TILES: number;
                            // @ts-ignore
                            public static DATA_TERRAIN: number;
                            // @ts-ignore
                            public toArray(): number[];
                        }
                    }
                }
            }
        }
    }
}
