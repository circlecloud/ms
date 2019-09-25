declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace item {
                    namespace inventory {
                        // @ts-ignore
                        interface AffectSlotEvent extends org.spongepowered.api.event.item.inventory.AffectItemStackEvent {
                            // @ts-ignore
                             getTransactions(): any[] /*java.util.List*/;
                            // @ts-ignore
                             filter(predicate: any): any[] /*java.util.List*/;
                        }
                    }
                }
            }
        }
    }
}
