declare namespace java {
    namespace io {
        // @ts-ignore
         class FileWriter extends java.io.OutputStreamWriter {
            /**
             * Constructs a FileWriter object given a file name.
             */
            // @ts-ignore
            constructor(fileName: string)
            /**
             * Constructs a FileWriter object given a file name with a boolean
             * indicating whether or not to append the data written.
             */
            // @ts-ignore
            constructor(fileName: string, append: boolean)
            /**
             * Constructs a FileWriter object given a File object.
             */
            // @ts-ignore
            constructor(file: java.io.File)
            /**
             * Constructs a FileWriter object given a File object. If the second
             * argument is <code>true</code>, then bytes will be written to the end
             * of the file rather than the beginning.
             */
            // @ts-ignore
            constructor(file: java.io.File, append: boolean)
            /**
             * Constructs a FileWriter object associated with a file descriptor.
             */
            // @ts-ignore
            constructor(fd: java.io.FileDescriptor)
        }
    }
}
