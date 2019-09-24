declare namespace org {
    namespace bukkit {
        // @ts-ignore
         class Statistic implements org.bukkit.Keyed {
            public static DAMAGE_DEALT: org.bukkit.Statistic;
            public static DAMAGE_TAKEN: org.bukkit.Statistic;
            public static DEATHS: org.bukkit.Statistic;
            public static MOB_KILLS: org.bukkit.Statistic;
            public static PLAYER_KILLS: org.bukkit.Statistic;
            public static FISH_CAUGHT: org.bukkit.Statistic;
            public static ANIMALS_BRED: org.bukkit.Statistic;
            public static LEAVE_GAME: org.bukkit.Statistic;
            public static JUMP: org.bukkit.Statistic;
            public static DROP_COUNT: org.bukkit.Statistic;
            public static DROP: org.bukkit.Statistic;
            public static PICKUP: org.bukkit.Statistic;
            public static PLAY_ONE_MINUTE: org.bukkit.Statistic;
            public static WALK_ONE_CM: org.bukkit.Statistic;
            public static WALK_ON_WATER_ONE_CM: org.bukkit.Statistic;
            public static FALL_ONE_CM: org.bukkit.Statistic;
            public static SNEAK_TIME: org.bukkit.Statistic;
            public static CLIMB_ONE_CM: org.bukkit.Statistic;
            public static FLY_ONE_CM: org.bukkit.Statistic;
            public static WALK_UNDER_WATER_ONE_CM: org.bukkit.Statistic;
            public static MINECART_ONE_CM: org.bukkit.Statistic;
            public static BOAT_ONE_CM: org.bukkit.Statistic;
            public static PIG_ONE_CM: org.bukkit.Statistic;
            public static HORSE_ONE_CM: org.bukkit.Statistic;
            public static SPRINT_ONE_CM: org.bukkit.Statistic;
            public static CROUCH_ONE_CM: org.bukkit.Statistic;
            public static AVIATE_ONE_CM: org.bukkit.Statistic;
            public static MINE_BLOCK: org.bukkit.Statistic;
            public static USE_ITEM: org.bukkit.Statistic;
            public static BREAK_ITEM: org.bukkit.Statistic;
            public static CRAFT_ITEM: org.bukkit.Statistic;
            public static KILL_ENTITY: org.bukkit.Statistic;
            public static ENTITY_KILLED_BY: org.bukkit.Statistic;
            public static TIME_SINCE_DEATH: org.bukkit.Statistic;
            public static TALKED_TO_VILLAGER: org.bukkit.Statistic;
            public static TRADED_WITH_VILLAGER: org.bukkit.Statistic;
            public static CAKE_SLICES_EATEN: org.bukkit.Statistic;
            public static CAULDRON_FILLED: org.bukkit.Statistic;
            public static CAULDRON_USED: org.bukkit.Statistic;
            public static ARMOR_CLEANED: org.bukkit.Statistic;
            public static BANNER_CLEANED: org.bukkit.Statistic;
            public static BREWINGSTAND_INTERACTION: org.bukkit.Statistic;
            public static BEACON_INTERACTION: org.bukkit.Statistic;
            public static DROPPER_INSPECTED: org.bukkit.Statistic;
            public static HOPPER_INSPECTED: org.bukkit.Statistic;
            public static DISPENSER_INSPECTED: org.bukkit.Statistic;
            public static NOTEBLOCK_PLAYED: org.bukkit.Statistic;
            public static NOTEBLOCK_TUNED: org.bukkit.Statistic;
            public static FLOWER_POTTED: org.bukkit.Statistic;
            public static TRAPPED_CHEST_TRIGGERED: org.bukkit.Statistic;
            public static ENDERCHEST_OPENED: org.bukkit.Statistic;
            public static ITEM_ENCHANTED: org.bukkit.Statistic;
            public static RECORD_PLAYED: org.bukkit.Statistic;
            public static FURNACE_INTERACTION: org.bukkit.Statistic;
            public static CRAFTING_TABLE_INTERACTION: org.bukkit.Statistic;
            public static CHEST_OPENED: org.bukkit.Statistic;
            public static SLEEP_IN_BED: org.bukkit.Statistic;
            public static SHULKER_BOX_OPENED: org.bukkit.Statistic;
            public static TIME_SINCE_REST: org.bukkit.Statistic;
            public static SWIM_ONE_CM: org.bukkit.Statistic;
            public static DAMAGE_DEALT_ABSORBED: org.bukkit.Statistic;
            public static DAMAGE_DEALT_RESISTED: org.bukkit.Statistic;
            public static DAMAGE_BLOCKED_BY_SHIELD: org.bukkit.Statistic;
            public static DAMAGE_ABSORBED: org.bukkit.Statistic;
            public static DAMAGE_RESISTED: org.bukkit.Statistic;
            public static CLEAN_SHULKER_BOX: org.bukkit.Statistic;
            public static OPEN_BARREL: org.bukkit.Statistic;
            public static INTERACT_WITH_BLAST_FURNACE: org.bukkit.Statistic;
            public static INTERACT_WITH_SMOKER: org.bukkit.Statistic;
            public static INTERACT_WITH_LECTERN: org.bukkit.Statistic;
            public static INTERACT_WITH_CAMPFIRE: org.bukkit.Statistic;
            public static INTERACT_WITH_CARTOGRAPHY_TABLE: org.bukkit.Statistic;
            public static INTERACT_WITH_LOOM: org.bukkit.Statistic;
            public static INTERACT_WITH_STONECUTTER: org.bukkit.Statistic;
            public static BELL_RING: org.bukkit.Statistic;
            public static RAID_TRIGGER: org.bukkit.Statistic;
            public static RAID_WIN: org.bukkit.Statistic;
            public static values(): org.bukkit.Statistic[];
            public static valueOf(name: string): org.bukkit.Statistic;
            /**
             * Gets the type of this statistic.
             */
            public getType(): org.bukkit.Statistic.Type;
            /**
             * Checks if this is a substatistic.
             * <p>
             * A substatistic exists en masse for each block, item, or entitytype, depending on
             * {@link #getType()}.
             * <p>
             * This is a redundant method and equivalent to checking
             * <code>getType() != Type.UNTYPED</code>
             */
            public isSubstatistic(): boolean;
            /**
             * Checks if this is a substatistic dealing with blocks.
             * <p>
             * This is a redundant method and equivalent to checking
             * <code>getType() == Type.BLOCK</code>
             */
            public isBlock(): boolean;
            public getKey(): org.bukkit.NamespacedKey;
        }
    }
}
