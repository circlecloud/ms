declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace advancement {
                namespace criteria {
                    namespace trigger {
                        // @ts-ignore
                        interface Trigger extends org.spongepowered.api.CatalogType {
                            /**
                             * Creates a new {@link Builder} which can be used to create
                             * a {@link Trigger}.
                             */
                            // @ts-ignore
                             builder(): org.spongepowered.api.advancement.criteria.trigger.Trigger.Builder;
                            /**
                             * Gets the type of the used {@link FilteredTriggerConfiguration}.
                             */
                            // @ts-ignore
                             getConfigurationType(): java.lang.Class;
                            /**
                             * Triggers the {@link Trigger} for all
                             * the online {@link Player}s.
                             */
                            // @ts-ignore
                             trigger(): void;
                            /**
                             * Triggers the {@link Trigger} for the
                             * specified {@link Player}s.
                             */
                            // @ts-ignore
                             trigger(players: java.lang.Iterable): void;
                            /**
                             * Triggers the {@link Trigger} for the
                             * specified {@link Player}.
                             */
                            // @ts-ignore
                             trigger(player: org.spongepowered.api.entity.living.player.Player): void;
                        }
                    }
                }
            }
        }
    }
}
