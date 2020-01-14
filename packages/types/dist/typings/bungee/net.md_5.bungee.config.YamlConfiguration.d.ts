declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace config {
                // @ts-ignore
                 class YamlConfiguration extends net.md_5.bungee.config.ConfigurationProvider {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public save(config: net.md_5.bungee.config.Configuration, file: java.io.File): void;
                    // @ts-ignore
                    public save(config: net.md_5.bungee.config.Configuration, writer: java.io.Writer): void;
                    // @ts-ignore
                    public load(file: java.io.File): net.md_5.bungee.config.Configuration;
                    // @ts-ignore
                    public load(file: java.io.File, defaults: net.md_5.bungee.config.Configuration): net.md_5.bungee.config.Configuration;
                    // @ts-ignore
                    public load(reader: java.io.Reader): net.md_5.bungee.config.Configuration;
                    // @ts-ignore
                    public load(reader: java.io.Reader, defaults: net.md_5.bungee.config.Configuration): net.md_5.bungee.config.Configuration;
                    // @ts-ignore
                    public load(is: java.io.InputStream): net.md_5.bungee.config.Configuration;
                    // @ts-ignore
                    public load(is: java.io.InputStream, defaults: net.md_5.bungee.config.Configuration): net.md_5.bungee.config.Configuration;
                    // @ts-ignore
                    public load(string: string): net.md_5.bungee.config.Configuration;
                    // @ts-ignore
                    public load(string: string, defaults: net.md_5.bungee.config.Configuration): net.md_5.bungee.config.Configuration;
                }
            }
        }
    }
}
