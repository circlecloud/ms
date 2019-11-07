declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
            interface TileObserver {
                /**
                 * A tile is about to be updated (it is either about to be grabbed
                 * for writing, or it is being released from writing).
                 */
                // @ts-ignore
                 tileUpdate(source: java.awt.image.WritableRenderedImage, tileX: number, tileY: number, willBeWritable: boolean): void;
            }
        }
    }
}
