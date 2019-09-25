declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace profile {
                namespace property {
                    // @ts-ignore
                    interface ProfileProperty {
                        /**
                         * Creates a new property.
                         */
                        // @ts-ignore
                         of(name: string, value: string): org.spongepowered.api.profile.property.ProfileProperty;
                        /**
                         * Creates a new signed property.
                         * <p>Depending on the property name, if the signature is provided it must
                         * originate from Mojang.</p>
                         */
                        // @ts-ignore
                         of(name: string, value: string, signature: string): org.spongepowered.api.profile.property.ProfileProperty;
                        /**
                         * Gets the name of this property.
                         */
                        // @ts-ignore
                         getName(): string;
                        /**
                         * Gets the value of this property.
                         */
                        // @ts-ignore
                         getValue(): string;
                        /**
                         * Gets the signature of this property.
                         * <p>Depending on the property name, if the signature is provided it must
                         * originate from Mojang.</p>
                         */
                        // @ts-ignore
                         getSignature(): any;
                        /**
                         * Tests if this property has a signature.
                         */
                        // @ts-ignore
                         hasSignature(): boolean;
                    }
                }
            }
        }
    }
}
