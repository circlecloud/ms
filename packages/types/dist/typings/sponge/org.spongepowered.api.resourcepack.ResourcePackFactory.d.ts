// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace resourcepack {
                // @ts-ignore
                interface ResourcePackFactory {
                    /**
                     * Creates a {@link ResourcePack} from a URI and tries to download and hash
                     * it.
                     */
                    // @ts-ignore
                     fromUri(uri: java.net.URI): org.spongepowered.api.resourcepack.ResourcePack;
                    /**
                     * Creates a {@link ResourcePack} from a URI.
                     */
                    // @ts-ignore
                     fromUriUnchecked(uri: java.net.URI): org.spongepowered.api.resourcepack.ResourcePack;
                }
            }
        }
    }
}
