// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace configuration {
            // @ts-ignore
             class MemoryConfiguration extends org.bukkit.configuration.MemorySection implements org.bukkit.configuration.Configuration {
                /**
                 * Creates an empty {@link MemoryConfiguration} with no default values.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates an empty {@link MemoryConfiguration} using the specified {@link
                 * Configuration} as a source for all default values.
                 */
                // @ts-ignore
                constructor(defaults: org.bukkit.configuration.Configuration)
                // @ts-ignore
                protected defaults: org.bukkit.configuration.Configuration;
                // @ts-ignore
                public addDefault(path: string, value: java.lang.Object): void;
                // @ts-ignore
                public addDefaults(defaults: java.util.Map): void;
                // @ts-ignore
                public addDefaults(defaults: org.bukkit.configuration.Configuration): void;
                // @ts-ignore
                public setDefaults(defaults: org.bukkit.configuration.Configuration): void;
                // @ts-ignore
                public getDefaults(): org.bukkit.configuration.Configuration;
                // @ts-ignore
                public getParent(): org.bukkit.configuration.ConfigurationSection;
                // @ts-ignore
                public options(): org.bukkit.configuration.MemoryConfigurationOptions;
            }
        }
    }
}
