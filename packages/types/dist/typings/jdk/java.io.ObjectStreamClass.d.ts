declare namespace java {
    namespace io {
        // @ts-ignore
         class ObjectStreamClass extends java.lang.Object {
            // @ts-ignore
            public static NO_FIELDS: java.io.ObjectStreamField[];
            /**
             * Find the descriptor for a class that can be serialized.  Creates an
             * ObjectStreamClass instance if one does not exist yet for class. Null is
             * returned if the specified class does not implement java.io.Serializable
             * or java.io.Externalizable.
             */
            // @ts-ignore
            public static lookup(cl: java.lang.Class): java.io.ObjectStreamClass;
            /**
             * Returns the descriptor for any class, regardless of whether it
             * implements {@link Serializable}.
             */
            // @ts-ignore
            public static lookupAny(cl: java.lang.Class): java.io.ObjectStreamClass;
            /**
             * Returns the name of the class described by this descriptor.
             * This method returns the name of the class in the format that
             * is used by the {@link Class#getName} method.
             */
            // @ts-ignore
            public getName(): string;
            /**
             * Return the serialVersionUID for this class.  The serialVersionUID
             * defines a set of classes all with the same name that have evolved from a
             * common root class and agree to be serialized and deserialized using a
             * common format.  NonSerializable classes have a serialVersionUID of 0L.
             */
            // @ts-ignore
            public getSerialVersionUID(): number;
            /**
             * Return the class in the local VM that this version is mapped to.  Null
             * is returned if there is no corresponding local class.
             */
            // @ts-ignore
            public forClass(): java.lang.Class;
            /**
             * Return an array of the fields of this serializable class.
             */
            // @ts-ignore
            public getFields(): java.io.ObjectStreamField[];
            /**
             * Get the field of this class by name.
             */
            // @ts-ignore
            public getField(name: string): java.io.ObjectStreamField;
            /**
             * Return a string describing this ObjectStreamClass.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
