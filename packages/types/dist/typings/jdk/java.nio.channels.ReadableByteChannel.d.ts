// @ts-nocheck
declare namespace java {
    namespace nio {
        namespace channels {
            // @ts-ignore
            interface ReadableByteChannel {
                /**
                 * Reads a sequence of bytes from this channel into the given buffer.
                 * <p> An attempt is made to read up to <i>r</i> bytes from the channel,
                 * where <i>r</i> is the number of bytes remaining in the buffer, that is,
                 * <tt>dst.remaining()</tt>, at the moment this method is invoked.
                 * <p> Suppose that a byte sequence of length <i>n</i> is read, where
                 * <tt>0</tt>&nbsp;<tt>&lt;=</tt>&nbsp;<i>n</i>&nbsp;<tt>&lt;=</tt>&nbsp;<i>r</i>.
                 * This byte sequence will be transferred into the buffer so that the first
                 * byte in the sequence is at index <i>p</i> and the last byte is at index
                 * <i>p</i>&nbsp;<tt>+</tt>&nbsp;<i>n</i>&nbsp;<tt>-</tt>&nbsp;<tt>1</tt>,
                 * where <i>p</i> is the buffer's position at the moment this method is
                 * invoked.  Upon return the buffer's position will be equal to
                 * <i>p</i>&nbsp;<tt>+</tt>&nbsp;<i>n</i>; its limit will not have changed.
                 * <p> A read operation might not fill the buffer, and in fact it might not
                 * read any bytes at all.  Whether or not it does so depends upon the
                 * nature and state of the channel.  A socket channel in non-blocking mode,
                 * for example, cannot read any more bytes than are immediately available
                 * from the socket's input buffer; similarly, a file channel cannot read
                 * any more bytes than remain in the file.  It is guaranteed, however, that
                 * if a channel is in blocking mode and there is at least one byte
                 * remaining in the buffer then this method will block until at least one
                 * byte is read.
                 * <p> This method may be invoked at any time.  If another thread has
                 * already initiated a read operation upon this channel, however, then an
                 * invocation of this method will block until the first operation is
                 * complete. </p>
                 */
                // @ts-ignore
                 read(dst: java.nio.ByteBuffer): number;
            }
        }
    }
}
