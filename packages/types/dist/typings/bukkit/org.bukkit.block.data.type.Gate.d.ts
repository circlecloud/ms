// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    // @ts-ignore
                    interface Gate extends org.bukkit.block.data.Directional, org.bukkit.block.data.Openable, org.bukkit.block.data.Powerable {
                        /**
                         * Gets the value of the 'in_wall' property.
                         */
                        // @ts-ignore
                         isInWall(): boolean;
                        /**
                         * Sets the value of the 'in_wall' property.
                         */
                        // @ts-ignore
                         setInWall(inWall: boolean): void;
                    }
                }
            }
        }
    }
}
