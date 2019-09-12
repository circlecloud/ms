declare namespace org {
    namespace bukkit {
        class StructureType {
            public static MINESHAFT: org.bukkit.StructureType;
            public static VILLAGE: org.bukkit.StructureType;
            public static NETHER_FORTRESS: org.bukkit.StructureType;
            public static STRONGHOLD: org.bukkit.StructureType;
            public static JUNGLE_PYRAMID: org.bukkit.StructureType;
            public static OCEAN_RUIN: org.bukkit.StructureType;
            public static DESERT_PYRAMID: org.bukkit.StructureType;
            public static IGLOO: org.bukkit.StructureType;
            public static SWAMP_HUT: org.bukkit.StructureType;
            public static OCEAN_MONUMENT: org.bukkit.StructureType;
            public static END_CITY: org.bukkit.StructureType;
            public static WOODLAND_MANSION: org.bukkit.StructureType;
            public static BURIED_TREASURE: org.bukkit.StructureType;
            public static SHIPWRECK: org.bukkit.StructureType;
            public static PILLAGER_OUTPOST: org.bukkit.StructureType;
            /**
             * Get the name of this structure. This is case-sensitive when used in
             * commands.
             */
            public getName(): string;
            /**
             * Get the {@link org.bukkit.map.MapCursor.Type} that this structure can use on maps. If
             * this is null, this structure will not appear on explorer maps.
             */
            public getMapIcon(): org.bukkit.map.MapCursor.Type;
            public equals(other: any): boolean;
            public hashCode(): number;
            public toString(): string;
            /**
             * Get all registered {@link StructureType}s.
             */
            public static getStructureTypes(): Map<any, any> /*java.util.Map*/;
        }
    }
}
