// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                // @ts-ignore
                interface ScheduledBlockUpdate extends org.spongepowered.api.world.Locatable {
                    /**
                     * Gets the amount of ticks until this SBU should cause the block to update.
                     */
                    // @ts-ignore
                     getTicks(): number;
                    /**
                     * Sets the amount of ticks until this SBU should cause the block to update.
                     */
                    // @ts-ignore
                     setTicks(ticks: number): void;
                    /**
                     * Gets the priority of this scheduled block update.
                     */
                    // @ts-ignore
                     getPriority(): number;
                    /**
                     * Sets the priority of this scheduled block update.
                     */
                    // @ts-ignore
                     setPriority(priority: number): void;
                }
            }
        }
    }
}
