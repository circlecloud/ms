// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace Component {
            // @ts-ignore
            protected class FlipBufferStrategy extends java.awt.image.BufferStrategy {
                /**
                 * Creates a new flipping buffer strategy for this component.
                 * The component must be a <code>Canvas</code> or <code>Window</code>.
                 */
                // @ts-ignore
                constructor(numBuffers: number, caps: java.awt.BufferCapabilities)
                // @ts-ignore
                protected numBuffers: number;
                // @ts-ignore
                protected caps: java.awt.BufferCapabilities;
                // @ts-ignore
                protected drawBuffer: java.awt.Image;
                // @ts-ignore
                protected drawVBuffer: java.awt.image.VolatileImage;
                // @ts-ignore
                protected validatedContents: boolean;
                /**
                 * Creates one or more complex, flipping buffers with the given
                 * capabilities.
                 */
                // @ts-ignore
                protected createBuffers(numBuffers: number, caps: java.awt.BufferCapabilities): void;
                // @ts-ignore
                protected getBackBuffer(): java.awt.Image;
                /**
                 * Flipping moves the contents of the back buffer to the front buffer,
                 * either by copying or by moving the video pointer.
                 */
                // @ts-ignore
                protected flip(flipAction: java.awt.BufferCapabilities.FlipContents): void;
                /**
                 * Destroys the buffers created through this object
                 */
                // @ts-ignore
                protected destroyBuffers(): void;
                // @ts-ignore
                public getCapabilities(): java.awt.BufferCapabilities;
                // @ts-ignore
                public getDrawGraphics(): java.awt.Graphics;
                /**
                 * Restore the drawing buffer if it has been lost
                 */
                // @ts-ignore
                protected revalidate(): void;
                // @ts-ignore
                public contentsLost(): boolean;
                // @ts-ignore
                public contentsRestored(): boolean;
                /**
                 * Makes the next available buffer visible by either blitting or
                 * flipping.
                 */
                // @ts-ignore
                public show(): void;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public dispose(): void;
            }
        }
    }
}
