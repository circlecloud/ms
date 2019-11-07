declare namespace java {
    namespace awt {
        namespace event {
            // @ts-ignore
             class MouseWheelEvent extends java.awt.event.MouseEvent {
                /**
                 * Constructs a <code>MouseWheelEvent</code> object with the
                 * specified source component, type, modifiers, coordinates,
                 * scroll type, scroll amount, and wheel rotation.
                 * <p>Absolute coordinates xAbs and yAbs are set to source's location on screen plus
                 * relative coordinates x and y. xAbs and yAbs are set to zero if the source is not showing.
                 * <p>Note that passing in an invalid <code>id</code> results in
                 * unspecified behavior. This method throws an
                 * <code>IllegalArgumentException</code> if <code>source</code>
                 * is <code>null</code>.
                 */
                // @ts-ignore
                constructor(source: java.awt.Component, id: number, when: number, modifiers: number, x: number, y: number, clickCount: number, popupTrigger: boolean, scrollType: number, scrollAmount: number, wheelRotation: number)
                /**
                 * Constructs a <code>MouseWheelEvent</code> object with the
                 * specified source component, type, modifiers, coordinates,
                 * absolute coordinates, scroll type, scroll amount, and wheel rotation.
                 * <p>Note that passing in an invalid <code>id</code> results in
                 * unspecified behavior. This method throws an
                 * <code>IllegalArgumentException</code> if <code>source</code>
                 * is <code>null</code>.<p>
                 * Even if inconsistent values for relative and absolute coordinates are
                 * passed to the constructor, the MouseWheelEvent instance is still
                 * created and no exception is thrown.
                 */
                // @ts-ignore
                constructor(source: java.awt.Component, id: number, when: number, modifiers: number, x: number, y: number, xAbs: number, yAbs: number, clickCount: number, popupTrigger: boolean, scrollType: number, scrollAmount: number, wheelRotation: number)
                /**
                 * Constructs a <code>MouseWheelEvent</code> object with the specified
                 * source component, type, modifiers, coordinates, absolute coordinates,
                 * scroll type, scroll amount, and wheel rotation.
                 * <p>Note that passing in an invalid <code>id</code> parameter results
                 * in unspecified behavior. This method throws an
                 * <code>IllegalArgumentException</code> if <code>source</code> equals
                 * <code>null</code>.
                 * <p>Even if inconsistent values for relative and absolute coordinates
                 * are passed to the constructor, a <code>MouseWheelEvent</code> instance
                 * is still created and no exception is thrown.
                 */
                // @ts-ignore
                constructor(source: java.awt.Component, id: number, when: number, modifiers: number, x: number, y: number, xAbs: number, yAbs: number, clickCount: number, popupTrigger: boolean, scrollType: number, scrollAmount: number, wheelRotation: number, preciseWheelRotation: number)
                // @ts-ignore
                public static WHEEL_UNIT_SCROLL: number;
                // @ts-ignore
                public static WHEEL_BLOCK_SCROLL: number;
                /**
                 * Returns the type of scrolling that should take place in response to this
                 * event.  This is determined by the native platform.  Legal values are:
                 * <ul>
                 * <li> MouseWheelEvent.WHEEL_UNIT_SCROLL
                 * <li> MouseWheelEvent.WHEEL_BLOCK_SCROLL
                 * </ul>
                 */
                // @ts-ignore
                public getScrollType(): number;
                /**
                 * Returns the number of units that should be scrolled per
                 * click of mouse wheel rotation.
                 * Only valid if <code>getScrollType</code> returns
                 * <code>MouseWheelEvent.WHEEL_UNIT_SCROLL</code>
                 */
                // @ts-ignore
                public getScrollAmount(): number;
                /**
                 * Returns the number of "clicks" the mouse wheel was rotated, as an integer.
                 * A partial rotation may occur if the mouse supports a high-resolution wheel.
                 * In this case, the method returns zero until a full "click" has been accumulated.
                 */
                // @ts-ignore
                public getWheelRotation(): number;
                /**
                 * Returns the number of "clicks" the mouse wheel was rotated, as a double.
                 * A partial rotation may occur if the mouse supports a high-resolution wheel.
                 * In this case, the return value will include a fractional "click".
                 */
                // @ts-ignore
                public getPreciseWheelRotation(): number;
                /**
                 * This is a convenience method to aid in the implementation of
                 * the common-case MouseWheelListener - to scroll a ScrollPane or
                 * JScrollPane by an amount which conforms to the platform settings.
                 * (Note, however, that <code>ScrollPane</code> and
                 * <code>JScrollPane</code> already have this functionality built in.)
                 * <P>
                 * This method returns the number of units to scroll when scroll type is
                 * MouseWheelEvent.WHEEL_UNIT_SCROLL, and should only be called if
                 * <code>getScrollType</code> returns MouseWheelEvent.WHEEL_UNIT_SCROLL.
                 * <P>
                 * Direction of scroll, amount of wheel movement,
                 * and platform settings for wheel scrolling are all accounted for.
                 * This method does not and cannot take into account value of the
                 * Adjustable/Scrollable unit increment, as this will vary among
                 * scrolling components.
                 * <P>
                 * A simplified example of how this method might be used in a
                 * listener:
                 * <pre>
                 * mouseWheelMoved(MouseWheelEvent event) {
                 * ScrollPane sp = getScrollPaneFromSomewhere();
                 * Adjustable adj = sp.getVAdjustable()
                 * if (MouseWheelEvent.getScrollType() == WHEEL_UNIT_SCROLL) {
                 * int totalScrollAmount =
                 * event.getUnitsToScroll() *
                 * adj.getUnitIncrement();
                 * adj.setValue(adj.getValue() + totalScrollAmount);
                 * }
                 * }
                 * </pre>
                 */
                // @ts-ignore
                public getUnitsToScroll(): number;
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
