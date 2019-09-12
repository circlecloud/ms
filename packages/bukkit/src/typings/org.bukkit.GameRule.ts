declare namespace org {
    namespace bukkit {
        class GameRule {
            public static ANNOUNCE_ADVANCEMENTS: org.bukkit.GameRule;
            public static COMMAND_BLOCK_OUTPUT: org.bukkit.GameRule;
            public static DISABLE_ELYTRA_MOVEMENT_CHECK: org.bukkit.GameRule;
            public static DO_DAYLIGHT_CYCLE: org.bukkit.GameRule;
            public static DO_ENTITY_DROPS: org.bukkit.GameRule;
            public static DO_FIRE_TICK: org.bukkit.GameRule;
            public static DO_LIMITED_CRAFTING: org.bukkit.GameRule;
            public static DO_MOB_LOOT: org.bukkit.GameRule;
            public static DO_MOB_SPAWNING: org.bukkit.GameRule;
            public static DO_TILE_DROPS: org.bukkit.GameRule;
            public static DO_WEATHER_CYCLE: org.bukkit.GameRule;
            public static KEEP_INVENTORY: org.bukkit.GameRule;
            public static LOG_ADMIN_COMMANDS: org.bukkit.GameRule;
            public static MOB_GRIEFING: org.bukkit.GameRule;
            public static NATURAL_REGENERATION: org.bukkit.GameRule;
            public static REDUCED_DEBUG_INFO: org.bukkit.GameRule;
            public static SEND_COMMAND_FEEDBACK: org.bukkit.GameRule;
            public static SHOW_DEATH_MESSAGES: org.bukkit.GameRule;
            public static SPECTATORS_GENERATE_CHUNKS: org.bukkit.GameRule;
            public static DISABLE_RAIDS: org.bukkit.GameRule;
            public static RANDOM_TICK_SPEED: org.bukkit.GameRule;
            public static SPAWN_RADIUS: org.bukkit.GameRule;
            public static MAX_ENTITY_CRAMMING: org.bukkit.GameRule;
            public static MAX_COMMAND_CHAIN_LENGTH: org.bukkit.GameRule;
            /**
             * Get the name of this GameRule.
             */
            public getName(): string;
            /**
             * Get the type of this rule.
             */
            public getType(): any;
            public equals(obj: any): boolean;
            public toString(): string;
            /**
             * Get a {@link GameRule} by its name.
             */
            public static getByName(rule: string): org.bukkit.GameRule;
            /**
             * Get an immutable collection of {@link GameRule}s.
             */
            public static values(): org.bukkit.GameRule[];
        }
    }
}
