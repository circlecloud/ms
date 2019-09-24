declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                // @ts-ignore
                 class ClickType {
                    public static LEFT: org.bukkit.event.inventory.ClickType;
                    public static SHIFT_LEFT: org.bukkit.event.inventory.ClickType;
                    public static RIGHT: org.bukkit.event.inventory.ClickType;
                    public static SHIFT_RIGHT: org.bukkit.event.inventory.ClickType;
                    public static WINDOW_BORDER_LEFT: org.bukkit.event.inventory.ClickType;
                    public static WINDOW_BORDER_RIGHT: org.bukkit.event.inventory.ClickType;
                    public static MIDDLE: org.bukkit.event.inventory.ClickType;
                    public static NUMBER_KEY: org.bukkit.event.inventory.ClickType;
                    public static DOUBLE_CLICK: org.bukkit.event.inventory.ClickType;
                    public static DROP: org.bukkit.event.inventory.ClickType;
                    public static CONTROL_DROP: org.bukkit.event.inventory.ClickType;
                    public static CREATIVE: org.bukkit.event.inventory.ClickType;
                    public static UNKNOWN: org.bukkit.event.inventory.ClickType;
                    public static values(): org.bukkit.event.inventory.ClickType[];
                    public static valueOf(name: string): org.bukkit.event.inventory.ClickType;
                    /**
                     * Gets whether this ClickType represents the pressing of a key on a
                     * keyboard.
                     */
                    public isKeyboardClick(): boolean;
                    /**
                     * Gets whether this ClickType represents an action that can only be
                     * performed by a Player in creative mode.
                     */
                    public isCreativeAction(): boolean;
                    /**
                     * Gets whether this ClickType represents a right click.
                     */
                    public isRightClick(): boolean;
                    /**
                     * Gets whether this ClickType represents a left click.
                     */
                    public isLeftClick(): boolean;
                    /**
                     * Gets whether this ClickType indicates that the shift key was pressed
                     * down when the click was made.
                     */
                    public isShiftClick(): boolean;
                }
            }
        }
    }
}
