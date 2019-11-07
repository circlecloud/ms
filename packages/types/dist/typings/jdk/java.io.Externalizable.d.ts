// @ts-nocheck
declare namespace java {
    namespace io {
        // @ts-ignore
        interface Externalizable {
            /**
             * The object implements the writeExternal method to save its contents
             * by calling the methods of DataOutput for its primitive values or
             * calling the writeObject method of ObjectOutput for objects, strings,
             * and arrays.
             */
            // @ts-ignore
             writeExternal(out: java.io.ObjectOutput): void;
            /**
             * The object implements the readExternal method to restore its
             * contents by calling the methods of DataInput for primitive
             * types and readObject for objects, strings and arrays.  The
             * readExternal method must read the values in the same sequence
             * and with the same types as were written by writeExternal.
             */
            // @ts-ignore
             readExternal(input: java.io.ObjectInput): void;
        }
    }
}
