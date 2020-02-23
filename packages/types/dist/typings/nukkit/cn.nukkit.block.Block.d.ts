declare namespace cn {
    namespace nukkit {
        namespace block {
            // @ts-ignore
            abstract class Block extends cn.nukkit.level.Position implements cn.nukkit.metadata.Metadatable, cn.nukkit.math.AxisAlignedBB, cn.nukkit.block.BlockID {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static list: java.lang.Class[];
                // @ts-ignore
                public static fullList: cn.nukkit.block.Block[];
                // @ts-ignore
                public static light: number[];
                // @ts-ignore
                public static lightFilter: number[];
                // @ts-ignore
                public static solid: boolean[];
                // @ts-ignore
                public static hardness: number[];
                // @ts-ignore
                public static transparent: boolean[];
                // @ts-ignore
                public static hasMeta: boolean[];
                // @ts-ignore
                public static init(): void;
                // @ts-ignore
                public static get(id: number): cn.nukkit.block.Block;
                // @ts-ignore
                public static get(id: number, meta: java.lang.Integer): cn.nukkit.block.Block;
                // @ts-ignore
                public static get(id: number, meta: java.lang.Integer, pos: cn.nukkit.level.Position): cn.nukkit.block.Block;
                // @ts-ignore
                public static get(id: number, data: number): cn.nukkit.block.Block;
                // @ts-ignore
                public static get(fullId: number, level: cn.nukkit.level.Level, x: number, y: number, z: number): cn.nukkit.block.Block;
                // @ts-ignore
                public place(item: cn.nukkit.item.Item, block: cn.nukkit.block.Block, target: cn.nukkit.block.Block, face: cn.nukkit.math.BlockFace, fx: number, fy: number, fz: number, player: cn.nukkit.Player): boolean;
                // @ts-ignore
                public canHarvestWithHand(): boolean;
                // @ts-ignore
                public isBreakable(item: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                public tickRate(): number;
                // @ts-ignore
                public onBreak(item: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                public onUpdate(type: number): number;
                // @ts-ignore
                public onActivate(item: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                public onActivate(item: cn.nukkit.item.Item, player: cn.nukkit.Player): boolean;
                // @ts-ignore
                public getHardness(): number;
                // @ts-ignore
                public getResistance(): number;
                // @ts-ignore
                public getBurnChance(): number;
                // @ts-ignore
                public getBurnAbility(): number;
                // @ts-ignore
                public getToolType(): number;
                // @ts-ignore
                public getFrictionFactor(): number;
                // @ts-ignore
                public getLightLevel(): number;
                // @ts-ignore
                public canBePlaced(): boolean;
                // @ts-ignore
                public canBeReplaced(): boolean;
                // @ts-ignore
                public isTransparent(): boolean;
                // @ts-ignore
                public isSolid(): boolean;
                // @ts-ignore
                public canBeFlowedInto(): boolean;
                // @ts-ignore
                public canBeActivated(): boolean;
                // @ts-ignore
                public hasEntityCollision(): boolean;
                // @ts-ignore
                public canPassThrough(): boolean;
                // @ts-ignore
                public canBePushed(): boolean;
                // @ts-ignore
                public hasComparatorInputOverride(): boolean;
                // @ts-ignore
                public getComparatorInputOverride(): number;
                // @ts-ignore
                public canBeClimbed(): boolean;
                // @ts-ignore
                public getColor(): cn.nukkit.utils.BlockColor;
                // @ts-ignore
                public abstract getName(): string;
                // @ts-ignore
                public abstract getId(): number;
                /**
                 * The full id is a combination of the id and data.
                 */
                // @ts-ignore
                public getFullId(): number;
                // @ts-ignore
                public addVelocityToEntity(entity: cn.nukkit.entity.Entity, vector: cn.nukkit.math.Vector3): void;
                // @ts-ignore
                public getDamage(): number;
                // @ts-ignore
                public setDamage(meta: number): void;
                // @ts-ignore
                public setDamage(meta: java.lang.Integer): void;
                // @ts-ignore
                public position(v: cn.nukkit.level.Position): void;
                // @ts-ignore
                public getDrops(item: cn.nukkit.item.Item): cn.nukkit.item.Item[];
                // @ts-ignore
                public getBreakTime(item: cn.nukkit.item.Item, player: cn.nukkit.Player): number;
                // @ts-ignore
                public getBreakTime(item: cn.nukkit.item.Item): number;
                // @ts-ignore
                public canBeBrokenWith(item: cn.nukkit.item.Item): boolean;
                // @ts-ignore
                public getSide(face: cn.nukkit.math.BlockFace): cn.nukkit.block.Block;
                // @ts-ignore
                public getSide(face: cn.nukkit.math.BlockFace, step: number): cn.nukkit.block.Block;
                // @ts-ignore
                public up(): cn.nukkit.block.Block;
                // @ts-ignore
                public up(step: number): cn.nukkit.block.Block;
                // @ts-ignore
                public down(): cn.nukkit.block.Block;
                // @ts-ignore
                public down(step: number): cn.nukkit.block.Block;
                // @ts-ignore
                public north(): cn.nukkit.block.Block;
                // @ts-ignore
                public north(step: number): cn.nukkit.block.Block;
                // @ts-ignore
                public south(): cn.nukkit.block.Block;
                // @ts-ignore
                public south(step: number): cn.nukkit.block.Block;
                // @ts-ignore
                public east(): cn.nukkit.block.Block;
                // @ts-ignore
                public east(step: number): cn.nukkit.block.Block;
                // @ts-ignore
                public west(): cn.nukkit.block.Block;
                // @ts-ignore
                public west(step: number): cn.nukkit.block.Block;
                // @ts-ignore
                public toString(): string;
                // @ts-ignore
                public collidesWithBB(bb: cn.nukkit.math.AxisAlignedBB): boolean;
                // @ts-ignore
                public collidesWithBB(bb: cn.nukkit.math.AxisAlignedBB, collisionBB: boolean): boolean;
                // @ts-ignore
                public onEntityCollide(entity: cn.nukkit.entity.Entity): void;
                // @ts-ignore
                public getBoundingBox(): cn.nukkit.math.AxisAlignedBB;
                // @ts-ignore
                public getCollisionBoundingBox(): cn.nukkit.math.AxisAlignedBB;
                // @ts-ignore
                protected recalculateBoundingBox(): cn.nukkit.math.AxisAlignedBB;
                // @ts-ignore
                public getMinX(): number;
                // @ts-ignore
                public getMinY(): number;
                // @ts-ignore
                public getMinZ(): number;
                // @ts-ignore
                public getMaxX(): number;
                // @ts-ignore
                public getMaxY(): number;
                // @ts-ignore
                public getMaxZ(): number;
                // @ts-ignore
                protected recalculateCollisionBoundingBox(): cn.nukkit.math.AxisAlignedBB;
                // @ts-ignore
                public calculateIntercept(pos1: cn.nukkit.math.Vector3, pos2: cn.nukkit.math.Vector3): cn.nukkit.level.MovingObjectPosition;
                // @ts-ignore
                public getSaveId(): string;
                // @ts-ignore
                public setMetadata(metadataKey: string, newMetadataValue: cn.nukkit.metadata.MetadataValue): void;
                // @ts-ignore
                public getMetadata(metadataKey: string): java.util.List;
                // @ts-ignore
                public hasMetadata(metadataKey: string): boolean;
                // @ts-ignore
                public removeMetadata(metadataKey: string, owningPlugin: cn.nukkit.plugin.Plugin): void;
                // @ts-ignore
                public clone(): cn.nukkit.block.Block;
                // @ts-ignore
                public getWeakPower(face: cn.nukkit.math.BlockFace): number;
                // @ts-ignore
                public getStrongPower(side: cn.nukkit.math.BlockFace): number;
                // @ts-ignore
                public isPowerSource(): boolean;
                // @ts-ignore
                public getLocationHash(): string;
                // @ts-ignore
                public getDropExp(): number;
                // @ts-ignore
                public isNormalBlock(): boolean;
                // @ts-ignore
                public static equals(b1: cn.nukkit.block.Block, b2: cn.nukkit.block.Block): boolean;
                // @ts-ignore
                public static equals(b1: cn.nukkit.block.Block, b2: cn.nukkit.block.Block, checkDamage: boolean): boolean;
                // @ts-ignore
                public toItem(): cn.nukkit.item.Item;
                // @ts-ignore
                public canSilkTouch(): boolean;
            }
        }
    }
}
