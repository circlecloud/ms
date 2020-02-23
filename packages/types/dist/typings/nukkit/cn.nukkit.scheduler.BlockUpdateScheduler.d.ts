declare namespace cn {
    namespace nukkit {
        namespace scheduler {
            // @ts-ignore
             class BlockUpdateScheduler extends java.lang.Object {
                // @ts-ignore
                constructor(level: cn.nukkit.level.Level, currentTick: number)
                // @ts-ignore
                public tick(currentTick: number): void;
                // @ts-ignore
                public getPendingBlockUpdates(boundingBox: cn.nukkit.math.AxisAlignedBB): java.util.Set;
                // @ts-ignore
                public isBlockTickPending(pos: cn.nukkit.math.Vector3, block: cn.nukkit.block.Block): boolean;
                // @ts-ignore
                public add(entry: cn.nukkit.utils.BlockUpdateEntry): void;
                // @ts-ignore
                public contains(entry: cn.nukkit.utils.BlockUpdateEntry): boolean;
                // @ts-ignore
                public remove(entry: cn.nukkit.utils.BlockUpdateEntry): boolean;
                // @ts-ignore
                public remove(pos: cn.nukkit.math.Vector3): boolean;
            }
        }
    }
}
