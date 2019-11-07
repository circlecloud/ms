declare namespace org {
    namespace bukkit {
        namespace util {
            // @ts-ignore
             class RayTraceResult extends java.lang.Object {
                /**
                 * Creates a RayTraceResult.
                 */
                // @ts-ignore
                constructor(hitPosition: org.bukkit.util.Vector)
                /**
                 * Creates a RayTraceResult.
                 */
                // @ts-ignore
                constructor(hitPosition: org.bukkit.util.Vector, hitBlockFace: org.bukkit.block.BlockFace)
                /**
                 * Creates a RayTraceResult.
                 */
                // @ts-ignore
                constructor(hitPosition: org.bukkit.util.Vector, hitBlock: org.bukkit.block.Block, hitBlockFace: org.bukkit.block.BlockFace)
                /**
                 * Creates a RayTraceResult.
                 */
                // @ts-ignore
                constructor(hitPosition: org.bukkit.util.Vector, hitEntity: org.bukkit.entity.Entity)
                /**
                 * Creates a RayTraceResult.
                 */
                // @ts-ignore
                constructor(hitPosition: org.bukkit.util.Vector, hitEntity: org.bukkit.entity.Entity, hitBlockFace: org.bukkit.block.BlockFace)
                /**
                 * Gets the exact position of the hit.
                 */
                // @ts-ignore
                public getHitPosition(): org.bukkit.util.Vector;
                /**
                 * Gets the hit block.
                 */
                // @ts-ignore
                public getHitBlock(): org.bukkit.block.Block;
                /**
                 * Gets the hit block face.
                 */
                // @ts-ignore
                public getHitBlockFace(): org.bukkit.block.BlockFace;
                /**
                 * Gets the hit entity.
                 */
                // @ts-ignore
                public getHitEntity(): org.bukkit.entity.Entity;
                // @ts-ignore
                public hashCode(): number;
                // @ts-ignore
                public equals(obj: java.lang.Object): boolean;
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
