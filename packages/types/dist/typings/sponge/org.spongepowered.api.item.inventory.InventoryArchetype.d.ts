declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    // @ts-ignore
                    interface InventoryArchetype extends org.spongepowered.api.CatalogType {
                        /**
                         * Creates a new {@link Builder} to build an {@link InventoryArchetype}.
                         */
                        // @ts-ignore
                         builder(): org.spongepowered.api.item.inventory.InventoryArchetype.Builder;
                        /**
                         * Gets all child InventoryArchetypes.
                         */
                        // @ts-ignore
                         getChildArchetypes(): java.util.List;
                        /**
                         * Returns all properties defined on this Archetype.
                         */
                        // @ts-ignore
                         getProperties(): java.util.Map;
                        /**
                         * Returns the Property with given key.
                         */
                        // @ts-ignore
                         getProperty(key: string): java.util.Optional;
                        /**
                         * Returns the property with the Properties default key.
                         */
                        // @ts-ignore
                         getProperty(type: java.lang.Class): java.util.Optional;
                        /**
                         * Returns the property
                         */
                        // @ts-ignore
                         getProperty(type: java.lang.Class, key: string): java.util.Optional;
                    }
                }
            }
        }
    }
}
