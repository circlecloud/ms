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
                         getChildArchetypes(): any[] /*java.util.List*/;
                        /**
                         * Returns all properties defined on this Archetype.
                         */
                        // @ts-ignore
                         getProperties(): Map<any, any> /*java.util.Map*/;
                        /**
                         * Returns the Property with given key.
                         */
                        // @ts-ignore
                         getProperty(key: string): any;
                        /**
                         * Returns the property with the Properties default key.
                         */
                        // @ts-ignore
                         getProperty(type: any): any;
                        /**
                         * Returns the property
                         */
                        // @ts-ignore
                         getProperty(type: any, key: string): any;
                    }
                }
            }
        }
    }
}
