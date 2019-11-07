declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                // @ts-ignore
                 class Tuple extends java.lang.Object {
                    /**
                     * Creates a new {@link Tuple}.
                     */
                    // @ts-ignore
                    constructor(first: java.lang.Object, second: java.lang.Object)
                    /**
                     * Creates a new {@link Tuple} with the desired {@code first} and
                     * {@code second} objects.
                     */
                    // @ts-ignore
                    public static of(first: java.lang.Object, second: java.lang.Object): org.spongepowered.api.util.Tuple;
                    /**
                     * Gets the first object, otherwise known as "key".
                     */
                    // @ts-ignore
                    public getFirst(): java.lang.Object;
                    /**
                     * Gets the second object, otherwise known as "value".
                     */
                    // @ts-ignore
                    public getSecond(): java.lang.Object;
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
