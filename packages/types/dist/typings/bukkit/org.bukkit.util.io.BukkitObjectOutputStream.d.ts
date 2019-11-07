declare namespace org {
    namespace bukkit {
        namespace util {
            namespace io {
                // @ts-ignore
                 class BukkitObjectOutputStream extends java.io.ObjectOutputStream {
                    /**
                     * Constructor provided to mirror super functionality.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Object output stream decoration constructor.
                     */
                    // @ts-ignore
                    constructor(out: java.io.OutputStream)
                    // @ts-ignore
                    protected replaceObject(obj: java.lang.Object): java.lang.Object;
                }
            }
        }
    }
}
