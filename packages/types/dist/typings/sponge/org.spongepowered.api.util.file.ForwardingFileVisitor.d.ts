declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace file {
                    // @ts-ignore
                    abstract class ForwardingFileVisitor extends java.lang.Object {
                        // @ts-ignore
                        constructor(visitor: java.nio.file.FileVisitor)
                        // @ts-ignore
                        public preVisitDirectory(dir: java.lang.Object, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
                        // @ts-ignore
                        public visitFile(file: java.lang.Object, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
                        // @ts-ignore
                        public visitFileFailed(file: java.lang.Object, exc: java.io.IOException): java.nio.file.FileVisitResult;
                        // @ts-ignore
                        public postVisitDirectory(dir: java.lang.Object, exc: java.io.IOException): java.nio.file.FileVisitResult;
                    }
                }
            }
        }
    }
}
