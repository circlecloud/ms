// @ts-nocheck
declare namespace java {
    namespace awt {
        namespace event {
            // @ts-ignore
             class MouseEvent extends java.awt.event.InputEvent {
                /**
                 * Constructs a <code>MouseEvent</code> object with the
                 * specified source component,
                 * type, time, modifiers, coordinates, click count, popupTrigger flag,
                 * and button number.
                 * <p>
                 * Creating an invalid event (such
                 * as by using more than one of the old _MASKs, or modifier/button
                 * values which don't match) results in unspecified behavior.
                 * An invocation of the form
                 * <tt>MouseEvent(source, id, when, modifiers, x, y, clickCount, popupTrigger, button)</tt>
                 * behaves in exactly the same way as the invocation
                 * <tt> {@link #MouseEvent(Component, int, long, int, int, int,
                 * int, int, int, boolean, int) MouseEvent}(source, id, when, modifiers,
                 * x, y, xAbs, yAbs, clickCount, popupTrigger, button)</tt>
                 * where xAbs and yAbs defines as source's location on screen plus
                 * relative coordinates x and y.
                 * xAbs and yAbs are set to zero if the source is not showing.
                 * This method throws an
                 * <code>IllegalArgumentException</code> if <code>source</code>
                 * is <code>null</code>.
                 */
                // @ts-ignore
                constructor(source: java.awt.Component, id: number, when: number, modifiers: number, x: number, y: number, clickCount: number, popupTrigger: boolean, button: number)
                /**
                 * Constructs a <code>MouseEvent</code> object with the
                 * specified source component,
                 * type, modifiers, coordinates, click count, and popupTrigger flag.
                 * An invocation of the form
                 * <tt>MouseEvent(source, id, when, modifiers, x, y, clickCount, popupTrigger)</tt>
                 * behaves in exactly the same way as the invocation
                 * <tt> {@link #MouseEvent(Component, int, long, int, int, int,
                 * int, int, int, boolean, int) MouseEvent}(source, id, when, modifiers,
                 * x, y, xAbs, yAbs, clickCount, popupTrigger, MouseEvent.NOBUTTON)</tt>
                 * where xAbs and yAbs defines as source's location on screen plus
                 * relative coordinates x and y.
                 * xAbs and yAbs are set to zero if the source is not showing.
                 * This method throws an <code>IllegalArgumentException</code>
                 * if <code>source</code> is <code>null</code>.
                 */
                // @ts-ignore
                constructor(source: java.awt.Component, id: number, when: number, modifiers: number, x: number, y: number, clickCount: number, popupTrigger: boolean)
                /**
                 * Constructs a <code>MouseEvent</code> object with the
                 * specified source component,
                 * type, time, modifiers, coordinates, absolute coordinates, click count, popupTrigger flag,
                 * and button number.
                 * <p>
                 * Creating an invalid event (such
                 * as by using more than one of the old _MASKs, or modifier/button
                 * values which don't match) results in unspecified behavior.
                 * Even if inconsistent values for relative and absolute coordinates are
                 * passed to the constructor, the mouse event instance is still
                 * created and no exception is thrown.
                 * This method throws an
                 * <code>IllegalArgumentException</code> if <code>source</code>
                 * is <code>null</code>.
                 */
                // @ts-ignore
                constructor(source: java.awt.Component, id: number, when: number, modifiers: number, x: number, y: number, xAbs: number, yAbs: number, clickCount: number, popupTrigger: boolean, button: number)
                // @ts-ignore
                public static MOUSE_FIRST: number;
                // @ts-ignore
                public static MOUSE_LAST: number;
                // @ts-ignore
                public static MOUSE_CLICKED: number;
                // @ts-ignore
                public static MOUSE_PRESSED: number;
                // @ts-ignore
                public static MOUSE_RELEASED: number;
                // @ts-ignore
                public static MOUSE_MOVED: number;
                // @ts-ignore
                public static MOUSE_ENTERED: number;
                // @ts-ignore
                public static MOUSE_EXITED: number;
                // @ts-ignore
                public static MOUSE_DRAGGED: number;
                // @ts-ignore
                public static MOUSE_WHEEL: number;
                // @ts-ignore
                public static NOBUTTON: number;
                // @ts-ignore
                public static BUTTON1: number;
                // @ts-ignore
                public static BUTTON2: number;
                // @ts-ignore
                public static BUTTON3: number;
                /**
                 * Returns the absolute x, y position of the event.
                 * In a virtual device multi-screen environment in which the
                 * desktop area could span multiple physical screen devices,
                 * these coordinates are relative to the virtual coordinate system.
                 * Otherwise, these coordinates are relative to the coordinate system
                 * associated with the Component's GraphicsConfiguration.
                 */
                // @ts-ignore
                public getLocationOnScreen(): java.awt.Point;
                /**
                 * Returns the absolute horizontal x position of the event.
                 * In a virtual device multi-screen environment in which the
                 * desktop area could span multiple physical screen devices,
                 * this coordinate is relative to the virtual coordinate system.
                 * Otherwise, this coordinate is relative to the coordinate system
                 * associated with the Component's GraphicsConfiguration.
                 */
                // @ts-ignore
                public getXOnScreen(): number;
                /**
                 * Returns the absolute vertical y position of the event.
                 * In a virtual device multi-screen environment in which the
                 * desktop area could span multiple physical screen devices,
                 * this coordinate is relative to the virtual coordinate system.
                 * Otherwise, this coordinate is relative to the coordinate system
                 * associated with the Component's GraphicsConfiguration.
                 */
                // @ts-ignore
                public getYOnScreen(): number;
                /**
                 * {@inheritDoc}
                 */
                // @ts-ignore
                public getModifiersEx(): number;
                /**
                 * Returns the horizontal x position of the event relative to the
                 * source component.
                 */
                // @ts-ignore
                public getX(): number;
                /**
                 * Returns the vertical y position of the event relative to the
                 * source component.
                 */
                // @ts-ignore
                public getY(): number;
                /**
                 * Returns the x,y position of the event relative to the source component.
                 */
                // @ts-ignore
                public getPoint(): java.awt.Point;
                /**
                 * Translates the event's coordinates to a new position
                 * by adding specified <code>x</code> (horizontal) and <code>y</code>
                 * (vertical) offsets.
                 */
                // @ts-ignore
                public translatePoint(x: number, y: number): void;
                /**
                 * Returns the number of mouse clicks associated with this event.
                 */
                // @ts-ignore
                public getClickCount(): number;
                /**
                 * Returns which, if any, of the mouse buttons has changed state.
                 * The returned value is ranged
                 * from 0 to the {@link java.awt.MouseInfo#getNumberOfButtons() MouseInfo.getNumberOfButtons()}
                 * value.
                 * The returned value includes at least the following constants:
                 * <ul>
                 * <li> {@code NOBUTTON}
                 * <li> {@code BUTTON1}
                 * <li> {@code BUTTON2}
                 * <li> {@code BUTTON3}
                 * </ul>
                 * It is allowed to use those constants to compare with the returned button number in the application.
                 * For example,
                 * <pre>
                 * if (anEvent.getButton() == MouseEvent.BUTTON1) {
                 * </pre>
                 * In particular, for a mouse with one, two, or three buttons this method may return the following values:
                 * <ul>
                 * <li> 0 ({@code NOBUTTON})
                 * <li> 1 ({@code BUTTON1})
                 * <li> 2 ({@code BUTTON2})
                 * <li> 3 ({@code BUTTON3})
                 * </ul>
                 * Button numbers greater then {@code BUTTON3} have no constant identifier. So if a mouse with five buttons is
                 * installed, this method may return the following values:
                 * <ul>
                 * <li> 0 ({@code NOBUTTON})
                 * <li> 1 ({@code BUTTON1})
                 * <li> 2 ({@code BUTTON2})
                 * <li> 3 ({@code BUTTON3})
                 * <li> 4
                 * <li> 5
                 * </ul>
                 * <p>
                 * Note: If support for extended mouse buttons is {@link Toolkit#areExtraMouseButtonsEnabled() disabled} by Java
                 * then the AWT event subsystem does not produce mouse events for the extended mouse
                 * buttons. So it is not expected that this method returns anything except {@code NOBUTTON}, {@code BUTTON1},
                 * {@code BUTTON2}, {@code BUTTON3}.
                 */
                // @ts-ignore
                public getButton(): number;
                /**
                 * Returns whether or not this mouse event is the popup menu
                 * trigger event for the platform.
                 * <p><b>Note</b>: Popup menus are triggered differently
                 * on different systems. Therefore, <code>isPopupTrigger</code>
                 * should be checked in both <code>mousePressed</code>
                 * and <code>mouseReleased</code>
                 * for proper cross-platform functionality.
                 */
                // @ts-ignore
                public isPopupTrigger(): boolean;
                /**
                 * Returns a <code>String</code> instance describing the modifier keys and
                 * mouse buttons that were down during the event, such as "Shift",
                 * or "Ctrl+Shift". These strings can be localized by changing
                 * the <code>awt.properties</code> file.
                 * <p>
                 * Note that the <code>InputEvent.ALT_MASK</code> and
                 * <code>InputEvent.BUTTON2_MASK</code> have equal values,
                 * so the "Alt" string is returned for both modifiers.  Likewise,
                 * the <code>InputEvent.META_MASK</code> and
                 * <code>InputEvent.BUTTON3_MASK</code> have equal values,
                 * so the "Meta" string is returned for both modifiers.
                 * <p>
                 * Note that passing negative parameter is incorrect,
                 * and will cause the returning an unspecified string.
                 * Zero parameter means that no modifiers were passed and will
                 * cause the returning an empty string.
                 * <p>
                 */
                // @ts-ignore
                public static getMouseModifiersText(modifiers: number): string;
                /**
                 * Returns a parameter string identifying this event.
                 * This method is useful for event-logging and for debugging.
                 */
                // @ts-ignore
                public paramString(): string;
            }
        }
    }
}
