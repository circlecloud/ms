declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace impl {
                    // @ts-ignore
                    abstract class AbstractAffectEntityEvent extends org.spongepowered.api.event.impl.AbstractEvent implements org.spongepowered.api.event.entity.AffectEntityEvent {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        protected entities: java.util.List;
                        // @ts-ignore
                        protected entitySnapshots: java.util.List;
                        // @ts-ignore
                        public getEntitySnapshots(): java.util.List;
                    }
                }
            }
        }
    }
}
