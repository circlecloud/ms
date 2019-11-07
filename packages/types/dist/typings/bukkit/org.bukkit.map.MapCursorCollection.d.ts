declare namespace org {
    namespace bukkit {
        namespace map {
            // @ts-ignore
             class MapCursorCollection extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Get the amount of cursors in this collection.
                 */
                // @ts-ignore
                public size(): number;
                /**
                 * Get a cursor from this collection.
                 */
                // @ts-ignore
                public getCursor(index: number): org.bukkit.map.MapCursor;
                /**
                 * Remove a cursor from the collection.
                 */
                // @ts-ignore
                public removeCursor(cursor: org.bukkit.map.MapCursor): boolean;
                /**
                 * Add a cursor to the collection.
                 */
                // @ts-ignore
                public addCursor(cursor: org.bukkit.map.MapCursor): org.bukkit.map.MapCursor;
                /**
                 * Add a cursor to the collection.
                 */
                // @ts-ignore
                public addCursor(x: number, y: number, direction: number): org.bukkit.map.MapCursor;
                /**
                 * Add a cursor to the collection.
                 */
                // @ts-ignore
                public addCursor(x: number, y: number, direction: number, type: number): org.bukkit.map.MapCursor;
                /**
                 * Add a cursor to the collection.
                 */
                // @ts-ignore
                public addCursor(x: number, y: number, direction: number, type: number, visible: boolean): org.bukkit.map.MapCursor;
                /**
                 * Add a cursor to the collection.
                 */
                // @ts-ignore
                public addCursor(x: number, y: number, direction: number, type: number, visible: boolean, caption: string): org.bukkit.map.MapCursor;
            }
        }
    }
}
