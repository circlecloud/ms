// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace world {
                    // @ts-ignore
                    interface ConstructWorldPropertiesEvent extends org.spongepowered.api.event.Event {
                        /**
                         * Gets the properties of the newly created world.
                         */
                        // @ts-ignore
                         getWorldProperties(): org.spongepowered.api.world.storage.WorldProperties;
                        /**
                         * Gets the {@link WorldArchetype} used to create the world.
                         */
                        // @ts-ignore
                         getWorldArchetype(): org.spongepowered.api.world.WorldArchetype;
                    }
                }
            }
        }
    }
}
