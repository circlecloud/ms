// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace metadata {
            // @ts-ignore
             class LazyMetadataValue extends org.bukkit.metadata.MetadataValueAdapter {
                /**
                 * Initialized a LazyMetadataValue object with the default
                 * CACHE_AFTER_FIRST_EVAL cache strategy.
                 */
                // @ts-ignore
                constructor(owningPlugin: org.bukkit.plugin.Plugin, lazyValue: java.util.concurrent.Callable)
                /**
                 * Initializes a LazyMetadataValue object with a specific cache strategy.
                 */
                // @ts-ignore
                constructor(owningPlugin: org.bukkit.plugin.Plugin, cacheStrategy: org.bukkit.metadata.LazyMetadataValue.CacheStrategy, lazyValue: java.util.concurrent.Callable)
                /**
                 * Protected special constructor used by FixedMetadataValue to bypass
                 * standard setup.
                 */
                // @ts-ignore
                constructor(owningPlugin: org.bukkit.plugin.Plugin)
                // @ts-ignore
                public value(): java.lang.Object;
                // @ts-ignore
                public invalidate(): void;
            }
        }
    }
}
