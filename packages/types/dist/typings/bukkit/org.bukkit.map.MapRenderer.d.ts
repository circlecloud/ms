// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace map {
            // @ts-ignore
            abstract class MapRenderer extends java.lang.Object {
                /**
                 * Initialize the map renderer base to be non-contextual. See {@link
                 * #isContextual()}.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Initialize the map renderer base with the given contextual status.
                 */
                // @ts-ignore
                constructor(contextual: boolean)
                /**
                 * Get whether the renderer is contextual, i.e. has different canvases for
                 * different players.
                 */
                // @ts-ignore
                public isContextual(): boolean;
                /**
                 * Initialize this MapRenderer for the given map.
                 */
                // @ts-ignore
                public initialize(map: org.bukkit.map.MapView): void;
                /**
                 * Render to the given map.
                 */
                // @ts-ignore
                public abstract render(map: org.bukkit.map.MapView, canvas: org.bukkit.map.MapCanvas, player: org.bukkit.entity.Player): void;
            }
        }
    }
}
