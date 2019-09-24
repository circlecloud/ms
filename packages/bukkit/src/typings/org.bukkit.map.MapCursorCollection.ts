declare namespace org {
    namespace bukkit {
        namespace map {
            // @ts-ignore
             class MapCursorCollection {
                constructor()
                /**
                 * Get the amount of cursors in this collection.
                 */
                public size(): number;
                /**
                 * Get a cursor from this collection.
                 */
                public getCursor(index: number): org.bukkit.map.MapCursor;
                /**
                 * Remove a cursor from the collection.
                 */
                public removeCursor(cursor: org.bukkit.map.MapCursor): boolean;
                /**
                 * Add a cursor to the collection.
                 */
                public addCursor(cursor: org.bukkit.map.MapCursor): org.bukkit.map.MapCursor;
                /**
                 * Add a cursor to the collection.
                 */
                public addCursor(x: number, y: number, direction: number): org.bukkit.map.MapCursor;
                /**
                 * Add a cursor to the collection.
                 */
                public addCursor(x: number, y: number, direction: number, type: number): org.bukkit.map.MapCursor;
                /**
                 * Add a cursor to the collection.
                 */
                public addCursor(x: number, y: number, direction: number, type: number, visible: boolean): org.bukkit.map.MapCursor;
                /**
                 * Add a cursor to the collection.
                 */
                public addCursor(x: number, y: number, direction: number, type: number, visible: boolean, caption: string): org.bukkit.map.MapCursor;
            }
        }
    }
}
