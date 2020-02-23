declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace format {
                namespace anvil {
                    namespace palette {
                        // @ts-ignore
                         class BlockDataPalette extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            constructor(rawData: string)
                            // @ts-ignore
                            public getRaw(): string[];
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
                            public compress(): boolean;
                            // @ts-ignore
                            public clone(): cn.nukkit.level.format.anvil.palette.BlockDataPalette;
                        }
                    }
                }
            }
        }
    }
}
