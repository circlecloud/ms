declare namespace java {
    namespace awt {
        namespace dnd {
            // @ts-ignore
            abstract class DragGestureRecognizer extends java.lang.Object {
                /**
                 * Construct a new <code>DragGestureRecognizer</code>
                 * given the <code>DragSource</code> to be used
                 * in this Drag and Drop operation, the <code>Component</code>
                 * this <code>DragGestureRecognizer</code> should "observe"
                 * for drag initiating gestures, the action(s) supported
                 * for this Drag and Drop operation, and the
                 * <code>DragGestureListener</code> to notify
                 * once a drag initiating gesture has been detected.
                 * <P>
                 */
                // @ts-ignore
                constructor(ds: java.awt.dnd.DragSource, c: java.awt.Component, sa: number, dgl: java.awt.dnd.DragGestureListener)
                /**
                 * Construct a new <code>DragGestureRecognizer</code>
                 * given the <code>DragSource</code> to be used in this
                 * Drag and Drop
                 * operation, the <code>Component</code> this
                 * <code>DragGestureRecognizer</code> should "observe"
                 * for drag initiating gestures, and the action(s)
                 * supported for this Drag and Drop operation.
                 * <P>
                 */
                // @ts-ignore
                constructor(ds: java.awt.dnd.DragSource, c: java.awt.Component, sa: number)
                /**
                 * Construct a new <code>DragGestureRecognizer</code>
                 * given the <code>DragSource</code> to be used
                 * in this Drag and Drop operation, and
                 * the <code>Component</code> this
                 * <code>DragGestureRecognizer</code>
                 * should "observe" for drag initiating gestures.
                 * <P>
                 */
                // @ts-ignore
                constructor(ds: java.awt.dnd.DragSource, c: java.awt.Component)
                /**
                 * Construct a new <code>DragGestureRecognizer</code>
                 * given the <code>DragSource</code> to be used in this
                 * Drag and Drop operation.
                 * <P>
                 */
                // @ts-ignore
                constructor(ds: java.awt.dnd.DragSource)
                // @ts-ignore
                protected dragSource: java.awt.dnd.DragSource;
                // @ts-ignore
                protected component: java.awt.Component;
                // @ts-ignore
                protected dragGestureListener: java.awt.dnd.DragGestureListener;
                // @ts-ignore
                protected sourceActions: number;
                // @ts-ignore
                protected events: java.util.ArrayList;
                /**
                 * register this DragGestureRecognizer's Listeners with the Component
                 * subclasses must override this method
                 */
                // @ts-ignore
                protected abstract registerListeners(): void;
                /**
                 * unregister this DragGestureRecognizer's Listeners with the Component
                 * subclasses must override this method
                 */
                // @ts-ignore
                protected abstract unregisterListeners(): void;
                /**
                 * This method returns the <code>DragSource</code>
                 * this <code>DragGestureRecognizer</code>
                 * will use in order to process the Drag and Drop
                 * operation.
                 * <P>
                 */
                // @ts-ignore
                public getDragSource(): java.awt.dnd.DragSource;
                /**
                 * This method returns the <code>Component</code>
                 * that is to be "observed" by the
                 * <code>DragGestureRecognizer</code>
                 * for drag initiating gestures.
                 * <P>
                 */
                // @ts-ignore
                public getComponent(): java.awt.Component;
                /**
                 * set the Component that the DragGestureRecognizer is associated with
                 * registerListeners() and unregisterListeners() are called as a side
                 * effect as appropriate.
                 * <P>
                 */
                // @ts-ignore
                public setComponent(c: java.awt.Component): void;
                /**
                 * This method returns an int representing the
                 * type of action(s) this Drag and Drop
                 * operation will support.
                 * <P>
                 */
                // @ts-ignore
                public getSourceActions(): number;
                /**
                 * This method sets the permitted source drag action(s)
                 * for this Drag and Drop operation.
                 * <P>
                 */
                // @ts-ignore
                public setSourceActions(actions: number): void;
                /**
                 * This method returns the first event in the
                 * series of events that initiated
                 * the Drag and Drop operation.
                 * <P>
                 */
                // @ts-ignore
                public getTriggerEvent(): java.awt.event.InputEvent;
                /**
                 * Reset the Recognizer, if its currently recognizing a gesture, ignore
                 * it.
                 */
                // @ts-ignore
                public resetRecognizer(): void;
                /**
                 * Register a new <code>DragGestureListener</code>.
                 * <P>
                 */
                // @ts-ignore
                public addDragGestureListener(dgl: java.awt.dnd.DragGestureListener): void;
                /**
                 * unregister the current DragGestureListener
                 * <P>
                 */
                // @ts-ignore
                public removeDragGestureListener(dgl: java.awt.dnd.DragGestureListener): void;
                /**
                 * Notify the DragGestureListener that a Drag and Drop initiating
                 * gesture has occurred. Then reset the state of the Recognizer.
                 * <P>
                 */
                // @ts-ignore
                protected fireDragGestureRecognized(dragAction: number, p: java.awt.Point): void;
                /**
                 * Listeners registered on the Component by this Recognizer shall record
                 * all Events that are recognized as part of the series of Events that go
                 * to comprise a Drag and Drop initiating gesture via this API.
                 * <P>
                 * This method is used by a <code>DragGestureRecognizer</code>
                 * implementation to add an <code>InputEvent</code>
                 * subclass (that it believes is one in a series
                 * of events that comprise a Drag and Drop operation)
                 * to the array of events that this
                 * <code>DragGestureRecognizer</code> maintains internally.
                 * <P>
                 */
                // @ts-ignore
                protected appendEvent(awtie: java.awt.event.InputEvent): void;
            }
        }
    }
}
