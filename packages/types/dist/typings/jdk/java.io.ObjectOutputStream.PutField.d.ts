declare namespace java {
    namespace io {
        namespace ObjectOutputStream {
            // @ts-ignore
            abstract class PutField extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Put the value of the named boolean field into the persistent field.
                 */
                // @ts-ignore
                public abstract put(name: string, val: boolean): void;
                /**
                 * Write the data and fields to the specified ObjectOutput stream,
                 * which must be the same stream that produced this
                 * <code>PutField</code> object.
                 */
                // @ts-ignore
                public abstract write(out: java.io.ObjectOutput): void;
            }
        }
    }
}
