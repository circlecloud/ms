// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
            interface WritableRenderedImage {
                /**
                 * Adds an observer.  If the observer is already present,
                 * it will receive multiple notifications.
                 */
                // @ts-ignore
                 addTileObserver(to: java.awt.image.TileObserver): void;
                /**
                 * Removes an observer.  If the observer was not registered,
                 * nothing happens.  If the observer was registered for multiple
                 * notifications, it will now be registered for one fewer.
                 */
                // @ts-ignore
                 removeTileObserver(to: java.awt.image.TileObserver): void;
                /**
                 * Checks out a tile for writing.
                 * The WritableRenderedImage is responsible for notifying all
                 * of its TileObservers when a tile goes from having
                 * no writers to having one writer.
                 */
                // @ts-ignore
                 getWritableTile(tileX: number, tileY: number): java.awt.image.WritableRaster;
                /**
                 * Relinquishes the right to write to a tile.  If the caller
                 * continues to write to the tile, the results are undefined.
                 * Calls to this method should only appear in matching pairs
                 * with calls to getWritableTile; any other use will lead
                 * to undefined results.
                 * The WritableRenderedImage is responsible for notifying all of
                 * its TileObservers when a tile goes from having one writer
                 * to having no writers.
                 */
                // @ts-ignore
                 releaseWritableTile(tileX: number, tileY: number): void;
                /**
                 * Returns whether a tile is currently checked out for writing.
                 */
                // @ts-ignore
                 isTileWritable(tileX: number, tileY: number): boolean;
                /**
                 * Returns an array of Point objects indicating which tiles
                 * are checked out for writing.  Returns null if none are
                 * checked out.
                 */
                // @ts-ignore
                 getWritableTileIndices(): java.awt.Point[];
                /**
                 * Returns whether any tile is checked out for writing.
                 * Semantically equivalent to (getWritableTileIndices() != null).
                 */
                // @ts-ignore
                 hasTileWriters(): boolean;
                /**
                 * Sets a rect of the image to the contents of the Raster r, which is
                 * assumed to be in the same coordinate space as the WritableRenderedImage.
                 * The operation is clipped to the bounds of the WritableRenderedImage.
                 */
                // @ts-ignore
                 setData(r: java.awt.image.Raster): void;
            }
        }
    }
}
