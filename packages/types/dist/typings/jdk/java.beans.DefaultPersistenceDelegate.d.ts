// @ts-nocheck
declare namespace java {
    namespace beans {
        // @ts-ignore
         class DefaultPersistenceDelegate extends java.beans.PersistenceDelegate {
            /**
             * Creates a persistence delegate for a class with a nullary constructor.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a default persistence delegate for a class with a
             * constructor whose arguments are the values of the property
             * names as specified by <code>constructorPropertyNames</code>.
             * The constructor arguments are created by
             * evaluating the property names in the order they are supplied.
             * To use this class to specify a single preferred constructor for use
             * in the serialization of a particular type, we state the
             * names of the properties that make up the constructor's
             * arguments. For example, the <code>Font</code> class which
             * does not define a nullary constructor can be handled
             * with the following persistence delegate:
             * <pre>
             * new DefaultPersistenceDelegate(new String[]{"name", "style", "size"});
             * </pre>
             */
            // @ts-ignore
            constructor(constructorPropertyNames: string)
            /**
             * If the number of arguments in the specified constructor is non-zero and
             * the class of <code>oldInstance</code> explicitly declares an "equals" method
             * this method returns the value of <code>oldInstance.equals(newInstance)</code>.
             * Otherwise, this method uses the superclass's definition which returns true if the
             * classes of the two instances are equal.
             */
            // @ts-ignore
            protected mutatesTo(oldInstance: java.lang.Object, newInstance: java.lang.Object): boolean;
            /**
             * This default implementation of the <code>instantiate</code> method returns
             * an expression containing the predefined method name "new" which denotes a
             * call to a constructor with the arguments as specified in
             * the <code>DefaultPersistenceDelegate</code>'s constructor.
             */
            // @ts-ignore
            protected instantiate(oldInstance: java.lang.Object, out: java.beans.Encoder): java.beans.Expression;
            /**
             * This default implementation of the <code>initialize</code> method assumes
             * all state held in objects of this type is exposed via the
             * matching pairs of "setter" and "getter" methods in the order
             * they are returned by the Introspector. If a property descriptor
             * defines a "transient" attribute with a value equal to
             * <code>Boolean.TRUE</code> the property is ignored by this
             * default implementation. Note that this use of the word
             * "transient" is quite independent of the field modifier
             * that is used by the <code>ObjectOutputStream</code>.
             * <p>
             * For each non-transient property, an expression is created
             * in which the nullary "getter" method is applied
             * to the <code>oldInstance</code>. The value of this
             * expression is the value of the property in the instance that is
             * being serialized. If the value of this expression
             * in the cloned environment <code>mutatesTo</code> the
             * target value, the new value is initialized to make it
             * equivalent to the old value. In this case, because
             * the property value has not changed there is no need to
             * call the corresponding "setter" method and no statement
             * is emitted. If not however, the expression for this value
             * is replaced with another expression (normally a constructor)
             * and the corresponding "setter" method is called to install
             * the new property value in the object. This scheme removes
             * default information from the output produced by streams
             * using this delegate.
             * <p>
             * In passing these statements to the output stream, where they
             * will be executed, side effects are made to the <code>newInstance</code>.
             * In most cases this allows the problem of properties
             * whose values depend on each other to actually help the
             * serialization process by making the number of statements
             * that need to be written to the output smaller. In general,
             * the problem of handling interdependent properties is reduced to
             * that of finding an order for the properties in
             * a class such that no property value depends on the value of
             * a subsequent property.
             */
            // @ts-ignore
            protected initialize(type: java.lang.Class, oldInstance: java.lang.Object, newInstance: java.lang.Object, out: java.beans.Encoder): void;
        }
    }
}
