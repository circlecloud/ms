// @ts-nocheck
declare namespace java {
    namespace beans {
        // @ts-ignore
         class PropertyDescriptor extends java.beans.FeatureDescriptor {
            /**
             * Constructs a PropertyDescriptor for a property that follows
             * the standard Java convention by having getFoo and setFoo
             * accessor methods.  Thus if the argument name is "fred", it will
             * assume that the writer method is "setFred" and the reader method
             * is "getFred" (or "isFred" for a boolean property).  Note that the
             * property name should start with a lower case character, which will
             * be capitalized in the method names.
             */
            // @ts-ignore
            constructor(propertyName: string, beanClass: java.lang.Class)
            /**
             * This constructor takes the name of a simple property, and method
             * names for reading and writing the property.
             */
            // @ts-ignore
            constructor(propertyName: string, beanClass: java.lang.Class, readMethodName: string, writeMethodName: string)
            /**
             * This constructor takes the name of a simple property, and Method
             * objects for reading and writing the property.
             */
            // @ts-ignore
            constructor(propertyName: string, readMethod: java.lang.reflect.Method, writeMethod: java.lang.reflect.Method)
            /**
             * Returns the Java type info for the property.
             * Note that the {@code Class} object may describe
             * primitive Java types such as {@code int}.
             * This type is returned by the read method
             * or is used as the parameter type of the write method.
             * Returns {@code null} if the type is an indexed property
             * that does not support non-indexed access.
             */
            // @ts-ignore
            public getPropertyType(): java.lang.Class;
            /**
             * Gets the method that should be used to read the property value.
             */
            // @ts-ignore
            public getReadMethod(): java.lang.reflect.Method;
            /**
             * Sets the method that should be used to read the property value.
             */
            // @ts-ignore
            public setReadMethod(readMethod: java.lang.reflect.Method): void;
            /**
             * Gets the method that should be used to write the property value.
             */
            // @ts-ignore
            public getWriteMethod(): java.lang.reflect.Method;
            /**
             * Sets the method that should be used to write the property value.
             */
            // @ts-ignore
            public setWriteMethod(writeMethod: java.lang.reflect.Method): void;
            /**
             * Updates to "bound" properties will cause a "PropertyChange" event to
             * get fired when the property is changed.
             */
            // @ts-ignore
            public isBound(): boolean;
            /**
             * Updates to "bound" properties will cause a "PropertyChange" event to
             * get fired when the property is changed.
             */
            // @ts-ignore
            public setBound(bound: boolean): void;
            /**
             * Attempted updates to "Constrained" properties will cause a "VetoableChange"
             * event to get fired when the property is changed.
             */
            // @ts-ignore
            public isConstrained(): boolean;
            /**
             * Attempted updates to "Constrained" properties will cause a "VetoableChange"
             * event to get fired when the property is changed.
             */
            // @ts-ignore
            public setConstrained(constrained: boolean): void;
            /**
             * Normally PropertyEditors will be found using the PropertyEditorManager.
             * However if for some reason you want to associate a particular
             * PropertyEditor with a given property, then you can do it with
             * this method.
             */
            // @ts-ignore
            public setPropertyEditorClass(propertyEditorClass: java.lang.Class): void;
            /**
             * Gets any explicit PropertyEditor Class that has been registered
             * for this property.
             */
            // @ts-ignore
            public getPropertyEditorClass(): java.lang.Class;
            /**
             * Constructs an instance of a property editor using the current
             * property editor class.
             * <p>
             * If the property editor class has a public constructor that takes an
             * Object argument then it will be invoked using the bean parameter
             * as the argument. Otherwise, the default constructor will be invoked.
             */
            // @ts-ignore
            public createPropertyEditor(bean: java.lang.Object): java.beans.PropertyEditor;
            /**
             * Compares this <code>PropertyDescriptor</code> against the specified object.
             * Returns true if the objects are the same. Two <code>PropertyDescriptor</code>s
             * are the same if the read, write, property types, property editor and
             * flags  are equivalent.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Returns a hash code value for the object.
             * See {@link java.lang.Object#hashCode} for a complete description.
             */
            // @ts-ignore
            public hashCode(): number;
        }
    }
}
