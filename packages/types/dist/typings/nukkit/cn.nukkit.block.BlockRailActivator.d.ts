declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockRailActivator extends cn.nukkit.block.BlockRail {
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                constructor()
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public onUpdate(type: number): number;
                /**
                 * Check the surrounding of the rail
                 */
                // @ts-ignore
                protected checkSurrounding(pos: cn.nukkit.math.Vector3, relative: boolean, power: number): boolean;
                // @ts-ignore
                protected canPowered(pos: cn.nukkit.math.Vector3, state: cn.nukkit.utils.Rail.Orientation, power: number, relative: boolean): boolean;
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[];
            }
        }
    }
}
