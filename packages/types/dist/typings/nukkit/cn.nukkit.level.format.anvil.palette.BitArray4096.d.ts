declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace format {
                namespace anvil {
                    namespace palette {
                        // @ts-ignore
                         class BitArray4096 extends java.lang.Object {
                            // @ts-ignore
                            constructor(bitsPerEntry: number)
                            // @ts-ignore
                            public setAt(index: number, value: number): void;
                            // @ts-ignore
                            public getAt(index: number): number;
                            // @ts-ignore
                            public fromRawSlow(arr: string): void;
                            // @ts-ignore
                            public fromRaw(arr: string): void;
                            // @ts-ignore
                            public grow(newBitsPerEntry: number): cn.nukkit.level.format.anvil.palette.BitArray4096;
                            // @ts-ignore
                            public growSlow(bitsPerEntry: number): cn.nukkit.level.format.anvil.palette.BitArray4096;
                            // @ts-ignore
                            public toRawSlow(): string[];
                            // @ts-ignore
                            public toRaw(): string[];
                            // @ts-ignore
                            protected toRaw(buffer: string): string[];
                        }
                    }
                }
            }
        }
    }
}
