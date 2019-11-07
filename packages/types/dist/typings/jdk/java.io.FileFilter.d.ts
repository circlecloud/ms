declare namespace java {
    namespace io {
        // @ts-ignore
        interface FileFilter {
            /**
             * Tests whether or not the specified abstract pathname should be
             * included in a pathname list.
             */
            // @ts-ignore
             accept(pathname: java.io.File): boolean;
        }
    }
}
