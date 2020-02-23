declare namespace cn {
    namespace nukkit {
        namespace resourcepacks {
            // @ts-ignore
            interface ResourcePack {
                // @ts-ignore
                 getPackName(): string;
                // @ts-ignore
                 getPackId(): java.util.UUID;
                // @ts-ignore
                 getPackVersion(): string;
                // @ts-ignore
                 getPackSize(): number;
                // @ts-ignore
                 getSha256(): number[];
                // @ts-ignore
                 getPackChunk(off: number, len: number): number[];
            }
        }
    }
}
