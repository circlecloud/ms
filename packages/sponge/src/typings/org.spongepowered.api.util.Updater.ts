declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                // @ts-ignore
                interface Updater {
                    /**
                     * Gets the numerical {@code version} that this {@link Updater}
                     * can accept.
                     */
                    // @ts-ignore
                     getInputVersion(): number;
                    /**
                     * The outputted {@code version} that this {@link Updater} will
                     * output to. Note that it is possible multiple updaters are able to
                     * cross between different versions.
                     */
                    // @ts-ignore
                     getOutputVersion(): number;
                    /**
                     * Attempts to update the content of {@code C} as long as the content
                     * version itself has been abided by.
                     */
                    // @ts-ignore
                     update(content: any): any;
                }
            }
        }
    }
}
