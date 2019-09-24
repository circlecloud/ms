declare namespace org {
    namespace bukkit {
        namespace configuration {
            // @ts-ignore
             class MemoryConfiguration extends org.bukkit.configuration.MemorySection implements org.bukkit.configuration.Configuration {
                /**
                 * Creates an empty {@link MemoryConfiguration} with no default values.
                 */
                constructor()
                /**
                 * Creates an empty {@link MemoryConfiguration} using the specified {@link
                 * Configuration} as a source for all default values.
                 */
                constructor(defaults: org.bukkit.configuration.Configuration)
                protected defaults: org.bukkit.configuration.Configuration;
                public addDefault(path: string, value: any): void;
                public addDefaults(defaults: Map<any, any> /*java.util.Map*/): void;
                public addDefaults(defaults: org.bukkit.configuration.Configuration): void;
                public setDefaults(defaults: org.bukkit.configuration.Configuration): void;
                public getDefaults(): org.bukkit.configuration.Configuration;
                public getParent(): org.bukkit.configuration.ConfigurationSection;
            }
        }
    }
}
