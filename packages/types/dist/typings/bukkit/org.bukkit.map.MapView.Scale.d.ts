declare namespace org {
    namespace bukkit {
        namespace map {
            namespace MapView {
                // @ts-ignore
                 class Scale extends java.lang.Enum {
                    // @ts-ignore
                    public static CLOSEST: org.bukkit.map.MapView.Scale;
                    // @ts-ignore
                    public static CLOSE: org.bukkit.map.MapView.Scale;
                    // @ts-ignore
                    public static NORMAL: org.bukkit.map.MapView.Scale;
                    // @ts-ignore
                    public static FAR: org.bukkit.map.MapView.Scale;
                    // @ts-ignore
                    public static FARTHEST: org.bukkit.map.MapView.Scale;
                    // @ts-ignore
                    public static values(): org.bukkit.map.MapView.Scale[];
                    // @ts-ignore
                    public static valueOf(name: string): org.bukkit.map.MapView.Scale;
                    /**
                     * Get the scale given the raw value.
                     */
                    // @ts-ignore
                    public static valueOf(value: number): org.bukkit.map.MapView.Scale;
                    /**
                     * Get the raw value of this scale level.
                     */
                    // @ts-ignore
                    public getValue(): number;
                }
            }
        }
    }
}
