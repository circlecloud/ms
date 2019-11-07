// @ts-nocheck
declare namespace java {
    namespace nio {
        namespace file {
            namespace spi {
                // @ts-ignore
                abstract class FileSystemProvider extends java.lang.Object {
                    /**
                     * Initializes a new instance of this class.
                     * <p> During construction a provider may safely access files associated
                     * with the default provider but care needs to be taken to avoid circular
                     * loading of other installed providers. If circular loading of installed
                     * providers is detected then an unspecified error is thrown.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Returns a list of the installed file system providers.
                     * <p> The first invocation of this method causes the default provider to be
                     * initialized (if not already initialized) and loads any other installed
                     * providers as described by the {@link FileSystems} class.
                     */
                    // @ts-ignore
                    public static installedProviders(): java.util.List;
                    /**
                     * Returns the URI scheme that identifies this provider.
                     */
                    // @ts-ignore
                    public abstract getScheme(): string;
                    /**
                     * Constructs a new {@code FileSystem} object identified by a URI. This
                     * method is invoked by the {@link FileSystems#newFileSystem(URI,Map)}
                     * method to open a new file system identified by a URI.
                     * <p> The {@code uri} parameter is an absolute, hierarchical URI, with a
                     * scheme equal (without regard to case) to the scheme supported by this
                     * provider. The exact form of the URI is highly provider dependent. The
                     * {@code env} parameter is a map of provider specific properties to configure
                     * the file system.
                     * <p> This method throws {@link FileSystemAlreadyExistsException} if the
                     * file system already exists because it was previously created by an
                     * invocation of this method. Once a file system is {@link
                     * java.nio.file.FileSystem#close closed} it is provider-dependent if the
                     * provider allows a new file system to be created with the same URI as a
                     * file system it previously created.
                     */
                    // @ts-ignore
                    public abstract newFileSystem(uri: java.net.URI, env: java.util.Map): java.nio.file.FileSystem;
                    /**
                     * Returns an existing {@code FileSystem} created by this provider.
                     * <p> This method returns a reference to a {@code FileSystem} that was
                     * created by invoking the {@link #newFileSystem(URI,Map) newFileSystem(URI,Map)}
                     * method. File systems created the {@link #newFileSystem(Path,Map)
                     * newFileSystem(Path,Map)} method are not returned by this method.
                     * The file system is identified by its {@code URI}. Its exact form
                     * is highly provider dependent. In the case of the default provider the URI's
                     * path component is {@code "/"} and the authority, query and fragment components
                     * are undefined (Undefined components are represented by {@code null}).
                     * <p> Once a file system created by this provider is {@link
                     * java.nio.file.FileSystem#close closed} it is provider-dependent if this
                     * method returns a reference to the closed file system or throws {@link
                     * FileSystemNotFoundException}. If the provider allows a new file system to
                     * be created with the same URI as a file system it previously created then
                     * this method throws the exception if invoked after the file system is
                     * closed (and before a new instance is created by the {@link #newFileSystem
                     * newFileSystem} method).
                     * <p> If a security manager is installed then a provider implementation
                     * may require to check a permission before returning a reference to an
                     * existing file system. In the case of the {@link FileSystems#getDefault
                     * default} file system, no permission check is required.
                     */
                    // @ts-ignore
                    public abstract getFileSystem(uri: java.net.URI): java.nio.file.FileSystem;
                    /**
                     * Return a {@code Path} object by converting the given {@link URI}. The
                     * resulting {@code Path} is associated with a {@link FileSystem} that
                     * already exists or is constructed automatically.
                     * <p> The exact form of the URI is file system provider dependent. In the
                     * case of the default provider, the URI scheme is {@code "file"} and the
                     * given URI has a non-empty path component, and undefined query, and
                     * fragment components. The resulting {@code Path} is associated with the
                     * default {@link FileSystems#getDefault default} {@code FileSystem}.
                     * <p> If a security manager is installed then a provider implementation
                     * may require to check a permission. In the case of the {@link
                     * FileSystems#getDefault default} file system, no permission check is
                     * required.
                     */
                    // @ts-ignore
                    public abstract getPath(uri: java.net.URI): java.nio.file.Path;
                    /**
                     * Constructs a new {@code FileSystem} to access the contents of a file as a
                     * file system.
                     * <p> This method is intended for specialized providers of pseudo file
                     * systems where the contents of one or more files is treated as a file
                     * system. The {@code env} parameter is a map of provider specific properties
                     * to configure the file system.
                     * <p> If this provider does not support the creation of such file systems
                     * or if the provider does not recognize the file type of the given file then
                     * it throws {@code UnsupportedOperationException}. The default implementation
                     * of this method throws {@code UnsupportedOperationException}.
                     */
                    // @ts-ignore
                    public newFileSystem(path: java.nio.file.Path, env: java.util.Map): java.nio.file.FileSystem;
                    /**
                     * Opens a file, returning an input stream to read from the file. This
                     * method works in exactly the manner specified by the {@link
                     * Files#newInputStream} method.
                     * <p> The default implementation of this method opens a channel to the file
                     * as if by invoking the {@link #newByteChannel} method and constructs a
                     * stream that reads bytes from the channel. This method should be overridden
                     * where appropriate.
                     */
                    // @ts-ignore
                    public newInputStream(path: java.nio.file.Path, options: java.nio.file.OpenOption): java.io.InputStream;
                    /**
                     * Opens or creates a file, returning an output stream that may be used to
                     * write bytes to the file. This method works in exactly the manner
                     * specified by the {@link Files#newOutputStream} method.
                     * <p> The default implementation of this method opens a channel to the file
                     * as if by invoking the {@link #newByteChannel} method and constructs a
                     * stream that writes bytes to the channel. This method should be overridden
                     * where appropriate.
                     */
                    // @ts-ignore
                    public newOutputStream(path: java.nio.file.Path, options: java.nio.file.OpenOption): java.io.OutputStream;
                    /**
                     * Opens or creates a file for reading and/or writing, returning a file
                     * channel to access the file. This method works in exactly the manner
                     * specified by the {@link FileChannel#open(Path,Set,FileAttribute[])
                     * FileChannel.open} method. A provider that does not support all the
                     * features required to construct a file channel throws {@code
                     * UnsupportedOperationException}. The default provider is required to
                     * support the creation of file channels. When not overridden, the default
                     * implementation throws {@code UnsupportedOperationException}.
                     */
                    // @ts-ignore
                    public newFileChannel(path: java.nio.file.Path, options: java.util.Set, attrs: java.nio.file.attribute.FileAttribute): java.nio.channels.FileChannel;
                    /**
                     * Opens or creates a file for reading and/or writing, returning an
                     * asynchronous file channel to access the file. This method works in
                     * exactly the manner specified by the {@link
                     * AsynchronousFileChannel#open(Path,Set,ExecutorService,FileAttribute[])
                     * AsynchronousFileChannel.open} method.
                     * A provider that does not support all the features required to construct
                     * an asynchronous file channel throws {@code UnsupportedOperationException}.
                     * The default provider is required to support the creation of asynchronous
                     * file channels. When not overridden, the default implementation of this
                     * method throws {@code UnsupportedOperationException}.
                     */
                    // @ts-ignore
                    public newAsynchronousFileChannel(path: java.nio.file.Path, options: java.util.Set, executor: java.util.concurrent.ExecutorService, attrs: java.nio.file.attribute.FileAttribute): java.nio.channels.AsynchronousFileChannel;
                    /**
                     * Opens or creates a file, returning a seekable byte channel to access the
                     * file. This method works in exactly the manner specified by the {@link
                     * Files#newByteChannel(Path,Set,FileAttribute[])} method.
                     */
                    // @ts-ignore
                    public abstract newByteChannel(path: java.nio.file.Path, options: java.util.Set, attrs: java.nio.file.attribute.FileAttribute): java.nio.channels.SeekableByteChannel;
                    /**
                     * Opens a directory, returning a {@code DirectoryStream} to iterate over
                     * the entries in the directory. This method works in exactly the manner
                     * specified by the {@link
                     * Files#newDirectoryStream(java.nio.file.Path, java.nio.file.DirectoryStream.Filter)}
                     * method.
                     */
                    // @ts-ignore
                    public abstract newDirectoryStream(dir: java.nio.file.Path, filter: java.nio.file.DirectoryStream.Filter): java.nio.file.DirectoryStream;
                    /**
                     * Creates a new directory. This method works in exactly the manner
                     * specified by the {@link Files#createDirectory} method.
                     */
                    // @ts-ignore
                    public abstract createDirectory(dir: java.nio.file.Path, attrs: java.nio.file.attribute.FileAttribute): void;
                    /**
                     * Creates a symbolic link to a target. This method works in exactly the
                     * manner specified by the {@link Files#createSymbolicLink} method.
                     * <p> The default implementation of this method throws {@code
                     * UnsupportedOperationException}.
                     */
                    // @ts-ignore
                    public createSymbolicLink(link: java.nio.file.Path, target: java.nio.file.Path, attrs: java.nio.file.attribute.FileAttribute): void;
                    /**
                     * Creates a new link (directory entry) for an existing file. This method
                     * works in exactly the manner specified by the {@link Files#createLink}
                     * method.
                     * <p> The default implementation of this method throws {@code
                     * UnsupportedOperationException}.
                     */
                    // @ts-ignore
                    public createLink(link: java.nio.file.Path, existing: java.nio.file.Path): void;
                    /**
                     * Deletes a file. This method works in exactly the  manner specified by the
                     * {@link Files#delete} method.
                     */
                    // @ts-ignore
                    public abstract delete(path: java.nio.file.Path): void;
                    /**
                     * Deletes a file if it exists. This method works in exactly the manner
                     * specified by the {@link Files#deleteIfExists} method.
                     * <p> The default implementation of this method simply invokes {@link
                     * #delete} ignoring the {@code NoSuchFileException} when the file does not
                     * exist. It may be overridden where appropriate.
                     */
                    // @ts-ignore
                    public deleteIfExists(path: java.nio.file.Path): boolean;
                    /**
                     * Reads the target of a symbolic link. This method works in exactly the
                     * manner specified by the {@link Files#readSymbolicLink} method.
                     * <p> The default implementation of this method throws {@code
                     * UnsupportedOperationException}.
                     */
                    // @ts-ignore
                    public readSymbolicLink(link: java.nio.file.Path): java.nio.file.Path;
                    /**
                     * Copy a file to a target file. This method works in exactly the manner
                     * specified by the {@link Files#copy(Path,Path,CopyOption[])} method
                     * except that both the source and target paths must be associated with
                     * this provider.
                     */
                    // @ts-ignore
                    public abstract copy(source: java.nio.file.Path, target: java.nio.file.Path, options: java.nio.file.CopyOption): void;
                    /**
                     * Move or rename a file to a target file. This method works in exactly the
                     * manner specified by the {@link Files#move} method except that both the
                     * source and target paths must be associated with this provider.
                     */
                    // @ts-ignore
                    public abstract move(source: java.nio.file.Path, target: java.nio.file.Path, options: java.nio.file.CopyOption): void;
                    /**
                     * Tests if two paths locate the same file. This method works in exactly the
                     * manner specified by the {@link Files#isSameFile} method.
                     */
                    // @ts-ignore
                    public abstract isSameFile(path: java.nio.file.Path, path2: java.nio.file.Path): boolean;
                    /**
                     * Tells whether or not a file is considered <em>hidden</em>. This method
                     * works in exactly the manner specified by the {@link Files#isHidden}
                     * method.
                     * <p> This method is invoked by the {@link Files#isHidden isHidden} method.
                     */
                    // @ts-ignore
                    public abstract isHidden(path: java.nio.file.Path): boolean;
                    /**
                     * Returns the {@link FileStore} representing the file store where a file
                     * is located. This method works in exactly the manner specified by the
                     * {@link Files#getFileStore} method.
                     */
                    // @ts-ignore
                    public abstract getFileStore(path: java.nio.file.Path): java.nio.file.FileStore;
                    /**
                     * Checks the existence, and optionally the accessibility, of a file.
                     * <p> This method may be used by the {@link Files#isReadable isReadable},
                     * {@link Files#isWritable isWritable} and {@link Files#isExecutable
                     * isExecutable} methods to check the accessibility of a file.
                     * <p> This method checks the existence of a file and that this Java virtual
                     * machine has appropriate privileges that would allow it access the file
                     * according to all of access modes specified in the {@code modes} parameter
                     * as follows:
                     * <table border=1 cellpadding=5 summary="">
                     * <tr> <th>Value</th> <th>Description</th> </tr>
                     * <tr>
                     * <td> {@link AccessMode#READ READ} </td>
                     * <td> Checks that the file exists and that the Java virtual machine has
                     * permission to read the file. </td>
                     * </tr>
                     * <tr>
                     * <td> {@link AccessMode#WRITE WRITE} </td>
                     * <td> Checks that the file exists and that the Java virtual machine has
                     * permission to write to the file, </td>
                     * </tr>
                     * <tr>
                     * <td> {@link AccessMode#EXECUTE EXECUTE} </td>
                     * <td> Checks that the file exists and that the Java virtual machine has
                     * permission to {@link Runtime#exec execute} the file. The semantics
                     * may differ when checking access to a directory. For example, on UNIX
                     * systems, checking for {@code EXECUTE} access checks that the Java
                     * virtual machine has permission to search the directory in order to
                     * access file or subdirectories. </td>
                     * </tr>
                     * </table>
                     * <p> If the {@code modes} parameter is of length zero, then the existence
                     * of the file is checked.
                     * <p> This method follows symbolic links if the file referenced by this
                     * object is a symbolic link. Depending on the implementation, this method
                     * may require to read file permissions, access control lists, or other
                     * file attributes in order to check the effective access to the file. To
                     * determine the effective access to a file may require access to several
                     * attributes and so in some implementations this method may not be atomic
                     * with respect to other file system operations.
                     */
                    // @ts-ignore
                    public abstract checkAccess(path: java.nio.file.Path, modes: java.nio.file.AccessMode): void;
                    /**
                     * Returns a file attribute view of a given type. This method works in
                     * exactly the manner specified by the {@link Files#getFileAttributeView}
                     * method.
                     */
                    // @ts-ignore
                    public abstract getFileAttributeView(path: java.nio.file.Path, type: java.lang.Class, options: java.nio.file.LinkOption): java.nio.file.attribute.FileAttributeView;
                    /**
                     * Reads a file's attributes as a bulk operation. This method works in
                     * exactly the manner specified by the {@link
                     * Files#readAttributes(Path,Class,LinkOption[])} method.
                     */
                    // @ts-ignore
                    public abstract readAttributes(path: java.nio.file.Path, type: java.lang.Class, options: java.nio.file.LinkOption): java.nio.file.attribute.BasicFileAttributes;
                    /**
                     * Sets the value of a file attribute. This method works in exactly the
                     * manner specified by the {@link Files#setAttribute} method.
                     */
                    // @ts-ignore
                    public abstract setAttribute(path: java.nio.file.Path, attribute: string, value: java.lang.Object, options: java.nio.file.LinkOption): void;
                }
            }
        }
    }
}
