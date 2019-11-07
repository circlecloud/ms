// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace entity {
            namespace memory {
                // @ts-ignore
                 class MemoryKey extends java.lang.Object implements org.bukkit.Keyed {
                    // @ts-ignore
                    public static HOME: org.bukkit.entity.memory.MemoryKey;
                    // @ts-ignore
                    public static MEETING_POINT: org.bukkit.entity.memory.MemoryKey;
                    // @ts-ignore
                    public static JOB_SITE: org.bukkit.entity.memory.MemoryKey;
                    // @ts-ignore
                    public static LAST_SLEPT: org.bukkit.entity.memory.MemoryKey;
                    // @ts-ignore
                    public static LAST_WORKED_AT_POI: org.bukkit.entity.memory.MemoryKey;
                    // @ts-ignore
                    public getKey(): org.bukkit.NamespacedKey;
                    /**
                     * Gets the class of values associated with this memory.
                     */
                    // @ts-ignore
                    public getMemoryClass(): java.lang.Class;
                    /**
                     * Returns a {@link MemoryKey} by a {@link NamespacedKey}.
                     */
                    // @ts-ignore
                    public static getByKey(namespacedKey: org.bukkit.NamespacedKey): org.bukkit.entity.memory.MemoryKey;
                    /**
                     * Returns the set of all MemoryKeys.
                     */
                    // @ts-ignore
                    public static values(): java.util.Set;
                }
            }
        }
    }
}
