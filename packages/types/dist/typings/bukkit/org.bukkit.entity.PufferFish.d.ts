// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface PufferFish extends org.bukkit.entity.Fish {
                /**
                 * Returns the current puff state of this fish (i.e. how inflated it is).
                 */
                // @ts-ignore
                 getPuffState(): number;
                /**
                 * Sets the current puff state of this fish (i.e. how inflated it is).
                 */
                // @ts-ignore
                 setPuffState(state: number): void;
            }
        }
    }
}
