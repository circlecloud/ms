// @ts-nocheck
declare namespace java {
    namespace nio {
        namespace channels {
            // @ts-ignore
            interface SeekableByteChannel {
                /**
                 * Reads a sequence of bytes from this channel into the given buffer.
                 * <p> Bytes are read starting at this channel's current position, and
                 * then the position is updated with the number of bytes actually read.
                 * Otherwise this method behaves exactly as specified in the {@link
                 * ReadableByteChannel} interface.
                 */
                // @ts-ignore
                 read(dst: java.nio.ByteBuffer): number;
                /**
                 * Writes a sequence of bytes to this channel from the given buffer.
                 * <p> Bytes are written starting at this channel's current position, unless
                 * the channel is connected to an entity such as a file that is opened with
                 * the {@link java.nio.file.StandardOpenOption#APPEND APPEND} option, in
                 * which case the position is first advanced to the end. The entity to which
                 * the channel is connected is grown, if necessary, to accommodate the
                 * written bytes, and then the position is updated with the number of bytes
                 * actually written. Otherwise this method behaves exactly as specified by
                 * the {@link WritableByteChannel} interface.
                 */
                // @ts-ignore
                 write(src: java.nio.ByteBuffer): number;
                /**
                 * Returns this channel's position.
                 */
                // @ts-ignore
                 position(): number;
                /**
                 * Sets this channel's position.
                 * <p> Setting the position to a value that is greater than the current size
                 * is legal but does not change the size of the entity.  A later attempt to
                 * read bytes at such a position will immediately return an end-of-file
                 * indication.  A later attempt to write bytes at such a position will cause
                 * the entity to grow to accommodate the new bytes; the values of any bytes
                 * between the previous end-of-file and the newly-written bytes are
                 * unspecified.
                 * <p> Setting the channel's position is not recommended when connected to
                 * an entity, typically a file, that is opened with the {@link
                 * java.nio.file.StandardOpenOption#APPEND APPEND} option. When opened for
                 * append, the position is first advanced to the end before writing.
                 */
                // @ts-ignore
                 position(newPosition: number): java.nio.channels.SeekableByteChannel;
                /**
                 * Returns the current size of entity to which this channel is connected.
                 */
                // @ts-ignore
                 size(): number;
                /**
                 * Truncates the entity, to which this channel is connected, to the given
                 * size.
                 * <p> If the given size is less than the current size then the entity is
                 * truncated, discarding any bytes beyond the new end. If the given size is
                 * greater than or equal to the current size then the entity is not modified.
                 * In either case, if the current position is greater than the given size
                 * then it is set to that size.
                 * <p> An implementation of this interface may prohibit truncation when
                 * connected to an entity, typically a file, opened with the {@link
                 * java.nio.file.StandardOpenOption#APPEND APPEND} option.
                 */
                // @ts-ignore
                 truncate(size: number): java.nio.channels.SeekableByteChannel;
            }
        }
    }
}
