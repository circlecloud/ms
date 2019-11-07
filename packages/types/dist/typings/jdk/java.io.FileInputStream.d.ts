// @ts-nocheck
declare namespace java {
    namespace io {
        // @ts-ignore
         class FileInputStream extends java.io.InputStream {
            /**
             * Creates a <code>FileInputStream</code> by
             * opening a connection to an actual file,
             * the file named by the path name <code>name</code>
             * in the file system.  A new <code>FileDescriptor</code>
             * object is created to represent this file
             * connection.
             * <p>
             * First, if there is a security
             * manager, its <code>checkRead</code> method
             * is called with the <code>name</code> argument
             * as its argument.
             * <p>
             * If the named file does not exist, is a directory rather than a regular
             * file, or for some other reason cannot be opened for reading then a
             * <code>FileNotFoundException</code> is thrown.
             */
            // @ts-ignore
            constructor(name: string)
            /**
             * Creates a <code>FileInputStream</code> by
             * opening a connection to an actual file,
             * the file named by the <code>File</code>
             * object <code>file</code> in the file system.
             * A new <code>FileDescriptor</code> object
             * is created to represent this file connection.
             * <p>
             * First, if there is a security manager,
             * its <code>checkRead</code> method  is called
             * with the path represented by the <code>file</code>
             * argument as its argument.
             * <p>
             * If the named file does not exist, is a directory rather than a regular
             * file, or for some other reason cannot be opened for reading then a
             * <code>FileNotFoundException</code> is thrown.
             */
            // @ts-ignore
            constructor(file: java.io.File)
            /**
             * Creates a <code>FileInputStream</code> by using the file descriptor
             * <code>fdObj</code>, which represents an existing connection to an
             * actual file in the file system.
             * <p>
             * If there is a security manager, its <code>checkRead</code> method is
             * called with the file descriptor <code>fdObj</code> as its argument to
             * see if it's ok to read the file descriptor. If read access is denied
             * to the file descriptor a <code>SecurityException</code> is thrown.
             * <p>
             * If <code>fdObj</code> is null then a <code>NullPointerException</code>
             * is thrown.
             * <p>
             * This constructor does not throw an exception if <code>fdObj</code>
             * is {@link java.io.FileDescriptor#valid() invalid}.
             * However, if the methods are invoked on the resulting stream to attempt
             * I/O on the stream, an <code>IOException</code> is thrown.
             */
            // @ts-ignore
            constructor(fdObj: java.io.FileDescriptor)
            /**
             * Reads a byte of data from this input stream. This method blocks
             * if no input is yet available.
             */
            // @ts-ignore
            public read(): number;
            /**
             * Reads up to <code>b.length</code> bytes of data from this input
             * stream into an array of bytes. This method blocks until some input
             * is available.
             */
            // @ts-ignore
            public read(b: number): number;
            /**
             * Reads up to <code>len</code> bytes of data from this input stream
             * into an array of bytes. If <code>len</code> is not zero, the method
             * blocks until some input is available; otherwise, no
             * bytes are read and <code>0</code> is returned.
             */
            // @ts-ignore
            public read(b: number, off: number, len: number): number;
            /**
             * Skips over and discards <code>n</code> bytes of data from the
             * input stream.
             * <p>The <code>skip</code> method may, for a variety of
             * reasons, end up skipping over some smaller number of bytes,
             * possibly <code>0</code>. If <code>n</code> is negative, the method
             * will try to skip backwards. In case the backing file does not support
             * backward skip at its current position, an <code>IOException</code> is
             * thrown. The actual number of bytes skipped is returned. If it skips
             * forwards, it returns a positive value. If it skips backwards, it
             * returns a negative value.
             * <p>This method may skip more bytes than what are remaining in the
             * backing file. This produces no exception and the number of bytes skipped
             * may include some number of bytes that were beyond the EOF of the
             * backing file. Attempting to read from the stream after skipping past
             * the end will result in -1 indicating the end of the file.
             */
            // @ts-ignore
            public skip(n: number): number;
            /**
             * Returns an estimate of the number of remaining bytes that can be read (or
             * skipped over) from this input stream without blocking by the next
             * invocation of a method for this input stream. Returns 0 when the file
             * position is beyond EOF. The next invocation might be the same thread
             * or another thread. A single read or skip of this many bytes will not
             * block, but may read or skip fewer bytes.
             * <p> In some cases, a non-blocking read (or skip) may appear to be
             * blocked when it is merely slow, for example when reading large
             * files over slow networks.
             */
            // @ts-ignore
            public available(): number;
            /**
             * Closes this file input stream and releases any system resources
             * associated with the stream.
             * <p> If this stream has an associated channel then the channel is closed
             * as well.
             */
            // @ts-ignore
            public close(): void;
            /**
             * Returns the <code>FileDescriptor</code>
             * object  that represents the connection to
             * the actual file in the file system being
             * used by this <code>FileInputStream</code>.
             */
            // @ts-ignore
            public getFD(): java.io.FileDescriptor;
            /**
             * Returns the unique {@link java.nio.channels.FileChannel FileChannel}
             * object associated with this file input stream.
             * <p> The initial {@link java.nio.channels.FileChannel#position()
             * position} of the returned channel will be equal to the
             * number of bytes read from the file so far.  Reading bytes from this
             * stream will increment the channel's position.  Changing the channel's
             * position, either explicitly or by reading, will change this stream's
             * file position.
             */
            // @ts-ignore
            public getChannel(): java.nio.channels.FileChannel;
            /**
             * Ensures that the <code>close</code> method of this file input stream is
             * called when there are no more references to it.
             */
            // @ts-ignore
            protected finalize(): void;
        }
    }
}
