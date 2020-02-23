declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace format {
                namespace anvil {
                    namespace util {
                        // @ts-ignore
                         class BlockStorage extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public getBlockData(x: number, y: number, z: number): number;
                            // @ts-ignore
                            public getBlockId(x: number, y: number, z: number): number;
                            // @ts-ignore
                            public setBlockId(x: number, y: number, z: number, id: number): void;
                            // @ts-ignore
                            public setBlockData(x: number, y: number, z: number, data: number): void;
                            // @ts-ignore
                            public getFullBlock(x: number, y: number, z: number): number;
                            // @ts-ignore
                            public setFullBlock(x: number, y: number, z: number, value: number): void;
                            // @ts-ignore
                            public getAndSetFullBlock(x: number, y: number, z: number, value: number): number;
                            // @ts-ignore
                            public getBlockIds(): number[];
                            // @ts-ignore
                            public getBlockData(): number[];
                            // @ts-ignore
                            public copy(): cn.nukkit.level.format.anvil.util.BlockStorage;
                        }
                    }
                }
            }
        }
    }
}
