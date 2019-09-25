declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                // @ts-ignore
                 class AxisDirection {
                    // @ts-ignore
                    public static PLUS: org.spongepowered.api.util.AxisDirection;
                    // @ts-ignore
                    public static ZERO: org.spongepowered.api.util.AxisDirection;
                    // @ts-ignore
                    public static MINUS: org.spongepowered.api.util.AxisDirection;
                    // @ts-ignore
                    public static values(): org.spongepowered.api.util.AxisDirection[];
                    // @ts-ignore
                    public static valueOf(name: string): org.spongepowered.api.util.AxisDirection;
                    /**
                     * Gets the signum for this direction.
                     * <p>
                     * A positive direction has a value of 1, negative direction -1 and 0 for no
                     * direction.
                     * </p>
                     */
                    // @ts-ignore
                    public getSignum(): number;
                }
            }
        }
    }
}
