// @ts-nocheck
declare namespace java {
    namespace nio {
        namespace file {
            // @ts-ignore
            interface FileVisitor {
                /**
                 * Invoked for a directory before entries in the directory are visited.
                 * <p> If this method returns {@link FileVisitResult#CONTINUE CONTINUE},
                 * then entries in the directory are visited. If this method returns {@link
                 * FileVisitResult#SKIP_SUBTREE SKIP_SUBTREE} or {@link
                 * FileVisitResult#SKIP_SIBLINGS SKIP_SIBLINGS} then entries in the
                 * directory (and any descendants) will not be visited.
                 */
                // @ts-ignore
                 preVisitDirectory(dir: java.lang.Object, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
                /**
                 * Invoked for a file in a directory.
                 */
                // @ts-ignore
                 visitFile(file: java.lang.Object, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
                /**
                 * Invoked for a file that could not be visited. This method is invoked
                 * if the file's attributes could not be read, the file is a directory
                 * that could not be opened, and other reasons.
                 */
                // @ts-ignore
                 visitFileFailed(file: java.lang.Object, exc: java.io.IOException): java.nio.file.FileVisitResult;
                /**
                 * Invoked for a directory after entries in the directory, and all of their
                 * descendants, have been visited. This method is also invoked when iteration
                 * of the directory completes prematurely (by a {@link #visitFile visitFile}
                 * method returning {@link FileVisitResult#SKIP_SIBLINGS SKIP_SIBLINGS},
                 * or an I/O error when iterating over the directory).
                 */
                // @ts-ignore
                 postVisitDirectory(dir: java.lang.Object, exc: java.io.IOException): java.nio.file.FileVisitResult;
            }
        }
    }
}
