declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                 class ProjectileHitEvent extends org.bukkit.event.entity.EntityEvent {
                    constructor(projectile: org.bukkit.entity.Projectile)
                    constructor(projectile: org.bukkit.entity.Projectile, hitEntity: org.bukkit.entity.Entity)
                    constructor(projectile: org.bukkit.entity.Projectile, hitBlock: org.bukkit.block.Block)
                    constructor(projectile: org.bukkit.entity.Projectile, hitEntity: org.bukkit.entity.Entity, hitBlock: org.bukkit.block.Block)
                    constructor(projectile: org.bukkit.entity.Projectile, hitEntity: org.bukkit.entity.Entity, hitBlock: org.bukkit.block.Block, hitFace: org.bukkit.block.BlockFace)
                    public getEntity(): org.bukkit.entity.Projectile;
                    /**
                     * Gets the block that was hit, if it was a block that was hit.
                     */
                    public getHitBlock(): org.bukkit.block.Block;
                    /**
                     * Gets the block face that was hit, if it was a block that was hit and the
                     * face was provided in the vent.
                     */
                    public getHitBlockFace(): org.bukkit.block.BlockFace;
                    /**
                     * Gets the entity that was hit, if it was an entity that was hit.
                     */
                    public getHitEntity(): org.bukkit.entity.Entity;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
