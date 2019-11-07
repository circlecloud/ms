// @ts-nocheck
declare namespace org {
    namespace bukkit {
        // @ts-ignore
        interface Tag extends org.bukkit.Keyed {
            // @ts-ignore
             REGISTRY_BLOCKS: string;
            // @ts-ignore
             WOOL: org.bukkit.Tag;
            // @ts-ignore
             PLANKS: org.bukkit.Tag;
            // @ts-ignore
             STONE_BRICKS: org.bukkit.Tag;
            // @ts-ignore
             WOODEN_BUTTONS: org.bukkit.Tag;
            // @ts-ignore
             BUTTONS: org.bukkit.Tag;
            // @ts-ignore
             CARPETS: org.bukkit.Tag;
            // @ts-ignore
             WOODEN_DOORS: org.bukkit.Tag;
            // @ts-ignore
             WOODEN_STAIRS: org.bukkit.Tag;
            // @ts-ignore
             WOODEN_SLABS: org.bukkit.Tag;
            // @ts-ignore
             WOODEN_FENCES: org.bukkit.Tag;
            // @ts-ignore
             WOODEN_PRESSURE_PLATES: org.bukkit.Tag;
            // @ts-ignore
             WOODEN_TRAPDOORS: org.bukkit.Tag;
            // @ts-ignore
             DOORS: org.bukkit.Tag;
            // @ts-ignore
             SAPLINGS: org.bukkit.Tag;
            // @ts-ignore
             LOGS: org.bukkit.Tag;
            // @ts-ignore
             DARK_OAK_LOGS: org.bukkit.Tag;
            // @ts-ignore
             OAK_LOGS: org.bukkit.Tag;
            // @ts-ignore
             BIRCH_LOGS: org.bukkit.Tag;
            // @ts-ignore
             ACACIA_LOGS: org.bukkit.Tag;
            // @ts-ignore
             JUNGLE_LOGS: org.bukkit.Tag;
            // @ts-ignore
             SPRUCE_LOGS: org.bukkit.Tag;
            // @ts-ignore
             BANNERS: org.bukkit.Tag;
            // @ts-ignore
             SAND: org.bukkit.Tag;
            // @ts-ignore
             STAIRS: org.bukkit.Tag;
            // @ts-ignore
             SLABS: org.bukkit.Tag;
            // @ts-ignore
             WALLS: org.bukkit.Tag;
            // @ts-ignore
             ANVIL: org.bukkit.Tag;
            // @ts-ignore
             RAILS: org.bukkit.Tag;
            // @ts-ignore
             LEAVES: org.bukkit.Tag;
            // @ts-ignore
             TRAPDOORS: org.bukkit.Tag;
            // @ts-ignore
             FLOWER_POTS: org.bukkit.Tag;
            // @ts-ignore
             SMALL_FLOWERS: org.bukkit.Tag;
            // @ts-ignore
             BEDS: org.bukkit.Tag;
            // @ts-ignore
             FENCES: org.bukkit.Tag;
            // @ts-ignore
             ENDERMAN_HOLDABLE: org.bukkit.Tag;
            // @ts-ignore
             ICE: org.bukkit.Tag;
            // @ts-ignore
             VALID_SPAWN: org.bukkit.Tag;
            // @ts-ignore
             IMPERMEABLE: org.bukkit.Tag;
            // @ts-ignore
             UNDERWATER_BONEMEALS: org.bukkit.Tag;
            // @ts-ignore
             CORAL_BLOCKS: org.bukkit.Tag;
            // @ts-ignore
             WALL_CORALS: org.bukkit.Tag;
            // @ts-ignore
             CORAL_PLANTS: org.bukkit.Tag;
            // @ts-ignore
             CORALS: org.bukkit.Tag;
            // @ts-ignore
             BAMBOO_PLANTABLE_ON: org.bukkit.Tag;
            // @ts-ignore
             DIRT_LIKE: org.bukkit.Tag;
            // @ts-ignore
             STANDING_SIGNS: org.bukkit.Tag;
            // @ts-ignore
             WALL_SIGNS: org.bukkit.Tag;
            // @ts-ignore
             SIGNS: org.bukkit.Tag;
            // @ts-ignore
             REGISTRY_ITEMS: string;
            // @ts-ignore
             ITEMS_BANNERS: org.bukkit.Tag;
            // @ts-ignore
             ITEMS_BOATS: org.bukkit.Tag;
            // @ts-ignore
             ITEMS_FISHES: org.bukkit.Tag;
            // @ts-ignore
             ITEMS_MUSIC_DISCS: org.bukkit.Tag;
            // @ts-ignore
             ITEMS_COALS: org.bukkit.Tag;
            // @ts-ignore
             ITEMS_ARROWS: org.bukkit.Tag;
            /**
             * Returns whether or not this tag has an entry for the specified item.
             */
            // @ts-ignore
             isTagged(item: org.bukkit.Keyed): boolean;
            /**
             * Gets an immutable set of all tagged items.
             */
            // @ts-ignore
             getValues(): java.util.Set;
        }
    }
}
