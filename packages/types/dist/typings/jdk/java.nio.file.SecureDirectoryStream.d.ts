// @ts-nocheck
declare namespace java {
    namespace nio {
        namespace file {
            // @ts-ignore
            interface SecureDirectoryStream {
                /**
                 * Opens the directory identified by the given path, returning a {@code
                 * SecureDirectoryStream} to iterate over the entries in the directory.
                 * <p> This method works in exactly the manner specified by the {@link
                 * Files#newDirectoryStream(Path) newDirectoryStream} method for the case that
                 * the {@code path} parameter is an {@link Path#isAbsolute absolute} path.
                 * When the parameter is a relative path then the directory to open is
                 * relative to this open directory. The {@link
                 * LinkOption#NOFOLLOW_LINKS NOFOLLOW_LINKS} option may be used to
                 * ensure that this method fails if the file is a symbolic link.
                 * <p> The new directory stream, once created, is not dependent upon the
                 * directory stream used to create it. Closing this directory stream has no
                 * effect upon newly created directory stream.
                 */
                // @ts-ignore
                 newDirectoryStream(path: java.lang.Object, options: java.nio.file.LinkOption): java.nio.file.SecureDirectoryStream;
                /**
                 * Opens or creates a file in this directory, returning a seekable byte
                 * channel to access the file.
                 * <p> This method works in exactly the manner specified by the {@link
                 * Files#newByteChannel Files.newByteChannel} method for the
                 * case that the {@code path} parameter is an {@link Path#isAbsolute absolute}
                 * path. When the parameter is a relative path then the file to open or
                 * create is relative to this open directory. In addition to the options
                 * defined by the {@code Files.newByteChannel} method, the {@link
                 * LinkOption#NOFOLLOW_LINKS NOFOLLOW_LINKS} option may be used to
                 * ensure that this method fails if the file is a symbolic link.
                 * <p> The channel, once created, is not dependent upon the directory stream
                 * used to create it. Closing this directory stream has no effect upon the
                 * channel.
                 */
                // @ts-ignore
                 newByteChannel(path: java.lang.Object, options: java.util.Set, attrs: java.nio.file.attribute.FileAttribute): java.nio.channels.SeekableByteChannel;
                /**
                 * Deletes a file.
                 * <p> Unlike the {@link Files#delete delete()} method, this method does
                 * not first examine the file to determine if the file is a directory.
                 * Whether a directory is deleted by this method is system dependent and
                 * therefore not specified. If the file is a symbolic link, then the link
                 * itself, not the final target of the link, is deleted. When the
                 * parameter is a relative path then the file to delete is relative to
                 * this open directory.
                 */
                // @ts-ignore
                 deleteFile(path: java.lang.Object): void;
                /**
                 * Deletes a directory.
                 * <p> Unlike the {@link Files#delete delete()} method, this method
                 * does not first examine the file to determine if the file is a directory.
                 * Whether non-directories are deleted by this method is system dependent and
                 * therefore not specified. When the parameter is a relative path then the
                 * directory to delete is relative to this open directory.
                 */
                // @ts-ignore
                 deleteDirectory(path: java.lang.Object): void;
                /**
                 * Move a file from this directory to another directory.
                 * <p> This method works in a similar manner to {@link Files#move move}
                 * method when the {@link StandardCopyOption#ATOMIC_MOVE ATOMIC_MOVE} option
                 * is specified. That is, this method moves a file as an atomic file system
                 * operation. If the {@code srcpath} parameter is an {@link Path#isAbsolute
                 * absolute} path then it locates the source file. If the parameter is a
                 * relative path then it is located relative to this open directory. If
                 * the {@code targetpath} parameter is absolute then it locates the target
                 * file (the {@code targetdir} parameter is ignored). If the parameter is
                 * a relative path it is located relative to the open directory identified
                 * by the {@code targetdir} parameter. In all cases, if the target file
                 * exists then it is implementation specific if it is replaced or this
                 * method fails.
                 */
                // @ts-ignore
                 move(srcpath: java.lang.Object, targetdir: java.nio.file.SecureDirectoryStream, targetpath: java.lang.Object): void;
                /**
                 * Returns a new file attribute view to access the file attributes of this
                 * directory.
                 * <p> The resulting file attribute view can be used to read or update the
                 * attributes of this (open) directory. The {@code type} parameter specifies
                 * the type of the attribute view and the method returns an instance of that
                 * type if supported. Invoking this method to obtain a {@link
                 * BasicFileAttributeView} always returns an instance of that class that is
                 * bound to this open directory.
                 * <p> The state of resulting file attribute view is intimately connected
                 * to this directory stream. Once the directory stream is {@link #close closed},
                 * then all methods to read or update attributes will throw {@link
                 * ClosedDirectoryStreamException ClosedDirectoryStreamException}.
                 */
                // @ts-ignore
                 getFileAttributeView(type: java.lang.Class): java.nio.file.attribute.FileAttributeView;
                /**
                 * Returns a new file attribute view to access the file attributes of a file
                 * in this directory.
                 * <p> The resulting file attribute view can be used to read or update the
                 * attributes of file in this directory. The {@code type} parameter specifies
                 * the type of the attribute view and the method returns an instance of that
                 * type if supported. Invoking this method to obtain a {@link
                 * BasicFileAttributeView} always returns an instance of that class that is
                 * bound to the file in the directory.
                 * <p> The state of resulting file attribute view is intimately connected
                 * to this directory stream. Once the directory stream {@link #close closed},
                 * then all methods to read or update attributes will throw {@link
                 * ClosedDirectoryStreamException ClosedDirectoryStreamException}. The
                 * file is not required to exist at the time that the file attribute view
                 * is created but methods to read or update attributes of the file will
                 * fail when invoked and the file does not exist.
                 */
                // @ts-ignore
                 getFileAttributeView(path: java.lang.Object, type: java.lang.Class, options: java.nio.file.LinkOption): java.nio.file.attribute.FileAttributeView;
            }
        }
    }
}
