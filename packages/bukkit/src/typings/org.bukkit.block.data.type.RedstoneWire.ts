declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    class RedstoneWire {
                        /**
                         * Checks the type of connection on the specified face.
                         */
                        public getFace(face: org.bukkit.block.BlockFace): org.bukkit.block.data.type.RedstoneWire.Connection;
                        /**
                         * Sets the type of connection on the specified face.
                         */
                        public setFace(face: org.bukkit.block.BlockFace, connection: org.bukkit.block.data.type.RedstoneWire.Connection): void;
                        /**
                         * Gets all of this faces which may be set on this block.
                         */
                        public getAllowedFaces(): any[] /*java.util.Set*/;
                    }
                }
            }
        }
    }
}
