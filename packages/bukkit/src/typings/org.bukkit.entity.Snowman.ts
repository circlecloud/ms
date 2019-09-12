declare namespace org {
    namespace bukkit {
        namespace entity {
            class Snowman {
                /**
                 * Gets whether this snowman is in "derp mode", meaning it is not wearing a
                 * pumpkin.
                 */
                public isDerp(): boolean;
                /**
                 * Sets whether this snowman is in "derp mode", meaning it is not wearing a
                 * pumpkin. NOTE: This value is not persisted to disk and will therefore
                 * reset when the chunk is reloaded.
                 */
                public setDerp(derpMode: boolean): void;
            }
        }
    }
}
