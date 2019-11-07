declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace hanging {
                    // @ts-ignore
                    interface LeashHitch extends org.spongepowered.api.entity.hanging.Hanging {
                        /**
                         * Gets the currently leashed {@link Entity}.
                         * <p>Usually, a {@link LeashHitch} will always exist so long as there is
                         * a leashed {@link Entity} attached. If the leash is broken, the leash
                         * hitch is removed.</p>
                         */
                        // @ts-ignore
                         getLeashedEntity(): org.spongepowered.api.entity.Entity;
                    }
                }
            }
        }
    }
}
