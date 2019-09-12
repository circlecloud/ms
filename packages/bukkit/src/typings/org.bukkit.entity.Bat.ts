declare namespace org {
    namespace bukkit {
        namespace entity {
            class Bat {
                /**
                 * Checks the current waking state of this bat.
                 * <p>
                 * This does not imply any persistence of state past the method call.
                 */
                public isAwake(): boolean;
                /**
                 * This method modifies the current waking state of this bat.
                 * <p>
                 * This does not prevent a bat from spontaneously awaking itself, or from
                 * reattaching itself to a block.
                 */
                public setAwake(state: boolean): void;
            }
        }
    }
}
