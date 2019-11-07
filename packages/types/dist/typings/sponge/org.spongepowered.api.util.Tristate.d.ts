declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                // @ts-ignore
                 class Tristate extends java.lang.Enum {
                    // @ts-ignore
                    public static TRUE: org.spongepowered.api.util.Tristate;
                    // @ts-ignore
                    public static FALSE: org.spongepowered.api.util.Tristate;
                    // @ts-ignore
                    public static UNDEFINED: org.spongepowered.api.util.Tristate;
                    // @ts-ignore
                    public static values(): org.spongepowered.api.util.Tristate[];
                    // @ts-ignore
                    public static valueOf(name: string): org.spongepowered.api.util.Tristate;
                    /**
                     * Return the appropriate tristate for a given boolean value.
                     */
                    // @ts-ignore
                    public static fromBoolean(val: boolean): org.spongepowered.api.util.Tristate;
                    /**
                     * ANDs this tristate with another tristate.
                     */
                    // @ts-ignore
                    public and(other: org.spongepowered.api.util.Tristate): org.spongepowered.api.util.Tristate;
                    /**
                     * ORs this tristate with another tristate.
                     */
                    // @ts-ignore
                    public or(other: org.spongepowered.api.util.Tristate): org.spongepowered.api.util.Tristate;
                    /**
                     * Returns the boolean representation of this tristate.
                     */
                    // @ts-ignore
                    public asBoolean(): boolean;
                }
            }
        }
    }
}
