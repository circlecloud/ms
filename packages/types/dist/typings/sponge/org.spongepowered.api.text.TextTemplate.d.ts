declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                // @ts-ignore
                 class TextTemplate extends java.lang.Object implements org.spongepowered.api.text.TextRepresentable {
                    // @ts-ignore
                    public static DEFAULT_OPEN_ARG: string;
                    // @ts-ignore
                    public static DEFAULT_CLOSE_ARG: string;
                    // @ts-ignore
                    public static EMPTY: org.spongepowered.api.text.TextTemplate;
                    /**
                     * Returns the elements contained in this TextTemplate.
                     */
                    // @ts-ignore
                    public getElements(): java.util.List;
                    /**
                     * Returns the arguments contained within the TextTemplate.
                     */
                    // @ts-ignore
                    public getArguments(): java.util.Map;
                    /**
                     * Returns the string used for containing Args within the template.
                     */
                    // @ts-ignore
                    public getOpenArgString(): string;
                    /**
                     * Returns the string used for containing Args within the template.
                     */
                    // @ts-ignore
                    public getCloseArgString(): string;
                    /**
                     * Concatenates the specified {@link TextTemplate} to this template and
                     * returns the result. In the event that the two templates' open/close
                     * argument containers vary, this template's argument containers will be
                     * used.
                     */
                    // @ts-ignore
                    public concat(other: org.spongepowered.api.text.TextTemplate): org.spongepowered.api.text.TextTemplate;
                    /**
                     * Applies an empty map of parameters to this TextTemplate and returns the
                     * result in a {@link Text.Builder}.
                     */
                    // @ts-ignore
                    public apply(): org.spongepowered.api.text.Text.Builder;
                    /**
                     * Applies the specified parameters to this TextTemplate and returns the
                     * result in a {@link Text.Builder}.
                     */
                    // @ts-ignore
                    public apply(params: java.util.Map): org.spongepowered.api.text.Text.Builder;
                    /**
                     * Constructs a new TextTemplate for the given elements. The order of the
                     * elements is the order in which they will be appended to the result
                     * builder via {@link #apply(Map)}.
                     * <p>The provided elements may be of any type.</p>
                     * <p>In the case that an element is a {@link TextElement},
                     * {@link TextElement#applyTo(Text.Builder)} will be used to append the
                     * element to the builder.</p>
                     * <p>In the case that an element is an {@link Arg} the argument will be
                     * replaced with the {@link TextElement} provided by the corresponding
                     * parameter supplied by {@link #apply(Map)}</p>
                     * <p>In the case that an element is any other type, the parameter value's
                     * {@link Object#toString()} method will be used to create a {@link Text}
                     * object.</p>
                     */
                    // @ts-ignore
                    public static of(openArg: string, closeArg: string, elements: java.lang.Object): org.spongepowered.api.text.TextTemplate;
                    /**
                     * Constructs a new TextTemplate for the given elements. The order of the
                     * elements is the order in which they will be appended to the result
                     * builder via {@link #apply(Map)}.
                     * <p>The provided elements may be of any type.</p>
                     * <p>In the case that an element is a {@link TextElement},
                     * {@link TextElement#applyTo(Text.Builder)} will be used to append the
                     * element to the builder.</p>
                     * <p>In the case that an element is an {@link Arg} the argument will be
                     * replaced with the {@link TextElement} provided by the corresponding
                     * parameter supplied by {@link #apply(Map)}</p>
                     * <p>In the case that an element is any other type, the parameter value's
                     * {@link Object#toString()} method will be used to create a {@link Text}
                     * object.</p>
                     */
                    // @ts-ignore
                    public static of(elements: java.lang.Object): org.spongepowered.api.text.TextTemplate;
                    /**
                     * Returns the empty representation of a TextTemplate.
                     */
                    // @ts-ignore
                    public static of(): org.spongepowered.api.text.TextTemplate;
                    /**
                     * Constructs a new {@link Arg} to be supplied to {@link #of(Object...)}.
                     * This argument expects a {@link TextElement} parameter.
                     */
                    // @ts-ignore
                    public static arg(name: string): org.spongepowered.api.text.TextTemplate.Arg.Builder;
                    // @ts-ignore
                    public toText(): org.spongepowered.api.text.Text;
                    // @ts-ignore
                    public iterator(): java.util.Iterator;
                    // @ts-ignore
                    public toString(): string;
                    // @ts-ignore
                    public hashCode(): number;
                    // @ts-ignore
                    public equals(obj: java.lang.Object): boolean;
                }
            }
        }
    }
}
