declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    // @ts-ignore
                    interface DirectionRelativePropertyHolder {
                        /**
                         * Gets the desired property from this property holder when facing towards
                         * the desired {@link Direction}.
                         */
                        // @ts-ignore
                         getProperty(direction: org.spongepowered.api.util.Direction, clazz: java.lang.Class): java.util.Optional;
                    }
                }
            }
        }
    }
}
