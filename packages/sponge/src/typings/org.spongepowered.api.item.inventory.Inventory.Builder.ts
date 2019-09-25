declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace Inventory {
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                            /**
                             * Sets the base {@link InventoryArchetype} for the Inventory.
                             */
                            // @ts-ignore
                             of(archetype: org.spongepowered.api.item.inventory.InventoryArchetype): org.spongepowered.api.item.inventory.Inventory.Builder;
                            /**
                             * Sets an {@link InventoryProperty}.
                             */
                            // @ts-ignore
                             property(name: string, property: org.spongepowered.api.item.inventory.InventoryProperty): org.spongepowered.api.item.inventory.Inventory.Builder;
                            /**
                             * Sets an {@link InventoryProperty} with its default key.
                             */
                            // @ts-ignore
                             property(property: org.spongepowered.api.item.inventory.InventoryProperty): org.spongepowered.api.item.inventory.Inventory.Builder;
                            /**
                             * Sets the {@link Carrier} that carries the Inventory.
                             */
                            // @ts-ignore
                             withCarrier(carrier: org.spongepowered.api.item.inventory.Carrier): org.spongepowered.api.item.inventory.Inventory.Builder;
                            /**
                             * Registers a listener for given Event type
                             */
                            // @ts-ignore
                             listener(type: any, listener: any): org.spongepowered.api.item.inventory.Inventory.Builder;
                            /**
                             * Sets the InventoryArchetype and Properties according to the
                             * {@link Carrier}s Inventory.
                             */
                            // @ts-ignore
                             forCarrier(carrier: org.spongepowered.api.item.inventory.Carrier): org.spongepowered.api.item.inventory.Inventory.Builder;
                            /**
                             * Sets the InventoryArchetype and Properties for a default Inventory of
                             * given {@link Carrier}.
                             */
                            // @ts-ignore
                             forCarrier(carrier: any): org.spongepowered.api.item.inventory.Inventory.Builder;
                            /**
                             * Builds the {@link Inventory}.
                             */
                            // @ts-ignore
                             build(plugin: any): org.spongepowered.api.item.inventory.Inventory;
                        }
                    }
                }
            }
        }
    }
}
