// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace BreedEntityEvent {
                        // @ts-ignore
                        interface FindMate extends org.spongepowered.api.event.entity.BreedEntityEvent, org.spongepowered.api.event.TristateResult {
                            /**
                             * Returns the {@link Animal} this entity will mate with.
                             */
                            // @ts-ignore
                             getMatingEntity(): org.spongepowered.api.entity.living.animal.Animal;
                        }
                    }
                }
            }
        }
    }
}
