declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace advancement {
                // @ts-ignore
                interface Progressable {
                    /**
                     * Gets whether this {@link Progressable} is achieved.
                     */
                    // @ts-ignore
                     achieved(): boolean;
                    /**
                     * Gets the time that the {@link Progressable} was
                     * achieved if present.
                     */
                    // @ts-ignore
                     get(): any;
                    /**
                     * Grants this {@link Progressable}, if achieved before
                     * that time will be returned.
                     */
                    // @ts-ignore
                     grant(): any;
                    /**
                     * Revokes the {@link Progressable} status. The time that the {@link Progressable}
                     * was achieved before will be returned if present.
                     */
                    // @ts-ignore
                     revoke(): any;
                }
            }
        }
    }
}