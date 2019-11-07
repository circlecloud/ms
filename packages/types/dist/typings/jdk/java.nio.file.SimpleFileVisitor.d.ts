// @ts-nocheck
declare namespace java {
    namespace nio {
        namespace file {
            // @ts-ignore
             class SimpleFileVisitor extends java.lang.Object {
                /**
                 * Initializes a new instance of this class.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Invoked for a directory before entries in the directory are visited.
                 * <p> Unless overridden, this method returns {@link FileVisitResult#CONTINUE
                 * CONTINUE}.
                 */
                // @ts-ignore
                public preVisitDirectory(dir: java.lang.Object, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
                /**
                 * Invoked for a file in a directory.
                 * <p> Unless overridden, this method returns {@link FileVisitResult#CONTINUE
                 * CONTINUE}.
                 */
                // @ts-ignore
                public visitFile(file: java.lang.Object, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
                /**
                 * Invoked for a file that could not be visited.
                 * <p> Unless overridden, this method re-throws the I/O exception that prevented
                 * the file from being visited.
                 */
                // @ts-ignore
                public visitFileFailed(file: java.lang.Object, exc: java.io.IOException): java.nio.file.FileVisitResult;
                /**
                 * Invoked for a directory after entries in the directory, and all of their
                 * descendants, have been visited.
                 * <p> Unless overridden, this method returns {@link FileVisitResult#CONTINUE
                 * CONTINUE} if the directory iteration completes without an I/O exception;
                 * otherwise this method re-throws the I/O exception that caused the iteration
                 * of the directory to terminate prematurely.
                 */
                // @ts-ignore
                public postVisitDirectory(dir: java.lang.Object, exc: java.io.IOException): java.nio.file.FileVisitResult;
            }
        }
    }
}
