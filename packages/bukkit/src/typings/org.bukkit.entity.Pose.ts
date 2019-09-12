declare namespace org {
    namespace bukkit {
        namespace entity {
            class Pose {
                public static STANDING: org.bukkit.entity.Pose;
                public static FALL_FLYING: org.bukkit.entity.Pose;
                public static SLEEPING: org.bukkit.entity.Pose;
                public static SWIMMING: org.bukkit.entity.Pose;
                public static SPIN_ATTACK: org.bukkit.entity.Pose;
                public static SNEAKING: org.bukkit.entity.Pose;
                public static DYING: org.bukkit.entity.Pose;
                public static values(): org.bukkit.entity.Pose[];
                public static valueOf(name: string): org.bukkit.entity.Pose;
            }
        }
    }
}
