// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace file {
                    // @ts-ignore
                     class DeleteFileVisitor extends java.nio.file.SimpleFileVisitor {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public static INSTANCE: org.spongepowered.api.util.file.DeleteFileVisitor;
                        // @ts-ignore
                        public visitFile(file: java.nio.file.Path, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
                        // @ts-ignore
                        public postVisitDirectory(dir: java.nio.file.Path, exc: java.io.IOException): java.nio.file.FileVisitResult;
                    }
                }
            }
        }
    }
}
