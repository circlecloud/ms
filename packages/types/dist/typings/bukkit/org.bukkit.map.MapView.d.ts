declare namespace org {
    namespace bukkit {
        namespace map {
            // @ts-ignore
            interface MapView {
                /**
                 * Get the ID of this map item for use with {@link MapMeta}.
                 */
                // @ts-ignore
                 getId(): number;
                /**
                 * Check whether this map is virtual. A map is virtual if its lowermost
                 * MapRenderer is plugin-provided.
                 */
                // @ts-ignore
                 isVirtual(): boolean;
                /**
                 * Get the scale of this map.
                 */
                // @ts-ignore
                 getScale(): org.bukkit.map.MapView.Scale;
                /**
                 * Set the scale of this map.
                 */
                // @ts-ignore
                 setScale(scale: org.bukkit.map.MapView.Scale): void;
                /**
                 * Get the center X position of this map.
                 */
                // @ts-ignore
                 getCenterX(): number;
                /**
                 * Get the center Z position of this map.
                 */
                // @ts-ignore
                 getCenterZ(): number;
                /**
                 * Set the center X position of this map.
                 */
                // @ts-ignore
                 setCenterX(x: number): void;
                /**
                 * Set the center Z position of this map.
                 */
                // @ts-ignore
                 setCenterZ(z: number): void;
                /**
                 * Get the world that this map is associated with. Primarily used by the
                 * internal renderer, but may be used by external renderers. May return
                 * null if the world the map is associated with is not loaded.
                 */
                // @ts-ignore
                 getWorld(): org.bukkit.World;
                /**
                 * Set the world that this map is associated with. The world is used by
                 * the internal renderer, and may also be used by external renderers.
                 */
                // @ts-ignore
                 setWorld(world: org.bukkit.World): void;
                /**
                 * Get a list of MapRenderers currently in effect.
                 */
                // @ts-ignore
                 getRenderers(): java.util.List;
                /**
                 * Add a renderer to this map.
                 */
                // @ts-ignore
                 addRenderer(renderer: org.bukkit.map.MapRenderer): void;
                /**
                 * Remove a renderer from this map.
                 */
                // @ts-ignore
                 removeRenderer(renderer: org.bukkit.map.MapRenderer): boolean;
                /**
                 * Gets whether a position cursor should be shown when the map is near its
                 * center.
                 */
                // @ts-ignore
                 isTrackingPosition(): boolean;
                /**
                 * Sets whether a position cursor should be shown when the map is near its
                 * center.
                 */
                // @ts-ignore
                 setTrackingPosition(trackingPosition: boolean): void;
                /**
                 * Whether the map will show a smaller position cursor (true), or no
                 * position cursor (false) when cursor is outside of map's range.
                 */
                // @ts-ignore
                 isUnlimitedTracking(): boolean;
                /**
                 * Whether the map will show a smaller position cursor (true), or no
                 * position cursor (false) when cursor is outside of map's range.
                 */
                // @ts-ignore
                 setUnlimitedTracking(unlimited: boolean): void;
                /**
                 * Gets whether the map is locked or not.
                 * A locked map may not be explored further.
                 */
                // @ts-ignore
                 isLocked(): boolean;
                /**
                 * Gets whether the map is locked or not.
                 * A locked map may not be explored further.
                 */
                // @ts-ignore
                 setLocked(locked: boolean): void;
            }
        }
    }
}
