// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace Component {
            // @ts-ignore
            protected class BltBufferStrategy extends java.awt.image.BufferStrategy {
                /**
                 * Creates a new blt buffer strategy around a component
                 */
                // @ts-ignore
                constructor(numBuffers: number, caps: java.awt.BufferCapabilities)
                // @ts-ignore
                protected caps: java.awt.BufferCapabilities;
                // @ts-ignore
                protected backBuffers: java.awt.image.VolatileImage[];
                // @ts-ignore
                protected validatedContents: boolean;
                // @ts-ignore
                protected width: number;
                // @ts-ignore
                protected height: number;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public dispose(): void;
                /**
                 * Creates the back buffers
                 */
                // @ts-ignore
                protected createBackBuffers(numBuffers: number): void;
                // @ts-ignore
                public getCapabilities(): java.awt.BufferCapabilities;
                // @ts-ignore
                public getDrawGraphics(): java.awt.Graphics;
                /**
                 * Makes the next available buffer visible.
                 */
                // @ts-ignore
                public show(): void;
                /**
                 * Restore the drawing buffer if it has been lost
                 */
                // @ts-ignore
                protected revalidate(): void;
                // @ts-ignore
                public contentsLost(): boolean;
                // @ts-ignore
                public contentsRestored(): boolean;
            }
        }
    }
}
