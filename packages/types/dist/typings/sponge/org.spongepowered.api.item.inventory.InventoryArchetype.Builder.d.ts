declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace InventoryArchetype {
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                            /**
                             * Adds a {@link InventoryTitle} to this Archetype.
                             */
                            // @ts-ignore
                             title(title: org.spongepowered.api.text.translation.Translation): org.spongepowered.api.item.inventory.InventoryArchetype.Builder;
                            /**
                             * Adds a {@link InventoryTitle} to this Archetype.
                             */
                            // @ts-ignore
                             title(title: org.spongepowered.api.text.Text): org.spongepowered.api.item.inventory.InventoryArchetype.Builder;
                            /**
                             * Adds an {@link InventoryProperty} to this Archetype.
                             */
                            // @ts-ignore
                             property(property: org.spongepowered.api.item.inventory.InventoryProperty): org.spongepowered.api.item.inventory.InventoryArchetype.Builder;
                            /**
                             * Adds an {@link InventoryArchetype} to this Archetype.
                             */
                            // @ts-ignore
                             with(archetype: org.spongepowered.api.item.inventory.InventoryArchetype): org.spongepowered.api.item.inventory.InventoryArchetype.Builder;
                            /**
                             * Adds multiple {@link InventoryArchetype} to this Archetype.
                             */
                            // @ts-ignore
                             with(archetypes: org.spongepowered.api.item.inventory.InventoryArchetype): org.spongepowered.api.item.inventory.InventoryArchetype.Builder;
                            /**
                             * Registers the InventoryArchetype.
                             */
                            // @ts-ignore
                             build(id: string, name: string): org.spongepowered.api.item.inventory.InventoryArchetype;
                        }
                    }
                }
            }
        }
    }
}
