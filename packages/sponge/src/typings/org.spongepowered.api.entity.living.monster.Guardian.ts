declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace monster {
                        // @ts-ignore
                        interface Guardian extends org.spongepowered.api.entity.living.Aquatic, org.spongepowered.api.entity.living.monster.Monster {
                            /**
                             * Gets the target of the guardian's beam or {@link Optional#empty()} otherwise.
                             */
                            // @ts-ignore
                             getBeamTarget(): any;
                            /**
                             * Sets the target of the guardian's beam. Setting a null value removes the
                             * target.
                             */
                            // @ts-ignore
                             setBeamTarget(entity: org.spongepowered.api.entity.living.Living): void;
                        }
                    }
                }
            }
        }
    }
}
