declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                // @ts-ignore
                 class Tuple {
                    /**
                     * Creates a new {@link Tuple}.
                     */
                    constructor(first: any, second: any)
                    /**
                     * Creates a new {@link Tuple} with the desired {@code first} and
                     * {@code second} objects.
                     */
                    // @ts-ignore
                    public static of(first: any, second: any): org.spongepowered.api.util.Tuple;
                    /**
                     * Gets the first object, otherwise known as "key".
                     */
                    // @ts-ignore
                    public getFirst(): any;
                    /**
                     * Gets the second object, otherwise known as "value".
                     */
                    // @ts-ignore
                    public getSecond(): any;
                    // @ts-ignore
                    public toString(): string;
                    // @ts-ignore
                    public hashCode(): number;
                    // @ts-ignore
                    public equals(obj: any): boolean;
                }
            }
        }
    }
}
