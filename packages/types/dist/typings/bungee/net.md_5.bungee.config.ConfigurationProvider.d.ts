declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace config {
                // @ts-ignore
                abstract class ConfigurationProvider extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static getProvider(provider: java.lang.Class): net.md_5.bungee.config.ConfigurationProvider;
                    // @ts-ignore
                    public abstract save(config: net.md_5.bungee.config.Configuration, file: java.io.File): void;
                    // @ts-ignore
                    public abstract load(file: java.io.File): net.md_5.bungee.config.Configuration;
                }
            }
        }
    }
}
