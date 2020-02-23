declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace format {
                namespace anvil {
                    namespace palette {
                        // @ts-ignore
                         class BitArray256 extends java.lang.Object {
                            // @ts-ignore
                            constructor(bitsPerEntry: number)
                            // @ts-ignore
                            constructor(other: cn.nukkit.level.format.anvil.palette.BitArray256)
                            // @ts-ignore
                            protected data: number[];
                            // @ts-ignore
                            public setAt(index: number, value: number): void;
                            // @ts-ignore
                            public getAt(index: number): number;
                            // @ts-ignore
                            public fromRaw(arr: number): void;
                            // @ts-ignore
                            public grow(newBitsPerEntry: number): cn.nukkit.level.format.anvil.palette.BitArray256;
                            // @ts-ignore
                            public growSlow(bitsPerEntry: number): cn.nukkit.level.format.anvil.palette.BitArray256;
                            // @ts-ignore
                            public toRaw(buffer: number): number[];
                            // @ts-ignore
                            public toRaw(): number[];
                            // @ts-ignore
                            public clone(): cn.nukkit.level.format.anvil.palette.BitArray256;
                        }
                    }
                }
            }
        }
    }
}
