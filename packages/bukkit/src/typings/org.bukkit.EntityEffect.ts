declare namespace org {
    namespace bukkit {
        // @ts-ignore
         class EntityEffect {
            public static ARROW_PARTICLES: org.bukkit.EntityEffect;
            public static RABBIT_JUMP: org.bukkit.EntityEffect;
            public static HURT: org.bukkit.EntityEffect;
            public static DEATH: org.bukkit.EntityEffect;
            public static WOLF_SMOKE: org.bukkit.EntityEffect;
            public static WOLF_HEARTS: org.bukkit.EntityEffect;
            public static WOLF_SHAKE: org.bukkit.EntityEffect;
            public static SHEEP_EAT: org.bukkit.EntityEffect;
            public static IRON_GOLEM_ROSE: org.bukkit.EntityEffect;
            public static VILLAGER_HEART: org.bukkit.EntityEffect;
            public static VILLAGER_ANGRY: org.bukkit.EntityEffect;
            public static VILLAGER_HAPPY: org.bukkit.EntityEffect;
            public static WITCH_MAGIC: org.bukkit.EntityEffect;
            public static ZOMBIE_TRANSFORM: org.bukkit.EntityEffect;
            public static FIREWORK_EXPLODE: org.bukkit.EntityEffect;
            public static LOVE_HEARTS: org.bukkit.EntityEffect;
            public static SQUID_ROTATE: org.bukkit.EntityEffect;
            public static ENTITY_POOF: org.bukkit.EntityEffect;
            public static GUARDIAN_TARGET: org.bukkit.EntityEffect;
            public static SHIELD_BLOCK: org.bukkit.EntityEffect;
            public static SHIELD_BREAK: org.bukkit.EntityEffect;
            public static ARMOR_STAND_HIT: org.bukkit.EntityEffect;
            public static THORNS_HURT: org.bukkit.EntityEffect;
            public static IRON_GOLEM_SHEATH: org.bukkit.EntityEffect;
            public static TOTEM_RESURRECT: org.bukkit.EntityEffect;
            public static HURT_DROWN: org.bukkit.EntityEffect;
            public static HURT_EXPLOSION: org.bukkit.EntityEffect;
            public static values(): org.bukkit.EntityEffect[];
            public static valueOf(name: string): org.bukkit.EntityEffect;
            /**
             * Gets the data value of this EntityEffect
             */
            public getData(): number;
            /**
             * Gets entity superclass which this affect is applicable to.
             */
            public getApplicable(): any;
            /**
             * Gets the EntityEffect with the given data value
             */
            public static getByData(data: number): org.bukkit.EntityEffect;
        }
    }
}
