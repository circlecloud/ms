declare namespace org {
    namespace bukkit {
        namespace metadata {
            // @ts-ignore
            abstract class MetadataValueAdapter implements org.bukkit.metadata.MetadataValue {
                constructor(owningPlugin: org.bukkit.plugin.Plugin)
                protected owningPlugin: any;
                public getOwningPlugin(): org.bukkit.plugin.Plugin;
                public asInt(): number;
                public asFloat(): number;
                public asDouble(): number;
                public asLong(): number;
                public asShort(): number;
                public asByte(): number;
                public asBoolean(): boolean;
                public asString(): string;
            }
        }
    }
}
