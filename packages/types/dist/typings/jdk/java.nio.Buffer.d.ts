// @ts-nocheck
declare namespace java {
    namespace nio {
        // @ts-ignore
        abstract class Buffer extends java.lang.Object {
            /**
             * Returns this buffer's capacity.
             */
            // @ts-ignore
            public capacity(): number;
            /**
             * Returns this buffer's position.
             */
            // @ts-ignore
            public position(): number;
            /**
             * Sets this buffer's position.  If the mark is defined and larger than the
             * new position then it is discarded.
             */
            // @ts-ignore
            public position(newPosition: number): java.nio.Buffer;
            /**
             * Returns this buffer's limit.
             */
            // @ts-ignore
            public limit(): number;
            /**
             * Sets this buffer's limit.  If the position is larger than the new limit
             * then it is set to the new limit.  If the mark is defined and larger than
             * the new limit then it is discarded.
             */
            // @ts-ignore
            public limit(newLimit: number): java.nio.Buffer;
            /**
             * Sets this buffer's mark at its position.
             */
            // @ts-ignore
            public mark(): java.nio.Buffer;
            /**
             * Resets this buffer's position to the previously-marked position.
             * <p> Invoking this method neither changes nor discards the mark's
             * value. </p>
             */
            // @ts-ignore
            public reset(): java.nio.Buffer;
            /**
             * Clears this buffer.  The position is set to zero, the limit is set to
             * the capacity, and the mark is discarded.
             * <p> Invoke this method before using a sequence of channel-read or
             * <i>put</i> operations to fill this buffer.  For example:
             * <blockquote><pre>
             * buf.clear();     // Prepare buffer for reading
             * in.read(buf);    // Read data</pre></blockquote>
             * <p> This method does not actually erase the data in the buffer, but it
             * is named as if it did because it will most often be used in situations
             * in which that might as well be the case. </p>
             */
            // @ts-ignore
            public clear(): java.nio.Buffer;
            /**
             * Flips this buffer.  The limit is set to the current position and then
             * the position is set to zero.  If the mark is defined then it is
             * discarded.
             * <p> After a sequence of channel-read or <i>put</i> operations, invoke
             * this method to prepare for a sequence of channel-write or relative
             * <i>get</i> operations.  For example:
             * <blockquote><pre>
             * buf.put(magic);    // Prepend header
             * in.read(buf);      // Read data into rest of buffer
             * buf.flip();        // Flip buffer
             * out.write(buf);    // Write header + data to channel</pre></blockquote>
             * <p> This method is often used in conjunction with the {@link
             * java.nio.ByteBuffer#compact compact} method when transferring data from
             * one place to another.  </p>
             */
            // @ts-ignore
            public flip(): java.nio.Buffer;
            /**
             * Rewinds this buffer.  The position is set to zero and the mark is
             * discarded.
             * <p> Invoke this method before a sequence of channel-write or <i>get</i>
             * operations, assuming that the limit has already been set
             * appropriately.  For example:
             * <blockquote><pre>
             * out.write(buf);    // Write remaining data
             * buf.rewind();      // Rewind buffer
             * buf.get(array);    // Copy data into array</pre></blockquote>
             */
            // @ts-ignore
            public rewind(): java.nio.Buffer;
            /**
             * Returns the number of elements between the current position and the
             * limit.
             */
            // @ts-ignore
            public remaining(): number;
            /**
             * Tells whether there are any elements between the current position and
             * the limit.
             */
            // @ts-ignore
            public hasRemaining(): boolean;
            /**
             * Tells whether or not this buffer is read-only.
             */
            // @ts-ignore
            public abstract isReadOnly(): boolean;
            /**
             * Tells whether or not this buffer is backed by an accessible
             * array.
             * <p> If this method returns <tt>true</tt> then the {@link #array() array}
             * and {@link #arrayOffset() arrayOffset} methods may safely be invoked.
             * </p>
             */
            // @ts-ignore
            public abstract hasArray(): boolean;
            /**
             * Returns the array that backs this
             * buffer&nbsp;&nbsp;<i>(optional operation)</i>.
             * <p> This method is intended to allow array-backed buffers to be
             * passed to native code more efficiently. Concrete subclasses
             * provide more strongly-typed return values for this method.
             * <p> Modifications to this buffer's content will cause the returned
             * array's content to be modified, and vice versa.
             * <p> Invoke the {@link #hasArray hasArray} method before invoking this
             * method in order to ensure that this buffer has an accessible backing
             * array.  </p>
             */
            // @ts-ignore
            public abstract array(): java.lang.Object;
            /**
             * Returns the offset within this buffer's backing array of the first
             * element of the buffer&nbsp;&nbsp;<i>(optional operation)</i>.
             * <p> If this buffer is backed by an array then buffer position <i>p</i>
             * corresponds to array index <i>p</i>&nbsp;+&nbsp;<tt>arrayOffset()</tt>.
             * <p> Invoke the {@link #hasArray hasArray} method before invoking this
             * method in order to ensure that this buffer has an accessible backing
             * array.  </p>
             */
            // @ts-ignore
            public abstract arrayOffset(): number;
            /**
             * Tells whether or not this buffer is
             * <a href="ByteBuffer.html#direct"><i>direct</i></a>.
             */
            // @ts-ignore
            public abstract isDirect(): boolean;
        }
    }
}
