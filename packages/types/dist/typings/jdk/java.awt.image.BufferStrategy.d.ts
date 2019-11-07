declare namespace java {
    namespace awt {
        namespace image {
            // @ts-ignore
            abstract class BufferStrategy extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Returns the <code>BufferCapabilities</code> for this
                 * <code>BufferStrategy</code>.
                 */
                // @ts-ignore
                public abstract getCapabilities(): java.awt.BufferCapabilities;
                /**
                 * Creates a graphics context for the drawing buffer.  This method may not
                 * be synchronized for performance reasons; use of this method by multiple
                 * threads should be handled at the application level.  Disposal of the
                 * graphics object obtained must be handled by the application.
                 */
                // @ts-ignore
                public abstract getDrawGraphics(): java.awt.Graphics;
                /**
                 * Returns whether the drawing buffer was lost since the last call to
                 * <code>getDrawGraphics</code>.  Since the buffers in a buffer strategy
                 * are usually type <code>VolatileImage</code>, they may become lost.
                 * For a discussion on lost buffers, see <code>VolatileImage</code>.
                 */
                // @ts-ignore
                public abstract contentsLost(): boolean;
                /**
                 * Returns whether the drawing buffer was recently restored from a lost
                 * state and reinitialized to the default background color (white).
                 * Since the buffers in a buffer strategy are usually type
                 * <code>VolatileImage</code>, they may become lost.  If a surface has
                 * been recently restored from a lost state since the last call to
                 * <code>getDrawGraphics</code>, it may require repainting.
                 * For a discussion on lost buffers, see <code>VolatileImage</code>.
                 */
                // @ts-ignore
                public abstract contentsRestored(): boolean;
                /**
                 * Makes the next available buffer visible by either copying the memory
                 * (blitting) or changing the display pointer (flipping).
                 */
                // @ts-ignore
                public abstract show(): void;
                /**
                 * Releases system resources currently consumed by this
                 * <code>BufferStrategy</code> and
                 * removes it from the associated Component.  After invoking this
                 * method, <code>getBufferStrategy</code> will return null.  Trying
                 * to use a <code>BufferStrategy</code> after it has been disposed will
                 * result in undefined behavior.
                 */
                // @ts-ignore
                public dispose(): void;
            }
        }
    }
}
