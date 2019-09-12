declare namespace org {
    namespace bukkit {
        namespace configuration {
            class MemoryConfigurationOptions {
                constructor(configuration: org.bukkit.configuration.MemoryConfiguration)
                public configuration(): org.bukkit.configuration.MemoryConfiguration;
                public copyDefaults(value: boolean): org.bukkit.configuration.MemoryConfigurationOptions;
                public pathSeparator(value: string): org.bukkit.configuration.MemoryConfigurationOptions;
            }
        }
    }
}
