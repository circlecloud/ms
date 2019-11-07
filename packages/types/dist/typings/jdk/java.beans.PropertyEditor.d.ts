// @ts-nocheck
declare namespace java {
    namespace beans {
        // @ts-ignore
        interface PropertyEditor {
            /**
             * Set (or change) the object that is to be edited.  Primitive types such
             * as "int" must be wrapped as the corresponding object type such as
             * "java.lang.Integer".
             */
            // @ts-ignore
             setValue(value: java.lang.Object): void;
            /**
             * Gets the property value.
             */
            // @ts-ignore
             getValue(): java.lang.Object;
            /**
             * Determines whether this property editor is paintable.
             */
            // @ts-ignore
             isPaintable(): boolean;
            /**
             * Paint a representation of the value into a given area of screen
             * real estate.  Note that the propertyEditor is responsible for doing
             * its own clipping so that it fits into the given rectangle.
             * <p>
             * If the PropertyEditor doesn't honor paint requests (see isPaintable)
             * this method should be a silent noop.
             * <p>
             * The given Graphics object will have the default font, color, etc of
             * the parent container.  The PropertyEditor may change graphics attributes
             * such as font and color and doesn't need to restore the old values.
             */
            // @ts-ignore
             paintValue(gfx: java.awt.Graphics, box: java.awt.Rectangle): void;
            /**
             * Returns a fragment of Java code that can be used to set a property
             * to match the editors current state. This method is intended
             * for use when generating Java code to reflect changes made through the
             * property editor.
             * <p>
             * The code fragment should be context free and must be a legal Java
             * expression as specified by the JLS.
             * <p>
             * Specifically, if the expression represents a computation then all
             * classes and static members should be fully qualified. This rule
             * applies to constructors, static methods and non primitive arguments.
             * <p>
             * Caution should be used when evaluating the expression as it may throw
             * exceptions. In particular, code generators must ensure that generated
             * code will compile in the presence of an expression that can throw
             * checked exceptions.
             * <p>
             * Example results are:
             * <ul>
             * <li>Primitive expresssion: <code>2</code>
             * <li>Class constructor: <code>new java.awt.Color(127,127,34)</code>
             * <li>Static field: <code>java.awt.Color.orange</code>
             * <li>Static method: <code>javax.swing.Box.createRigidArea(new
             * java.awt.Dimension(0, 5))</code>
             * </ul>
             */
            // @ts-ignore
             getJavaInitializationString(): string;
            /**
             * Gets the property value as text.
             */
            // @ts-ignore
             getAsText(): string;
            /**
             * Set the property value by parsing a given String.  May raise
             * java.lang.IllegalArgumentException if either the String is
             * badly formatted or if this kind of property can't be expressed
             * as text.
             */
            // @ts-ignore
             setAsText(text: string): void;
            /**
             * If the property value must be one of a set of known tagged values,
             * then this method should return an array of the tags.  This can
             * be used to represent (for example) enum values.  If a PropertyEditor
             * supports tags, then it should support the use of setAsText with
             * a tag value as a way of setting the value and the use of getAsText
             * to identify the current value.
             */
            // @ts-ignore
             getTags(): java.lang.String[];
            /**
             * A PropertyEditor may choose to make available a full custom Component
             * that edits its property value.  It is the responsibility of the
             * PropertyEditor to hook itself up to its editor Component itself and
             * to report property value changes by firing a PropertyChange event.
             * <P>
             * The higher-level code that calls getCustomEditor may either embed
             * the Component in some larger property sheet, or it may put it in
             * its own individual dialog, or ...
             */
            // @ts-ignore
             getCustomEditor(): java.awt.Component;
            /**
             * Determines whether this property editor supports a custom editor.
             */
            // @ts-ignore
             supportsCustomEditor(): boolean;
            /**
             * Adds a listener for the value change.
             * When the property editor changes its value
             * it should fire a {@link PropertyChangeEvent}
             * on all registered {@link PropertyChangeListener}s,
             * specifying the {@code null} value for the property name
             * and itself as the source.
             */
            // @ts-ignore
             addPropertyChangeListener(listener: java.beans.PropertyChangeListener): void;
            /**
             * Removes a listener for the value change.
             */
            // @ts-ignore
             removePropertyChangeListener(listener: java.beans.PropertyChangeListener): void;
        }
    }
}
