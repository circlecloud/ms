declare namespace java {
    namespace nio {
        // @ts-ignore
        abstract class ShortBuffer extends java.nio.Buffer {
            /**
             * Allocates a new short buffer.
             * <p> The new buffer's position will be zero, its limit will be its
             * capacity, its mark will be undefined, and each of its elements will be
             * initialized to zero.  It will have a {@link #array backing array},
             * and its {@link #arrayOffset array offset} will be zero.
             */
            // @ts-ignore
            public static allocate(capacity: number): java.nio.ShortBuffer;
            /**
             * Wraps a short array into a buffer.
             * <p> The new buffer will be backed by the given short array;
             * that is, modifications to the buffer will cause the array to be modified
             * and vice versa.  The new buffer's capacity will be
             * <tt>array.length</tt>, its position will be <tt>offset</tt>, its limit
             * will be <tt>offset + length</tt>, and its mark will be undefined.  Its
             * {@link #array backing array} will be the given array, and
             * its {@link #arrayOffset array offset} will be zero.  </p>
             */
            // @ts-ignore
            public static wrap(array: number, offset: number, length: number): java.nio.ShortBuffer;
            /**
             * Wraps a short array into a buffer.
             * <p> The new buffer will be backed by the given short array;
             * that is, modifications to the buffer will cause the array to be modified
             * and vice versa.  The new buffer's capacity and limit will be
             * <tt>array.length</tt>, its position will be zero, and its mark will be
             * undefined.  Its {@link #array backing array} will be the
             * given array, and its {@link #arrayOffset array offset>} will
             * be zero.  </p>
             */
            // @ts-ignore
            public static wrap(array: number): java.nio.ShortBuffer;
            /**
             * Creates a new short buffer that shares this buffer's content.
             * <p> The content of the new buffer will be that of this buffer.  Changes
             * to this buffer's content will be visible in the new buffer, and vice
             * versa; the two buffers' position, limit, and mark values will be
             * independent.
             * <p> The new buffer's capacity, limit, position, and mark values will be
             * identical to those of this buffer.  The new buffer will be direct if,
             * and only if, this buffer is direct, and it will be read-only if, and
             * only if, this buffer is read-only.  </p>
             */
            // @ts-ignore
            public abstract duplicate(): java.nio.ShortBuffer;
            /**
             * Creates a new, read-only short buffer that shares this buffer's
             * content.
             * <p> The content of the new buffer will be that of this buffer.  Changes
             * to this buffer's content will be visible in the new buffer; the new
             * buffer itself, however, will be read-only and will not allow the shared
             * content to be modified.  The two buffers' position, limit, and mark
             * values will be independent.
             * <p> The new buffer's capacity, limit, position, and mark values will be
             * identical to those of this buffer.
             * <p> If this buffer is itself read-only then this method behaves in
             * exactly the same way as the {@link #duplicate duplicate} method.  </p>
             */
            // @ts-ignore
            public abstract asReadOnlyBuffer(): java.nio.ShortBuffer;
            /**
             * Relative <i>get</i> method.  Reads the short at this buffer's
             * current position, and then increments the position.
             */
            // @ts-ignore
            public abstract get(): number;
            /**
             * Relative <i>put</i> method&nbsp;&nbsp;<i>(optional operation)</i>.
             * <p> Writes the given short into this buffer at the current
             * position, and then increments the position. </p>
             */
            // @ts-ignore
            public abstract put(s: number): java.nio.ShortBuffer;
            /**
             * Relative bulk <i>get</i> method.
             * <p> This method transfers shorts from this buffer into the given
             * destination array.  If there are fewer shorts remaining in the
             * buffer than are required to satisfy the request, that is, if
             * <tt>length</tt>&nbsp;<tt>&gt;</tt>&nbsp;<tt>remaining()</tt>, then no
             * shorts are transferred and a {@link BufferUnderflowException} is
             * thrown.
             * <p> Otherwise, this method copies <tt>length</tt> shorts from this
             * buffer into the given array, starting at the current position of this
             * buffer and at the given offset in the array.  The position of this
             * buffer is then incremented by <tt>length</tt>.
             * <p> In other words, an invocation of this method of the form
             * <tt>src.get(dst,&nbsp;off,&nbsp;len)</tt> has exactly the same effect as
             * the loop
             * <pre>{@code
             * for (int i = off; i < off + len; i++)
             * dst[i] = src.get():
             * }</pre>
             * except that it first checks that there are sufficient shorts in
             * this buffer and it is potentially much more efficient.
             */
            // @ts-ignore
            public get(dst: number, offset: number, length: number): java.nio.ShortBuffer;
            /**
             * Relative bulk <i>get</i> method.
             * <p> This method transfers shorts from this buffer into the given
             * destination array.  An invocation of this method of the form
             * <tt>src.get(a)</tt> behaves in exactly the same way as the invocation
             * <pre>
             * src.get(a, 0, a.length) </pre>
             */
            // @ts-ignore
            public get(dst: number): java.nio.ShortBuffer;
            /**
             * Relative bulk <i>put</i> method&nbsp;&nbsp;<i>(optional operation)</i>.
             * <p> This method transfers the shorts remaining in the given source
             * buffer into this buffer.  If there are more shorts remaining in the
             * source buffer than in this buffer, that is, if
             * <tt>src.remaining()</tt>&nbsp;<tt>&gt;</tt>&nbsp;<tt>remaining()</tt>,
             * then no shorts are transferred and a {@link
             * BufferOverflowException} is thrown.
             * <p> Otherwise, this method copies
             * <i>n</i>&nbsp;=&nbsp;<tt>src.remaining()</tt> shorts from the given
             * buffer into this buffer, starting at each buffer's current position.
             * The positions of both buffers are then incremented by <i>n</i>.
             * <p> In other words, an invocation of this method of the form
             * <tt>dst.put(src)</tt> has exactly the same effect as the loop
             * <pre>
             * while (src.hasRemaining())
             * dst.put(src.get()); </pre>
             * except that it first checks that there is sufficient space in this
             * buffer and it is potentially much more efficient.
             */
            // @ts-ignore
            public put(src: java.nio.ShortBuffer): java.nio.ShortBuffer;
            /**
             * Relative bulk <i>put</i> method&nbsp;&nbsp;<i>(optional operation)</i>.
             * <p> This method transfers shorts into this buffer from the given
             * source array.  If there are more shorts to be copied from the array
             * than remain in this buffer, that is, if
             * <tt>length</tt>&nbsp;<tt>&gt;</tt>&nbsp;<tt>remaining()</tt>, then no
             * shorts are transferred and a {@link BufferOverflowException} is
             * thrown.
             * <p> Otherwise, this method copies <tt>length</tt> shorts from the
             * given array into this buffer, starting at the given offset in the array
             * and at the current position of this buffer.  The position of this buffer
             * is then incremented by <tt>length</tt>.
             * <p> In other words, an invocation of this method of the form
             * <tt>dst.put(src,&nbsp;off,&nbsp;len)</tt> has exactly the same effect as
             * the loop
             * <pre>{@code
             * for (int i = off; i < off + len; i++)
             * dst.put(a[i]);
             * }</pre>
             * except that it first checks that there is sufficient space in this
             * buffer and it is potentially much more efficient.
             */
            // @ts-ignore
            public put(src: number, offset: number, length: number): java.nio.ShortBuffer;
            /**
             * Relative bulk <i>put</i> method&nbsp;&nbsp;<i>(optional operation)</i>.
             * <p> This method transfers the entire content of the given source
             * short array into this buffer.  An invocation of this method of the
             * form <tt>dst.put(a)</tt> behaves in exactly the same way as the
             * invocation
             * <pre>
             * dst.put(a, 0, a.length) </pre>
             */
            // @ts-ignore
            public put(src: number): java.nio.ShortBuffer;
            /**
             * Tells whether or not this buffer is backed by an accessible short
             * array.
             * <p> If this method returns <tt>true</tt> then the {@link #array() array}
             * and {@link #arrayOffset() arrayOffset} methods may safely be invoked.
             * </p>
             */
            // @ts-ignore
            public hasArray(): boolean;
            /**
             * Returns the short array that backs this
             * buffer&nbsp;&nbsp;<i>(optional operation)</i>.
             * <p> Modifications to this buffer's content will cause the returned
             * array's content to be modified, and vice versa.
             * <p> Invoke the {@link #hasArray hasArray} method before invoking this
             * method in order to ensure that this buffer has an accessible backing
             * array.  </p>
             */
            // @ts-ignore
            public array(): number[];
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
            public arrayOffset(): number;
            /**
             * Compacts this buffer&nbsp;&nbsp;<i>(optional operation)</i>.
             * <p> The shorts between the buffer's current position and its limit,
             * if any, are copied to the beginning of the buffer.  That is, the
             * short at index <i>p</i>&nbsp;=&nbsp;<tt>position()</tt> is copied
             * to index zero, the short at index <i>p</i>&nbsp;+&nbsp;1 is copied
             * to index one, and so forth until the short at index
             * <tt>limit()</tt>&nbsp;-&nbsp;1 is copied to index
             * <i>n</i>&nbsp;=&nbsp;<tt>limit()</tt>&nbsp;-&nbsp;<tt>1</tt>&nbsp;-&nbsp;<i>p</i>.
             * The buffer's position is then set to <i>n+1</i> and its limit is set to
             * its capacity.  The mark, if defined, is discarded.
             * <p> The buffer's position is set to the number of shorts copied,
             * rather than to zero, so that an invocation of this method can be
             * followed immediately by an invocation of another relative <i>put</i>
             * method. </p>
             */
            // @ts-ignore
            public abstract compact(): java.nio.ShortBuffer;
            /**
             * Tells whether or not this short buffer is direct.
             */
            // @ts-ignore
            public abstract isDirect(): boolean;
            /**
             * Returns a string summarizing the state of this buffer.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Returns the current hash code of this buffer.
             * <p> The hash code of a short buffer depends only upon its remaining
             * elements; that is, upon the elements from <tt>position()</tt> up to, and
             * including, the element at <tt>limit()</tt>&nbsp;-&nbsp;<tt>1</tt>.
             * <p> Because buffer hash codes are content-dependent, it is inadvisable
             * to use buffers as keys in hash maps or similar data structures unless it
             * is known that their contents will not change.  </p>
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Tells whether or not this buffer is equal to another object.
             * <p> Two short buffers are equal if, and only if,
             * <ol>
             * <li><p> They have the same element type,  </p></li>
             * <li><p> They have the same number of remaining elements, and
             * </p></li>
             * <li><p> The two sequences of remaining elements, considered
             * independently of their starting positions, are pointwise equal.
             * </p></li>
             * </ol>
             * <p> A short buffer is not equal to any other type of object.  </p>
             */
            // @ts-ignore
            public equals(ob: java.lang.Object): boolean;
            /**
             * Compares this buffer to another.
             * <p> Two short buffers are compared by comparing their sequences of
             * remaining elements lexicographically, without regard to the starting
             * position of each sequence within its corresponding buffer.
             * Pairs of {@code short} elements are compared as if by invoking
             * {@link Short#compare(short,short)}.
             * <p> A short buffer is not comparable to any other type of object.
             */
            // @ts-ignore
            public compareTo(that: java.nio.ShortBuffer): number;
            /**
             * Retrieves this buffer's byte order.
             * <p> The byte order of a short buffer created by allocation or by
             * wrapping an existing <tt>short</tt> array is the {@link
             * ByteOrder#nativeOrder native order} of the underlying
             * hardware.  The byte order of a short buffer created as a <a
             * href="ByteBuffer.html#views">view</a> of a byte buffer is that of the
             * byte buffer at the moment that the view is created.  </p>
             */
            // @ts-ignore
            public abstract order(): java.nio.ByteOrder;
        }
    }
}
