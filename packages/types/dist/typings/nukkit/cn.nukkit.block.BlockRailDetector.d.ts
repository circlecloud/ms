declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockRailDetector extends cn.nukkit.block.BlockRail {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public isPowerSource(): boolean;
                // @ts-ignore
                public getWeakPower(side: cn.nukkit.math.BlockFace): number;
                // @ts-ignore
                public getStrongPower(side: cn.nukkit.math.BlockFace): number;
                // @ts-ignore
                public onUpdate(type: number): number;
                // @ts-ignore
                public onEntityCollide(entity: cn.nukkit.entity.Entity): void;
                // @ts-ignore
                protected updateState(): void;
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[];
            }
        }
    }
}
