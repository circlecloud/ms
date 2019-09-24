declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    // @ts-ignore
                    interface StructureBlock extends org.bukkit.block.data.BlockData {
                        /**
                         * Gets the value of the 'mode' property.
                         */
                         getMode(): org.bukkit.block.data.type.StructureBlock.Mode;
                        /**
                         * Sets the value of the 'mode' property.
                         */
                         setMode(mode: org.bukkit.block.data.type.StructureBlock.Mode): void;
                    }
                }
            }
        }
    }
}
