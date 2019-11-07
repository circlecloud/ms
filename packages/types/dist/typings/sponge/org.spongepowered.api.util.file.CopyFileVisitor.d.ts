declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace file {
                    // @ts-ignore
                     class CopyFileVisitor extends java.nio.file.SimpleFileVisitor {
                        /**
                         * Constructs a new {@link CopyFileVisitor} which will copy the visited
                         * file paths to the specified target directory.
                         * <p><b>Note:</b> The target directory must not exist since the visitor
                         * will also copy the root directory to the specified location.</p>
                         */
                        // @ts-ignore
                        constructor(target: java.nio.file.Path, options: java.nio.file.CopyOption)
                        // @ts-ignore
                        public preVisitDirectory(dir: java.nio.file.Path, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
                        // @ts-ignore
                        public visitFile(file: java.nio.file.Path, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
                    }
                }
            }
        }
    }
}
