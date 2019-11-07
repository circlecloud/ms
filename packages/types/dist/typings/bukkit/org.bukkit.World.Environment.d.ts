// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace World {
            // @ts-ignore
             class Environment extends java.lang.Enum {
                // @ts-ignore
                public static NORMAL: org.bukkit.World.Environment;
                // @ts-ignore
                public static NETHER: org.bukkit.World.Environment;
                // @ts-ignore
                public static THE_END: org.bukkit.World.Environment;
                // @ts-ignore
                public static values(): org.bukkit.World.Environment[];
                // @ts-ignore
                public static valueOf(name: string): org.bukkit.World.Environment;
                /**
                 * Gets the dimension ID of this environment
                 */
                // @ts-ignore
                public getId(): number;
                /**
                 * Get an environment by ID
                 */
                // @ts-ignore
                public static getEnvironment(id: number): org.bukkit.World.Environment;
            }
        }
    }
}
