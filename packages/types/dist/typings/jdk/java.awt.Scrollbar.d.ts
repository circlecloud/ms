// @ts-nocheck
declare namespace java {
    namespace awt {
        // @ts-ignore
         class Scrollbar extends java.awt.Component {
            /**
             * Constructs a new vertical scroll bar.
             * The default properties of the scroll bar are listed in
             * the following table:
             * <table border=1 summary="Scrollbar default properties">
             * <tr>
             * <th>Property</th>
             * <th>Description</th>
             * <th>Default Value</th>
             * </tr>
             * <tr>
             * <td>orientation</td>
             * <td>indicates whether the scroll bar is vertical
             * <br>or horizontal</td>
             * <td><code>Scrollbar.VERTICAL</code></td>
             * </tr>
             * <tr>
             * <td>value</td>
             * <td>value which controls the location
             * <br>of the scroll bar's bubble</td>
             * <td>0</td>
             * </tr>
             * <tr>
             * <td>visible amount</td>
             * <td>visible amount of the scroll bar's range,
             * <br>typically represented by the size of the
             * <br>scroll bar's bubble</td>
             * <td>10</td>
             * </tr>
             * <tr>
             * <td>minimum</td>
             * <td>minimum value of the scroll bar</td>
             * <td>0</td>
             * </tr>
             * <tr>
             * <td>maximum</td>
             * <td>maximum value of the scroll bar</td>
             * <td>100</td>
             * </tr>
             * <tr>
             * <td>unit increment</td>
             * <td>amount the value changes when the
             * <br>Line Up or Line Down key is pressed,
             * <br>or when the end arrows of the scrollbar
             * <br>are clicked </td>
             * <td>1</td>
             * </tr>
             * <tr>
             * <td>block increment</td>
             * <td>amount the value changes when the
             * <br>Page Up or Page Down key is pressed,
             * <br>or when the scrollbar track is clicked
             * <br>on either side of the bubble </td>
             * <td>10</td>
             * </tr>
             * </table>
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new scroll bar with the specified orientation.
             * <p>
             * The <code>orientation</code> argument must take one of the two
             * values <code>Scrollbar.HORIZONTAL</code>,
             * or <code>Scrollbar.VERTICAL</code>,
             * indicating a horizontal or vertical scroll bar, respectively.
             */
            // @ts-ignore
            constructor(orientation: number)
            /**
             * Constructs a new scroll bar with the specified orientation,
             * initial value, visible amount, and minimum and maximum values.
             * <p>
             * The <code>orientation</code> argument must take one of the two
             * values <code>Scrollbar.HORIZONTAL</code>,
             * or <code>Scrollbar.VERTICAL</code>,
             * indicating a horizontal or vertical scroll bar, respectively.
             * <p>
             * The parameters supplied to this constructor are subject to the
             * constraints described in {@link #setValues(int, int, int, int)}.
             */
            // @ts-ignore
            constructor(orientation: number, value: number, visible: number, minimum: number, maximum: number)
            // @ts-ignore
            public static HORIZONTAL: number;
            // @ts-ignore
            public static VERTICAL: number;
            /**
             * Creates the <code>Scrollbar</code>'s peer.  The peer allows you to modify
             * the appearance of the <code>Scrollbar</code> without changing any of its
             * functionality.
             */
            // @ts-ignore
            public addNotify(): void;
            /**
             * Returns the orientation of this scroll bar.
             */
            // @ts-ignore
            public getOrientation(): number;
            /**
             * Sets the orientation for this scroll bar.
             */
            // @ts-ignore
            public setOrientation(orientation: number): void;
            /**
             * Gets the current value of this scroll bar.
             */
            // @ts-ignore
            public getValue(): number;
            /**
             * Sets the value of this scroll bar to the specified value.
             * <p>
             * If the value supplied is less than the current <code>minimum</code>
             * or greater than the current <code>maximum - visibleAmount</code>,
             * then either <code>minimum</code> or <code>maximum - visibleAmount</code>
             * is substituted, as appropriate.
             * <p>
             * Normally, a program should change a scroll bar's
             * value only by calling <code>setValues</code>.
             * The <code>setValues</code> method simultaneously
             * and synchronously sets the minimum, maximum, visible amount,
             * and value properties of a scroll bar, so that they are
             * mutually consistent.
             * <p>
             * Calling this method does not fire an
             * <code>AdjustmentEvent</code>.
             */
            // @ts-ignore
            public setValue(newValue: number): void;
            /**
             * Gets the minimum value of this scroll bar.
             */
            // @ts-ignore
            public getMinimum(): number;
            /**
             * Sets the minimum value of this scroll bar.
             * <p>
             * When <code>setMinimum</code> is called, the minimum value
             * is changed, and other values (including the maximum, the
             * visible amount, and the current scroll bar value)
             * are changed to be consistent with the new minimum.
             * <p>
             * Normally, a program should change a scroll bar's minimum
             * value only by calling <code>setValues</code>.
             * The <code>setValues</code> method simultaneously
             * and synchronously sets the minimum, maximum, visible amount,
             * and value properties of a scroll bar, so that they are
             * mutually consistent.
             * <p>
             * Note that setting the minimum value to <code>Integer.MAX_VALUE</code>
             * will result in the new minimum value being set to
             * <code>Integer.MAX_VALUE - 1</code>.
             */
            // @ts-ignore
            public setMinimum(newMinimum: number): void;
            /**
             * Gets the maximum value of this scroll bar.
             */
            // @ts-ignore
            public getMaximum(): number;
            /**
             * Sets the maximum value of this scroll bar.
             * <p>
             * When <code>setMaximum</code> is called, the maximum value
             * is changed, and other values (including the minimum, the
             * visible amount, and the current scroll bar value)
             * are changed to be consistent with the new maximum.
             * <p>
             * Normally, a program should change a scroll bar's maximum
             * value only by calling <code>setValues</code>.
             * The <code>setValues</code> method simultaneously
             * and synchronously sets the minimum, maximum, visible amount,
             * and value properties of a scroll bar, so that they are
             * mutually consistent.
             * <p>
             * Note that setting the maximum value to <code>Integer.MIN_VALUE</code>
             * will result in the new maximum value being set to
             * <code>Integer.MIN_VALUE + 1</code>.
             */
            // @ts-ignore
            public setMaximum(newMaximum: number): void;
            /**
             * Gets the visible amount of this scroll bar.
             * <p>
             * When a scroll bar is used to select a range of values,
             * the visible amount is used to represent the range of values
             * that are currently visible.  The size of the scroll bar's
             * bubble (also called a thumb or scroll box), usually gives a
             * visual representation of the relationship of the visible
             * amount to the range of the scroll bar.
             * Note that depending on platform, the value of the visible amount property
             * may not be visually indicated by the size of the bubble.
             * <p>
             * The scroll bar's bubble may not be displayed when it is not
             * moveable (e.g. when it takes up the entire length of the
             * scroll bar's track, or when the scroll bar is disabled).
             * Whether the bubble is displayed or not will not affect
             * the value returned by <code>getVisibleAmount</code>.
             */
            // @ts-ignore
            public getVisibleAmount(): number;
            // @ts-ignore
            public getVisible(): number;
            /**
             * Sets the visible amount of this scroll bar.
             * <p>
             * When a scroll bar is used to select a range of values,
             * the visible amount is used to represent the range of values
             * that are currently visible.  The size of the scroll bar's
             * bubble (also called a thumb or scroll box), usually gives a
             * visual representation of the relationship of the visible
             * amount to the range of the scroll bar.
             * Note that depending on platform, the value of the visible amount property
             * may not be visually indicated by the size of the bubble.
             * <p>
             * The scroll bar's bubble may not be displayed when it is not
             * moveable (e.g. when it takes up the entire length of the
             * scroll bar's track, or when the scroll bar is disabled).
             * Whether the bubble is displayed or not will not affect
             * the value returned by <code>getVisibleAmount</code>.
             * <p>
             * If the visible amount supplied is less than <code>one</code>
             * or greater than the current <code>maximum - minimum</code>,
             * then either <code>one</code> or <code>maximum - minimum</code>
             * is substituted, as appropriate.
             * <p>
             * Normally, a program should change a scroll bar's
             * value only by calling <code>setValues</code>.
             * The <code>setValues</code> method simultaneously
             * and synchronously sets the minimum, maximum, visible amount,
             * and value properties of a scroll bar, so that they are
             * mutually consistent.
             */
            // @ts-ignore
            public setVisibleAmount(newAmount: number): void;
            /**
             * Sets the unit increment for this scroll bar.
             * <p>
             * The unit increment is the value that is added or subtracted
             * when the user activates the unit increment area of the
             * scroll bar, generally through a mouse or keyboard gesture
             * that the scroll bar receives as an adjustment event.
             * The unit increment must be greater than zero.
             * Attepts to set the unit increment to a value lower than 1
             * will result in a value of 1 being set.
             * <p>
             * In some operating systems, this property
             * can be ignored by the underlying controls.
             */
            // @ts-ignore
            public setUnitIncrement(v: number): void;
            // @ts-ignore
            public setLineIncrement(v: number): void;
            /**
             * Gets the unit increment for this scrollbar.
             * <p>
             * The unit increment is the value that is added or subtracted
             * when the user activates the unit increment area of the
             * scroll bar, generally through a mouse or keyboard gesture
             * that the scroll bar receives as an adjustment event.
             * The unit increment must be greater than zero.
             * <p>
             * In some operating systems, this property
             * can be ignored by the underlying controls.
             */
            // @ts-ignore
            public getUnitIncrement(): number;
            // @ts-ignore
            public getLineIncrement(): number;
            /**
             * Sets the block increment for this scroll bar.
             * <p>
             * The block increment is the value that is added or subtracted
             * when the user activates the block increment area of the
             * scroll bar, generally through a mouse or keyboard gesture
             * that the scroll bar receives as an adjustment event.
             * The block increment must be greater than zero.
             * Attepts to set the block increment to a value lower than 1
             * will result in a value of 1 being set.
             */
            // @ts-ignore
            public setBlockIncrement(v: number): void;
            // @ts-ignore
            public setPageIncrement(v: number): void;
            /**
             * Gets the block increment of this scroll bar.
             * <p>
             * The block increment is the value that is added or subtracted
             * when the user activates the block increment area of the
             * scroll bar, generally through a mouse or keyboard gesture
             * that the scroll bar receives as an adjustment event.
             * The block increment must be greater than zero.
             */
            // @ts-ignore
            public getBlockIncrement(): number;
            // @ts-ignore
            public getPageIncrement(): number;
            /**
             * Sets the values of four properties for this scroll bar:
             * <code>value</code>, <code>visibleAmount</code>,
             * <code>minimum</code>, and <code>maximum</code>.
             * If the values supplied for these properties are inconsistent
             * or incorrect, they will be changed to ensure consistency.
             * <p>
             * This method simultaneously and synchronously sets the values
             * of four scroll bar properties, assuring that the values of
             * these properties are mutually consistent. It enforces the
             * following constraints:
             * <code>maximum</code> must be greater than <code>minimum</code>,
             * <code>maximum - minimum</code> must not be greater
             * than <code>Integer.MAX_VALUE</code>,
             * <code>visibleAmount</code> must be greater than zero.
             * <code>visibleAmount</code> must not be greater than
             * <code>maximum - minimum</code>,
             * <code>value</code> must not be less than <code>minimum</code>,
             * and <code>value</code> must not be greater than
             * <code>maximum - visibleAmount</code>
             * <p>
             * Calling this method does not fire an
             * <code>AdjustmentEvent</code>.
             */
            // @ts-ignore
            public setValues(value: number, visible: number, minimum: number, maximum: number): void;
            /**
             * Returns true if the value is in the process of changing as a
             * result of actions being taken by the user.
             */
            // @ts-ignore
            public getValueIsAdjusting(): boolean;
            /**
             * Sets the <code>valueIsAdjusting</code> property.
             */
            // @ts-ignore
            public setValueIsAdjusting(b: boolean): void;
            /**
             * Adds the specified adjustment listener to receive instances of
             * <code>AdjustmentEvent</code> from this scroll bar.
             * If l is <code>null</code>, no exception is thrown and no
             * action is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public addAdjustmentListener(l: java.awt.event.AdjustmentListener): void;
            /**
             * Removes the specified adjustment listener so that it no longer
             * receives instances of <code>AdjustmentEvent</code> from this scroll bar.
             * If l is <code>null</code>, no exception is thrown and no action
             * is performed.
             * <p>Refer to <a href="doc-files/AWTThreadIssues.html#ListenersThreads"
             * >AWT Threading Issues</a> for details on AWT's threading model.
             */
            // @ts-ignore
            public removeAdjustmentListener(l: java.awt.event.AdjustmentListener): void;
            /**
             * Returns an array of all the adjustment listeners
             * registered on this scrollbar.
             */
            // @ts-ignore
            public getAdjustmentListeners(): java.awt.event.AdjustmentListener[];
            /**
             * Returns an array of all the objects currently registered
             * as <code><em>Foo</em>Listener</code>s
             * upon this <code>Scrollbar</code>.
             * <code><em>Foo</em>Listener</code>s are registered using the
             * <code>add<em>Foo</em>Listener</code> method.
             * <p>
             * You can specify the <code>listenerType</code> argument
             * with a class literal,  such as
             * <code><em>Foo</em>Listener.class</code>.
             * For example, you can query a
             * <code>Scrollbar</code> <code>c</code>
             * for its mouse listeners with the following code:
             * <pre>MouseListener[] mls = (MouseListener[])(c.getListeners(MouseListener.class));</pre>
             * If no such listeners exist, this method returns an empty array.
             */
            // @ts-ignore
            public getListeners(listenerType: java.lang.Class): java.util.EventListener[];
            /**
             * Processes events on this scroll bar. If the event is an
             * instance of <code>AdjustmentEvent</code>, it invokes the
             * <code>processAdjustmentEvent</code> method.
             * Otherwise, it invokes its superclass's
             * <code>processEvent</code> method.
             * <p>Note that if the event parameter is <code>null</code>
             * the behavior is unspecified and may result in an
             * exception.
             */
            // @ts-ignore
            protected processEvent(e: java.awt.AWTEvent): void;
            /**
             * Processes adjustment events occurring on this
             * scrollbar by dispatching them to any registered
             * <code>AdjustmentListener</code> objects.
             * <p>
             * This method is not called unless adjustment events are
             * enabled for this component. Adjustment events are enabled
             * when one of the following occurs:
             * <ul>
             * <li>An <code>AdjustmentListener</code> object is registered
             * via <code>addAdjustmentListener</code>.
             * <li>Adjustment events are enabled via <code>enableEvents</code>.
             * </ul>
             * <p>Note that if the event parameter is <code>null</code>
             * the behavior is unspecified and may result in an
             * exception.
             */
            // @ts-ignore
            protected processAdjustmentEvent(e: java.awt.event.AdjustmentEvent): void;
            /**
             * Returns a string representing the state of this <code>Scrollbar</code>.
             * This method is intended to be used only for debugging purposes, and the
             * content and format of the returned string may vary between
             * implementations. The returned string may be empty but may not be
             * <code>null</code>.
             */
            // @ts-ignore
            protected paramString(): string;
            /**
             * Gets the <code>AccessibleContext</code> associated with this
             * <code>Scrollbar</code>. For scrollbars, the
             * <code>AccessibleContext</code> takes the form of an
             * <code>AccessibleAWTScrollBar</code>. A new
             * <code>AccessibleAWTScrollBar</code> instance is created if necessary.
             */
            // @ts-ignore
            public getAccessibleContext(): any /*javax.accessibility.AccessibleContext*/;
        }
    }
}
