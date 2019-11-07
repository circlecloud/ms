declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace resourcepack {
                // @ts-ignore
                 class ResourcePacks extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Creates a {@link ResourcePack} from a URI and tries to download and hash
                     * it.
                     */
                    // @ts-ignore
                    public static fromUri(uri: java.net.URI): org.spongepowered.api.resourcepack.ResourcePack;
                    /**
                     * Creates a {@link ResourcePack} from a URI, without checking ("unchecked")
                     * if there is a valid pack at the URI.
                     */
                    // @ts-ignore
                    public static fromUriUnchecked(uri: java.net.URI): org.spongepowered.api.resourcepack.ResourcePack;
                }
            }
        }
    }
}
