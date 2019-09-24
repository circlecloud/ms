declare namespace org {
    namespace bukkit {
        // @ts-ignore
         class NamespacedKey {
            /**
             * Create a key in a specific namespace.
             */
            constructor(namespace: string, key: string)
            /**
             * Create a key in the plugin's namespace.
             * <p>
             * Namespaces may only contain lowercase alphanumeric characters, periods,
             * underscores, and hyphens.
             * <p>
             * Keys may only contain lowercase alphanumeric characters, periods,
             * underscores, hyphens, and forward slashes.
             */
            constructor(plugin: org.bukkit.plugin.Plugin, key: string)
            public static MINECRAFT: string;
            public static BUKKIT: string;
            public getNamespace(): string;
            public getKey(): string;
            public hashCode(): number;
            public equals(obj: any): boolean;
            public toString(): string;
            /**
             * Return a new random key in the {@link #BUKKIT} namespace.
             */
            public static randomKey(): org.bukkit.NamespacedKey;
            /**
             * Get a key in the Minecraft namespace.
             */
            public static minecraft(key: string): org.bukkit.NamespacedKey;
        }
    }
}
