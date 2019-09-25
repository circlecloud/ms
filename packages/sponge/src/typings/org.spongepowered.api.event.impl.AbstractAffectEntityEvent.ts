declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace impl {
                    // @ts-ignore
                    abstract class AbstractAffectEntityEvent extends org.spongepowered.api.event.impl.AbstractEvent implements org.spongepowered.api.event.entity.AffectEntityEvent {
                        constructor()
                        // @ts-ignore
                        protected entities: any[] /*java.util.List*/;
                        // @ts-ignore
                        protected entitySnapshots: any[] /*java.util.List*/;
                        // @ts-ignore
                        public getEntitySnapshots(): any[] /*java.util.List*/;
                    }
                }
            }
        }
    }
}
