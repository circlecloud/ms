declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                class MapMeta {
                    /**
                     * Checks for existence of a map ID number.
                     */
                    public hasMapId(): boolean;
                    /**
                     * Gets the map ID that is set. This is used to determine what map is
                     * displayed.
                     * <p>
                     * Plugins should check that hasMapId() returns <code>true</code> before
                     * calling this method.
                     */
                    public getMapId(): number;
                    /**
                     * Sets the map ID. This is used to determine what map is displayed.
                     */
                    public setMapId(id: number): void;
                    /**
                     * Checks for existence of an associated map.
                     */
                    public hasMapView(): boolean;
                    /**
                     * Gets the map view that is associated with this map item.
                     * <p>
                     * Plugins should check that hasMapView() returns <code>true</code> before
                     * calling this method.
                     */
                    public getMapView(): org.bukkit.map.MapView;
                    /**
                     * Sets the associated map. This is used to determine what map is displayed.
                     * <p>
                     * The implementation <b>may</b> allow null to clear the associated map, but
                     * this is not required and is liable to generate a new (undefined) map when
                     * the item is first used.
                     */
                    public setMapView(map: org.bukkit.map.MapView): void;
                    /**
                     * Checks to see if this map is scaling.
                     */
                    public isScaling(): boolean;
                    /**
                     * Sets if this map is scaling or not.
                     */
                    public setScaling(value: boolean): void;
                    /**
                     * Checks for existence of a location name.
                     */
                    public hasLocationName(): boolean;
                    /**
                     * Gets the location name that is set.
                     * <p>
                     * Plugins should check that hasLocationName() returns <code>true</code>
                     * before calling this method.
                     */
                    public getLocationName(): string;
                    /**
                     * Sets the location name. A custom map color will alter the display of the
                     * map in an inventory slot.
                     */
                    public setLocationName(name: string): void;
                    /**
                     * Checks for existence of a map color.
                     */
                    public hasColor(): boolean;
                    /**
                     * Gets the map color that is set. A custom map color will alter the display
                     * of the map in an inventory slot.
                     * <p>
                     * Plugins should check that hasColor() returns <code>true</code> before
                     * calling this method.
                     */
                    public getColor(): org.bukkit.Color;
                    /**
                     * Sets the map color. A custom map color will alter the display of the map
                     * in an inventory slot.
                     */
                    public setColor(color: org.bukkit.Color): void;
                    public clone(): org.bukkit.inventory.meta.MapMeta;
                }
            }
        }
    }
}
