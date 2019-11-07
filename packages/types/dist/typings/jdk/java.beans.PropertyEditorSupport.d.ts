declare namespace java {
    namespace beans {
        // @ts-ignore
         class PropertyEditorSupport extends java.lang.Object {
            /**
             * Constructs a <code>PropertyEditorSupport</code> object.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a <code>PropertyEditorSupport</code> object.
             */
            // @ts-ignore
            constructor(source: java.lang.Object)
            /**
             * Returns the bean that is used as the
             * source of events. If the source has not
             * been explicitly set then this instance of
             * <code>PropertyEditorSupport</code> is returned.
             */
            // @ts-ignore
            public getSource(): java.lang.Object;
            /**
             * Sets the source bean.
             * <p>
             * The source bean is used as the source of events
             * for the property changes. This source should be used for information
             * purposes only and should not be modified by the PropertyEditor.
             */
            // @ts-ignore
            public setSource(source: java.lang.Object): void;
            /**
             * Set (or change) the object that is to be edited.
             */
            // @ts-ignore
            public setValue(value: java.lang.Object): void;
            /**
             * Gets the value of the property.
             */
            // @ts-ignore
            public getValue(): java.lang.Object;
            /**
             * Determines whether the class will honor the paintValue method.
             */
            // @ts-ignore
            public isPaintable(): boolean;
            /**
             * Paint a representation of the value into a given area of screen
             * real estate.  Note that the propertyEditor is responsible for doing
             * its own clipping so that it fits into the given rectangle.
             * <p>
             * If the PropertyEditor doesn't honor paint requests (see isPaintable)
             * this method should be a silent noop.
             */
            // @ts-ignore
            public paintValue(gfx: java.awt.Graphics, box: java.awt.Rectangle): void;
            /**
             * This method is intended for use when generating Java code to set
             * the value of the property.  It should return a fragment of Java code
             * that can be used to initialize a variable with the current property
             * value.
             * <p>
             * Example results are "2", "new Color(127,127,34)", "Color.orange", etc.
             */
            // @ts-ignore
            public getJavaInitializationString(): string;
            /**
             * Gets the property value as a string suitable for presentation
             * to a human to edit.
             */
            // @ts-ignore
            public getAsText(): string;
            /**
             * Sets the property value by parsing a given String.  May raise
             * java.lang.IllegalArgumentException if either the String is
             * badly formatted or if this kind of property can't be expressed
             * as text.
             */
            // @ts-ignore
            public setAsText(text: string): void;
            /**
             * If the property value must be one of a set of known tagged values,
             * then this method should return an array of the tag values.  This can
             * be used to represent (for example) enum values.  If a PropertyEditor
             * supports tags, then it should support the use of setAsText with
             * a tag value as a way of setting the value.
             */
            // @ts-ignore
            public getTags(): java.lang.String[];
            /**
             * A PropertyEditor may chose to make available a full custom Component
             * that edits its property value.  It is the responsibility of the
             * PropertyEditor to hook itself up to its editor Component itself and
             * to report property value changes by firing a PropertyChange event.
             * <P>
             * The higher-level code that calls getCustomEditor may either embed
             * the Component in some larger property sheet, or it may put it in
             * its own individual dialog, or ...
             */
            // @ts-ignore
            public getCustomEditor(): java.awt.Component;
            /**
             * Determines whether the propertyEditor can provide a custom editor.
             */
            // @ts-ignore
            public supportsCustomEditor(): boolean;
            /**
             * Adds a listener for the value change.
             * When the property editor changes its value
             * it should fire a {@link PropertyChangeEvent}
             * on all registered {@link PropertyChangeListener}s,
             * specifying the {@code null} value for the property name.
             * If the source property is set,
             * it should be used as the source of the event.
             * <p>
             * The same listener object may be added more than once,
             * and will be called as many times as it is added.
             * If {@code listener} is {@code null},
             * no exception is thrown and no action is taken.
             */
            // @ts-ignore
            public addPropertyChangeListener(listener: java.beans.PropertyChangeListener): void;
            /**
             * Removes a listener for the value change.
             * <p>
             * If the same listener was added more than once,
             * it will be notified one less time after being removed.
             * If {@code listener} is {@code null}, or was never added,
             * no exception is thrown and no action is taken.
             */
            // @ts-ignore
            public removePropertyChangeListener(listener: java.beans.PropertyChangeListener): void;
            /**
             * Report that we have been modified to any interested listeners.
             */
            // @ts-ignore
            public firePropertyChange(): void;
        }
    }
}
