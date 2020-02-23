declare namespace cn {
    namespace nukkit {
        namespace utils {
            // @ts-ignore
             class BlockIterator extends java.lang.Object {
                // @ts-ignore
                constructor(level: cn.nukkit.level.Level, start: cn.nukkit.math.Vector3, direction: cn.nukkit.math.Vector3)
                // @ts-ignore
                constructor(level: cn.nukkit.level.Level, start: cn.nukkit.math.Vector3, direction: cn.nukkit.math.Vector3, yOffset: number)
                // @ts-ignore
                constructor(level: cn.nukkit.level.Level, start: cn.nukkit.math.Vector3, direction: cn.nukkit.math.Vector3, yOffset: number, maxDistance: number)
                // @ts-ignore
                public next(): cn.nukkit.block.Block;
                // @ts-ignore
                public hasNext(): boolean;
            }
        }
    }
}
