declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface PufferFish extends org.bukkit.entity.Fish {
                /**
                 * Returns the current puff state of this fish (i.e. how inflated it is).
                 */
                 getPuffState(): number;
                /**
                 * Sets the current puff state of this fish (i.e. how inflated it is).
                 */
                 setPuffState(state: number): void;
            }
        }
    }
}
