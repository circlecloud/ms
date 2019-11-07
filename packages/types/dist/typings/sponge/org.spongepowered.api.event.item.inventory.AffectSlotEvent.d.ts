// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        // @ts-ignore
                        interface AffectSlotEvent extends org.spongepowered.api.event.item.inventory.AffectItemStackEvent {
                            // @ts-ignore
                             getTransactions(): java.util.List;
                            // @ts-ignore
                             filter(predicate: java.util.function$.Predicate): java.util.List;
                        }
                    }
                }
            }
        }
    }
}
