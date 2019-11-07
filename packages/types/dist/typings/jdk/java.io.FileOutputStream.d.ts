// @ts-nocheck
declare namespace java {
    namespace io {
        // @ts-ignore
         class FileOutputStream extends java.io.OutputStream {
            /**
             * Creates a file output stream to write to the file with the
             * specified name. A new <code>FileDescriptor</code> object is
             * created to represent this file connection.
             * <p>
             * First, if there is a security manager, its <code>checkWrite</code>
             * method is called with <code>name</code> as its argument.
             * <p>
             * If the file exists but is a directory rather than a regular file, does
             * not exist but cannot be created, or cannot be opened for any other
             * reason then a <code>FileNotFoundException</code> is thrown.
             */
            // @ts-ignore
            constructor(name: string)
            /**
             * Creates a file output stream to write to the file with the specified
             * name.  If the second argument is <code>true</code>, then
             * bytes will be written to the end of the file rather than the beginning.
             * A new <code>FileDescriptor</code> object is created to represent this
             * file connection.
             * <p>
             * First, if there is a security manager, its <code>checkWrite</code>
             * method is called with <code>name</code> as its argument.
             * <p>
             * If the file exists but is a directory rather than a regular file, does
             * not exist but cannot be created, or cannot be opened for any other
             * reason then a <code>FileNotFoundException</code> is thrown.
             */
            // @ts-ignore
            constructor(name: string, append: boolean)
            /**
             * Creates a file output stream to write to the file represented by
             * the specified <code>File</code> object. A new
             * <code>FileDescriptor</code> object is created to represent this
             * file connection.
             * <p>
             * First, if there is a security manager, its <code>checkWrite</code>
             * method is called with the path represented by the <code>file</code>
             * argument as its argument.
             * <p>
             * If the file exists but is a directory rather than a regular file, does
             * not exist but cannot be created, or cannot be opened for any other
             * reason then a <code>FileNotFoundException</code> is thrown.
             */
            // @ts-ignore
            constructor(file: java.io.File)
            /**
             * Creates a file output stream to write to the file represented by
             * the specified <code>File</code> object. If the second argument is
             * <code>true</code>, then bytes will be written to the end of the file
             * rather than the beginning. A new <code>FileDescriptor</code> object is
             * created to represent this file connection.
             * <p>
             * First, if there is a security manager, its <code>checkWrite</code>
             * method is called with the path represented by the <code>file</code>
             * argument as its argument.
             * <p>
             * If the file exists but is a directory rather than a regular file, does
             * not exist but cannot be created, or cannot be opened for any other
             * reason then a <code>FileNotFoundException</code> is thrown.
             */
            // @ts-ignore
            constructor(file: java.io.File, append: boolean)
            /**
             * Creates a file output stream to write to the specified file
             * descriptor, which represents an existing connection to an actual
             * file in the file system.
             * <p>
             * First, if there is a security manager, its <code>checkWrite</code>
             * method is called with the file descriptor <code>fdObj</code>
             * argument as its argument.
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
             * Writes the specified byte to this file output stream. Implements
             * the <code>write</code> method of <code>OutputStream</code>.
             */
            // @ts-ignore
            public write(b: number): void;
            /**
             * Writes <code>b.length</code> bytes from the specified byte array
             * to this file output stream.
             */
            // @ts-ignore
            public write(b: number): void;
            /**
             * Writes <code>len</code> bytes from the specified byte array
             * starting at offset <code>off</code> to this file output stream.
             */
            // @ts-ignore
            public write(b: number, off: number, len: number): void;
            /**
             * Closes this file output stream and releases any system resources
             * associated with this stream. This file output stream may no longer
             * be used for writing bytes.
             * <p> If this stream has an associated channel then the channel is closed
             * as well.
             */
            // @ts-ignore
            public close(): void;
            /**
             * Returns the file descriptor associated with this stream.
             */
            // @ts-ignore
            public getFD(): java.io.FileDescriptor;
            /**
             * Returns the unique {@link java.nio.channels.FileChannel FileChannel}
             * object associated with this file output stream.
             * <p> The initial {@link java.nio.channels.FileChannel#position()
             * position} of the returned channel will be equal to the
             * number of bytes written to the file so far unless this stream is in
             * append mode, in which case it will be equal to the size of the file.
             * Writing bytes to this stream will increment the channel's position
             * accordingly.  Changing the channel's position, either explicitly or by
             * writing, will change this stream's file position.
             */
            // @ts-ignore
            public getChannel(): java.nio.channels.FileChannel;
            /**
             * Cleans up the connection to the file, and ensures that the
             * <code>close</code> method of this file output stream is
             * called when there are no more references to this stream.
             */
            // @ts-ignore
            protected finalize(): void;
        }
    }
}
