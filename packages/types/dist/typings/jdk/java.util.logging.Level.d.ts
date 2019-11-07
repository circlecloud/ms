declare namespace java {
    namespace util {
        namespace logging {
            // @ts-ignore
             class Level extends java.lang.Object {
                /**
                 * Create a named Level with a given integer value.
                 * <p>
                 * Note that this constructor is "protected" to allow subclassing.
                 * In general clients of logging should use one of the constant Level
                 * objects such as SEVERE or FINEST.  However, if clients need to
                 * add new logging levels, they may subclass Level and define new
                 * constants.
                 */
                // @ts-ignore
                constructor(name: string, value: number)
                /**
                 * Create a named Level with a given integer value and a
                 * given localization resource name.
                 * <p>
                 */
                // @ts-ignore
                constructor(name: string, value: number, resourceBundleName: string)
                // @ts-ignore
                public static OFF: java.util.logging.Level;
                // @ts-ignore
                public static SEVERE: java.util.logging.Level;
                // @ts-ignore
                public static WARNING: java.util.logging.Level;
                // @ts-ignore
                public static INFO: java.util.logging.Level;
                // @ts-ignore
                public static CONFIG: java.util.logging.Level;
                // @ts-ignore
                public static FINE: java.util.logging.Level;
                // @ts-ignore
                public static FINER: java.util.logging.Level;
                // @ts-ignore
                public static FINEST: java.util.logging.Level;
                // @ts-ignore
                public static ALL: java.util.logging.Level;
                /**
                 * Return the level's localization resource bundle name, or
                 * null if no localization bundle is defined.
                 */
                // @ts-ignore
                public getResourceBundleName(): string;
                /**
                 * Return the non-localized string name of the Level.
                 */
                // @ts-ignore
                public getName(): string;
                /**
                 * Return the localized string name of the Level, for
                 * the current default locale.
                 * <p>
                 * If no localization information is available, the
                 * non-localized name is returned.
                 */
                // @ts-ignore
                public getLocalizedName(): string;
                /**
                 * Returns a string representation of this Level.
                 */
                // @ts-ignore
                public toString(): string;
                /**
                 * Get the integer value for this level.  This integer value
                 * can be used for efficient ordering comparisons between
                 * Level objects.
                 */
                // @ts-ignore
                public intValue(): number;
                /**
                 * Parse a level name string into a Level.
                 * <p>
                 * The argument string may consist of either a level name
                 * or an integer value.
                 * <p>
                 * For example:
                 * <ul>
                 * <li>     "SEVERE"
                 * <li>     "1000"
                 * </ul>
                 */
                // @ts-ignore
                public static parse(name: string): java.util.logging.Level;
                /**
                 * Compare two objects for value equality.
                 */
                // @ts-ignore
                public equals(ox: java.lang.Object): boolean;
                /**
                 * Generate a hashcode.
                 */
                // @ts-ignore
                public hashCode(): number;
            }
        }
    }
}
