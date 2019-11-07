declare namespace java {
    namespace io {
        // @ts-ignore
         class FileReader extends java.io.InputStreamReader {
            /**
             * Creates a new <tt>FileReader</tt>, given the name of the
             * file to read from.
             */
            // @ts-ignore
            constructor(fileName: string)
            /**
             * Creates a new <tt>FileReader</tt>, given the <tt>File</tt>
             * to read from.
             */
            // @ts-ignore
            constructor(file: java.io.File)
            /**
             * Creates a new <tt>FileReader</tt>, given the
             * <tt>FileDescriptor</tt> to read from.
             */
            // @ts-ignore
            constructor(fd: java.io.FileDescriptor)
        }
    }
}
