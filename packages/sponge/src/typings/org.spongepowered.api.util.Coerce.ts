declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                // @ts-ignore
                 class Coerce {
                    /**
                     * Coerce the supplied object to a string.
                     */
                    // @ts-ignore
                    public static toString(obj: any): string;
                    /**
                     * Gets the given object as a {@link String}.
                     */
                    // @ts-ignore
                    public static asString(obj: any): any;
                    /**
                     * Coerce the supplied object to a list. Accepts lists and all types of 1D
                     * arrays. Also (naively) supports lists in Strings in a format like
                     * <code>{1,2,3,I,am,a,list}</code>
                     */
                    // @ts-ignore
                    public static toList(obj: any): any[] /*java.util.List*/;
                    /**
                     * Gets the given object as a {@link List}.
                     */
                    // @ts-ignore
                    public static asList(obj: any): any;
                    /**
                     * Coerce the specified object to a list containing only objects of type
                     * specified by <code>ofClass</code>. Also coerces list values where
                     * possible.
                     */
                    // @ts-ignore
                    public static toListOf(obj: any, ofClass: any): any[] /*java.util.List*/;
                    /**
                     * Coerce the supplied object to a boolean, matches strings such as "yes" as
                     * well as literal boolean values.
                     */
                    // @ts-ignore
                    public static toBoolean(obj: any): boolean;
                    /**
                     * Gets the given object as a {@link Boolean}.
                     */
                    // @ts-ignore
                    public static asBoolean(obj: any): any;
                    /**
                     * Coerce the supplied object to an integer, parse it if necessary.
                     */
                    // @ts-ignore
                    public static toInteger(obj: any): number;
                    /**
                     * Gets the given object as a {@link Integer}.
                     * <p>Note that this does not translate numbers spelled out as strings.</p>
                     */
                    // @ts-ignore
                    public static asInteger(obj: any): any;
                    /**
                     * Coerce the supplied object to a double-precision floating-point number,
                     * parse it if necessary.
                     */
                    // @ts-ignore
                    public static toDouble(obj: any): number;
                    /**
                     * Gets the given object as a {@link Double}.
                     * <p>Note that this does not translate numbers spelled out as strings.</p>
                     */
                    // @ts-ignore
                    public static asDouble(obj: any): any;
                    /**
                     * Coerce the supplied object to a single-precision floating-point number,
                     * parse it if necessary.
                     */
                    // @ts-ignore
                    public static toFloat(obj: any): number;
                    /**
                     * Gets the given object as a {@link Float}.
                     * <p>Note that this does not translate numbers spelled out as strings.</p>
                     */
                    // @ts-ignore
                    public static asFloat(obj: any): any;
                    /**
                     * Coerce the supplied object to a short number, parse it if necessary.
                     */
                    // @ts-ignore
                    public static toShort(obj: any): number;
                    /**
                     * Gets the given object as a {@link Short}.
                     * <p>Note that this does not translate numbers spelled out as strings.</p>
                     */
                    // @ts-ignore
                    public static asShort(obj: any): any;
                    /**
                     * Coerce the supplied object to a byte number, parse it if necessary.
                     */
                    // @ts-ignore
                    public static toByte(obj: any): number;
                    /**
                     * Gets the given object as a {@link Byte}.
                     * <p>Note that this does not translate numbers spelled out as strings.</p>
                     */
                    // @ts-ignore
                    public static asByte(obj: any): any;
                    /**
                     * Coerce the supplied object to a long number, parse it if necessary.
                     */
                    // @ts-ignore
                    public static toLong(obj: any): number;
                    /**
                     * Gets the given object as a {@link Long}.
                     * <p>Note that this does not translate numbers spelled out as strings.</p>
                     */
                    // @ts-ignore
                    public static asLong(obj: any): any;
                    /**
                     * Coerce the supplied object to a character, parse it if necessary.
                     */
                    // @ts-ignore
                    public static toChar(obj: any): string;
                    /**
                     * Gets the given object as a {@link Character}.
                     */
                    // @ts-ignore
                    public static asChar(obj: any): any;
                    /**
                     * Coerce the specified object to an enum of the supplied type, returns the
                     * first enum constant in the enum if parsing fails.
                     */
                    // @ts-ignore
                    public static toEnum(obj: any, enumClass: any): any;
                    /**
                     * Coerce the specified object to an enum of the supplied type, returns the
                     * specified default value if parsing fails.
                     */
                    // @ts-ignore
                    public static toEnum(obj: any, enumClass: any, defaultValue: any): any;
                    /**
                     * Coerce the specified object to the specified pseudo-enum type using the
                     * supplied pseudo-enum dictionary class.
                     */
                    // @ts-ignore
                    public static toPseudoEnum(obj: any, pseudoEnumClass: any, dictionaryClass: any, defaultValue: any): any;
                    /**
                     * Coerce the supplied object to a Vector2i.
                     */
                    // @ts-ignore
                    public static toVector2i(obj: any): any /*Vector2i*/;
                }
            }
        }
    }
}
