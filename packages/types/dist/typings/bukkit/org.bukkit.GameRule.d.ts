// @ts-nocheck
declare namespace org {
    namespace bukkit {
        // @ts-ignore
         class GameRule extends java.lang.Object {
            // @ts-ignore
            public static ANNOUNCE_ADVANCEMENTS: org.bukkit.GameRule;
            // @ts-ignore
            public static COMMAND_BLOCK_OUTPUT: org.bukkit.GameRule;
            // @ts-ignore
            public static DISABLE_ELYTRA_MOVEMENT_CHECK: org.bukkit.GameRule;
            // @ts-ignore
            public static DO_DAYLIGHT_CYCLE: org.bukkit.GameRule;
            // @ts-ignore
            public static DO_ENTITY_DROPS: org.bukkit.GameRule;
            // @ts-ignore
            public static DO_FIRE_TICK: org.bukkit.GameRule;
            // @ts-ignore
            public static DO_LIMITED_CRAFTING: org.bukkit.GameRule;
            // @ts-ignore
            public static DO_MOB_LOOT: org.bukkit.GameRule;
            // @ts-ignore
            public static DO_MOB_SPAWNING: org.bukkit.GameRule;
            // @ts-ignore
            public static DO_TILE_DROPS: org.bukkit.GameRule;
            // @ts-ignore
            public static DO_WEATHER_CYCLE: org.bukkit.GameRule;
            // @ts-ignore
            public static KEEP_INVENTORY: org.bukkit.GameRule;
            // @ts-ignore
            public static LOG_ADMIN_COMMANDS: org.bukkit.GameRule;
            // @ts-ignore
            public static MOB_GRIEFING: org.bukkit.GameRule;
            // @ts-ignore
            public static NATURAL_REGENERATION: org.bukkit.GameRule;
            // @ts-ignore
            public static REDUCED_DEBUG_INFO: org.bukkit.GameRule;
            // @ts-ignore
            public static SEND_COMMAND_FEEDBACK: org.bukkit.GameRule;
            // @ts-ignore
            public static SHOW_DEATH_MESSAGES: org.bukkit.GameRule;
            // @ts-ignore
            public static SPECTATORS_GENERATE_CHUNKS: org.bukkit.GameRule;
            // @ts-ignore
            public static DISABLE_RAIDS: org.bukkit.GameRule;
            // @ts-ignore
            public static RANDOM_TICK_SPEED: org.bukkit.GameRule;
            // @ts-ignore
            public static SPAWN_RADIUS: org.bukkit.GameRule;
            // @ts-ignore
            public static MAX_ENTITY_CRAMMING: org.bukkit.GameRule;
            // @ts-ignore
            public static MAX_COMMAND_CHAIN_LENGTH: org.bukkit.GameRule;
            /**
             * Get the name of this GameRule.
             */
            // @ts-ignore
            public getName(): string;
            /**
             * Get the type of this rule.
             */
            // @ts-ignore
            public getType(): java.lang.Class;
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            // @ts-ignore
            public toString(): string;
            /**
             * Get a {@link GameRule} by its name.
             */
            // @ts-ignore
            public static getByName(rule: string): org.bukkit.GameRule;
            /**
             * Get an immutable collection of {@link GameRule}s.
             */
            // @ts-ignore
            public static values(): org.bukkit.GameRule[];
        }
    }
}
