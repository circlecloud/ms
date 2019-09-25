declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace golem {
                        // @ts-ignore
                        interface IronGolem extends org.spongepowered.api.entity.living.golem.Golem {
                            /**
                             * Gets the {@link Value} for whether this {@link IronGolem} was created
                             * by a {@link Player}.
                             */
                            // @ts-ignore
                             playerCreated(): org.spongepowered.api.data.value.mutable.Value;
                        }
                    }
                }
            }
        }
    }
}
