declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    // @ts-ignore
                    interface RedstoneWire extends org.bukkit.block.data.AnaloguePowerable {
                        /**
                         * Checks the type of connection on the specified face.
                         */
                         getFace(face: org.bukkit.block.BlockFace): org.bukkit.block.data.type.RedstoneWire.Connection;
                        /**
                         * Sets the type of connection on the specified face.
                         */
                         setFace(face: org.bukkit.block.BlockFace, connection: org.bukkit.block.data.type.RedstoneWire.Connection): void;
                        /**
                         * Gets all of this faces which may be set on this block.
                         */
                         getAllowedFaces(): any[] /*java.util.Set*/;
                    }
                }
            }
        }
    }
}
