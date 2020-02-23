declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace format {
                // @ts-ignore
                interface Chunk extends cn.nukkit.level.format.FullChunk {
                    // @ts-ignore
                     SECTION_COUNT: number;
                    // @ts-ignore
                     isSectionEmpty(fY: number): boolean;
                    // @ts-ignore
                     getSection(fY: number): cn.nukkit.level.format.ChunkSection;
                    // @ts-ignore
                     setSection(fY: number, section: cn.nukkit.level.format.ChunkSection): boolean;
                    // @ts-ignore
                     getSections(): cn.nukkit.level.format.ChunkSection[];
                }
            }
        }
    }
}
