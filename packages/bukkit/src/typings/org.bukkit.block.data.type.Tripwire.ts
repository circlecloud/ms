declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    // @ts-ignore
                    interface Tripwire extends org.bukkit.block.data.Attachable, org.bukkit.block.data.MultipleFacing, org.bukkit.block.data.Powerable {
                        /**
                         * Gets the value of the 'disarmed' property.
                         */
                         isDisarmed(): boolean;
                        /**
                         * Sets the value of the 'disarmed' property.
                         */
                         setDisarmed(disarmed: boolean): void;
                    }
                }
            }
        }
    }
}
