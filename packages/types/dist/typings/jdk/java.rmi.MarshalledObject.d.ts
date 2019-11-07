// @ts-nocheck
declare namespace java {
    namespace rmi {
        // @ts-ignore
         class MarshalledObject extends java.lang.Object {
            /**
             * Creates a new <code>MarshalledObject</code> that contains the
             * serialized representation of the current state of the supplied object.
             * The object is serialized with the semantics used for marshaling
             * parameters for RMI calls.
             */
            // @ts-ignore
            constructor(obj: java.lang.Object)
            /**
             * Returns a new copy of the contained marshalledobject.  The internal
             * representation is deserialized with the semantics used for
             * unmarshaling parameters for RMI calls.
             */
            // @ts-ignore
            public get(): java.lang.Object;
            /**
             * Return a hash code for this <code>MarshalledObject</code>.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Compares this <code>MarshalledObject</code> to another object.
             * Returns true if and only if the argument refers to a
             * <code>MarshalledObject</code> that contains exactly the same
             * serialized representation of an object as this one does. The
             * comparison ignores any class codebase annotation, meaning that
             * two objects are equivalent if they have the same serialized
             * representation <i>except</i> for the codebase of each class
             * in the serialized representation.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
        }
    }
}
