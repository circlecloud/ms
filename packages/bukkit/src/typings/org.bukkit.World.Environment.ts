declare namespace org {
    namespace bukkit {
        namespace World {
            class Environment {
                public static NORMAL: org.bukkit.World.Environment;
                public static NETHER: org.bukkit.World.Environment;
                public static THE_END: org.bukkit.World.Environment;
                public static values(): org.bukkit.World.Environment[];
                public static valueOf(name: string): org.bukkit.World.Environment;
                /**
                 * Gets the dimension ID of this environment
                 */
                public getId(): number;
                /**
                 * Get an environment by ID
                 */
                public static getEnvironment(id: number): org.bukkit.World.Environment;
            }
        }
    }
}
