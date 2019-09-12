declare namespace org {
    namespace bukkit {
        namespace entity {
            class PufferFish {
                /**
                 * Returns the current puff state of this fish (i.e. how inflated it is).
                 */
                public getPuffState(): number;
                /**
                 * Sets the current puff state of this fish (i.e. how inflated it is).
                 */
                public setPuffState(state: number): void;
            }
        }
    }
}
