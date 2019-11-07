// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace item {
                namespace inventory {
                    namespace type {
                        // @ts-ignore
                        interface Interactable extends org.spongepowered.api.item.inventory.Inventory {
                            /**
                             * Gets whether the specified player can interact with this object.
                             */
                            // @ts-ignore
                             canInteractWith(player: org.spongepowered.api.entity.living.player.Player): boolean;
                        }
                    }
                }
            }
        }
    }
}
