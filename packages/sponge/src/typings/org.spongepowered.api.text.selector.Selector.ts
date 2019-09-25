declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace selector {
                    // @ts-ignore
                    interface Selector {
                        /**
                         * Creates a {@link Selector.Builder}.
                         */
                        // @ts-ignore
                         builder(): org.spongepowered.api.text.selector.Selector.Builder;
                        /**
                         * Parses a {@link Selector} from the given selector string.
                         */
                        // @ts-ignore
                         parse(selector: string): org.spongepowered.api.text.selector.Selector;
                        /**
                         * Fetch completions for a selector command argument.
                         */
                        // @ts-ignore
                         complete(selector: string): any[] /*java.util.List*/;
                        /**
                         * Returns the type of this {@link Selector}.
                         */
                        // @ts-ignore
                         getType(): org.spongepowered.api.text.selector.SelectorType;
                        /**
                         * Returns the argument value for the specified {@link ArgumentType} in this
                         * {@link Selector}. May be used for {@link ArgumentType.Invertible}, but
                         * the inverted state must be checked with
                         * {@link #isInverted(ArgumentType.Invertible)}.
                         */
                        // @ts-ignore
                         get(type: org.spongepowered.api.text.selector.ArgumentType): any;
                        /**
                         * Returns the {@link Argument} for the specified {@link ArgumentType} in
                         * this {@link Selector}.
                         */
                        // @ts-ignore
                         getArgument(type: org.spongepowered.api.text.selector.ArgumentType): any;
                        /**
                         * Returns the {@link Argument.Invertible} for the specified
                         * {@link ArgumentType.Invertible} in this {@link Selector}.
                         */
                        // @ts-ignore
                         getArgument(type: org.spongepowered.api.text.selector.ArgumentType.Invertible): any;
                        /**
                         * Returns the arguments for this {@link Selector}.
                         */
                        // @ts-ignore
                         getArguments(): any[] /*java.util.List*/;
                        /**
                         * Checks for the presence of {@code type} in this {@link Selector}.
                         */
                        // @ts-ignore
                         has(type: org.spongepowered.api.text.selector.ArgumentType): boolean;
                        /**
                         * Checks for the inversion state of {@code type} in this {@link Selector}.
                         */
                        // @ts-ignore
                         isInverted(type: org.spongepowered.api.text.selector.ArgumentType.Invertible): boolean;
                        /**
                         * Resolves this {@link Selector} to a list of entities around the origin.
                         * <p>The returned set may be ordered based on distance from the origin
                         * (with the nearest first).</p>
                         */
                        // @ts-ignore
                         resolve(origin: org.spongepowered.api.command.CommandSource): any[] /*java.util.Set*/;
                        /**
                         * Resolves this {@link Selector} to a list of entities around (0|0|0) in
                         * the given {@link Extent Extent(s)}.
                         * <p>The returned set may be ordered based on distance from the origin
                         * (with the nearest first).</p>
                         */
                        // @ts-ignore
                         resolve(extent: org.spongepowered.api.world.extent.Extent): any[] /*java.util.Set*/;
                        /**
                         * Resolves this {@link Selector} to a list of entities around (0|0|0) in
                         * the given {@link Extent Extent(s)}.
                         * <p>The returned set may be ordered based on distance from the origin
                         * (with the nearest first).</p>
                         */
                        // @ts-ignore
                         resolve(extent: any[] /*java.util.Collection*/): any[] /*java.util.Set*/;
                        /**
                         * Resolves this {@link Selector} to a list of entities around the given
                         * {@link Location}.
                         * <p>The returned set may be ordered based on distance from the origin
                         * (with the nearest first).</p>
                         */
                        // @ts-ignore
                         resolve(location: org.spongepowered.api.world.Location): any[] /*java.util.Set*/;
                        /**
                         * Resolves this {@link Selector} to a list of entities around the origin.
                         */
                        // @ts-ignore
                         resolveForce(origin: org.spongepowered.api.command.CommandSource): any[] /*java.util.Set*/;
                        /**
                         * Resolves this {@link Selector} to a list of entities around (0|0|0) in
                         * the given {@link Extent Extent(s)}.
                         */
                        // @ts-ignore
                         resolveForce(extent: org.spongepowered.api.world.extent.Extent): any[] /*java.util.Set*/;
                        /**
                         * Resolves this {@link Selector} to a list of entities around (0|0|0) in
                         * the given {@link Extent Extent(s)}.
                         */
                        // @ts-ignore
                         resolveForce(extent: any[] /*java.util.Collection*/): any[] /*java.util.Set*/;
                        /**
                         * Resolves this {@link Selector} to a list of entities around the given
                         * {@link Location}.
                         */
                        // @ts-ignore
                         resolveForce(location: org.spongepowered.api.world.Location): any[] /*java.util.Set*/;
                        /**
                         * Converts this {@link Selector} to a valid selector string.
                         */
                        // @ts-ignore
                         toPlain(): string;
                        /**
                         * Returns a new {@link org.spongepowered.api.text.selector.Selector.Builder}
                         * with the content of this selector. This can be used to edit an immutable
                         * {@link Selector} instance.
                         */
                        // @ts-ignore
                         toBuilder(): org.spongepowered.api.text.selector.Selector.Builder;
                    }
                }
            }
        }
    }
}
