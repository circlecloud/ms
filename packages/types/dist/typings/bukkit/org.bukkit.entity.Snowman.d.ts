// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Snowman extends org.bukkit.entity.Golem {
                /**
                 * Gets whether this snowman is in "derp mode", meaning it is not wearing a
                 * pumpkin.
                 */
                // @ts-ignore
                 isDerp(): boolean;
                /**
                 * Sets whether this snowman is in "derp mode", meaning it is not wearing a
                 * pumpkin. NOTE: This value is not persisted to disk and will therefore
                 * reset when the chunk is reloaded.
                 */
                // @ts-ignore
                 setDerp(derpMode: boolean): void;
            }
        }
    }
}
