declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                // @ts-ignore
                interface MapMeta extends org.bukkit.inventory.meta.ItemMeta {
                    /**
                     * Checks for existence of a map ID number.
                     */
                    // @ts-ignore
                     hasMapId(): boolean;
                    /**
                     * Gets the map ID that is set. This is used to determine what map is
                     * displayed.
                     * <p>
                     * Plugins should check that hasMapId() returns <code>true</code> before
                     * calling this method.
                     */
                    // @ts-ignore
                     getMapId(): number;
                    /**
                     * Sets the map ID. This is used to determine what map is displayed.
                     */
                    // @ts-ignore
                     setMapId(id: number): void;
                    /**
                     * Checks for existence of an associated map.
                     */
                    // @ts-ignore
                     hasMapView(): boolean;
                    /**
                     * Gets the map view that is associated with this map item.
                     * <p>
                     * Plugins should check that hasMapView() returns <code>true</code> before
                     * calling this method.
                     */
                    // @ts-ignore
                     getMapView(): org.bukkit.map.MapView;
                    /**
                     * Sets the associated map. This is used to determine what map is displayed.
                     * <p>
                     * The implementation <b>may</b> allow null to clear the associated map, but
                     * this is not required and is liable to generate a new (undefined) map when
                     * the item is first used.
                     */
                    // @ts-ignore
                     setMapView(map: org.bukkit.map.MapView): void;
                    /**
                     * Checks to see if this map is scaling.
                     */
                    // @ts-ignore
                     isScaling(): boolean;
                    /**
                     * Sets if this map is scaling or not.
                     */
                    // @ts-ignore
                     setScaling(value: boolean): void;
                    /**
                     * Checks for existence of a location name.
                     */
                    // @ts-ignore
                     hasLocationName(): boolean;
                    /**
                     * Gets the location name that is set.
                     * <p>
                     * Plugins should check that hasLocationName() returns <code>true</code>
                     * before calling this method.
                     */
                    // @ts-ignore
                     getLocationName(): string;
                    /**
                     * Sets the location name. A custom map color will alter the display of the
                     * map in an inventory slot.
                     */
                    // @ts-ignore
                     setLocationName(name: string): void;
                    /**
                     * Checks for existence of a map color.
                     */
                    // @ts-ignore
                     hasColor(): boolean;
                    /**
                     * Gets the map color that is set. A custom map color will alter the display
                     * of the map in an inventory slot.
                     * <p>
                     * Plugins should check that hasColor() returns <code>true</code> before
                     * calling this method.
                     */
                    // @ts-ignore
                     getColor(): org.bukkit.Color;
                    /**
                     * Sets the map color. A custom map color will alter the display of the map
                     * in an inventory slot.
                     */
                    // @ts-ignore
                     setColor(color: org.bukkit.Color): void;
                    // @ts-ignore
                     clone(): org.bukkit.inventory.meta.MapMeta;
                }
            }
        }
    }
}
