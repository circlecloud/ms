declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                namespace EntityDamageEvent {
                    class DamageModifier {
                        public static BASE: org.bukkit.event.entity.EntityDamageEvent.DamageModifier;
                        public static HARD_HAT: org.bukkit.event.entity.EntityDamageEvent.DamageModifier;
                        public static BLOCKING: org.bukkit.event.entity.EntityDamageEvent.DamageModifier;
                        public static ARMOR: org.bukkit.event.entity.EntityDamageEvent.DamageModifier;
                        public static RESISTANCE: org.bukkit.event.entity.EntityDamageEvent.DamageModifier;
                        public static MAGIC: org.bukkit.event.entity.EntityDamageEvent.DamageModifier;
                        public static ABSORPTION: org.bukkit.event.entity.EntityDamageEvent.DamageModifier;
                        public static values(): org.bukkit.event.entity.EntityDamageEvent.DamageModifier[];
                        public static valueOf(name: string): org.bukkit.event.entity.EntityDamageEvent.DamageModifier;
                    }
                }
            }
        }
    }
}
