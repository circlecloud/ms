declare namespace cn {
    namespace nukkit {
        namespace entity {
            // @ts-ignore
            abstract class EntityLiving extends cn.nukkit.entity.Entity implements cn.nukkit.entity.EntityDamageable {
                // @ts-ignore
                constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                // @ts-ignore
                protected attackTime: number;
                // @ts-ignore
                protected invisible: boolean;
                // @ts-ignore
                protected movementSpeed: number;
                // @ts-ignore
                protected turtleTicks: number;
                // @ts-ignore
                protected getGravity(): number;
                // @ts-ignore
                protected getDrag(): number;
                // @ts-ignore
                protected initEntity(): void;
                // @ts-ignore
                public setHealth(health: number): void;
                // @ts-ignore
                public saveNBT(): void;
                // @ts-ignore
                public hasLineOfSight(entity: cn.nukkit.entity.Entity): boolean;
                // @ts-ignore
                public collidingWith(ent: cn.nukkit.entity.Entity): void;
                // @ts-ignore
                public attack(source: cn.nukkit.event.entity.EntityDamageEvent): boolean;
                // @ts-ignore
                public knockBack(attacker: cn.nukkit.entity.Entity, damage: number, x: number, z: number): void;
                // @ts-ignore
                public knockBack(attacker: cn.nukkit.entity.Entity, damage: number, x: number, z: number, base: number): void;
                // @ts-ignore
                public kill(): void;
                // @ts-ignore
                public entityBaseTick(): boolean;
                // @ts-ignore
                public entityBaseTick(tickDiff: number): boolean;
                // @ts-ignore
                public getDrops(): cn.nukkit.item.Item[];
                // @ts-ignore
                public getLineOfSight(maxDistance: number): cn.nukkit.block.Block[];
                // @ts-ignore
                public getLineOfSight(maxDistance: number, maxLength: number): cn.nukkit.block.Block[];
                // @ts-ignore
                public getLineOfSight(maxDistance: number, maxLength: number, transparent: java.util.Map): cn.nukkit.block.Block[];
                // @ts-ignore
                public getLineOfSight(maxDistance: number, maxLength: number, transparent: java.lang.Integer): cn.nukkit.block.Block[];
                // @ts-ignore
                public getTargetBlock(maxDistance: number): cn.nukkit.block.Block;
                // @ts-ignore
                public getTargetBlock(maxDistance: number, transparent: java.util.Map): cn.nukkit.block.Block;
                // @ts-ignore
                public getTargetBlock(maxDistance: number, transparent: java.lang.Integer): cn.nukkit.block.Block;
                // @ts-ignore
                public setMovementSpeed(speed: number): void;
                // @ts-ignore
                public getMovementSpeed(): number;
                // @ts-ignore
                public getAirTicks(): number;
                // @ts-ignore
                public setAirTicks(ticks: number): void;
            }
        }
    }
}
