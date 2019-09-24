declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface TNTPrimed extends org.bukkit.entity.Explosive {
                /**
                 * Set the number of ticks until the TNT blows up after being primed.
                 */
                 setFuseTicks(fuseTicks: number): void;
                /**
                 * Retrieve the number of ticks until the explosion of this TNTPrimed
                 * entity
                 */
                 getFuseTicks(): number;
                /**
                 * Gets the source of this primed TNT. The source is the entity
                 * responsible for the creation of this primed TNT. (I.E. player ignites
                 * TNT with flint and steel.) Take note that this can be null if there is
                 * no suitable source. (created by the {@link
                 * org.bukkit.World#spawn(Location, Class)} method, for example.)
                 * <p>
                 * The source will become null if the chunk this primed TNT is in is
                 * unloaded then reloaded. The source entity may be invalid if for example
                 * it has since died or been unloaded. Callers should check
                 * {@link Entity#isValid()}.
                 */
                 getSource(): org.bukkit.entity.Entity;
            }
        }
    }
}
