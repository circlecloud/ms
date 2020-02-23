declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
             class BlockLava extends cn.nukkit.block.BlockLiquid {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(meta: number)
                // @ts-ignore
                public getId(): number;
                // @ts-ignore
                public getLightLevel(): number;
                // @ts-ignore
                public getName(): string;
                // @ts-ignore
                public onEntityCollide(entity: cn.nukkit.entity.Entity): void;
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number, fy: number, fz: number, player: cn.nukkit.Player): boolean;
                // @ts-ignore
                public onUpdate(type: number): number;
                // @ts-ignore
                protected isSurroundingBlockFlammable(block: cn.nukkit.block.Block): boolean;
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor;
                // @ts-ignore
                public getBlock(meta: number): cn.nukkit.block.BlockLiquid;
                // @ts-ignore
                public tickRate(): number;
                // @ts-ignore
                public getFlowDecayPerBlock(): number;
                // @ts-ignore
                protected checkForHarden(): void;
                // @ts-ignore
                protected flowIntoBlock(block: cn.nukkit.block.Block, newFlowDecay: number): void;
                // @ts-ignore
                public addVelocityToEntity(entity: cn.nukkit.entity.Entity, vector: cn.nukkit.math.Vector3): void;
            }
        }
    }
}
