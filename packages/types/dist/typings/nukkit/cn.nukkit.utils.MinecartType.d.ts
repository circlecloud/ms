declare namespace cn {
    namespace nukkit {
        namespace utils {
            // @ts-ignore
             class MinecartType extends java.lang.Enum {
                // @ts-ignore
                public static MINECART_EMPTY: cn.nukkit.utils.MinecartType;
                // @ts-ignore
                public static MINECART_CHEST: cn.nukkit.utils.MinecartType;
                // @ts-ignore
                public static MINECART_FURNACE: cn.nukkit.utils.MinecartType;
                // @ts-ignore
                public static MINECART_TNT: cn.nukkit.utils.MinecartType;
                // @ts-ignore
                public static MINECART_MOB_SPAWNER: cn.nukkit.utils.MinecartType;
                // @ts-ignore
                public static MINECART_HOPPER: cn.nukkit.utils.MinecartType;
                // @ts-ignore
                public static MINECART_COMMAND_BLOCK: cn.nukkit.utils.MinecartType;
                // @ts-ignore
                public static MINECART_UNKNOWN: cn.nukkit.utils.MinecartType;
                // @ts-ignore
                public static values(): cn.nukkit.utils.MinecartType[];
                // @ts-ignore
                public static valueOf(name: string): cn.nukkit.utils.MinecartType;
                /**
                 * Get the variants of the current minecart
                 */
                // @ts-ignore
                public getId(): number;
                /**
                 * Get the name of the minecart variants
                 */
                // @ts-ignore
                public getName(): string;
                /**
                 * Gets if the minecart contains block
                 */
                // @ts-ignore
                public hasBlockInside(): boolean;
                /**
                 * Returns of an instance of Minecart-variants
                 */
                // @ts-ignore
                public static valueOf(types: number): cn.nukkit.utils.MinecartType;
            }
        }
    }
}
