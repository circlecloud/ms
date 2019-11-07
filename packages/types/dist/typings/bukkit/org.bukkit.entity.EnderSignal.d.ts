declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface EnderSignal extends org.bukkit.entity.Entity {
                /**
                 * Get the location this EnderSignal is moving towards.
                 */
                // @ts-ignore
                 getTargetLocation(): org.bukkit.Location;
                /**
                 * Set the {@link Location} this EnderSignal is moving towards.
                 * <br>
                 * When setting a new target location, the {@link #getDropItem()} resets to
                 * a random value and the despawn timer gets set back to 0.
                 */
                // @ts-ignore
                 setTargetLocation(location: org.bukkit.Location): void;
                /**
                 * Gets if the EnderSignal should drop an item on death.<br>
                 * If {@code true}, it will drop an item. If {@code false}, it will shatter.
                 */
                // @ts-ignore
                 getDropItem(): boolean;
                /**
                 * Sets if the EnderSignal should drop an item on death; or if it should
                 * shatter.
                 */
                // @ts-ignore
                 setDropItem(drop: boolean): void;
                /**
                 * Gets the amount of time this entity has been alive (in ticks).
                 * <br>
                 * When this number is greater than 80, it will despawn on the next tick.
                 */
                // @ts-ignore
                 getDespawnTimer(): number;
                /**
                 * Set how long this entity has been alive (in ticks).
                 * <br>
                 * When this number is greater than 80, it will despawn on the next tick.
                 */
                // @ts-ignore
                 setDespawnTimer(timer: number): void;
            }
        }
    }
}
