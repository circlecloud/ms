// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    // @ts-ignore
                    interface PropertyStore {
                        /**
                         * Gets the desired property for the provided {@link PropertyHolder} at
                         * present time. A property may not be the same throughout the course of
                         * the lifetime of the {@link PropertyHolder}.
                         */
                        // @ts-ignore
                         getFor(propertyHolder: org.spongepowered.api.data.property.PropertyHolder): java.util.Optional;
                        /**
                         * Gets the desired property for the provided {@link Location} at present
                         * time. A property may not be the same throughout the course of the
                         * lifetime of the {@link Location}.
                         */
                        // @ts-ignore
                         getFor(location: org.spongepowered.api.world.Location): java.util.Optional;
                        /**
                         * Gets the desired property for the provided {@link Location} at present
                         * time, in relation to the provided {@link Direction}.
                         */
                        // @ts-ignore
                         getFor(location: org.spongepowered.api.world.Location, direction: org.spongepowered.api.util.Direction): java.util.Optional;
                        /**
                         * Gets the priority of which this {@link PropertyStore} is used for
                         * handling a particular {@link PropertyHolder}. This is useful for
                         * multiple possible handlers of a {@link Property} being available
                         * in customized {@link PropertyHolder}s.
                         * <p>The priority is a measurement where the higher the priority, the
                         * sooner this {@link PropertyStore} is queried such that if
                         * {@link #getFor(PropertyHolder)} is called and returns a present value,
                         * that present value is returned. Usually, Sponge implemented
                         * {@link PropertyStore}s have a priority of <code>100</code>.</p>
                         */
                        // @ts-ignore
                         getPriority(): number;
                    }
                }
            }
        }
    }
}
