declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    // @ts-ignore
                    interface CommandBlock extends org.bukkit.block.data.Directional {
                        /**
                         * Gets the value of the 'conditional' property.
                         */
                         isConditional(): boolean;
                        /**
                         * Sets the value of the 'conditional' property.
                         */
                         setConditional(conditional: boolean): void;
                    }
                }
            }
        }
    }
}
