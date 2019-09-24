declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Raider extends org.bukkit.entity.Monster {
                /**
                 * Gets the block the raider is targeting to patrol.
                 */
                 getPatrolTarget(): org.bukkit.block.Block;
                /**
                 * Sets the block the raider is targeting to patrol.
                 */
                 setPatrolTarget(block: org.bukkit.block.Block): void;
                /**
                 * Gets whether this entity is a patrol leader.
                 */
                 isPatrolLeader(): boolean;
                /**
                 * Sets whether this entity is a patrol leader.
                 */
                 setPatrolLeader(leader: boolean): void;
            }
        }
    }
}
