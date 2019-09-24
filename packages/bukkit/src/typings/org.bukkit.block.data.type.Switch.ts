declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    // @ts-ignore
                    interface Switch extends org.bukkit.block.data.Directional, org.bukkit.block.data.Powerable {
                        /**
                         * Gets the value of the 'face' property.
                         */
                         getFace(): org.bukkit.block.data.type.Switch.Face;
                        /**
                         * Sets the value of the 'face' property.
                         */
                         setFace(face: org.bukkit.block.data.type.Switch.Face): void;
                    }
                }
            }
        }
    }
}
