declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                // @ts-ignore
                interface BlockData {
                    /**
                     * Get the Material represented by this block data.
                     */
                    // @ts-ignore
                     getMaterial(): org.bukkit.Material;
                    /**
                     * Gets a string, which when passed into a method such as
                     * {@link Server#createBlockData(java.lang.String)} will unambiguously
                     * recreate this instance.
                     */
                    // @ts-ignore
                     getAsString(): string;
                    /**
                     * Gets a string, which when passed into a method such as
                     * {@link Server#createBlockData(java.lang.String)} will recreate this or a
                     * similar instance where unspecified states (if any) may be optionally
                     * omitted. If this instance was parsed and states are omitted, this exact
                     * instance will be creatable when parsed again, else their equality cannot
                     * be guaranteed.
                     * <p>
                     * This method will only take effect for BlockData instances created by
                     * methods such as {@link Server#createBlockData(String)} or any similar
                     * method whereby states are optionally defined. If otherwise, the result of
                     * {@link #getAsString()} will be returned. The following behaviour would be
                     * expected:
                     * <pre>{@code
                     * String dataString = "minecraft:chest[waterlogged=true]"
                     * BlockData data = Bukkit.createBlockData(dataString);
                     * dataString.equals(data.getAsString(true)); // This would return true
                     * dataString.equals(data.getAsString(false)); // This would return false as all states are present
                     * dataString.equals(data.getAsString()); // This is equivalent to the above, "getAsString(false)"
                     * }</pre>
                     */
                    // @ts-ignore
                     getAsString(hideUnspecified: boolean): string;
                    /**
                     * Merges all explicitly set states from the given data with this BlockData.
                     * <br>
                     * Note that the given data MUST have been created from one of the String
                     * parse methods, e.g. {@link Server#createBlockData(java.lang.String)} and
                     * not have been subsequently modified.
                     * <br>
                     * Note also that the block types must match identically.
                     */
                    // @ts-ignore
                     merge(data: org.bukkit.block.data.BlockData): org.bukkit.block.data.BlockData;
                    /**
                     * Checks if the specified BlockData matches this block data.
                     * <br>
                     * The semantics of this method are such that for manually created or
                     * modified BlockData it has the same effect as
                     * {@link Object#equals(java.lang.Object)}, whilst for parsed data (that to
                     * which {@link #merge(org.bukkit.block.data.BlockData)} applies, it will
                     * return true when the type and all explicitly set states match.
                     * <br>
                     * <b>Note that these semantics mean that a.matches(b) may not be the same
                     * as b.matches(a)</b>
                     */
                    // @ts-ignore
                     matches(data: org.bukkit.block.data.BlockData): boolean;
                    /**
                     * Returns a copy of this BlockData.
                     */
                    // @ts-ignore
                     clone(): org.bukkit.block.data.BlockData;
                }
            }
        }
    }
}
