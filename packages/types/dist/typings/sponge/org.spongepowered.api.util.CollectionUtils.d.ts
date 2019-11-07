// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                // @ts-ignore
                 class CollectionUtils extends java.lang.Object {
                    /**
                     * Attempts to use native {@link Object#clone()} methods on available map
                     * types. If a map cannot be properly cloned, a new {@link HashMap} is
                     * returned.
                     */
                    // @ts-ignore
                    public static copyMap(map: java.util.Map): java.util.Map;
                    /**
                     * Attempts to use native {@link Object#clone()} methods on available map
                     * types. If a list cannot be properly cloned, a new {@link ArrayList} is
                     * returned.
                     */
                    // @ts-ignore
                    public static copyList(list: java.util.List): java.util.List;
                }
            }
        }
    }
}
