declare namespace java {
    namespace nio {
        namespace file {
            namespace DirectoryStream {
                // @ts-ignore
                interface Filter {
                    /**
                     * Decides if the given directory entry should be accepted or filtered.
                     */
                    // @ts-ignore
                     accept(entry: java.lang.Object): boolean;
                }
            }
        }
    }
}
