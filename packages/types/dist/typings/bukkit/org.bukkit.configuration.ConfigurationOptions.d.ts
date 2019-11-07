// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace configuration {
            // @ts-ignore
             class ConfigurationOptions extends java.lang.Object {
                // @ts-ignore
                constructor(configuration: org.bukkit.configuration.Configuration)
                /**
                 * Returns the {@link Configuration} that this object is responsible for.
                 */
                // @ts-ignore
                public configuration(): org.bukkit.configuration.Configuration;
                /**
                 * Gets the char that will be used to separate {@link
                 * ConfigurationSection}s
                 * <p>
                 * This value does not affect how the {@link Configuration} is stored,
                 * only in how you access the data. The default value is '.'.
                 */
                // @ts-ignore
                public pathSeparator(): string;
                /**
                 * Sets the char that will be used to separate {@link
                 * ConfigurationSection}s
                 * <p>
                 * This value does not affect how the {@link Configuration} is stored,
                 * only in how you access the data. The default value is '.'.
                 */
                // @ts-ignore
                public pathSeparator(value: string): org.bukkit.configuration.ConfigurationOptions;
                /**
                 * Checks if the {@link Configuration} should copy values from its default
                 * {@link Configuration} directly.
                 * <p>
                 * If this is true, all values in the default Configuration will be
                 * directly copied, making it impossible to distinguish between values
                 * that were set and values that are provided by default. As a result,
                 * {@link ConfigurationSection#contains(java.lang.String)} will always
                 * return the same value as {@link
                 * ConfigurationSection#isSet(java.lang.String)}. The default value is
                 * false.
                 */
                // @ts-ignore
                public copyDefaults(): boolean;
                /**
                 * Sets if the {@link Configuration} should copy values from its default
                 * {@link Configuration} directly.
                 * <p>
                 * If this is true, all values in the default Configuration will be
                 * directly copied, making it impossible to distinguish between values
                 * that were set and values that are provided by default. As a result,
                 * {@link ConfigurationSection#contains(java.lang.String)} will always
                 * return the same value as {@link
                 * ConfigurationSection#isSet(java.lang.String)}. The default value is
                 * false.
                 */
                // @ts-ignore
                public copyDefaults(value: boolean): org.bukkit.configuration.ConfigurationOptions;
            }
        }
    }
}
