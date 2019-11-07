// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace TextTemplate {
                    namespace Arg {
                        // @ts-ignore
                         class Builder extends java.lang.Object {
                            /**
                             * Builds a new {@link Arg}. Note that it is not necessary to call
                             * this method when supplying an argument to a template. You may
                             * pass the builder to {@link TextTemplate#of(Object...)} directly.
                             */
                            // @ts-ignore
                            public build(): org.spongepowered.api.text.TextTemplate.Arg;
                            /**
                             * Sets whether the Arg should be optional (false by default).
                             */
                            // @ts-ignore
                            public optional(optional: boolean): org.spongepowered.api.text.TextTemplate.Arg.Builder;
                            /**
                             * Makes the Arg optional.
                             */
                            // @ts-ignore
                            public optional(): org.spongepowered.api.text.TextTemplate.Arg.Builder;
                            /**
                             * Sets the default value for the Argument. The argument must by
                             * optional in order for this value to be used.
                             */
                            // @ts-ignore
                            public defaultValue(defaultValue: org.spongepowered.api.text.Text): org.spongepowered.api.text.TextTemplate.Arg.Builder;
                            /**
                             * Sets the "base" format of the Arg. This acts as a default format
                             * when no formatting data is provided by the parameter.
                             */
                            // @ts-ignore
                            public format(format: org.spongepowered.api.text.format.TextFormat): org.spongepowered.api.text.TextTemplate.Arg.Builder;
                            /**
                             * Sets the "base" color of the Arg. This acts as a default color
                             * when no color data is provided by the parameter.
                             */
                            // @ts-ignore
                            public color(color: org.spongepowered.api.text.format.TextColor): org.spongepowered.api.text.TextTemplate.Arg.Builder;
                            /**
                             * Sets the "base" style of the Arg. This acts as a default style
                             * when no style data is provided by the parameter.
                             */
                            // @ts-ignore
                            public style(style: org.spongepowered.api.text.format.TextStyle): org.spongepowered.api.text.TextTemplate.Arg.Builder;
                            // @ts-ignore
                            public toString(): string;
                        }
                    }
                }
            }
        }
    }
}
