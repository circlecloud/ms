declare namespace org {
    namespace bukkit {
        // @ts-ignore
         class NamespacedKey extends java.lang.Object {
            /**
             * Create a key in a specific namespace.
             */
            // @ts-ignore
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
            // @ts-ignore
            constructor(plugin: org.bukkit.plugin.Plugin, key: string)
            // @ts-ignore
            public static MINECRAFT: string;
            // @ts-ignore
            public static BUKKIT: string;
            // @ts-ignore
            public getNamespace(): string;
            // @ts-ignore
            public getKey(): string;
            // @ts-ignore
            public hashCode(): number;
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            // @ts-ignore
            public toString(): string;
            /**
             * Return a new random key in the {@link #BUKKIT} namespace.
             */
            // @ts-ignore
            public static randomKey(): org.bukkit.NamespacedKey;
            /**
             * Get a key in the Minecraft namespace.
             */
            // @ts-ignore
            public static minecraft(key: string): org.bukkit.NamespacedKey;
        }
    }
}
