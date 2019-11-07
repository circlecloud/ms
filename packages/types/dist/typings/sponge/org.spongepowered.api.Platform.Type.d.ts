declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace Platform {
                // @ts-ignore
                 class Type extends java.lang.Enum {
                    // @ts-ignore
                    public static CLIENT: org.spongepowered.api.Platform.Type;
                    // @ts-ignore
                    public static SERVER: org.spongepowered.api.Platform.Type;
                    // @ts-ignore
                    public static UNKNOWN: org.spongepowered.api.Platform.Type;
                    // @ts-ignore
                    public static values(): org.spongepowered.api.Platform.Type[];
                    // @ts-ignore
                    public static valueOf(name: string): org.spongepowered.api.Platform.Type;
                    /**
                     * Checks for whether the platform is {@link #SERVER}.
                     */
                    // @ts-ignore
                    public isServer(): boolean;
                    /**
                     * Checks for whether the platform is {@link #CLIENT}.
                     */
                    // @ts-ignore
                    public isClient(): boolean;
                    /**
                     * Checks for whether the platform is known.
                     */
                    // @ts-ignore
                    public isKnown(): boolean;
                }
            }
        }
    }
}
