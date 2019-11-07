declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace world {
                    // @ts-ignore
                    interface ChangeWorldGameRuleEvent extends org.spongepowered.api.event.world.TargetWorldEvent, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets the original value of the GameRule.
                         */
                        // @ts-ignore
                         getOriginalValue(): string;
                        /**
                         * Gets the new value of the GameRule.
                         */
                        // @ts-ignore
                         getValue(): string;
                        /**
                         * Gets the name of this GameRule.
                         */
                        // @ts-ignore
                         getName(): string;
                    }
                }
            }
        }
    }
}
