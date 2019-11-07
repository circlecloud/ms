// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Bat extends org.bukkit.entity.Ambient {
                /**
                 * Checks the current waking state of this bat.
                 * <p>
                 * This does not imply any persistence of state past the method call.
                 */
                // @ts-ignore
                 isAwake(): boolean;
                /**
                 * This method modifies the current waking state of this bat.
                 * <p>
                 * This does not prevent a bat from spontaneously awaking itself, or from
                 * reattaching itself to a block.
                 */
                // @ts-ignore
                 setAwake(state: boolean): void;
            }
        }
    }
}
