// @ts-nocheck
declare namespace java {
    namespace util {
        namespace stream {
            // @ts-ignore
            interface BaseStream {
                /**
                 * Returns an iterator for the elements of this stream.
                 * <p>This is a <a href="package-summary.html#StreamOps">terminal
                 * operation</a>.
                 */
                // @ts-ignore
                 iterator(): java.util.Iterator;
                /**
                 * Returns a spliterator for the elements of this stream.
                 * <p>This is a <a href="package-summary.html#StreamOps">terminal
                 * operation</a>.
                 */
                // @ts-ignore
                 spliterator(): java.util.Spliterator;
                /**
                 * Returns whether this stream, if a terminal operation were to be executed,
                 * would execute in parallel.  Calling this method after invoking an
                 * terminal stream operation method may yield unpredictable results.
                 */
                // @ts-ignore
                 isParallel(): boolean;
                /**
                 * Returns an equivalent stream that is sequential.  May return
                 * itself, either because the stream was already sequential, or because
                 * the underlying stream state was modified to be sequential.
                 * <p>This is an <a href="package-summary.html#StreamOps">intermediate
                 * operation</a>.
                 */
                // @ts-ignore
                 sequential(): java.util.stream.BaseStream;
                /**
                 * Returns an equivalent stream that is parallel.  May return
                 * itself, either because the stream was already parallel, or because
                 * the underlying stream state was modified to be parallel.
                 * <p>This is an <a href="package-summary.html#StreamOps">intermediate
                 * operation</a>.
                 */
                // @ts-ignore
                 parallel(): java.util.stream.BaseStream;
                /**
                 * Returns an equivalent stream that is
                 * <a href="package-summary.html#Ordering">unordered</a>.  May return
                 * itself, either because the stream was already unordered, or because
                 * the underlying stream state was modified to be unordered.
                 * <p>This is an <a href="package-summary.html#StreamOps">intermediate
                 * operation</a>.
                 */
                // @ts-ignore
                 unordered(): java.util.stream.BaseStream;
                /**
                 * Returns an equivalent stream with an additional close handler.  Close
                 * handlers are run when the {@link #close()} method
                 * is called on the stream, and are executed in the order they were
                 * added.  All close handlers are run, even if earlier close handlers throw
                 * exceptions.  If any close handler throws an exception, the first
                 * exception thrown will be relayed to the caller of {@code close()}, with
                 * any remaining exceptions added to that exception as suppressed exceptions
                 * (unless one of the remaining exceptions is the same exception as the
                 * first exception, since an exception cannot suppress itself.)  May
                 * return itself.
                 * <p>This is an <a href="package-summary.html#StreamOps">intermediate
                 * operation</a>.
                 */
                // @ts-ignore
                 onClose(closeHandler: java.lang.Runnable): java.util.stream.BaseStream;
                /**
                 * Closes this stream, causing all close handlers for this stream pipeline
                 * to be called.
                 */
                // @ts-ignore
                 close(): void;
            }
        }
    }
}
