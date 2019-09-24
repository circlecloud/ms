declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface EnderSignal extends org.bukkit.entity.Entity {
                /**
                 * Get the location this EnderSignal is moving towards.
                 */
                 getTargetLocation(): org.bukkit.Location;
                /**
                 * Set the {@link Location} this EnderSignal is moving towards.
                 * <br>
                 * When setting a new target location, the {@link #getDropItem()} resets to
                 * a random value and the despawn timer gets set back to 0.
                 */
                 setTargetLocation(location: org.bukkit.Location): void;
                /**
                 * Gets if the EnderSignal should drop an item on death.<br>
                 * If {@code true}, it will drop an item. If {@code false}, it will shatter.
                 */
                 getDropItem(): boolean;
                /**
                 * Sets if the EnderSignal should drop an item on death; or if it should
                 * shatter.
                 */
                 setDropItem(drop: boolean): void;
                /**
                 * Gets the amount of time this entity has been alive (in ticks).
                 * <br>
                 * When this number is greater than 80, it will despawn on the next tick.
                 */
                 getDespawnTimer(): number;
                /**
                 * Set how long this entity has been alive (in ticks).
                 * <br>
                 * When this number is greater than 80, it will despawn on the next tick.
                 */
                 setDespawnTimer(timer: number): void;
            }
        }
    }
}
