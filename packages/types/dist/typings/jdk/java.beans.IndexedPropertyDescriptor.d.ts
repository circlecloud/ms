declare namespace java {
    namespace beans {
        // @ts-ignore
         class IndexedPropertyDescriptor extends java.beans.PropertyDescriptor {
            /**
             * This constructor constructs an IndexedPropertyDescriptor for a property
             * that follows the standard Java conventions by having getFoo and setFoo
             * accessor methods, for both indexed access and array access.
             * <p>
             * Thus if the argument name is "fred", it will assume that there
             * is an indexed reader method "getFred", a non-indexed (array) reader
             * method also called "getFred", an indexed writer method "setFred",
             * and finally a non-indexed writer method "setFred".
             */
            // @ts-ignore
            constructor(propertyName: string, beanClass: java.lang.Class)
            /**
             * This constructor takes the name of a simple property, and method
             * names for reading and writing the property, both indexed
             * and non-indexed.
             */
            // @ts-ignore
            constructor(propertyName: string, beanClass: java.lang.Class, readMethodName: string, writeMethodName: string, indexedReadMethodName: string, indexedWriteMethodName: string)
            /**
             * This constructor takes the name of a simple property, and Method
             * objects for reading and writing the property.
             */
            // @ts-ignore
            constructor(propertyName: string, readMethod: java.lang.reflect.Method, writeMethod: java.lang.reflect.Method, indexedReadMethod: java.lang.reflect.Method, indexedWriteMethod: java.lang.reflect.Method)
            /**
             * Gets the method that should be used to read an indexed
             * property value.
             */
            // @ts-ignore
            public getIndexedReadMethod(): java.lang.reflect.Method;
            /**
             * Sets the method that should be used to read an indexed property value.
             */
            // @ts-ignore
            public setIndexedReadMethod(readMethod: java.lang.reflect.Method): void;
            /**
             * Gets the method that should be used to write an indexed property value.
             */
            // @ts-ignore
            public getIndexedWriteMethod(): java.lang.reflect.Method;
            /**
             * Sets the method that should be used to write an indexed property value.
             */
            // @ts-ignore
            public setIndexedWriteMethod(writeMethod: java.lang.reflect.Method): void;
            /**
             * Returns the Java type info for the indexed property.
             * Note that the {@code Class} object may describe
             * primitive Java types such as {@code int}.
             * This type is returned by the indexed read method
             * or is used as the parameter type of the indexed write method.
             */
            // @ts-ignore
            public getIndexedPropertyType(): java.lang.Class;
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
