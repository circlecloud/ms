declare namespace java {
    namespace io {
        // @ts-ignore
         class ObjectStreamField extends java.lang.Object {
            /**
             * Create a Serializable field with the specified type.  This field should
             * be documented with a <code>serialField</code> tag.
             */
            // @ts-ignore
            constructor(name: string, type: java.lang.Class)
            /**
             * Creates an ObjectStreamField representing a serializable field with the
             * given name and type.  If unshared is false, values of the represented
             * field are serialized and deserialized in the default manner--if the
             * field is non-primitive, object values are serialized and deserialized as
             * if they had been written and read by calls to writeObject and
             * readObject.  If unshared is true, values of the represented field are
             * serialized and deserialized as if they had been written and read by
             * calls to writeUnshared and readUnshared.
             */
            // @ts-ignore
            constructor(name: string, type: java.lang.Class, unshared: boolean)
            /**
             * Get the name of this field.
             */
            // @ts-ignore
            public getName(): string;
            /**
             * Get the type of the field.  If the type is non-primitive and this
             * <code>ObjectStreamField</code> was obtained from a deserialized {@link
             * ObjectStreamClass} instance, then <code>Object.class</code> is returned.
             * Otherwise, the <code>Class</code> object for the type of the field is
             * returned.
             */
            // @ts-ignore
            public getType(): java.lang.Class;
            /**
             * Returns character encoding of field type.  The encoding is as follows:
             * <blockquote><pre>
             * B            byte
             * C            char
             * D            double
             * F            float
             * I            int
             * J            long
             * L            class or interface
             * S            short
             * Z            boolean
             * [            array
             * </pre></blockquote>
             */
            // @ts-ignore
            public getTypeCode(): string;
            /**
             * Return the JVM type signature.
             */
            // @ts-ignore
            public getTypeString(): string;
            /**
             * Offset of field within instance data.
             */
            // @ts-ignore
            public getOffset(): number;
            /**
             * Offset within instance data.
             */
            // @ts-ignore
            protected setOffset(offset: number): void;
            /**
             * Return true if this field has a primitive type.
             */
            // @ts-ignore
            public isPrimitive(): boolean;
            /**
             * Returns boolean value indicating whether or not the serializable field
             * represented by this ObjectStreamField instance is unshared.
             */
            // @ts-ignore
            public isUnshared(): boolean;
            /**
             * Compare this field with another <code>ObjectStreamField</code>.  Return
             * -1 if this is smaller, 0 if equal, 1 if greater.  Types that are
             * primitives are "smaller" than object types.  If equal, the field names
             * are compared.
             */
            // @ts-ignore
            public compareTo(obj: java.lang.Object): number;
            /**
             * Return a string that describes this field.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
