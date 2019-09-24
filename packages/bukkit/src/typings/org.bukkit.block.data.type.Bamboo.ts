declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    // @ts-ignore
                    interface Bamboo extends org.bukkit.block.data.Ageable, org.bukkit.block.data.type.Sapling {
                        /**
                         * Gets the value of the 'leaves' property.
                         */
                         getLeaves(): org.bukkit.block.data.type.Bamboo.Leaves;
                        /**
                         * Sets the value of the 'leaves' property.
                         */
                         setLeaves(leaves: org.bukkit.block.data.type.Bamboo.Leaves): void;
                    }
                }
            }
        }
    }
}
