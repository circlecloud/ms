declare namespace java {
    namespace nio {
        namespace channels {
            // @ts-ignore
             class Channels extends java.lang.Object {
                /**
                 * Constructs a stream that reads bytes from the given channel.
                 * <p> The <tt>read</tt> methods of the resulting stream will throw an
                 * {@link IllegalBlockingModeException} if invoked while the underlying
                 * channel is in non-blocking mode.  The stream will not be buffered, and
                 * it will not support the {@link InputStream#mark mark} or {@link
                 * InputStream#reset reset} methods.  The stream will be safe for access by
                 * multiple concurrent threads.  Closing the stream will in turn cause the
                 * channel to be closed.  </p>
                 */
                // @ts-ignore
                public static newInputStream(ch: java.nio.channels.ReadableByteChannel): java.io.InputStream;
                /**
                 * Constructs a stream that writes bytes to the given channel.
                 * <p> The <tt>write</tt> methods of the resulting stream will throw an
                 * {@link IllegalBlockingModeException} if invoked while the underlying
                 * channel is in non-blocking mode.  The stream will not be buffered.  The
                 * stream will be safe for access by multiple concurrent threads.  Closing
                 * the stream will in turn cause the channel to be closed.  </p>
                 */
                // @ts-ignore
                public static newOutputStream(ch: java.nio.channels.WritableByteChannel): java.io.OutputStream;
                /**
                 * Constructs a stream that reads bytes from the given channel.
                 * <p> The stream will not be buffered, and it will not support the {@link
                 * InputStream#mark mark} or {@link InputStream#reset reset} methods.  The
                 * stream will be safe for access by multiple concurrent threads.  Closing
                 * the stream will in turn cause the channel to be closed.  </p>
                 */
                // @ts-ignore
                public static newInputStream(ch: java.nio.channels.AsynchronousByteChannel): java.io.InputStream;
                /**
                 * Constructs a stream that writes bytes to the given channel.
                 * <p> The stream will not be buffered. The stream will be safe for access
                 * by multiple concurrent threads.  Closing the stream will in turn cause
                 * the channel to be closed.  </p>
                 */
                // @ts-ignore
                public static newOutputStream(ch: java.nio.channels.AsynchronousByteChannel): java.io.OutputStream;
                /**
                 * Constructs a channel that reads bytes from the given stream.
                 * <p> The resulting channel will not be buffered; it will simply redirect
                 * its I/O operations to the given stream.  Closing the channel will in
                 * turn cause the stream to be closed.  </p>
                 */
                // @ts-ignore
                public static newChannel(input: java.io.InputStream): java.nio.channels.ReadableByteChannel;
                /**
                 * Constructs a channel that writes bytes to the given stream.
                 * <p> The resulting channel will not be buffered; it will simply redirect
                 * its I/O operations to the given stream.  Closing the channel will in
                 * turn cause the stream to be closed.  </p>
                 */
                // @ts-ignore
                public static newChannel(out: java.io.OutputStream): java.nio.channels.WritableByteChannel;
                /**
                 * Constructs a reader that decodes bytes from the given channel using the
                 * given decoder.
                 * <p> The resulting stream will contain an internal input buffer of at
                 * least <tt>minBufferCap</tt> bytes.  The stream's <tt>read</tt> methods
                 * will, as needed, fill the buffer by reading bytes from the underlying
                 * channel; if the channel is in non-blocking mode when bytes are to be
                 * read then an {@link IllegalBlockingModeException} will be thrown.  The
                 * resulting stream will not otherwise be buffered, and it will not support
                 * the {@link Reader#mark mark} or {@link Reader#reset reset} methods.
                 * Closing the stream will in turn cause the channel to be closed.  </p>
                 */
                // @ts-ignore
                public static newReader(ch: java.nio.channels.ReadableByteChannel, dec: java.nio.charset.CharsetDecoder, minBufferCap: number): java.io.Reader;
                /**
                 * Constructs a reader that decodes bytes from the given channel according
                 * to the named charset.
                 * <p> An invocation of this method of the form
                 * <blockquote><pre>
                 * Channels.newReader(ch, csname)</pre></blockquote>
                 * behaves in exactly the same way as the expression
                 * <blockquote><pre>
                 * Channels.newReader(ch,
                 * Charset.forName(csName)
                 * .newDecoder(),
                 * -1);</pre></blockquote>
                 */
                // @ts-ignore
                public static newReader(ch: java.nio.channels.ReadableByteChannel, csName: string): java.io.Reader;
                /**
                 * Constructs a writer that encodes characters using the given encoder and
                 * writes the resulting bytes to the given channel.
                 * <p> The resulting stream will contain an internal output buffer of at
                 * least <tt>minBufferCap</tt> bytes.  The stream's <tt>write</tt> methods
                 * will, as needed, flush the buffer by writing bytes to the underlying
                 * channel; if the channel is in non-blocking mode when bytes are to be
                 * written then an {@link IllegalBlockingModeException} will be thrown.
                 * The resulting stream will not otherwise be buffered.  Closing the stream
                 * will in turn cause the channel to be closed.  </p>
                 */
                // @ts-ignore
                public static newWriter(ch: java.nio.channels.WritableByteChannel, enc: java.nio.charset.CharsetEncoder, minBufferCap: number): java.io.Writer;
                /**
                 * Constructs a writer that encodes characters according to the named
                 * charset and writes the resulting bytes to the given channel.
                 * <p> An invocation of this method of the form
                 * <blockquote><pre>
                 * Channels.newWriter(ch, csname)</pre></blockquote>
                 * behaves in exactly the same way as the expression
                 * <blockquote><pre>
                 * Channels.newWriter(ch,
                 * Charset.forName(csName)
                 * .newEncoder(),
                 * -1);</pre></blockquote>
                 */
                // @ts-ignore
                public static newWriter(ch: java.nio.channels.WritableByteChannel, csName: string): java.io.Writer;
            }
        }
    }
}
