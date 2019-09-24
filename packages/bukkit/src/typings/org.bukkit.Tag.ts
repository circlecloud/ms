declare namespace org {
    namespace bukkit {
        // @ts-ignore
        interface Tag extends org.bukkit.Keyed {
             REGISTRY_BLOCKS: string;
             WOOL: org.bukkit.Tag;
             PLANKS: org.bukkit.Tag;
             STONE_BRICKS: org.bukkit.Tag;
             WOODEN_BUTTONS: org.bukkit.Tag;
             BUTTONS: org.bukkit.Tag;
             CARPETS: org.bukkit.Tag;
             WOODEN_DOORS: org.bukkit.Tag;
             WOODEN_STAIRS: org.bukkit.Tag;
             WOODEN_SLABS: org.bukkit.Tag;
             WOODEN_FENCES: org.bukkit.Tag;
             WOODEN_PRESSURE_PLATES: org.bukkit.Tag;
             WOODEN_TRAPDOORS: org.bukkit.Tag;
             DOORS: org.bukkit.Tag;
             SAPLINGS: org.bukkit.Tag;
             LOGS: org.bukkit.Tag;
             DARK_OAK_LOGS: org.bukkit.Tag;
             OAK_LOGS: org.bukkit.Tag;
             BIRCH_LOGS: org.bukkit.Tag;
             ACACIA_LOGS: org.bukkit.Tag;
             JUNGLE_LOGS: org.bukkit.Tag;
             SPRUCE_LOGS: org.bukkit.Tag;
             BANNERS: org.bukkit.Tag;
             SAND: org.bukkit.Tag;
             STAIRS: org.bukkit.Tag;
             SLABS: org.bukkit.Tag;
             WALLS: org.bukkit.Tag;
             ANVIL: org.bukkit.Tag;
             RAILS: org.bukkit.Tag;
             LEAVES: org.bukkit.Tag;
             TRAPDOORS: org.bukkit.Tag;
             FLOWER_POTS: org.bukkit.Tag;
             SMALL_FLOWERS: org.bukkit.Tag;
             BEDS: org.bukkit.Tag;
             FENCES: org.bukkit.Tag;
             ENDERMAN_HOLDABLE: org.bukkit.Tag;
             ICE: org.bukkit.Tag;
             VALID_SPAWN: org.bukkit.Tag;
             IMPERMEABLE: org.bukkit.Tag;
             UNDERWATER_BONEMEALS: org.bukkit.Tag;
             CORAL_BLOCKS: org.bukkit.Tag;
             WALL_CORALS: org.bukkit.Tag;
             CORAL_PLANTS: org.bukkit.Tag;
             CORALS: org.bukkit.Tag;
             BAMBOO_PLANTABLE_ON: org.bukkit.Tag;
             DIRT_LIKE: org.bukkit.Tag;
             STANDING_SIGNS: org.bukkit.Tag;
             WALL_SIGNS: org.bukkit.Tag;
             SIGNS: org.bukkit.Tag;
             REGISTRY_ITEMS: string;
             ITEMS_BANNERS: org.bukkit.Tag;
             ITEMS_BOATS: org.bukkit.Tag;
             ITEMS_FISHES: org.bukkit.Tag;
             ITEMS_MUSIC_DISCS: org.bukkit.Tag;
             ITEMS_COALS: org.bukkit.Tag;
             ITEMS_ARROWS: org.bukkit.Tag;
            /**
             * Returns whether or not this tag has an entry for the specified item.
             */
             isTagged(item: org.bukkit.Keyed): boolean;
            /**
             * Gets an immutable set of all tagged items.
             */
             getValues(): any[] /*java.util.Set*/;
        }
    }
}
