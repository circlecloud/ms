// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class ProjectileHitEvent extends org.bukkit.event.entity.EntityEvent {
                    // @ts-ignore
                    constructor(projectile: org.bukkit.entity.Projectile)
                    // @ts-ignore
                    constructor(projectile: org.bukkit.entity.Projectile, hitEntity: org.bukkit.entity.Entity)
                    // @ts-ignore
                    constructor(projectile: org.bukkit.entity.Projectile, hitBlock: org.bukkit.block.Block)
                    // @ts-ignore
                    constructor(projectile: org.bukkit.entity.Projectile, hitEntity: org.bukkit.entity.Entity, hitBlock: org.bukkit.block.Block)
                    // @ts-ignore
                    constructor(projectile: org.bukkit.entity.Projectile, hitEntity: org.bukkit.entity.Entity, hitBlock: org.bukkit.block.Block, hitFace: org.bukkit.block.BlockFace)
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.Projectile;
                    /**
                     * Gets the block that was hit, if it was a block that was hit.
                     */
                    // @ts-ignore
                    public getHitBlock(): org.bukkit.block.Block;
                    /**
                     * Gets the block face that was hit, if it was a block that was hit and the
                     * face was provided in the vent.
                     */
                    // @ts-ignore
                    public getHitBlockFace(): org.bukkit.block.BlockFace;
                    /**
                     * Gets the entity that was hit, if it was an entity that was hit.
                     */
                    // @ts-ignore
                    public getHitEntity(): org.bukkit.entity.Entity;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
