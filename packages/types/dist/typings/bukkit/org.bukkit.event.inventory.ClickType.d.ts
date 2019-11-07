declare namespace org {
    namespace bukkit {
        namespace event {
            namespace inventory {
                // @ts-ignore
                 class ClickType extends java.lang.Enum {
                    // @ts-ignore
                    public static LEFT: org.bukkit.event.inventory.ClickType;
                    // @ts-ignore
                    public static SHIFT_LEFT: org.bukkit.event.inventory.ClickType;
                    // @ts-ignore
                    public static RIGHT: org.bukkit.event.inventory.ClickType;
                    // @ts-ignore
                    public static SHIFT_RIGHT: org.bukkit.event.inventory.ClickType;
                    // @ts-ignore
                    public static WINDOW_BORDER_LEFT: org.bukkit.event.inventory.ClickType;
                    // @ts-ignore
                    public static WINDOW_BORDER_RIGHT: org.bukkit.event.inventory.ClickType;
                    // @ts-ignore
                    public static MIDDLE: org.bukkit.event.inventory.ClickType;
                    // @ts-ignore
                    public static NUMBER_KEY: org.bukkit.event.inventory.ClickType;
                    // @ts-ignore
                    public static DOUBLE_CLICK: org.bukkit.event.inventory.ClickType;
                    // @ts-ignore
                    public static DROP: org.bukkit.event.inventory.ClickType;
                    // @ts-ignore
                    public static CONTROL_DROP: org.bukkit.event.inventory.ClickType;
                    // @ts-ignore
                    public static CREATIVE: org.bukkit.event.inventory.ClickType;
                    // @ts-ignore
                    public static UNKNOWN: org.bukkit.event.inventory.ClickType;
                    // @ts-ignore
                    public static values(): org.bukkit.event.inventory.ClickType[];
                    // @ts-ignore
                    public static valueOf(name: string): org.bukkit.event.inventory.ClickType;
                    /**
                     * Gets whether this ClickType represents the pressing of a key on a
                     * keyboard.
                     */
                    // @ts-ignore
                    public isKeyboardClick(): boolean;
                    /**
                     * Gets whether this ClickType represents an action that can only be
                     * performed by a Player in creative mode.
                     */
                    // @ts-ignore
                    public isCreativeAction(): boolean;
                    /**
                     * Gets whether this ClickType represents a right click.
                     */
                    // @ts-ignore
                    public isRightClick(): boolean;
                    /**
                     * Gets whether this ClickType represents a left click.
                     */
                    // @ts-ignore
                    public isLeftClick(): boolean;
                    /**
                     * Gets whether this ClickType indicates that the shift key was pressed
                     * down when the click was made.
                     */
                    // @ts-ignore
                    public isShiftClick(): boolean;
                }
            }
        }
    }
}
