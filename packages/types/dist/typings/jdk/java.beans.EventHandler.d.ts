declare namespace java {
    namespace beans {
        // @ts-ignore
         class EventHandler extends java.lang.Object {
            /**
             * Creates a new <code>EventHandler</code> object;
             * you generally use one of the <code>create</code> methods
             * instead of invoking this constructor directly.  Refer to
             * {@link java.beans.EventHandler#create(Class, Object, String, String)
             * the general version of create} for a complete description of
             * the <code>eventPropertyName</code> and <code>listenerMethodName</code>
             * parameter.
             */
            // @ts-ignore
            constructor(target: java.lang.Object, action: string, eventPropertyName: string, listenerMethodName: string)
            /**
             * Returns the object to which this event handler will send a message.
             */
            // @ts-ignore
            public getTarget(): java.lang.Object;
            /**
             * Returns the name of the target's writable property
             * that this event handler will set,
             * or the name of the method that this event handler
             * will invoke on the target.
             */
            // @ts-ignore
            public getAction(): string;
            /**
             * Returns the property of the event that should be
             * used in the action applied to the target.
             */
            // @ts-ignore
            public getEventPropertyName(): string;
            /**
             * Returns the name of the method that will trigger the action.
             * A return value of <code>null</code> signifies that all methods in the
             * listener interface trigger the action.
             */
            // @ts-ignore
            public getListenerMethodName(): string;
            /**
             * Extract the appropriate property value from the event and
             * pass it to the action associated with
             * this <code>EventHandler</code>.
             */
            // @ts-ignore
            public invoke(proxy: java.lang.Object, method: java.lang.reflect.Method, arguments: java.lang.Object): java.lang.Object;
            /**
             * Creates an implementation of <code>listenerInterface</code> in which
             * <em>all</em> of the methods in the listener interface apply
             * the handler's <code>action</code> to the <code>target</code>. This
             * method is implemented by calling the other, more general,
             * implementation of the <code>create</code> method with both
             * the <code>eventPropertyName</code> and the <code>listenerMethodName</code>
             * taking the value <code>null</code>. Refer to
             * {@link java.beans.EventHandler#create(Class, Object, String, String)
             * the general version of create} for a complete description of
             * the <code>action</code> parameter.
             * <p>
             * To create an <code>ActionListener</code> that shows a
             * <code>JDialog</code> with <code>dialog.show()</code>,
             * one can write:
             * <blockquote>
             * <pre>
             * EventHandler.create(ActionListener.class, dialog, "show")
             * </pre>
             * </blockquote>
             */
            // @ts-ignore
            public static create(listenerInterface: java.lang.Class, target: java.lang.Object, action: string): java.lang.Object;
            /**
             * /**
             * Creates an implementation of <code>listenerInterface</code> in which
             * <em>all</em> of the methods pass the value of the event
             * expression, <code>eventPropertyName</code>, to the final method in the
             * statement, <code>action</code>, which is applied to the <code>target</code>.
             * This method is implemented by calling the
             * more general, implementation of the <code>create</code> method with
             * the <code>listenerMethodName</code> taking the value <code>null</code>.
             * Refer to
             * {@link java.beans.EventHandler#create(Class, Object, String, String)
             * the general version of create} for a complete description of
             * the <code>action</code> and <code>eventPropertyName</code> parameters.
             * <p>
             * To create an <code>ActionListener</code> that sets the
             * the text of a <code>JLabel</code> to the text value of
             * the <code>JTextField</code> source of the incoming event,
             * you can use the following code:
             * <blockquote>
             * <pre>
             * EventHandler.create(ActionListener.class, label, "text", "source.text");
             * </pre>
             * </blockquote>
             * This is equivalent to the following code:
             * <blockquote>
             * <pre>
             * //Equivalent code using an inner class instead of EventHandler.
             * new ActionListener() {
             * public void actionPerformed(ActionEvent event) {
             * label.setText(((JTextField)(event.getSource())).getText());
             * }
             * };
             * </pre>
             * </blockquote>
             */
            // @ts-ignore
            public static create(listenerInterface: java.lang.Class, target: java.lang.Object, action: string, eventPropertyName: string): java.lang.Object;
            /**
             * Creates an implementation of <code>listenerInterface</code> in which
             * the method named <code>listenerMethodName</code>
             * passes the value of the event expression, <code>eventPropertyName</code>,
             * to the final method in the statement, <code>action</code>, which
             * is applied to the <code>target</code>. All of the other listener
             * methods do nothing.
             * <p>
             * The <code>eventPropertyName</code> string is used to extract a value
             * from the incoming event object that is passed to the target
             * method.  The common case is the target method takes no arguments, in
             * which case a value of null should be used for the
             * <code>eventPropertyName</code>.  Alternatively if you want
             * the incoming event object passed directly to the target method use
             * the empty string.
             * The format of the <code>eventPropertyName</code> string is a sequence of
             * methods or properties where each method or
             * property is applied to the value returned by the preceding method
             * starting from the incoming event object.
             * The syntax is: <code>propertyName{.propertyName}*</code>
             * where <code>propertyName</code> matches a method or
             * property.  For example, to extract the <code>point</code>
             * property from a <code>MouseEvent</code>, you could use either
             * <code>"point"</code> or <code>"getPoint"</code> as the
             * <code>eventPropertyName</code>.  To extract the "text" property from
             * a <code>MouseEvent</code> with a <code>JLabel</code> source use any
             * of the following as <code>eventPropertyName</code>:
             * <code>"source.text"</code>,
             * <code>"getSource.text"</code> <code>"getSource.getText"</code> or
             * <code>"source.getText"</code>.  If a method can not be found, or an
             * exception is generated as part of invoking a method a
             * <code>RuntimeException</code> will be thrown at dispatch time.  For
             * example, if the incoming event object is null, and
             * <code>eventPropertyName</code> is non-null and not empty, a
             * <code>RuntimeException</code> will be thrown.
             * <p>
             * The <code>action</code> argument is of the same format as the
             * <code>eventPropertyName</code> argument where the last property name
             * identifies either a method name or writable property.
             * <p>
             * If the <code>listenerMethodName</code> is <code>null</code>
             * <em>all</em> methods in the interface trigger the <code>action</code> to be
             * executed on the <code>target</code>.
             * <p>
             * For example, to create a <code>MouseListener</code> that sets the target
             * object's <code>origin</code> property to the incoming <code>MouseEvent</code>'s
             * location (that's the value of <code>mouseEvent.getPoint()</code>) each
             * time a mouse button is pressed, one would write:
             * <blockquote>
             * <pre>
             * EventHandler.create(MouseListener.class, target, "origin", "point", "mousePressed");
             * </pre>
             * </blockquote>
             * This is comparable to writing a <code>MouseListener</code> in which all
             * of the methods except <code>mousePressed</code> are no-ops:
             * <blockquote>
             * <pre>
             * //Equivalent code using an inner class instead of EventHandler.
             * new MouseAdapter() {
             * public void mousePressed(MouseEvent e) {
             * target.setOrigin(e.getPoint());
             * }
             * };
             * </pre>
             * </blockquote>
             */
            // @ts-ignore
            public static create(listenerInterface: java.lang.Class, target: java.lang.Object, action: string, eventPropertyName: string, listenerMethodName: string): java.lang.Object;
        }
    }
}
