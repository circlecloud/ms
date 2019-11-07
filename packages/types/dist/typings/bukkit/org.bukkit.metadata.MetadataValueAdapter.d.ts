declare namespace org {
    namespace bukkit {
        namespace metadata {
            // @ts-ignore
            abstract class MetadataValueAdapter extends java.lang.Object implements org.bukkit.metadata.MetadataValue {
                // @ts-ignore
                constructor(owningPlugin: org.bukkit.plugin.Plugin)
                // @ts-ignore
                protected owningPlugin: java.lang.ref.WeakReference;
                // @ts-ignore
                public getOwningPlugin(): org.bukkit.plugin.Plugin;
                // @ts-ignore
                public asInt(): number;
                // @ts-ignore
                public asFloat(): number;
                // @ts-ignore
                public asDouble(): number;
                // @ts-ignore
                public asLong(): number;
                // @ts-ignore
                public asShort(): number;
                // @ts-ignore
                public asByte(): number;
                // @ts-ignore
                public asBoolean(): boolean;
                // @ts-ignore
                public asString(): string;
            }
        }
    }
}
