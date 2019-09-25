declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace game {
                    namespace GameRegistryEvent {
                        // @ts-ignore
                        interface Register extends org.spongepowered.api.event.game.GameRegistryEvent, org.spongepowered.api.event.GenericEvent {
                            /**
                             * Gets the {@link CatalogType} that
                             * is allowing registrations.
                             */
                            // @ts-ignore
                             getCatalogType(): any;
                            /**
                             * Gets the registry module.
                             */
                            // @ts-ignore
                             getRegistryModule(): org.spongepowered.api.registry.CatalogRegistryModule;
                            /**
                             * Registers the {@link CatalogType}.
                             */
                            // @ts-ignore
                             register(catalogType: org.spongepowered.api.CatalogType): void;
                        }
                    }
                }
            }
        }
    }
}
