declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace resourcepack {
                // @ts-ignore
                interface ResourcePack {
                    /**
                     * Gets the URI associated with this ResourcePack.
                     */
                    // @ts-ignore
                     getUri(): any;
                    /**
                     * Gets the name of this resource pack. This is the filename of the pack
                     * zipfile, with all non-word characters removed. Note to implementers: The
                     * name <strong>MUST</strong> be calculated like above, or this API will not
                     * work.
                     */
                    // @ts-ignore
                     getName(): string;
                    /**
                     * Gets the ID of this resource pack.
                     */
                    // @ts-ignore
                     getId(): string;
                    /**
                     * If this resource pack was initialized through
                     * {@link ResourcePackFactory#fromUri(URI)}, the hash, as calculated with
                     * <code>com.google.common.hash.Hashing.sha1().hashBytes(
                     * com.google.common.io.Files.toByteArray(resourcepackfile)
                     * ).toString();</code>.
                     */
                    // @ts-ignore
                     getHash(): any;
                }
            }
        }
    }
}
