declare namespace org {
    namespace bukkit {
        namespace map {
            abstract class MapRenderer {
                /**
                 * Initialize the map renderer base to be non-contextual. See {@link
                 * #isContextual()}.
                 */
                constructor()
                /**
                 * Initialize the map renderer base with the given contextual status.
                 */
                constructor(contextual: boolean)
                /**
                 * Get whether the renderer is contextual, i.e. has different canvases for
                 * different players.
                 */
                public isContextual(): boolean;
                /**
                 * Initialize this MapRenderer for the given map.
                 */
                public initialize(map: org.bukkit.map.MapView): void;
                /**
                 * Render to the given map.
                 */
                public abstract render(map: org.bukkit.map.MapView, canvas: org.bukkit.map.MapCanvas, player: org.bukkit.entity.Player): void;
            }
        }
    }
}
