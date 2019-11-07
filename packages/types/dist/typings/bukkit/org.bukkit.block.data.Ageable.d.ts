declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                // @ts-ignore
                interface Ageable extends org.bukkit.block.data.BlockData {
                    /**
                     * Gets the value of the 'age' property.
                     */
                    // @ts-ignore
                     getAge(): number;
                    /**
                     * Sets the value of the 'age' property.
                     */
                    // @ts-ignore
                     setAge(age: number): void;
                    /**
                     * Gets the maximum allowed value of the 'age' property.
                     */
                    // @ts-ignore
                     getMaximumAge(): number;
                }
            }
        }
    }
}
