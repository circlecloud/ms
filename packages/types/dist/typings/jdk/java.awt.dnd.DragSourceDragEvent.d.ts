// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace dnd {
            // @ts-ignore
             class DragSourceDragEvent extends java.awt.dnd.DragSourceEvent {
                /**
                 * Constructs a <code>DragSourceDragEvent</code>.
                 * This class is typically
                 * instantiated by the <code>DragSourceContextPeer</code>
                 * rather than directly
                 * by client code.
                 * The coordinates for this <code>DragSourceDragEvent</code>
                 * are not specified, so <code>getLocation</code> will return
                 * <code>null</code> for this event.
                 * <p>
                 * The arguments <code>dropAction</code> and <code>action</code> should
                 * be one of <code>DnDConstants</code> that represents a single action.
                 * The argument <code>modifiers</code> should be either a bitwise mask
                 * of old <code>java.awt.event.InputEvent.*_MASK</code> constants or a
                 * bitwise mask of extended <code>java.awt.event.InputEvent.*_DOWN_MASK</code>
                 * constants.
                 * This constructor does not throw any exception for invalid <code>dropAction</code>,
                 * <code>action</code> and <code>modifiers</code>.
                 */
                // @ts-ignore
                constructor(dsc: java.awt.dnd.DragSourceContext, dropAction: number, action: number, modifiers: number)
                /**
                 * Constructs a <code>DragSourceDragEvent</code> given the specified
                 * <code>DragSourceContext</code>, user drop action, target drop action,
                 * modifiers and coordinates.
                 * <p>
                 * The arguments <code>dropAction</code> and <code>action</code> should
                 * be one of <code>DnDConstants</code> that represents a single action.
                 * The argument <code>modifiers</code> should be either a bitwise mask
                 * of old <code>java.awt.event.InputEvent.*_MASK</code> constants or a
                 * bitwise mask of extended <code>java.awt.event.InputEvent.*_DOWN_MASK</code>
                 * constants.
                 * This constructor does not throw any exception for invalid <code>dropAction</code>,
                 * <code>action</code> and <code>modifiers</code>.
                 */
                // @ts-ignore
                constructor(dsc: java.awt.dnd.DragSourceContext, dropAction: number, action: number, modifiers: number, x: number, y: number)
                /**
                 * This method returns the target drop action.
                 */
                // @ts-ignore
                public getTargetActions(): number;
                /**
                 * This method returns an <code>int</code> representing
                 * the current state of the input device modifiers
                 * associated with the user's gesture. Typically these
                 * would be mouse buttons or keyboard modifiers.
                 * <P>
                 * If the <code>modifiers</code> passed to the constructor
                 * are invalid, this method returns them unchanged.
                 */
                // @ts-ignore
                public getGestureModifiers(): number;
                /**
                 * This method returns an <code>int</code> representing
                 * the current state of the input device extended modifiers
                 * associated with the user's gesture.
                 * See {@link InputEvent#getModifiersEx}
                 * <P>
                 * If the <code>modifiers</code> passed to the constructor
                 * are invalid, this method returns them unchanged.
                 */
                // @ts-ignore
                public getGestureModifiersEx(): number;
                /**
                 * This method returns the user drop action.
                 */
                // @ts-ignore
                public getUserAction(): number;
                /**
                 * This method returns the logical intersection of
                 * the target drop action and the set of drop actions supported by
                 * the drag source.
                 */
                // @ts-ignore
                public getDropAction(): number;
            }
        }
    }
}
