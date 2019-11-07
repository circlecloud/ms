// @ts-nocheck
declare namespace org {
    namespace bukkit {
        // @ts-ignore
         class SandstoneType extends java.lang.Enum {
            // @ts-ignore
            public static CRACKED: org.bukkit.SandstoneType;
            // @ts-ignore
            public static GLYPHED: org.bukkit.SandstoneType;
            // @ts-ignore
            public static SMOOTH: org.bukkit.SandstoneType;
            // @ts-ignore
            public static values(): org.bukkit.SandstoneType[];
            // @ts-ignore
            public static valueOf(name: string): org.bukkit.SandstoneType;
            /**
             * Gets the associated data value representing this type of sandstone
             */
            // @ts-ignore
            public getData(): number;
            /**
             * Gets the type of sandstone with the given data value
             */
            // @ts-ignore
            public static getByData(data: number): org.bukkit.SandstoneType;
        }
    }
}
