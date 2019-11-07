// @ts-nocheck
declare namespace java {
    namespace nio {
        // @ts-ignore
        abstract class MappedByteBuffer extends java.nio.ByteBuffer {
            /**
             * Tells whether or not this buffer's content is resident in physical
             * memory.
             * <p> A return value of <tt>true</tt> implies that it is highly likely
             * that all of the data in this buffer is resident in physical memory and
             * may therefore be accessed without incurring any virtual-memory page
             * faults or I/O operations.  A return value of <tt>false</tt> does not
             * necessarily imply that the buffer's content is not resident in physical
             * memory.
             * <p> The returned value is a hint, rather than a guarantee, because the
             * underlying operating system may have paged out some of the buffer's data
             * by the time that an invocation of this method returns.  </p>
             */
            // @ts-ignore
            public isLoaded(): boolean;
            /**
             * Loads this buffer's content into physical memory.
             * <p> This method makes a best effort to ensure that, when it returns,
             * this buffer's content is resident in physical memory.  Invoking this
             * method may cause some number of page faults and I/O operations to
             * occur. </p>
             */
            // @ts-ignore
            public load(): java.nio.MappedByteBuffer;
            /**
             * Forces any changes made to this buffer's content to be written to the
             * storage device containing the mapped file.
             * <p> If the file mapped into this buffer resides on a local storage
             * device then when this method returns it is guaranteed that all changes
             * made to the buffer since it was created, or since this method was last
             * invoked, will have been written to that device.
             * <p> If the file does not reside on a local device then no such guarantee
             * is made.
             * <p> If this buffer was not mapped in read/write mode ({@link
             * java.nio.channels.FileChannel.MapMode#READ_WRITE}) then invoking this
             * method has no effect. </p>
             */
            // @ts-ignore
            public force(): java.nio.MappedByteBuffer;
        }
    }
}
