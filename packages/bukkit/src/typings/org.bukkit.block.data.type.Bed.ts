declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    // @ts-ignore
                    interface Bed extends org.bukkit.block.data.Directional {
                        /**
                         * Gets the value of the 'part' property.
                         */
                         getPart(): org.bukkit.block.data.type.Bed.Part;
                        /**
                         * Sets the value of the 'part' property.
                         */
                         setPart(part: org.bukkit.block.data.type.Bed.Part): void;
                        /**
                         * Gets the value of the 'occupied' property.
                         */
                         isOccupied(): boolean;
                    }
                }
            }
        }
    }
}
