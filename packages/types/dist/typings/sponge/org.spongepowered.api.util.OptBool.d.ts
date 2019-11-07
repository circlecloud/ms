declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                // @ts-ignore
                 class OptBool extends java.lang.Object {
                    // @ts-ignore
                    public static TRUE: java.util.Optional;
                    // @ts-ignore
                    public static FALSE: java.util.Optional;
                    // @ts-ignore
                    public static ABSENT: java.util.Optional;
                    /**
                     * Constructs a new {@code Optional&lt;Boolean&gt;} from the given boolean.
                     */
                    // @ts-ignore
                    public static of(bool: boolean): java.util.Optional;
                    /**
                     * Constructs a new {@code Optional&lt;Boolean&gt;} from the given {@link Boolean}.
                     */
                    // @ts-ignore
                    public static of(bool: java.lang.Boolean): java.util.Optional;
                    /**
                     * Coerces the given {@code Optional&lt;Boolean&gt;} into one of the three
                     * stored states.
                     */
                    // @ts-ignore
                    public static of(bool: java.util.Optional): java.util.Optional;
                }
            }
        }
    }
}
