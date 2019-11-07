declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        // @ts-ignore
                        interface EnchantItemEvent extends org.spongepowered.api.event.item.inventory.TargetContainerEvent {
                            /**
                             * The seed for pseudo random enchantment generation.
                             */
                            // @ts-ignore
                             getSeed(): number;
                            /**
                             * The enchantment option. 1, 2 or 3
                             */
                            // @ts-ignore
                             getOption(): number;
                        }
                    }
                }
            }
        }
    }
}
