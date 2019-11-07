// @ts-nocheck
declare namespace java {
    namespace io {
        namespace ObjectInputStream {
            // @ts-ignore
            abstract class GetField extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Get the ObjectStreamClass that describes the fields in the stream.
                 */
                // @ts-ignore
                public abstract getObjectStreamClass(): java.io.ObjectStreamClass;
                /**
                 * Return true if the named field is defaulted and has no value in this
                 * stream.
                 */
                // @ts-ignore
                public abstract defaulted(name: string): boolean;
                /**
                 * Get the value of the named boolean field from the persistent field.
                 */
                // @ts-ignore
                public abstract get(name: string, val: boolean): boolean;
            }
        }
    }
}
