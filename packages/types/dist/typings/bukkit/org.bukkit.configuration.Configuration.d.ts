// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace configuration {
            // @ts-ignore
            interface Configuration extends org.bukkit.configuration.ConfigurationSection {
                /**
                 * Sets the default value of the given path as provided.
                 * <p>
                 * If no source {@link Configuration} was provided as a default
                 * collection, then a new {@link MemoryConfiguration} will be created to
                 * hold the new default value.
                 * <p>
                 * If value is null, the value will be removed from the default
                 * Configuration source.
                 */
                // @ts-ignore
                 addDefault(path: string, value: java.lang.Object): void;
                /**
                 * Sets the default values of the given paths as provided.
                 * <p>
                 * If no source {@link Configuration} was provided as a default
                 * collection, then a new {@link MemoryConfiguration} will be created to
                 * hold the new default values.
                 */
                // @ts-ignore
                 addDefaults(defaults: java.util.Map): void;
                /**
                 * Sets the default values of the given paths as provided.
                 * <p>
                 * If no source {@link Configuration} was provided as a default
                 * collection, then a new {@link MemoryConfiguration} will be created to
                 * hold the new default value.
                 * <p>
                 * This method will not hold a reference to the specified Configuration,
                 * nor will it automatically update if that Configuration ever changes. If
                 * you require this, you should set the default source with {@link
                 * #setDefaults(org.bukkit.configuration.Configuration)}.
                 */
                // @ts-ignore
                 addDefaults(defaults: org.bukkit.configuration.Configuration): void;
                /**
                 * Sets the source of all default values for this {@link Configuration}.
                 * <p>
                 * If a previous source was set, or previous default values were defined,
                 * then they will not be copied to the new source.
                 */
                // @ts-ignore
                 setDefaults(defaults: org.bukkit.configuration.Configuration): void;
                /**
                 * Gets the source {@link Configuration} for this configuration.
                 * <p>
                 * If no configuration source was set, but default values were added, then
                 * a {@link MemoryConfiguration} will be returned. If no source was set
                 * and no defaults were set, then this method will return null.
                 */
                // @ts-ignore
                 getDefaults(): org.bukkit.configuration.Configuration;
                /**
                 * Gets the {@link ConfigurationOptions} for this {@link Configuration}.
                 * <p>
                 * All setters through this method are chainable.
                 */
                // @ts-ignore
                 options(): org.bukkit.configuration.ConfigurationOptions;
            }
        }
    }
}
