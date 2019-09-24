declare namespace org {
    namespace bukkit {
        // @ts-ignore
         class SandstoneType {
            public static CRACKED: org.bukkit.SandstoneType;
            public static GLYPHED: org.bukkit.SandstoneType;
            public static SMOOTH: org.bukkit.SandstoneType;
            public static values(): org.bukkit.SandstoneType[];
            public static valueOf(name: string): org.bukkit.SandstoneType;
            /**
             * Gets the associated data value representing this type of sandstone
             */
            public getData(): number;
            /**
             * Gets the type of sandstone with the given data value
             */
            public static getByData(data: number): org.bukkit.SandstoneType;
        }
    }
}
