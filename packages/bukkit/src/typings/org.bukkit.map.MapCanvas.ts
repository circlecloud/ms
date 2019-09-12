declare namespace org {
    namespace bukkit {
        namespace map {
            class MapCanvas {
                /**
                 * Get the map this canvas is attached to.
                 */
                public getMapView(): org.bukkit.map.MapView;
                /**
                 * Get the cursor collection associated with this canvas.
                 */
                public getCursors(): org.bukkit.map.MapCursorCollection;
                /**
                 * Set the cursor collection associated with this canvas. This does not
                 * usually need to be called since a MapCursorCollection is already
                 * provided.
                 */
                public setCursors(cursors: org.bukkit.map.MapCursorCollection): void;
                /**
                 * Draw a pixel to the canvas.
                 */
                public setPixel(x: number, y: number, color: number): void;
                /**
                 * Get a pixel from the canvas.
                 */
                public getPixel(x: number, y: number): number;
                /**
                 * Get a pixel from the layers below this canvas.
                 */
                public getBasePixel(x: number, y: number): number;
                /**
                 * Draw an image to the map. The image will be clipped if necessary.
                 */
                public drawImage(x: number, y: number, image: any): void;
                /**
                 * Render text to the map using fancy formatting. Newline (\n) characters
                 * will move down one line and return to the original column, and the text
                 * color can be changed using sequences such as "§12;", replacing 12 with
                 * the palette index of the color (see {@link MapPalette}).
                 */
                public drawText(x: number, y: number, font: org.bukkit.map.MapFont, text: string): void;
            }
        }
    }
}
