declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Raider extends org.bukkit.entity.Monster {
                /**
                 * Gets the block the raider is targeting to patrol.
                 */
                // @ts-ignore
                 getPatrolTarget(): org.bukkit.block.Block;
                /**
                 * Sets the block the raider is targeting to patrol.
                 */
                // @ts-ignore
                 setPatrolTarget(block: org.bukkit.block.Block): void;
                /**
                 * Gets whether this entity is a patrol leader.
                 */
                // @ts-ignore
                 isPatrolLeader(): boolean;
                /**
                 * Sets whether this entity is a patrol leader.
                 */
                // @ts-ignore
                 setPatrolLeader(leader: boolean): void;
            }
        }
    }
}
