declare namespace org {
    namespace bukkit {
        namespace metadata {
            abstract class MetadataValueAdapter {
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
