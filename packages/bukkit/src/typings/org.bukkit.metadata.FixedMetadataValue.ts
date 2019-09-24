declare namespace org {
    namespace bukkit {
        namespace metadata {
            // @ts-ignore
             class FixedMetadataValue {
                /**
                 * Initializes a FixedMetadataValue with an Object
                 */
                constructor(owningPlugin: org.bukkit.plugin.Plugin, value: any)
                public invalidate(): void;
                public value(): any;
            }
        }
    }
}
