declare namespace org {
    namespace bukkit {
        namespace plugin {
            // @ts-ignore
            abstract class PluginBase implements org.bukkit.plugin.Plugin {
                constructor()
                public hashCode(): number;
                public equals(obj: any): boolean;
                public getName(): string;
            }
        }
    }
}
