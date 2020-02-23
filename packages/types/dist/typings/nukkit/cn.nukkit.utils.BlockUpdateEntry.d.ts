declare namespace cn {
    namespace nukkit {
        namespace utils {
            // @ts-ignore
             class BlockUpdateEntry extends java.lang.Object {
                // @ts-ignore
                constructor(pos: cn.nukkit.math.Vector3, block: cn.nukkit.block.Block)
                // @ts-ignore
                constructor(pos: cn.nukkit.math.Vector3, block: cn.nukkit.block.Block, delay: number, priority: number)
                // @ts-ignore
                public priority: number;
                // @ts-ignore
                public delay: number;
                // @ts-ignore
                public pos: cn.nukkit.math.Vector3;
                // @ts-ignore
                public block: cn.nukkit.block.Block;
                // @ts-ignore
                public id: number;
                // @ts-ignore
                public compareTo(entry: cn.nukkit.utils.BlockUpdateEntry): number;
                // @ts-ignore
                public equals(object: java.lang.Object): boolean;
                // @ts-ignore
                public hashCode(): number;
            }
        }
    }
}
