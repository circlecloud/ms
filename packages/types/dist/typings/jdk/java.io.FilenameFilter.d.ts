declare namespace java {
    namespace io {
        // @ts-ignore
        interface FilenameFilter {
            /**
             * Tests if a specified file should be included in a file list.
             */
            // @ts-ignore
             accept(dir: java.io.File, name: string): boolean;
        }
    }
}
