declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                // @ts-ignore
                 class Coerce extends java.lang.Object {
                    /**
                     * Coerce the supplied object to a string.
                     */
                    // @ts-ignore
                    public static toString(obj: java.lang.Object): string;
                    /**
                     * Gets the given object as a {@link String}.
                     */
                    // @ts-ignore
                    public static asString(obj: java.lang.Object): java.util.Optional;
                    /**
                     * Coerce the supplied object to a list. Accepts lists and all types of 1D
                     * arrays. Also (naively) supports lists in Strings in a format like
                     * <code>{1,2,3,I,am,a,list}</code>
                     */
                    // @ts-ignore
                    public static toList(obj: java.lang.Object): java.util.List;
                    /**
                     * Gets the given object as a {@link List}.
                     */
                    // @ts-ignore
                    public static asList(obj: java.lang.Object): java.util.Optional;
                    /**
                     * Coerce the specified object to a list containing only objects of type
                     * specified by <code>ofClass</code>. Also coerces list values where
                     * possible.
                     */
                    // @ts-ignore
                    public static toListOf(obj: java.lang.Object, ofClass: java.lang.Class): java.util.List;
                    /**
                     * Coerce the supplied object to a boolean, matches strings such as "yes" as
                     * well as literal boolean values.
                     */
                    // @ts-ignore
                    public static toBoolean(obj: java.lang.Object): boolean;
                    /**
                     * Gets the given object as a {@link Boolean}.
                     */
                    // @ts-ignore
                    public static asBoolean(obj: java.lang.Object): java.util.Optional;
                    /**
                     * Coerce the supplied object to an integer, parse it if necessary.
                     */
                    // @ts-ignore
                    public static toInteger(obj: java.lang.Object): number;
                    /**
                     * Gets the given object as a {@link Integer}.
                     * <p>Note that this does not translate numbers spelled out as strings.</p>
                     */
                    // @ts-ignore
                    public static asInteger(obj: java.lang.Object): java.util.Optional;
                    /**
                     * Coerce the supplied object to a double-precision floating-point number,
                     * parse it if necessary.
                     */
                    // @ts-ignore
                    public static toDouble(obj: java.lang.Object): number;
                    /**
                     * Gets the given object as a {@link Double}.
                     * <p>Note that this does not translate numbers spelled out as strings.</p>
                     */
                    // @ts-ignore
                    public static asDouble(obj: java.lang.Object): java.util.Optional;
                    /**
                     * Coerce the supplied object to a single-precision floating-point number,
                     * parse it if necessary.
                     */
                    // @ts-ignore
                    public static toFloat(obj: java.lang.Object): number;
                    /**
                     * Gets the given object as a {@link Float}.
                     * <p>Note that this does not translate numbers spelled out as strings.</p>
                     */
                    // @ts-ignore
                    public static asFloat(obj: java.lang.Object): java.util.Optional;
                    /**
                     * Coerce the supplied object to a short number, parse it if necessary.
                     */
                    // @ts-ignore
                    public static toShort(obj: java.lang.Object): number;
                    /**
                     * Gets the given object as a {@link Short}.
                     * <p>Note that this does not translate numbers spelled out as strings.</p>
                     */
                    // @ts-ignore
                    public static asShort(obj: java.lang.Object): java.util.Optional;
                    /**
                     * Coerce the supplied object to a byte number, parse it if necessary.
                     */
                    // @ts-ignore
                    public static toByte(obj: java.lang.Object): number;
                    /**
                     * Gets the given object as a {@link Byte}.
                     * <p>Note that this does not translate numbers spelled out as strings.</p>
                     */
                    // @ts-ignore
                    public static asByte(obj: java.lang.Object): java.util.Optional;
                    /**
                     * Coerce the supplied object to a long number, parse it if necessary.
                     */
                    // @ts-ignore
                    public static toLong(obj: java.lang.Object): number;
                    /**
                     * Gets the given object as a {@link Long}.
                     * <p>Note that this does not translate numbers spelled out as strings.</p>
                     */
                    // @ts-ignore
                    public static asLong(obj: java.lang.Object): java.util.Optional;
                    /**
                     * Coerce the supplied object to a character, parse it if necessary.
                     */
                    // @ts-ignore
                    public static toChar(obj: java.lang.Object): string;
                    /**
                     * Gets the given object as a {@link Character}.
                     */
                    // @ts-ignore
                    public static asChar(obj: java.lang.Object): java.util.Optional;
                    /**
                     * Coerce the specified object to an enum of the supplied type, returns the
                     * first enum constant in the enum if parsing fails.
                     */
                    // @ts-ignore
                    public static toEnum(obj: java.lang.Object, enumClass: java.lang.Class): java.lang.Enum;
                    /**
                     * Coerce the specified object to an enum of the supplied type, returns the
                     * specified default value if parsing fails.
                     */
                    // @ts-ignore
                    public static toEnum(obj: java.lang.Object, enumClass: java.lang.Class, defaultValue: java.lang.Enum): java.lang.Enum;
                    /**
                     * Coerce the specified object to the specified pseudo-enum type using the
                     * supplied pseudo-enum dictionary class.
                     */
                    // @ts-ignore
                    public static toPseudoEnum(obj: java.lang.Object, pseudoEnumClass: java.lang.Class, dictionaryClass: java.lang.Class, defaultValue: java.lang.Object): java.lang.Object;
                    /**
                     * Coerce the supplied object to a Vector2i.
                     */
                    // @ts-ignore
                    public static toVector2i(obj: java.lang.Object): any /*Vector2i*/;
                }
            }
        }
    }
}
