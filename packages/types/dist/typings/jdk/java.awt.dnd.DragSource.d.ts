declare namespace java {
    namespace awt {
        namespace dnd {
            // @ts-ignore
             class DragSource extends java.lang.Object {
                /**
                 * Creates a new <code>DragSource</code>.
                 */
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static DefaultCopyDrop: java.awt.Cursor;
                // @ts-ignore
                public static DefaultMoveDrop: java.awt.Cursor;
                // @ts-ignore
                public static DefaultLinkDrop: java.awt.Cursor;
                // @ts-ignore
                public static DefaultCopyNoDrop: java.awt.Cursor;
                // @ts-ignore
                public static DefaultMoveNoDrop: java.awt.Cursor;
                // @ts-ignore
                public static DefaultLinkNoDrop: java.awt.Cursor;
                /**
                 * Gets the <code>DragSource</code> object associated with
                 * the underlying platform.
                 */
                // @ts-ignore
                public static getDefaultDragSource(): java.awt.dnd.DragSource;
                /**
                 * Reports
                 * whether or not drag
                 * <code>Image</code> support
                 * is available on the underlying platform.
                 * <P>
                 */
                // @ts-ignore
                public static isDragImageSupported(): boolean;
                /**
                 * Start a drag, given the <code>DragGestureEvent</code>
                 * that initiated the drag, the initial
                 * <code>Cursor</code> to use,
                 * the <code>Image</code> to drag,
                 * the offset of the <code>Image</code> origin
                 * from the hotspot of the <code>Cursor</code> at
                 * the instant of the trigger,
                 * the <code>Transferable</code> subject data
                 * of the drag, the <code>DragSourceListener</code>,
                 * and the <code>FlavorMap</code>.
                 * <P>
                 */
                // @ts-ignore
                public startDrag(trigger: java.awt.dnd.DragGestureEvent, dragCursor: java.awt.Cursor, dragImage: java.awt.Image, imageOffset: java.awt.Point, transferable: java.awt.datatransfer.Transferable, dsl: java.awt.dnd.DragSourceListener, flavorMap: java.awt.datatransfer.FlavorMap): void;
                /**
                 * Start a drag, given the <code>DragGestureEvent</code>
                 * that initiated the drag, the initial
                 * <code>Cursor</code> to use,
                 * the <code>Transferable</code> subject data
                 * of the drag, the <code>DragSourceListener</code>,
                 * and the <code>FlavorMap</code>.
                 * <P>
                 */
                // @ts-ignore
                public startDrag(trigger: java.awt.dnd.DragGestureEvent, dragCursor: java.awt.Cursor, transferable: java.awt.datatransfer.Transferable, dsl: java.awt.dnd.DragSourceListener, flavorMap: java.awt.datatransfer.FlavorMap): void;
                /**
                 * Start a drag, given the <code>DragGestureEvent</code>
                 * that initiated the drag, the initial <code>Cursor</code>
                 * to use,
                 * the <code>Image</code> to drag,
                 * the offset of the <code>Image</code> origin
                 * from the hotspot of the <code>Cursor</code>
                 * at the instant of the trigger,
                 * the subject data of the drag, and
                 * the <code>DragSourceListener</code>.
                 * <P>
                 */
                // @ts-ignore
                public startDrag(trigger: java.awt.dnd.DragGestureEvent, dragCursor: java.awt.Cursor, dragImage: java.awt.Image, dragOffset: java.awt.Point, transferable: java.awt.datatransfer.Transferable, dsl: java.awt.dnd.DragSourceListener): void;
                /**
                 * Start a drag, given the <code>DragGestureEvent</code>
                 * that initiated the drag, the initial
                 * <code>Cursor</code> to
                 * use,
                 * the <code>Transferable</code> subject data
                 * of the drag, and the <code>DragSourceListener</code>.
                 * <P>
                 */
                // @ts-ignore
                public startDrag(trigger: java.awt.dnd.DragGestureEvent, dragCursor: java.awt.Cursor, transferable: java.awt.datatransfer.Transferable, dsl: java.awt.dnd.DragSourceListener): void;
                /**
                 * Creates the {@code DragSourceContext} to handle the current drag
                 * operation.
                 * <p>
                 * To incorporate a new <code>DragSourceContext</code>
                 * subclass, subclass <code>DragSource</code> and
                 * override this method.
                 * <p>
                 * If <code>dragImage</code> is <code>null</code>, no image is used
                 * to represent the drag over feedback for this drag operation, but
                 * <code>NullPointerException</code> is not thrown.
                 * <p>
                 * If <code>dsl</code> is <code>null</code>, no drag source listener
                 * is registered with the created <code>DragSourceContext</code>,
                 * but <code>NullPointerException</code> is not thrown.
                 */
                // @ts-ignore
                protected createDragSourceContext(dscp: java.awt.dnd.peer.DragSourceContextPeer, dgl: java.awt.dnd.DragGestureEvent, dragCursor: java.awt.Cursor, dragImage: java.awt.Image, imageOffset: java.awt.Point, t: java.awt.datatransfer.Transferable, dsl: java.awt.dnd.DragSourceListener): java.awt.dnd.DragSourceContext;
                /**
                 * This method returns the
                 * <code>FlavorMap</code> for this <code>DragSource</code>.
                 * <P>
                 */
                // @ts-ignore
                public getFlavorMap(): java.awt.datatransfer.FlavorMap;
                /**
                 * Creates a new <code>DragGestureRecognizer</code>
                 * that implements the specified
                 * abstract subclass of
                 * <code>DragGestureRecognizer</code>, and
                 * sets the specified <code>Component</code>
                 * and <code>DragGestureListener</code> on
                 * the newly created object.
                 * <P>
                 */
                // @ts-ignore
                public createDragGestureRecognizer(recognizerAbstractClass: java.lang.Class, c: java.awt.Component, actions: number, dgl: java.awt.dnd.DragGestureListener): java.awt.dnd.DragGestureRecognizer;
                /**
                 * Creates a new <code>DragGestureRecognizer</code>
                 * that implements the default
                 * abstract subclass of <code>DragGestureRecognizer</code>
                 * for this <code>DragSource</code>,
                 * and sets the specified <code>Component</code>
                 * and <code>DragGestureListener</code> on the
                 * newly created object.
                 * For this <code>DragSource</code>
                 * the default is <code>MouseDragGestureRecognizer</code>.
                 * <P>
                 */
                // @ts-ignore
                public createDefaultDragGestureRecognizer(c: java.awt.Component, actions: number, dgl: java.awt.dnd.DragGestureListener): java.awt.dnd.DragGestureRecognizer;
                /**
                 * Adds the specified <code>DragSourceListener</code> to this
                 * <code>DragSource</code> to receive drag source events during drag
                 * operations intiated with this <code>DragSource</code>.
                 * If a <code>null</code> listener is specified, no action is taken and no
                 * exception is thrown.
                 */
                // @ts-ignore
                public addDragSourceListener(dsl: java.awt.dnd.DragSourceListener): void;
                /**
                 * Removes the specified <code>DragSourceListener</code> from this
                 * <code>DragSource</code>.
                 * If a <code>null</code> listener is specified, no action is taken and no
                 * exception is thrown.
                 * If the listener specified by the argument was not previously added to
                 * this <code>DragSource</code>, no action is taken and no exception
                 * is thrown.
                 */
                // @ts-ignore
                public removeDragSourceListener(dsl: java.awt.dnd.DragSourceListener): void;
                /**
                 * Gets all the <code>DragSourceListener</code>s
                 * registered with this <code>DragSource</code>.
                 */
                // @ts-ignore
                public getDragSourceListeners(): java.awt.dnd.DragSourceListener[];
                /**
                 * Adds the specified <code>DragSourceMotionListener</code> to this
                 * <code>DragSource</code> to receive drag motion events during drag
                 * operations intiated with this <code>DragSource</code>.
                 * If a <code>null</code> listener is specified, no action is taken and no
                 * exception is thrown.
                 */
                // @ts-ignore
                public addDragSourceMotionListener(dsml: java.awt.dnd.DragSourceMotionListener): void;
                /**
                 * Removes the specified <code>DragSourceMotionListener</code> from this
                 * <code>DragSource</code>.
                 * If a <code>null</code> listener is specified, no action is taken and no
                 * exception is thrown.
                 * If the listener specified by the argument was not previously added to
                 * this <code>DragSource</code>, no action is taken and no exception
                 * is thrown.
                 */
                // @ts-ignore
                public removeDragSourceMotionListener(dsml: java.awt.dnd.DragSourceMotionListener): void;
                /**
                 * Gets all of the  <code>DragSourceMotionListener</code>s
                 * registered with this <code>DragSource</code>.
                 */
                // @ts-ignore
                public getDragSourceMotionListeners(): java.awt.dnd.DragSourceMotionListener[];
                /**
                 * Gets all the objects currently registered as
                 * <code><em>Foo</em>Listener</code>s upon this <code>DragSource</code>.
                 * <code><em>Foo</em>Listener</code>s are registered using the
                 * <code>add<em>Foo</em>Listener</code> method.
                 */
                // @ts-ignore
                public getListeners(listenerType: java.lang.Class): java.util.EventListener[];
                /**
                 * Returns the drag gesture motion threshold. The drag gesture motion threshold
                 * defines the recommended behavior for {@link MouseDragGestureRecognizer}s.
                 * <p>
                 * If the system property <code>awt.dnd.drag.threshold</code> is set to
                 * a positive integer, this method returns the value of the system property;
                 * otherwise if a pertinent desktop property is available and supported by
                 * the implementation of the Java platform, this method returns the value of
                 * that property; otherwise this method returns some default value.
                 * The pertinent desktop property can be queried using
                 * <code>java.awt.Toolkit.getDesktopProperty("DnD.gestureMotionThreshold")</code>.
                 */
                // @ts-ignore
                public static getDragThreshold(): number;
            }
        }
    }
}
