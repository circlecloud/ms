declare namespace org {
    namespace bukkit {
        namespace scoreboard {
            class NameTagVisibility {
                public static ALWAYS: org.bukkit.scoreboard.NameTagVisibility;
                public static NEVER: org.bukkit.scoreboard.NameTagVisibility;
                public static HIDE_FOR_OTHER_TEAMS: org.bukkit.scoreboard.NameTagVisibility;
                public static HIDE_FOR_OWN_TEAM: org.bukkit.scoreboard.NameTagVisibility;
                public static values(): org.bukkit.scoreboard.NameTagVisibility[];
                public static valueOf(name: string): org.bukkit.scoreboard.NameTagVisibility;
            }
        }
    }
}
