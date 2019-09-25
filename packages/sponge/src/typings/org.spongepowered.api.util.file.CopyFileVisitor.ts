declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace file {
                    // @ts-ignore
                     class CopyFileVisitor {
                        /**
                         * Constructs a new {@link CopyFileVisitor} which will copy the visited
                         * file paths to the specified target directory.
                         * <p><b>Note:</b> The target directory must not exist since the visitor
                         * will also copy the root directory to the specified location.</p>
                         */
                        constructor(target: any, options: any)
                        // @ts-ignore
                        public preVisitDirectory(dir: any, attrs: any): any;
                        // @ts-ignore
                        public visitFile(file: any, attrs: any): any;
                    }
                }
            }
        }
    }
}
