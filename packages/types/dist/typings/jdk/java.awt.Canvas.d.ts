declare namespace java {
    namespace awt {
        // @ts-ignore
         class Canvas extends java.awt.Component {
            /**
             * Constructs a new Canvas.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new Canvas given a GraphicsConfiguration object.
             */
            // @ts-ignore
            constructor(config: java.awt.GraphicsConfiguration)
            /**
             * Creates the peer of the canvas.  This peer allows you to change the
             * user interface of the canvas without changing its functionality.
             */
            // @ts-ignore
            public addNotify(): void;
            /**
             * Paints this canvas.
             * <p>
             * Most applications that subclass <code>Canvas</code> should
             * override this method in order to perform some useful operation
             * (typically, custom painting of the canvas).
             * The default operation is simply to clear the canvas.
             * Applications that override this method need not call
             * super.paint(g).
             */
            // @ts-ignore
            public paint(g: java.awt.Graphics): void;
            /**
             * Updates this canvas.
             * <p>
             * This method is called in response to a call to <code>repaint</code>.
             * The canvas is first cleared by filling it with the background
             * color, and then completely redrawn by calling this canvas's
             * <code>paint</code> method.
             * Note: applications that override this method should either call
             * super.update(g) or incorporate the functionality described
             * above into their own code.
             */
            // @ts-ignore
            public update(g: java.awt.Graphics): void;
            /**
             * Creates a new strategy for multi-buffering on this component.
             * Multi-buffering is useful for rendering performance.  This method
             * attempts to create the best strategy available with the number of
             * buffers supplied.  It will always create a <code>BufferStrategy</code>
             * with that number of buffers.
             * A page-flipping strategy is attempted first, then a blitting strategy
             * using accelerated buffers.  Finally, an unaccelerated blitting
             * strategy is used.
             * <p>
             * Each time this method is called,
             * the existing buffer strategy for this component is discarded.
             */
            // @ts-ignore
            public createBufferStrategy(numBuffers: number): void;
            /**
             * Creates a new strategy for multi-buffering on this component with the
             * required buffer capabilities.  This is useful, for example, if only
             * accelerated memory or page flipping is desired (as specified by the
             * buffer capabilities).
             * <p>
             * Each time this method
             * is called, the existing buffer strategy for this component is discarded.
             */
            // @ts-ignore
            public createBufferStrategy(numBuffers: number, caps: java.awt.BufferCapabilities): void;
            /**
             * Returns the <code>BufferStrategy</code> used by this component.  This
             * method will return null if a <code>BufferStrategy</code> has not yet
             * been created or has been disposed.
             */
            // @ts-ignore
            public getBufferStrategy(): java.awt.image.BufferStrategy;
            /**
             * Gets the AccessibleContext associated with this Canvas.
             * For canvases, the AccessibleContext takes the form of an
             * AccessibleAWTCanvas.
             * A new AccessibleAWTCanvas instance is created if necessary.
             */
            // @ts-ignore
            public getAccessibleContext(): any /*javax.accessibility.AccessibleContext*/;
        }
    }
}
