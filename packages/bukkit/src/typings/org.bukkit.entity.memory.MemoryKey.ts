declare namespace org {
    namespace bukkit {
        namespace entity {
            namespace memory {
                // @ts-ignore
                 class MemoryKey implements org.bukkit.Keyed {
                    public static HOME: org.bukkit.entity.memory.MemoryKey;
                    public static MEETING_POINT: org.bukkit.entity.memory.MemoryKey;
                    public static JOB_SITE: org.bukkit.entity.memory.MemoryKey;
                    public static LAST_SLEPT: org.bukkit.entity.memory.MemoryKey;
                    public static LAST_WORKED_AT_POI: org.bukkit.entity.memory.MemoryKey;
                    public getKey(): org.bukkit.NamespacedKey;
                    /**
                     * Gets the class of values associated with this memory.
                     */
                    public getMemoryClass(): any;
                    /**
                     * Returns a {@link MemoryKey} by a {@link NamespacedKey}.
                     */
                    public static getByKey(namespacedKey: org.bukkit.NamespacedKey): org.bukkit.entity.memory.MemoryKey;
                    /**
                     * Returns the set of all MemoryKeys.
                     */
                    public static values(): any[] /*java.util.Set*/;
                }
            }
        }
    }
}
