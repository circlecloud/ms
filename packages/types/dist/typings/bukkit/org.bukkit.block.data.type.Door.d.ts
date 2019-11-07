declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    // @ts-ignore
                    interface Door extends org.bukkit.block.data.Bisected, org.bukkit.block.data.Directional, org.bukkit.block.data.Openable, org.bukkit.block.data.Powerable {
                        /**
                         * Gets the value of the 'hinge' property.
                         */
                        // @ts-ignore
                         getHinge(): org.bukkit.block.data.type.Door.Hinge;
                        /**
                         * Sets the value of the 'hinge' property.
                         */
                        // @ts-ignore
                         setHinge(hinge: org.bukkit.block.data.type.Door.Hinge): void;
                    }
                }
            }
        }
    }
}
