declare namespace org {
    namespace bukkit {
        namespace map {
            namespace MapView {
                class Scale {
                    public static CLOSEST: org.bukkit.map.MapView.Scale;
                    public static CLOSE: org.bukkit.map.MapView.Scale;
                    public static NORMAL: org.bukkit.map.MapView.Scale;
                    public static FAR: org.bukkit.map.MapView.Scale;
                    public static FARTHEST: org.bukkit.map.MapView.Scale;
                    public static values(): org.bukkit.map.MapView.Scale[];
                    public static valueOf(name: string): org.bukkit.map.MapView.Scale;
                    /**
                     * Get the scale given the raw value.
                     */
                    public static valueOf(value: number): org.bukkit.map.MapView.Scale;
                    /**
                     * Get the raw value of this scale level.
                     */
                    public getValue(): number;
                }
            }
        }
    }
}
