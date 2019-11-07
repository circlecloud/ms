// @ts-nocheck
declare namespace java {
    namespace nio {
        namespace channels {
            // @ts-ignore
            abstract class FileChannel extends java.nio.channels.spi.AbstractInterruptibleChannel {
                /**
                 * Initializes a new instance of this class.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Opens or creates a file, returning a file channel to access the file.
                 * <p> The {@code options} parameter determines how the file is opened.
                 * The {@link StandardOpenOption#READ READ} and {@link StandardOpenOption#WRITE
                 * WRITE} options determine if the file should be opened for reading and/or
                 * writing. If neither option (or the {@link StandardOpenOption#APPEND APPEND}
                 * option) is contained in the array then the file is opened for reading.
                 * By default reading or writing commences at the beginning of the file.
                 * <p> In the addition to {@code READ} and {@code WRITE}, the following
                 * options may be present:
                 * <table border=1 cellpadding=5 summary="">
                 * <tr> <th>Option</th> <th>Description</th> </tr>
                 * <tr>
                 * <td> {@link StandardOpenOption#APPEND APPEND} </td>
                 * <td> If this option is present then the file is opened for writing and
                 * each invocation of the channel's {@code write} method first advances
                 * the position to the end of the file and then writes the requested
                 * data. Whether the advancement of the position and the writing of the
                 * data are done in a single atomic operation is system-dependent and
                 * therefore unspecified. This option may not be used in conjunction
                 * with the {@code READ} or {@code TRUNCATE_EXISTING} options. </td>
                 * </tr>
                 * <tr>
                 * <td> {@link StandardOpenOption#TRUNCATE_EXISTING TRUNCATE_EXISTING} </td>
                 * <td> If this option is present then the existing file is truncated to
                 * a size of 0 bytes. This option is ignored when the file is opened only
                 * for reading. </td>
                 * </tr>
                 * <tr>
                 * <td> {@link StandardOpenOption#CREATE_NEW CREATE_NEW} </td>
                 * <td> If this option is present then a new file is created, failing if
                 * the file already exists. When creating a file the check for the
                 * existence of the file and the creation of the file if it does not exist
                 * is atomic with respect to other file system operations. This option is
                 * ignored when the file is opened only for reading. </td>
                 * </tr>
                 * <tr>
                 * <td > {@link StandardOpenOption#CREATE CREATE} </td>
                 * <td> If this option is present then an existing file is opened if it
                 * exists, otherwise a new file is created. When creating a file the check
                 * for the existence of the file and the creation of the file if it does
                 * not exist is atomic with respect to other file system operations. This
                 * option is ignored if the {@code CREATE_NEW} option is also present or
                 * the file is opened only for reading. </td>
                 * </tr>
                 * <tr>
                 * <td > {@link StandardOpenOption#DELETE_ON_CLOSE DELETE_ON_CLOSE} </td>
                 * <td> When this option is present then the implementation makes a
                 * <em>best effort</em> attempt to delete the file when closed by the
                 * the {@link #close close} method. If the {@code close} method is not
                 * invoked then a <em>best effort</em> attempt is made to delete the file
                 * when the Java virtual machine terminates. </td>
                 * </tr>
                 * <tr>
                 * <td>{@link StandardOpenOption#SPARSE SPARSE} </td>
                 * <td> When creating a new file this option is a <em>hint</em> that the
                 * new file will be sparse. This option is ignored when not creating
                 * a new file. </td>
                 * </tr>
                 * <tr>
                 * <td> {@link StandardOpenOption#SYNC SYNC} </td>
                 * <td> Requires that every update to the file's content or metadata be
                 * written synchronously to the underlying storage device. (see <a
                 * href="../file/package-summary.html#integrity"> Synchronized I/O file
                 * integrity</a>). </td>
                 * </tr>
                 * <tr>
                 * <td> {@link StandardOpenOption#DSYNC DSYNC} </td>
                 * <td> Requires that every update to the file's content be written
                 * synchronously to the underlying storage device. (see <a
                 * href="../file/package-summary.html#integrity"> Synchronized I/O file
                 * integrity</a>). </td>
                 * </tr>
                 * </table>
                 * <p> An implementation may also support additional options.
                 * <p> The {@code attrs} parameter is an optional array of file {@link
                 * FileAttribute file-attributes} to set atomically when creating the file.
                 * <p> The new channel is created by invoking the {@link
                 * FileSystemProvider#newFileChannel newFileChannel} method on the
                 * provider that created the {@code Path}.
                 */
                // @ts-ignore
                public static open(path: java.nio.file.Path, options: java.util.Set, attrs: java.nio.file.attribute.FileAttribute): java.nio.channels.FileChannel;
                /**
                 * Opens or creates a file, returning a file channel to access the file.
                 * <p> An invocation of this method behaves in exactly the same way as the
                 * invocation
                 * <pre>
                 * fc.{@link #open(Path,Set,FileAttribute[]) open}(file, opts, new FileAttribute&lt;?&gt;[0]);
                 * </pre>
                 * where {@code opts} is a set of the options specified in the {@code
                 * options} array.
                 */
                // @ts-ignore
                public static open(path: java.nio.file.Path, options: java.nio.file.OpenOption): java.nio.channels.FileChannel;
                /**
                 * Reads a sequence of bytes from this channel into the given buffer.
                 * <p> Bytes are read starting at this channel's current file position, and
                 * then the file position is updated with the number of bytes actually
                 * read.  Otherwise this method behaves exactly as specified in the {@link
                 * ReadableByteChannel} interface. </p>
                 */
                // @ts-ignore
                public abstract read(dst: java.nio.ByteBuffer): number;
                /**
                 * Reads a sequence of bytes from this channel into the given buffers.
                 * <p> Bytes are read starting at this channel's current file position, and
                 * then the file position is updated with the number of bytes actually
                 * read.  Otherwise this method behaves exactly as specified in the {@link
                 * ScatteringByteChannel} interface.  </p>
                 */
                // @ts-ignore
                public read(dsts: java.nio.ByteBuffer): number;
                /**
                 * Writes a sequence of bytes to this channel from the given buffer.
                 * <p> Bytes are written starting at this channel's current file position
                 * unless the channel is in append mode, in which case the position is
                 * first advanced to the end of the file.  The file is grown, if necessary,
                 * to accommodate the written bytes, and then the file position is updated
                 * with the number of bytes actually written.  Otherwise this method
                 * behaves exactly as specified by the {@link WritableByteChannel}
                 * interface. </p>
                 */
                // @ts-ignore
                public abstract write(src: java.nio.ByteBuffer): number;
                /**
                 * Writes a sequence of bytes to this channel from the given buffers.
                 * <p> Bytes are written starting at this channel's current file position
                 * unless the channel is in append mode, in which case the position is
                 * first advanced to the end of the file.  The file is grown, if necessary,
                 * to accommodate the written bytes, and then the file position is updated
                 * with the number of bytes actually written.  Otherwise this method
                 * behaves exactly as specified in the {@link GatheringByteChannel}
                 * interface.  </p>
                 */
                // @ts-ignore
                public write(srcs: java.nio.ByteBuffer): number;
                /**
                 * Returns this channel's file position.
                 */
                // @ts-ignore
                public abstract position(): number;
                /**
                 * Returns the current size of this channel's file.
                 */
                // @ts-ignore
                public abstract size(): number;
                /**
                 * Truncates this channel's file to the given size.
                 * <p> If the given size is less than the file's current size then the file
                 * is truncated, discarding any bytes beyond the new end of the file.  If
                 * the given size is greater than or equal to the file's current size then
                 * the file is not modified.  In either case, if this channel's file
                 * position is greater than the given size then it is set to that size.
                 * </p>
                 */
                // @ts-ignore
                public abstract truncate(size: number): java.nio.channels.FileChannel;
                /**
                 * Forces any updates to this channel's file to be written to the storage
                 * device that contains it.
                 * <p> If this channel's file resides on a local storage device then when
                 * this method returns it is guaranteed that all changes made to the file
                 * since this channel was created, or since this method was last invoked,
                 * will have been written to that device.  This is useful for ensuring that
                 * critical information is not lost in the event of a system crash.
                 * <p> If the file does not reside on a local device then no such guarantee
                 * is made.
                 * <p> The <tt>metaData</tt> parameter can be used to limit the number of
                 * I/O operations that this method is required to perform.  Passing
                 * <tt>false</tt> for this parameter indicates that only updates to the
                 * file's content need be written to storage; passing <tt>true</tt>
                 * indicates that updates to both the file's content and metadata must be
                 * written, which generally requires at least one more I/O operation.
                 * Whether this parameter actually has any effect is dependent upon the
                 * underlying operating system and is therefore unspecified.
                 * <p> Invoking this method may cause an I/O operation to occur even if the
                 * channel was only opened for reading.  Some operating systems, for
                 * example, maintain a last-access time as part of a file's metadata, and
                 * this time is updated whenever the file is read.  Whether or not this is
                 * actually done is system-dependent and is therefore unspecified.
                 * <p> This method is only guaranteed to force changes that were made to
                 * this channel's file via the methods defined in this class.  It may or
                 * may not force changes that were made by modifying the content of a
                 * {@link MappedByteBuffer <i>mapped byte buffer</i>} obtained by
                 * invoking the {@link #map map} method.  Invoking the {@link
                 * MappedByteBuffer#force force} method of the mapped byte buffer will
                 * force changes made to the buffer's content to be written.  </p>
                 */
                // @ts-ignore
                public abstract force(metaData: boolean): void;
                /**
                 * Transfers bytes from this channel's file to the given writable byte
                 * channel.
                 * <p> An attempt is made to read up to <tt>count</tt> bytes starting at
                 * the given <tt>position</tt> in this channel's file and write them to the
                 * target channel.  An invocation of this method may or may not transfer
                 * all of the requested bytes; whether or not it does so depends upon the
                 * natures and states of the channels.  Fewer than the requested number of
                 * bytes are transferred if this channel's file contains fewer than
                 * <tt>count</tt> bytes starting at the given <tt>position</tt>, or if the
                 * target channel is non-blocking and it has fewer than <tt>count</tt>
                 * bytes free in its output buffer.
                 * <p> This method does not modify this channel's position.  If the given
                 * position is greater than the file's current size then no bytes are
                 * transferred.  If the target channel has a position then bytes are
                 * written starting at that position and then the position is incremented
                 * by the number of bytes written.
                 * <p> This method is potentially much more efficient than a simple loop
                 * that reads from this channel and writes to the target channel.  Many
                 * operating systems can transfer bytes directly from the filesystem cache
                 * to the target channel without actually copying them.  </p>
                 */
                // @ts-ignore
                public abstract transferTo(position: number, count: number, target: java.nio.channels.WritableByteChannel): number;
                /**
                 * Transfers bytes into this channel's file from the given readable byte
                 * channel.
                 * <p> An attempt is made to read up to <tt>count</tt> bytes from the
                 * source channel and write them to this channel's file starting at the
                 * given <tt>position</tt>.  An invocation of this method may or may not
                 * transfer all of the requested bytes; whether or not it does so depends
                 * upon the natures and states of the channels.  Fewer than the requested
                 * number of bytes will be transferred if the source channel has fewer than
                 * <tt>count</tt> bytes remaining, or if the source channel is non-blocking
                 * and has fewer than <tt>count</tt> bytes immediately available in its
                 * input buffer.
                 * <p> This method does not modify this channel's position.  If the given
                 * position is greater than the file's current size then no bytes are
                 * transferred.  If the source channel has a position then bytes are read
                 * starting at that position and then the position is incremented by the
                 * number of bytes read.
                 * <p> This method is potentially much more efficient than a simple loop
                 * that reads from the source channel and writes to this channel.  Many
                 * operating systems can transfer bytes directly from the source channel
                 * into the filesystem cache without actually copying them.  </p>
                 */
                // @ts-ignore
                public abstract transferFrom(src: java.nio.channels.ReadableByteChannel, position: number, count: number): number;
                /**
                 * Maps a region of this channel's file directly into memory.
                 * <p> A region of a file may be mapped into memory in one of three modes:
                 * </p>
                 * <ul>
                 * <li><p> <i>Read-only:</i> Any attempt to modify the resulting buffer
                 * will cause a {@link java.nio.ReadOnlyBufferException} to be thrown.
                 * ({@link MapMode#READ_ONLY MapMode.READ_ONLY}) </p></li>
                 * <li><p> <i>Read/write:</i> Changes made to the resulting buffer will
                 * eventually be propagated to the file; they may or may not be made
                 * visible to other programs that have mapped the same file.  ({@link
                 * MapMode#READ_WRITE MapMode.READ_WRITE}) </p></li>
                 * <li><p> <i>Private:</i> Changes made to the resulting buffer will not
                 * be propagated to the file and will not be visible to other programs
                 * that have mapped the same file; instead, they will cause private
                 * copies of the modified portions of the buffer to be created.  ({@link
                 * MapMode#PRIVATE MapMode.PRIVATE}) </p></li>
                 * </ul>
                 * <p> For a read-only mapping, this channel must have been opened for
                 * reading; for a read/write or private mapping, this channel must have
                 * been opened for both reading and writing.
                 * <p> The {@link MappedByteBuffer <i>mapped byte buffer</i>}
                 * returned by this method will have a position of zero and a limit and
                 * capacity of <tt>size</tt>; its mark will be undefined.  The buffer and
                 * the mapping that it represents will remain valid until the buffer itself
                 * is garbage-collected.
                 * <p> A mapping, once established, is not dependent upon the file channel
                 * that was used to create it.  Closing the channel, in particular, has no
                 * effect upon the validity of the mapping.
                 * <p> Many of the details of memory-mapped files are inherently dependent
                 * upon the underlying operating system and are therefore unspecified.  The
                 * behavior of this method when the requested region is not completely
                 * contained within this channel's file is unspecified.  Whether changes
                 * made to the content or size of the underlying file, by this program or
                 * another, are propagated to the buffer is unspecified.  The rate at which
                 * changes to the buffer are propagated to the file is unspecified.
                 * <p> For most operating systems, mapping a file into memory is more
                 * expensive than reading or writing a few tens of kilobytes of data via
                 * the usual {@link #read read} and {@link #write write} methods.  From the
                 * standpoint of performance it is generally only worth mapping relatively
                 * large files into memory.  </p>
                 */
                // @ts-ignore
                public abstract map(mode: java.nio.channels.FileChannel.MapMode, position: number, size: number): java.nio.MappedByteBuffer;
                /**
                 * Acquires a lock on the given region of this channel's file.
                 * <p> An invocation of this method will block until the region can be
                 * locked, this channel is closed, or the invoking thread is interrupted,
                 * whichever comes first.
                 * <p> If this channel is closed by another thread during an invocation of
                 * this method then an {@link AsynchronousCloseException} will be thrown.
                 * <p> If the invoking thread is interrupted while waiting to acquire the
                 * lock then its interrupt status will be set and a {@link
                 * FileLockInterruptionException} will be thrown.  If the invoker's
                 * interrupt status is set when this method is invoked then that exception
                 * will be thrown immediately; the thread's interrupt status will not be
                 * changed.
                 * <p> The region specified by the <tt>position</tt> and <tt>size</tt>
                 * parameters need not be contained within, or even overlap, the actual
                 * underlying file.  Lock regions are fixed in size; if a locked region
                 * initially contains the end of the file and the file grows beyond the
                 * region then the new portion of the file will not be covered by the lock.
                 * If a file is expected to grow in size and a lock on the entire file is
                 * required then a region starting at zero, and no smaller than the
                 * expected maximum size of the file, should be locked.  The zero-argument
                 * {@link #lock()} method simply locks a region of size {@link
                 * Long#MAX_VALUE}.
                 * <p> Some operating systems do not support shared locks, in which case a
                 * request for a shared lock is automatically converted into a request for
                 * an exclusive lock.  Whether the newly-acquired lock is shared or
                 * exclusive may be tested by invoking the resulting lock object's {@link
                 * FileLock#isShared() isShared} method.
                 * <p> File locks are held on behalf of the entire Java virtual machine.
                 * They are not suitable for controlling access to a file by multiple
                 * threads within the same virtual machine.  </p>
                 */
                // @ts-ignore
                public abstract lock(position: number, size: number, shared: boolean): java.nio.channels.FileLock;
                /**
                 * Acquires an exclusive lock on this channel's file.
                 * <p> An invocation of this method of the form <tt>fc.lock()</tt> behaves
                 * in exactly the same way as the invocation
                 * <pre>
                 * fc.{@link #lock(long,long,boolean) lock}(0L, Long.MAX_VALUE, false) </pre>
                 */
                // @ts-ignore
                public lock(): java.nio.channels.FileLock;
                /**
                 * Attempts to acquire a lock on the given region of this channel's file.
                 * <p> This method does not block.  An invocation always returns
                 * immediately, either having acquired a lock on the requested region or
                 * having failed to do so.  If it fails to acquire a lock because an
                 * overlapping lock is held by another program then it returns
                 * <tt>null</tt>.  If it fails to acquire a lock for any other reason then
                 * an appropriate exception is thrown.
                 * <p> The region specified by the <tt>position</tt> and <tt>size</tt>
                 * parameters need not be contained within, or even overlap, the actual
                 * underlying file.  Lock regions are fixed in size; if a locked region
                 * initially contains the end of the file and the file grows beyond the
                 * region then the new portion of the file will not be covered by the lock.
                 * If a file is expected to grow in size and a lock on the entire file is
                 * required then a region starting at zero, and no smaller than the
                 * expected maximum size of the file, should be locked.  The zero-argument
                 * {@link #tryLock()} method simply locks a region of size {@link
                 * Long#MAX_VALUE}.
                 * <p> Some operating systems do not support shared locks, in which case a
                 * request for a shared lock is automatically converted into a request for
                 * an exclusive lock.  Whether the newly-acquired lock is shared or
                 * exclusive may be tested by invoking the resulting lock object's {@link
                 * FileLock#isShared() isShared} method.
                 * <p> File locks are held on behalf of the entire Java virtual machine.
                 * They are not suitable for controlling access to a file by multiple
                 * threads within the same virtual machine.  </p>
                 */
                // @ts-ignore
                public abstract tryLock(position: number, size: number, shared: boolean): java.nio.channels.FileLock;
                /**
                 * Attempts to acquire an exclusive lock on this channel's file.
                 * <p> An invocation of this method of the form <tt>fc.tryLock()</tt>
                 * behaves in exactly the same way as the invocation
                 * <pre>
                 * fc.{@link #tryLock(long,long,boolean) tryLock}(0L, Long.MAX_VALUE, false) </pre>
                 */
                // @ts-ignore
                public tryLock(): java.nio.channels.FileLock;
            }
        }
    }
}
