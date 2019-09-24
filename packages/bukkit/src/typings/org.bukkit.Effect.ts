declare namespace org {
    namespace bukkit {
        // @ts-ignore
         class Effect {
            public static CLICK2: org.bukkit.Effect;
            public static CLICK1: org.bukkit.Effect;
            public static BOW_FIRE: org.bukkit.Effect;
            public static DOOR_TOGGLE: org.bukkit.Effect;
            public static IRON_DOOR_TOGGLE: org.bukkit.Effect;
            public static TRAPDOOR_TOGGLE: org.bukkit.Effect;
            public static IRON_TRAPDOOR_TOGGLE: org.bukkit.Effect;
            public static FENCE_GATE_TOGGLE: org.bukkit.Effect;
            public static DOOR_CLOSE: org.bukkit.Effect;
            public static IRON_DOOR_CLOSE: org.bukkit.Effect;
            public static TRAPDOOR_CLOSE: org.bukkit.Effect;
            public static IRON_TRAPDOOR_CLOSE: org.bukkit.Effect;
            public static FENCE_GATE_CLOSE: org.bukkit.Effect;
            public static EXTINGUISH: org.bukkit.Effect;
            public static RECORD_PLAY: org.bukkit.Effect;
            public static GHAST_SHRIEK: org.bukkit.Effect;
            public static GHAST_SHOOT: org.bukkit.Effect;
            public static BLAZE_SHOOT: org.bukkit.Effect;
            public static ZOMBIE_CHEW_WOODEN_DOOR: org.bukkit.Effect;
            public static ZOMBIE_CHEW_IRON_DOOR: org.bukkit.Effect;
            public static ZOMBIE_DESTROY_DOOR: org.bukkit.Effect;
            public static SMOKE: org.bukkit.Effect;
            public static STEP_SOUND: org.bukkit.Effect;
            public static POTION_BREAK: org.bukkit.Effect;
            public static ENDER_SIGNAL: org.bukkit.Effect;
            public static MOBSPAWNER_FLAMES: org.bukkit.Effect;
            public static BREWING_STAND_BREW: org.bukkit.Effect;
            public static CHORUS_FLOWER_GROW: org.bukkit.Effect;
            public static CHORUS_FLOWER_DEATH: org.bukkit.Effect;
            public static PORTAL_TRAVEL: org.bukkit.Effect;
            public static ENDEREYE_LAUNCH: org.bukkit.Effect;
            public static FIREWORK_SHOOT: org.bukkit.Effect;
            public static VILLAGER_PLANT_GROW: org.bukkit.Effect;
            public static DRAGON_BREATH: org.bukkit.Effect;
            public static ANVIL_BREAK: org.bukkit.Effect;
            public static ANVIL_USE: org.bukkit.Effect;
            public static ANVIL_LAND: org.bukkit.Effect;
            public static ENDERDRAGON_SHOOT: org.bukkit.Effect;
            public static WITHER_BREAK_BLOCK: org.bukkit.Effect;
            public static WITHER_SHOOT: org.bukkit.Effect;
            public static ZOMBIE_INFECT: org.bukkit.Effect;
            public static ZOMBIE_CONVERTED_VILLAGER: org.bukkit.Effect;
            public static BAT_TAKEOFF: org.bukkit.Effect;
            public static END_GATEWAY_SPAWN: org.bukkit.Effect;
            public static ENDERDRAGON_GROWL: org.bukkit.Effect;
            public static values(): org.bukkit.Effect[];
            public static valueOf(name: string): org.bukkit.Effect;
            /**
             * Gets the ID for this effect.
             */
            public getId(): number;
            public getType(): org.bukkit.Effect.Type;
            public getData(): any;
            /**
             * Gets the Effect associated with the given ID.
             */
            public static getById(id: number): org.bukkit.Effect;
        }
    }
}
