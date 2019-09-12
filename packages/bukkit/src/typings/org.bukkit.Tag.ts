declare namespace org {
    namespace bukkit {
        class Tag {
            public static REGISTRY_BLOCKS: string;
            public static WOOL: org.bukkit.Tag;
            public static PLANKS: org.bukkit.Tag;
            public static STONE_BRICKS: org.bukkit.Tag;
            public static WOODEN_BUTTONS: org.bukkit.Tag;
            public static BUTTONS: org.bukkit.Tag;
            public static CARPETS: org.bukkit.Tag;
            public static WOODEN_DOORS: org.bukkit.Tag;
            public static WOODEN_STAIRS: org.bukkit.Tag;
            public static WOODEN_SLABS: org.bukkit.Tag;
            public static WOODEN_FENCES: org.bukkit.Tag;
            public static WOODEN_PRESSURE_PLATES: org.bukkit.Tag;
            public static WOODEN_TRAPDOORS: org.bukkit.Tag;
            public static DOORS: org.bukkit.Tag;
            public static SAPLINGS: org.bukkit.Tag;
            public static LOGS: org.bukkit.Tag;
            public static DARK_OAK_LOGS: org.bukkit.Tag;
            public static OAK_LOGS: org.bukkit.Tag;
            public static BIRCH_LOGS: org.bukkit.Tag;
            public static ACACIA_LOGS: org.bukkit.Tag;
            public static JUNGLE_LOGS: org.bukkit.Tag;
            public static SPRUCE_LOGS: org.bukkit.Tag;
            public static BANNERS: org.bukkit.Tag;
            public static SAND: org.bukkit.Tag;
            public static STAIRS: org.bukkit.Tag;
            public static SLABS: org.bukkit.Tag;
            public static WALLS: org.bukkit.Tag;
            public static ANVIL: org.bukkit.Tag;
            public static RAILS: org.bukkit.Tag;
            public static LEAVES: org.bukkit.Tag;
            public static TRAPDOORS: org.bukkit.Tag;
            public static FLOWER_POTS: org.bukkit.Tag;
            public static SMALL_FLOWERS: org.bukkit.Tag;
            public static BEDS: org.bukkit.Tag;
            public static FENCES: org.bukkit.Tag;
            public static ENDERMAN_HOLDABLE: org.bukkit.Tag;
            public static ICE: org.bukkit.Tag;
            public static VALID_SPAWN: org.bukkit.Tag;
            public static IMPERMEABLE: org.bukkit.Tag;
            public static UNDERWATER_BONEMEALS: org.bukkit.Tag;
            public static CORAL_BLOCKS: org.bukkit.Tag;
            public static WALL_CORALS: org.bukkit.Tag;
            public static CORAL_PLANTS: org.bukkit.Tag;
            public static CORALS: org.bukkit.Tag;
            public static BAMBOO_PLANTABLE_ON: org.bukkit.Tag;
            public static DIRT_LIKE: org.bukkit.Tag;
            public static STANDING_SIGNS: org.bukkit.Tag;
            public static WALL_SIGNS: org.bukkit.Tag;
            public static SIGNS: org.bukkit.Tag;
            public static REGISTRY_ITEMS: string;
            public static ITEMS_BANNERS: org.bukkit.Tag;
            public static ITEMS_BOATS: org.bukkit.Tag;
            public static ITEMS_FISHES: org.bukkit.Tag;
            public static ITEMS_MUSIC_DISCS: org.bukkit.Tag;
            public static ITEMS_COALS: org.bukkit.Tag;
            public static ITEMS_ARROWS: org.bukkit.Tag;
            /**
             * Returns whether or not this tag has an entry for the specified item.
             */
            public isTagged(item: org.bukkit.Keyed): boolean;
            /**
             * Gets an immutable set of all tagged items.
             */
            public getValues(): any[] /*java.util.Set*/;
        }
    }
}
