declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace format {
                namespace anvil {
                    namespace palette {
                        // @ts-ignore
                         class BiomePalette extends java.lang.Object {
                            // @ts-ignore
                            constructor(biomeColors: number)
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public get(x: number, z: number): number;
                            // @ts-ignore
                            public get(index: number): number;
                            // @ts-ignore
                            public set(x: number, z: number, value: number): void;
                            // @ts-ignore
                            public set(index: number, value: number): void;
                            // @ts-ignore
                            public toRaw(): number[];
                            // @ts-ignore
                            public getIndex(x: number, z: number): number;
                            // @ts-ignore
                            public clone(): cn.nukkit.level.format.anvil.palette.BiomePalette;
                        }
                    }
                }
            }
        }
    }
}
