// @ts-nocheck
declare namespace java {
    namespace nio {
        namespace channels {
            // @ts-ignore
            abstract class AsynchronousFileChannel extends java.lang.Object {
                /**
                 * Initializes a new instance of this class.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Opens or creates a file for reading and/or writing, returning an
                 * asynchronous file channel to access the file.
                 * <p> The {@code options} parameter determines how the file is opened.
                 * The {@link StandardOpenOption#READ READ} and {@link StandardOpenOption#WRITE
                 * WRITE} options determines if the file should be opened for reading and/or
                 * writing. If neither option is contained in the array then an existing file
                 * is opened for  reading.
                 * <p> In addition to {@code READ} and {@code WRITE}, the following options
                 * may be present:
                 * <table border=1 cellpadding=5 summary="">
                 * <tr> <th>Option</th> <th>Description</th> </tr>
                 * <tr>
                 * <td> {@link StandardOpenOption#TRUNCATE_EXISTING TRUNCATE_EXISTING} </td>
                 * <td> When opening an existing file, the file is first truncated to a
                 * size of 0 bytes. This option is ignored when the file is opened only
                 * for reading.</td>
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
                 * <p> The {@code executor} parameter is the {@link ExecutorService} to
                 * which tasks are submitted to handle I/O events and dispatch completion
                 * results for operations initiated on resulting channel.
                 * The nature of these tasks is highly implementation specific and so care
                 * should be taken when configuring the {@code Executor}. Minimally it
                 * should support an unbounded work queue and should not run tasks on the
                 * caller thread of the {@link ExecutorService#execute execute} method.
                 * Shutting down the executor service while the channel is open results in
                 * unspecified behavior.
                 * <p> The {@code attrs} parameter is an optional array of file {@link
                 * FileAttribute file-attributes} to set atomically when creating the file.
                 * <p> The new channel is created by invoking the {@link
                 * FileSystemProvider#newFileChannel newFileChannel} method on the
                 * provider that created the {@code Path}.
                 */
                // @ts-ignore
                public static open(file: java.nio.file.Path, options: java.util.Set, executor: java.util.concurrent.ExecutorService, attrs: java.nio.file.attribute.FileAttribute): java.nio.channels.AsynchronousFileChannel;
                /**
                 * Opens or creates a file for reading and/or writing, returning an
                 * asynchronous file channel to access the file.
                 * <p> An invocation of this method behaves in exactly the same way as the
                 * invocation
                 * <pre>
                 * ch.{@link #open(Path,Set,ExecutorService,FileAttribute[])
                 * open}(file, opts, null, new FileAttribute&lt;?&gt;[0]);
                 * </pre>
                 * where {@code opts} is a {@code Set} containing the options specified to
                 * this method.
                 * <p> The resulting channel is associated with default thread pool to which
                 * tasks are submitted to handle I/O events and dispatch to completion
                 * handlers that consume the result of asynchronous operations performed on
                 * the resulting channel.
                 */
                // @ts-ignore
                public static open(file: java.nio.file.Path, options: java.nio.file.OpenOption): java.nio.channels.AsynchronousFileChannel;
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
                 * the file is not modified. </p>
                 */
                // @ts-ignore
                public abstract truncate(size: number): java.nio.channels.AsynchronousFileChannel;
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
                 * <p> The {@code metaData} parameter can be used to limit the number of
                 * I/O operations that this method is required to perform.  Passing
                 * {@code false} for this parameter indicates that only updates to the
                 * file's content need be written to storage; passing {@code true}
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
                 * this channel's file via the methods defined in this class.
                 */
                // @ts-ignore
                public abstract force(metaData: boolean): void;
                /**
                 * Acquires a lock on the given region of this channel's file.
                 * <p> This method initiates an operation to acquire a lock on the given
                 * region of this channel's file. The {@code handler} parameter is a
                 * completion handler that is invoked when the lock is acquired (or the
                 * operation fails). The result passed to the completion handler is the
                 * resulting {@code FileLock}.
                 * <p> The region specified by the {@code position} and {@code size}
                 * parameters need not be contained within, or even overlap, the actual
                 * underlying file.  Lock regions are fixed in size; if a locked region
                 * initially contains the end of the file and the file grows beyond the
                 * region then the new portion of the file will not be covered by the lock.
                 * If a file is expected to grow in size and a lock on the entire file is
                 * required then a region starting at zero, and no smaller than the
                 * expected maximum size of the file, should be locked.  The two-argument
                 * {@link #lock(Object,CompletionHandler)} method simply locks a region
                 * of size {@link Long#MAX_VALUE}. If a lock that overlaps the requested
                 * region is already held by this Java virtual machine, or this method has
                 * been invoked to lock an overlapping region and that operation has not
                 * completed, then this method throws {@link OverlappingFileLockException}.
                 * <p> Some operating systems do not support a mechanism to acquire a file
                 * lock in an asynchronous manner. Consequently an implementation may
                 * acquire the file lock in a background thread or from a task executed by
                 * a thread in the associated thread pool. If there are many lock operations
                 * outstanding then it may consume threads in the Java virtual machine for
                 * indefinite periods.
                 * <p> Some operating systems do not support shared locks, in which case a
                 * request for a shared lock is automatically converted into a request for
                 * an exclusive lock.  Whether the newly-acquired lock is shared or
                 * exclusive may be tested by invoking the resulting lock object's {@link
                 * FileLock#isShared() isShared} method.
                 * <p> File locks are held on behalf of the entire Java virtual machine.
                 * They are not suitable for controlling access to a file by multiple
                 * threads within the same virtual machine.
                 */
                // @ts-ignore
                public abstract lock(position: number, size: number, shared: boolean, attachment: java.lang.Object, handler: java.nio.channels.CompletionHandler): void;
                /**
                 * Acquires an exclusive lock on this channel's file.
                 * <p> This method initiates an operation to acquire a lock on the given
                 * region of this channel's file. The {@code handler} parameter is a
                 * completion handler that is invoked when the lock is acquired (or the
                 * operation fails). The result passed to the completion handler is the
                 * resulting {@code FileLock}.
                 * <p> An invocation of this method of the form {@code ch.lock(att,handler)}
                 * behaves in exactly the same way as the invocation
                 * <pre>
                 * ch.{@link #lock(long,long,boolean,Object,CompletionHandler) lock}(0L, Long.MAX_VALUE, false, att, handler)
                 * </pre>
                 */
                // @ts-ignore
                public lock(attachment: java.lang.Object, handler: java.nio.channels.CompletionHandler): void;
                /**
                 * Acquires an exclusive lock on this channel's file.
                 * <p> This method initiates an operation to acquire an exclusive lock on this
                 * channel's file. The method returns a {@code Future} representing the
                 * pending result of the operation. The {@code Future}'s {@link Future#get()
                 * get} method returns the {@link FileLock} on successful completion.
                 * <p> An invocation of this method behaves in exactly the same way as the
                 * invocation
                 * <pre>
                 * ch.{@link #lock(long,long,boolean) lock}(0L, Long.MAX_VALUE, false)
                 * </pre>
                 */
                // @ts-ignore
                public lock(): java.util.concurrent.Future;
                /**
                 * Attempts to acquire a lock on the given region of this channel's file.
                 * <p> This method does not block. An invocation always returns immediately,
                 * either having acquired a lock on the requested region or having failed to
                 * do so.  If it fails to acquire a lock because an overlapping lock is held
                 * by another program then it returns {@code null}.  If it fails to acquire
                 * a lock for any other reason then an appropriate exception is thrown.
                 */
                // @ts-ignore
                public abstract tryLock(position: number, size: number, shared: boolean): java.nio.channels.FileLock;
                /**
                 * Attempts to acquire an exclusive lock on this channel's file.
                 * <p> An invocation of this method of the form {@code ch.tryLock()}
                 * behaves in exactly the same way as the invocation
                 * <pre>
                 * ch.{@link #tryLock(long,long,boolean) tryLock}(0L, Long.MAX_VALUE, false) </pre>
                 */
                // @ts-ignore
                public tryLock(): java.nio.channels.FileLock;
                /**
                 * Reads a sequence of bytes from this channel into the given buffer,
                 * starting at the given file position.
                 * <p> This method initiates the reading of a sequence of bytes from this
                 * channel into the given buffer, starting at the given file position. The
                 * result of the read is the number of bytes read or {@code -1} if the given
                 * position is greater than or equal to the file's size at the time that the
                 * read is attempted.
                 * <p> This method works in the same manner as the {@link
                 * AsynchronousByteChannel#read(ByteBuffer,Object,CompletionHandler)}
                 * method, except that bytes are read starting at the given file position.
                 * If the given file position is greater than the file's size at the time
                 * that the read is attempted then no bytes are read.
                 */
                // @ts-ignore
                public abstract read(dst: java.nio.ByteBuffer, position: number, attachment: java.lang.Object, handler: java.nio.channels.CompletionHandler): void;
                /**
                 * Writes a sequence of bytes to this channel from the given buffer, starting
                 * at the given file position.
                 * <p> This method works in the same manner as the {@link
                 * AsynchronousByteChannel#write(ByteBuffer,Object,CompletionHandler)}
                 * method, except that bytes are written starting at the given file position.
                 * If the given position is greater than the file's size, at the time that
                 * the write is attempted, then the file will be grown to accommodate the new
                 * bytes; the values of any bytes between the previous end-of-file and the
                 * newly-written bytes are unspecified.
                 */
                // @ts-ignore
                public abstract write(src: java.nio.ByteBuffer, position: number, attachment: java.lang.Object, handler: java.nio.channels.CompletionHandler): void;
            }
        }
    }
}
