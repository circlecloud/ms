declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace selector {
                    namespace Argument {
                        // @ts-ignore
                        interface Invertible extends org.spongepowered.api.text.selector.Argument {
                            /**
                             * Returns whether this {@link Argument} is inverted and will select all
                             * targets not matching the filter.
                             */
                            // @ts-ignore
                             isInverted(): boolean;
                            /**
                             * Inverts this {@link Argument.Invertible} argument and returns the new
                             * {@link Argument}. The new argument will select all targets this
                             * argument didn't select.
                             */
                            // @ts-ignore
                             invert(): org.spongepowered.api.text.selector.Argument.Invertible;
                        }
                    }
                }
            }
        }
    }
}
