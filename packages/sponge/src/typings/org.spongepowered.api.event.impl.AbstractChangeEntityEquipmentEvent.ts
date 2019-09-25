declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace impl {
                    // @ts-ignore
                    abstract class AbstractChangeEntityEquipmentEvent extends org.spongepowered.api.event.impl.AbstractEvent implements org.spongepowered.api.event.entity.ChangeEntityEquipmentEvent {
                        constructor()
                        // @ts-ignore
                        protected transaction: org.spongepowered.api.data.Transaction;
                        // @ts-ignore
                        public getOriginalItemStack(): any;
                        // @ts-ignore
                        public getItemStack(): any;
                        // @ts-ignore
                        public getTransaction(): org.spongepowered.api.data.Transaction;
                    }
                }
            }
        }
    }
}
