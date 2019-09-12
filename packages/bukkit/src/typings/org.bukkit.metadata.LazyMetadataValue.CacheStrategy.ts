declare namespace org {
    namespace bukkit {
        namespace metadata {
            namespace LazyMetadataValue {
                class CacheStrategy {
                    public static CACHE_AFTER_FIRST_EVAL: org.bukkit.metadata.LazyMetadataValue.CacheStrategy;
                    public static NEVER_CACHE: org.bukkit.metadata.LazyMetadataValue.CacheStrategy;
                    public static CACHE_ETERNALLY: org.bukkit.metadata.LazyMetadataValue.CacheStrategy;
                    public static values(): org.bukkit.metadata.LazyMetadataValue.CacheStrategy[];
                    public static valueOf(name: string): org.bukkit.metadata.LazyMetadataValue.CacheStrategy;
                }
            }
        }
    }
}
