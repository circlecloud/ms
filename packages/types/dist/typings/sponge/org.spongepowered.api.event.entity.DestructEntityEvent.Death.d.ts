declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace DestructEntityEvent {
                        // @ts-ignore
                        interface Death extends org.spongepowered.api.event.entity.DestructEntityEvent, org.spongepowered.api.event.entity.living.TargetLivingEvent, org.spongepowered.api.event.Cancellable {
                            /**
                             * Applies the {@link DefaultGameRules#KEEP_INVENTORY} gamerule to this
                             * entity alone.
                             * <p>This only works for players</p>
                             */
                            // @ts-ignore
                             setKeepInventory(keepInventory: boolean): void;
                            /**
                             * Returns whether the inventory is kept after death.
                             * <p>By default this is the same as the
                             * {@link DefaultGameRules#KEEP_INVENTORY} gamerule.</p>
                             */
                            // @ts-ignore
                             getKeepInventory(): boolean;
                        }
                    }
                }
            }
        }
    }
}
