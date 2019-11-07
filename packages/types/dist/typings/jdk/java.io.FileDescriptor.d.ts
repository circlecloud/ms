// @ts-nocheck
declare namespace java {
    namespace io {
        // @ts-ignore
         class FileDescriptor extends java.lang.Object {
            /**
             * Constructs an (invalid) FileDescriptor
             * object.
             */
            // @ts-ignore
            constructor()
            // @ts-ignore
            public static in: java.io.FileDescriptor;
            // @ts-ignore
            public static out: java.io.FileDescriptor;
            // @ts-ignore
            public static err: java.io.FileDescriptor;
            /**
             * Tests if this file descriptor object is valid.
             */
            // @ts-ignore
            public valid(): boolean;
            /**
             * Force all system buffers to synchronize with the underlying
             * device.  This method returns after all modified data and
             * attributes of this FileDescriptor have been written to the
             * relevant device(s).  In particular, if this FileDescriptor
             * refers to a physical storage medium, such as a file in a file
             * system, sync will not return until all in-memory modified copies
             * of buffers associated with this FileDesecriptor have been
             * written to the physical medium.
             * sync is meant to be used by code that requires physical
             * storage (such as a file) to be in a known state  For
             * example, a class that provided a simple transaction facility
             * might use sync to ensure that all changes to a file caused
             * by a given transaction were recorded on a storage medium.
             * sync only affects buffers downstream of this FileDescriptor.  If
             * any in-memory buffering is being done by the application (for
             * example, by a BufferedOutputStream object), those buffers must
             * be flushed into the FileDescriptor (for example, by invoking
             * OutputStream.flush) before that data will be affected by sync.
             */
            // @ts-ignore
            public sync(): void;
        }
    }
}
