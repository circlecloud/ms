// @ts-nocheck
declare namespace java {
    namespace nio {
        // @ts-ignore
         class ByteOrder extends java.lang.Object {
            // @ts-ignore
            public static BIG_ENDIAN: java.nio.ByteOrder;
            // @ts-ignore
            public static LITTLE_ENDIAN: java.nio.ByteOrder;
            /**
             * Retrieves the native byte order of the underlying platform.
             * <p> This method is defined so that performance-sensitive Java code can
             * allocate direct buffers with the same byte order as the hardware.
             * Native code libraries are often more efficient when such buffers are
             * used.  </p>
             */
            // @ts-ignore
            public static nativeOrder(): java.nio.ByteOrder;
            /**
             * Constructs a string describing this object.
             * <p> This method returns the string <tt>"BIG_ENDIAN"</tt> for {@link
             * #BIG_ENDIAN} and <tt>"LITTLE_ENDIAN"</tt> for {@link #LITTLE_ENDIAN}.
             * </p>
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
