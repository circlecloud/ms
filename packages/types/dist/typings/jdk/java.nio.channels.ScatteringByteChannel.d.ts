declare namespace java {
    namespace nio {
        namespace channels {
            // @ts-ignore
            interface ScatteringByteChannel {
                /**
                 * Reads a sequence of bytes from this channel into a subsequence of the
                 * given buffers.
                 * <p> An invocation of this method attempts to read up to <i>r</i> bytes
                 * from this channel, where <i>r</i> is the total number of bytes remaining
                 * the specified subsequence of the given buffer array, that is,
                 * <blockquote><pre>
                 * dsts[offset].remaining()
                 * + dsts[offset+1].remaining()
                 * + ... + dsts[offset+length-1].remaining()</pre></blockquote>
                 * at the moment that this method is invoked.
                 * <p> Suppose that a byte sequence of length <i>n</i> is read, where
                 * <tt>0</tt>&nbsp;<tt>&lt;=</tt>&nbsp;<i>n</i>&nbsp;<tt>&lt;=</tt>&nbsp;<i>r</i>.
                 * Up to the first <tt>dsts[offset].remaining()</tt> bytes of this sequence
                 * are transferred into buffer <tt>dsts[offset]</tt>, up to the next
                 * <tt>dsts[offset+1].remaining()</tt> bytes are transferred into buffer
                 * <tt>dsts[offset+1]</tt>, and so forth, until the entire byte sequence
                 * is transferred into the given buffers.  As many bytes as possible are
                 * transferred into each buffer, hence the final position of each updated
                 * buffer, except the last updated buffer, is guaranteed to be equal to
                 * that buffer's limit.
                 * <p> This method may be invoked at any time.  If another thread has
                 * already initiated a read operation upon this channel, however, then an
                 * invocation of this method will block until the first operation is
                 * complete. </p>
                 */
                // @ts-ignore
                 read(dsts: java.nio.ByteBuffer, offset: number, length: number): number;
                /**
                 * Reads a sequence of bytes from this channel into the given buffers.
                 * <p> An invocation of this method of the form <tt>c.read(dsts)</tt>
                 * behaves in exactly the same manner as the invocation
                 * <blockquote><pre>
                 * c.read(dsts, 0, dsts.length);</pre></blockquote>
                 */
                // @ts-ignore
                 read(dsts: java.nio.ByteBuffer): number;
            }
        }
    }
}
