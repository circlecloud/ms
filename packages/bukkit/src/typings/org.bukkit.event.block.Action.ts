declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                class Action {
                    public static LEFT_CLICK_BLOCK: org.bukkit.event.block.Action;
                    public static RIGHT_CLICK_BLOCK: org.bukkit.event.block.Action;
                    public static LEFT_CLICK_AIR: org.bukkit.event.block.Action;
                    public static RIGHT_CLICK_AIR: org.bukkit.event.block.Action;
                    public static PHYSICAL: org.bukkit.event.block.Action;
                    public static values(): org.bukkit.event.block.Action[];
                    public static valueOf(name: string): org.bukkit.event.block.Action;
                }
            }
        }
    }
}
