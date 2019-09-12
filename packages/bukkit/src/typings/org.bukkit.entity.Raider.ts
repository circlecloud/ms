declare namespace org {
    namespace bukkit {
        namespace entity {
            class Raider {
                /**
                 * Gets the block the raider is targeting to patrol.
                 */
                public getPatrolTarget(): org.bukkit.block.Block;
                /**
                 * Sets the block the raider is targeting to patrol.
                 */
                public setPatrolTarget(block: org.bukkit.block.Block): void;
                /**
                 * Gets whether this entity is a patrol leader.
                 */
                public isPatrolLeader(): boolean;
                /**
                 * Sets whether this entity is a patrol leader.
                 */
                public setPatrolLeader(leader: boolean): void;
            }
        }
    }
}
