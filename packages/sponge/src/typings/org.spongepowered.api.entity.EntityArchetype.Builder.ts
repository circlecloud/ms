declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace EntityArchetype {
                    // @ts-ignore
                    interface Builder extends org.spongepowered.api.data.persistence.DataBuilder {
                        // @ts-ignore
                         reset(): org.spongepowered.api.entity.EntityArchetype.Builder;
                        // @ts-ignore
                         from(value: org.spongepowered.api.entity.EntityArchetype): org.spongepowered.api.entity.EntityArchetype.Builder;
                        /**
                         * Sets all possible bits of information from the provided {@link Entity}.
                         */
                        // @ts-ignore
                         from(entity: org.spongepowered.api.entity.Entity): org.spongepowered.api.entity.EntityArchetype.Builder;
                        /**
                         * Sets the desired {@link EntityType} of the produced {@link EntityArchetype}.
                         */
                        // @ts-ignore
                         type(type: org.spongepowered.api.entity.EntityType): org.spongepowered.api.entity.EntityArchetype.Builder;
                        /**
                         * Sets the desired {@link EntityType} of the produced {@link EntityArchetype}.
                         */
                        // @ts-ignore
                         entityData(view: org.spongepowered.api.data.DataView): org.spongepowered.api.entity.EntityArchetype.Builder;
                        /**
                         * Sets the desired {@link EntityType} of the produced {@link EntityArchetype}.
                         */
                        // @ts-ignore
                         setData(manipulator: org.spongepowered.api.data.manipulator.DataManipulator): org.spongepowered.api.entity.EntityArchetype.Builder;
                        /**
                         * Sets the desired {@link EntityType} of the produced {@link EntityArchetype}.
                         */
                        // @ts-ignore
                         set(value: org.spongepowered.api.data.value.BaseValue): org.spongepowered.api.entity.EntityArchetype.Builder;
                        /**
                         * Sets the desired {@link EntityType} of the produced {@link EntityArchetype}.
                         */
                        // @ts-ignore
                         set(key: org.spongepowered.api.data.key.Key, value: any): org.spongepowered.api.entity.EntityArchetype.Builder;
                        /**
                         * Constructs a new {@link EntityArchetype}.
                         */
                        // @ts-ignore
                         build(): org.spongepowered.api.entity.EntityArchetype;
                    }
                }
            }
        }
    }
}
