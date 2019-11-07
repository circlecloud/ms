declare namespace org {
    namespace bukkit {
        // @ts-ignore
         class StructureType extends java.lang.Object {
            // @ts-ignore
            public static MINESHAFT: org.bukkit.StructureType;
            // @ts-ignore
            public static VILLAGE: org.bukkit.StructureType;
            // @ts-ignore
            public static NETHER_FORTRESS: org.bukkit.StructureType;
            // @ts-ignore
            public static STRONGHOLD: org.bukkit.StructureType;
            // @ts-ignore
            public static JUNGLE_PYRAMID: org.bukkit.StructureType;
            // @ts-ignore
            public static OCEAN_RUIN: org.bukkit.StructureType;
            // @ts-ignore
            public static DESERT_PYRAMID: org.bukkit.StructureType;
            // @ts-ignore
            public static IGLOO: org.bukkit.StructureType;
            // @ts-ignore
            public static SWAMP_HUT: org.bukkit.StructureType;
            // @ts-ignore
            public static OCEAN_MONUMENT: org.bukkit.StructureType;
            // @ts-ignore
            public static END_CITY: org.bukkit.StructureType;
            // @ts-ignore
            public static WOODLAND_MANSION: org.bukkit.StructureType;
            // @ts-ignore
            public static BURIED_TREASURE: org.bukkit.StructureType;
            // @ts-ignore
            public static SHIPWRECK: org.bukkit.StructureType;
            // @ts-ignore
            public static PILLAGER_OUTPOST: org.bukkit.StructureType;
            /**
             * Get the name of this structure. This is case-sensitive when used in
             * commands.
             */
            // @ts-ignore
            public getName(): string;
            /**
             * Get the {@link org.bukkit.map.MapCursor.Type} that this structure can use on maps. If
             * this is null, this structure will not appear on explorer maps.
             */
            // @ts-ignore
            public getMapIcon(): org.bukkit.map.MapCursor.Type;
            // @ts-ignore
            public equals(other: java.lang.Object): boolean;
            // @ts-ignore
            public hashCode(): number;
            // @ts-ignore
            public toString(): string;
            /**
             * Get all registered {@link StructureType}s.
             */
            // @ts-ignore
            public static getStructureTypes(): java.util.Map;
        }
    }
}
