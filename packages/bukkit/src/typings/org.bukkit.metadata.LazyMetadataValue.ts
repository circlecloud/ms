declare namespace org {
    namespace bukkit {
        namespace metadata {
            class LazyMetadataValue {
                /**
                 * Initialized a LazyMetadataValue object with the default
                 * CACHE_AFTER_FIRST_EVAL cache strategy.
                 */
                constructor(owningPlugin: org.bukkit.plugin.Plugin, lazyValue: any)
                /**
                 * Initializes a LazyMetadataValue object with a specific cache strategy.
                 */
                constructor(owningPlugin: org.bukkit.plugin.Plugin, cacheStrategy: org.bukkit.metadata.LazyMetadataValue.CacheStrategy, lazyValue: any)
                /**
                 * Protected special constructor used by FixedMetadataValue to bypass
                 * standard setup.
                 */
                constructor(owningPlugin: org.bukkit.plugin.Plugin)
                public value(): any;
                public invalidate(): void;
            }
        }
    }
}
