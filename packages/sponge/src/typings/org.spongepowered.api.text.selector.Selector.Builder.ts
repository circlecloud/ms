declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace selector {
                    namespace Selector {
                        // @ts-ignore
                        interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                            /**
                             * Sets the type of this selector.
                             */
                            // @ts-ignore
                             type(type: org.spongepowered.api.text.selector.SelectorType): org.spongepowered.api.text.selector.Selector.Builder;
                            /**
                             * Adds some arguments to this selector.
                             */
                            // @ts-ignore
                             add(arguments: org.spongepowered.api.text.selector.Argument): org.spongepowered.api.text.selector.Selector.Builder;
                            /**
                             * Adds some arguments to this selector.
                             */
                            // @ts-ignore
                             add(arguments: any): org.spongepowered.api.text.selector.Selector.Builder;
                            /**
                             * Adds a new {@link Argument} with the specified {@link ArgumentType} and
                             * value to this selector.
                             */
                            // @ts-ignore
                             add(type: org.spongepowered.api.text.selector.ArgumentType, value: any): org.spongepowered.api.text.selector.Selector.Builder;
                            /**
                             * Removes the specified arguments, if they exist.
                             */
                            // @ts-ignore
                             remove(arguments: org.spongepowered.api.text.selector.Argument): org.spongepowered.api.text.selector.Selector.Builder;
                            /**
                             * Removes the specified arguments, if they exist.
                             */
                            // @ts-ignore
                             remove(arguments: any): org.spongepowered.api.text.selector.Selector.Builder;
                            /**
                             * Removes the arguments with the specified {@link ArgumentType}, if they
                             * exist.
                             */
                            // @ts-ignore
                             remove(types: org.spongepowered.api.text.selector.ArgumentType): org.spongepowered.api.text.selector.Selector.Builder;
                            /**
                             * Builds an immutable instance of the current state of this selector
                             * builder.
                             */
                            // @ts-ignore
                             build(): org.spongepowered.api.text.selector.Selector;
                        }
                    }
                }
            }
        }
    }
}
