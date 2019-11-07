// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace peer {
            // @ts-ignore
            interface ComponentPeer {
                // @ts-ignore
                 SET_LOCATION: number;
                // @ts-ignore
                 SET_SIZE: number;
                // @ts-ignore
                 SET_BOUNDS: number;
                // @ts-ignore
                 SET_CLIENT_SIZE: number;
                // @ts-ignore
                 RESET_OPERATION: number;
                // @ts-ignore
                 NO_EMBEDDED_CHECK: number;
                // @ts-ignore
                 DEFAULT_OPERATION: number;
                /**
                 * Determines if a component has been obscured, i.e. by an overlapping
                 * window or similar. This is used by JViewport for optimizing performance.
                 * This doesn't have to be implemented, when
                 * {@link #canDetermineObscurity()} returns {@code false}.
                 */
                // @ts-ignore
                 isObscured(): boolean;
                /**
                 * Returns {@code true} when the peer can determine if a component
                 * has been obscured, {@code false} false otherwise.
                 */
                // @ts-ignore
                 canDetermineObscurity(): boolean;
                /**
                 * Makes a component visible or invisible.
                 */
                // @ts-ignore
                 setVisible(v: boolean): void;
                /**
                 * Enables or disables a component. Disabled components are usually grayed
                 * out and cannot be activated.
                 */
                // @ts-ignore
                 setEnabled(e: boolean): void;
                /**
                 * Paints the component to the specified graphics context. This is called
                 * by {@link Component#paintAll(Graphics)} to paint the component.
                 */
                // @ts-ignore
                 paint(g: java.awt.Graphics): void;
                /**
                 * Prints the component to the specified graphics context. This is called
                 * by {@link Component#printAll(Graphics)} to print the component.
                 */
                // @ts-ignore
                 print(g: java.awt.Graphics): void;
                /**
                 * Sets the location or size or both of the component. The location is
                 * specified relative to the component's parent. The {@code op}
                 * parameter specifies which properties change. If it is
                 * {@link #SET_LOCATION}, then only the location changes (and the size
                 * parameters can be ignored). If {@code op} is {@link #SET_SIZE},
                 * then only the size changes (and the location can be ignored). If
                 * {@code op} is {@link #SET_BOUNDS}, then both change. There is a
                 * special value {@link #SET_CLIENT_SIZE}, which is used only for
                 * window-like components to set the size of the client (i.e. the 'inner'
                 * size, without the insets of the window borders).
                 */
                // @ts-ignore
                 setBounds(x: number, y: number, width: number, height: number, op: number): void;
                /**
                 * Called to let the component peer handle events.
                 */
                // @ts-ignore
                 handleEvent(e: java.awt.AWTEvent): void;
                /**
                 * Called to coalesce paint events.
                 */
                // @ts-ignore
                 coalescePaintEvent(e: java.awt.event.PaintEvent): void;
                /**
                 * Determines the location of the component on the screen.
                 */
                // @ts-ignore
                 getLocationOnScreen(): java.awt.Point;
                /**
                 * Determines the preferred size of the component.
                 */
                // @ts-ignore
                 getPreferredSize(): java.awt.Dimension;
                /**
                 * Determines the minimum size of the component.
                 */
                // @ts-ignore
                 getMinimumSize(): java.awt.Dimension;
                /**
                 * Returns the color model used by the component.
                 */
                // @ts-ignore
                 getColorModel(): java.awt.image.ColorModel;
                /**
                 * Returns a graphics object to paint on the component.
                 */
                // @ts-ignore
                 getGraphics(): java.awt.Graphics;
                /**
                 * Returns a font metrics object to determine the metrics properties of
                 * the specified font.
                 */
                // @ts-ignore
                 getFontMetrics(font: java.awt.Font): java.awt.FontMetrics;
                /**
                 * Disposes all resources held by the component peer. This is called
                 * when the component has been disconnected from the component hierarchy
                 * and is about to be garbage collected.
                 */
                // @ts-ignore
                 dispose(): void;
                /**
                 * Sets the foreground color of this component.
                 */
                // @ts-ignore
                 setForeground(c: java.awt.Color): void;
                /**
                 * Sets the background color of this component.
                 */
                // @ts-ignore
                 setBackground(c: java.awt.Color): void;
                /**
                 * Sets the font of this component.
                 */
                // @ts-ignore
                 setFont(f: java.awt.Font): void;
                /**
                 * Updates the cursor of the component.
                 */
                // @ts-ignore
                 updateCursorImmediately(): void;
                /**
                 * Requests focus on this component.
                 */
                // @ts-ignore
                 requestFocus(lightweightChild: java.awt.Component, temporary: boolean, focusedWindowChangeAllowed: boolean, time: number, cause: any /*sun.awt.CausedFocusEvent.Cause*/): boolean;
                /**
                 * Returns {@code true} when the component takes part in the focus
                 * traversal, {@code false} otherwise.
                 */
                // @ts-ignore
                 isFocusable(): boolean;
                /**
                 * Creates an image using the specified image producer.
                 */
                // @ts-ignore
                 createImage(producer: java.awt.image.ImageProducer): java.awt.Image;
                /**
                 * Creates an empty image with the specified width and height. This is
                 * generally used as a non-accelerated backbuffer for drawing onto the
                 * component (e.g. by Swing).
                 */
                // @ts-ignore
                 createImage(width: number, height: number): java.awt.Image;
                /**
                 * Creates an empty volatile image with the specified width and height.
                 * This is generally used as an accelerated backbuffer for drawing onto
                 * the component (e.g. by Swing).
                 */
                // @ts-ignore
                 createVolatileImage(width: number, height: number): java.awt.image.VolatileImage;
                /**
                 * Prepare the specified image for rendering on this component. This should
                 * start loading the image (if not already loaded) and create an
                 * appropriate screen representation.
                 */
                // @ts-ignore
                 prepareImage(img: java.awt.Image, w: number, h: number, o: java.awt.image.ImageObserver): boolean;
                /**
                 * Determines the status of the construction of the screen representaion
                 * of the specified image.
                 */
                // @ts-ignore
                 checkImage(img: java.awt.Image, w: number, h: number, o: java.awt.image.ImageObserver): number;
                /**
                 * Returns the graphics configuration that corresponds to this component.
                 */
                // @ts-ignore
                 getGraphicsConfiguration(): java.awt.GraphicsConfiguration;
                /**
                 * Determines if the component handles wheel scrolling itself. Otherwise
                 * it is delegated to the component's parent.
                 */
                // @ts-ignore
                 handlesWheelScrolling(): boolean;
                /**
                 * Create {@code numBuffers} flipping buffers with the specified
                 * buffer capabilities.
                 */
                // @ts-ignore
                 createBuffers(numBuffers: number, caps: java.awt.BufferCapabilities): void;
                /**
                 * Returns the back buffer as image.
                 */
                // @ts-ignore
                 getBackBuffer(): java.awt.Image;
                /**
                 * Move the back buffer to the front buffer.
                 */
                // @ts-ignore
                 flip(x1: number, y1: number, x2: number, y2: number, flipAction: java.awt.BufferCapabilities.FlipContents): void;
                /**
                 * Destroys all created buffers.
                 */
                // @ts-ignore
                 destroyBuffers(): void;
                /**
                 * Reparents this peer to the new parent referenced by
                 * {@code newContainer} peer. Implementation depends on toolkit and
                 * container.
                 */
                // @ts-ignore
                 reparent(newContainer: java.awt.peer.ContainerPeer): void;
                /**
                 * Returns whether this peer supports reparenting to another parent without
                 * destroying the peer.
                 */
                // @ts-ignore
                 isReparentSupported(): boolean;
                /**
                 * Used by lightweight implementations to tell a ComponentPeer to layout
                 * its sub-elements.  For instance, a lightweight Checkbox needs to layout
                 * the box, as well as the text label.
                 */
                // @ts-ignore
                 layout(): void;
                /**
                 * Applies the shape to the native component window.
                 */
                // @ts-ignore
                 applyShape(shape: any /*sun.java2d.pipe.Region*/): void;
                /**
                 * Lowers this component at the bottom of the above HW peer. If the above parameter
                 * is null then the method places this component at the top of the Z-order.
                 */
                // @ts-ignore
                 setZOrder(above: java.awt.peer.ComponentPeer): void;
                /**
                 * Updates internal data structures related to the component's GC.
                 */
                // @ts-ignore
                 updateGraphicsData(gc: java.awt.GraphicsConfiguration): boolean;
            }
        }
    }
}
