declare namespace org {
    namespace bukkit {
        namespace map {
            class MapView {
                /**
                 * Get the ID of this map item for use with {@link MapMeta}.
                 */
                public getId(): number;
                /**
                 * Check whether this map is virtual. A map is virtual if its lowermost
                 * MapRenderer is plugin-provided.
                 */
                public isVirtual(): boolean;
                /**
                 * Get the scale of this map.
                 */
                public getScale(): org.bukkit.map.MapView.Scale;
                /**
                 * Set the scale of this map.
                 */
                public setScale(scale: org.bukkit.map.MapView.Scale): void;
                /**
                 * Get the center X position of this map.
                 */
                public getCenterX(): number;
                /**
                 * Get the center Z position of this map.
                 */
                public getCenterZ(): number;
                /**
                 * Set the center X position of this map.
                 */
                public setCenterX(x: number): void;
                /**
                 * Set the center Z position of this map.
                 */
                public setCenterZ(z: number): void;
                /**
                 * Get the world that this map is associated with. Primarily used by the
                 * internal renderer, but may be used by external renderers. May return
                 * null if the world the map is associated with is not loaded.
                 */
                public getWorld(): org.bukkit.World;
                /**
                 * Set the world that this map is associated with. The world is used by
                 * the internal renderer, and may also be used by external renderers.
                 */
                public setWorld(world: org.bukkit.World): void;
                /**
                 * Get a list of MapRenderers currently in effect.
                 */
                public getRenderers(): any[] /*java.util.List*/;
                /**
                 * Add a renderer to this map.
                 */
                public addRenderer(renderer: org.bukkit.map.MapRenderer): void;
                /**
                 * Remove a renderer from this map.
                 */
                public removeRenderer(renderer: org.bukkit.map.MapRenderer): boolean;
                /**
                 * Gets whether a position cursor should be shown when the map is near its
                 * center.
                 */
                public isTrackingPosition(): boolean;
                /**
                 * Sets whether a position cursor should be shown when the map is near its
                 * center.
                 */
                public setTrackingPosition(trackingPosition: boolean): void;
                /**
                 * Whether the map will show a smaller position cursor (true), or no
                 * position cursor (false) when cursor is outside of map's range.
                 */
                public isUnlimitedTracking(): boolean;
                /**
                 * Whether the map will show a smaller position cursor (true), or no
                 * position cursor (false) when cursor is outside of map's range.
                 */
                public setUnlimitedTracking(unlimited: boolean): void;
                /**
                 * Gets whether the map is locked or not.
                 * A locked map may not be explored further.
                 */
                public isLocked(): boolean;
                /**
                 * Gets whether the map is locked or not.
                 * A locked map may not be explored further.
                 */
                public setLocked(locked: boolean): void;
            }
        }
    }
}
