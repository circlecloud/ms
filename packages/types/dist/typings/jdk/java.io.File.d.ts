// @ts-nocheck
declare namespace java {
    namespace io {
        // @ts-ignore
         class File extends java.lang.Object {
            /**
             * Creates a new <code>File</code> instance by converting the given
             * pathname string into an abstract pathname.  If the given string is
             * the empty string, then the result is the empty abstract pathname.
             */
            // @ts-ignore
            constructor(pathname: string)
            /**
             * Creates a new <code>File</code> instance from a parent pathname string
             * and a child pathname string.
             * <p> If <code>parent</code> is <code>null</code> then the new
             * <code>File</code> instance is created as if by invoking the
             * single-argument <code>File</code> constructor on the given
             * <code>child</code> pathname string.
             * <p> Otherwise the <code>parent</code> pathname string is taken to denote
             * a directory, and the <code>child</code> pathname string is taken to
             * denote either a directory or a file.  If the <code>child</code> pathname
             * string is absolute then it is converted into a relative pathname in a
             * system-dependent way.  If <code>parent</code> is the empty string then
             * the new <code>File</code> instance is created by converting
             * <code>child</code> into an abstract pathname and resolving the result
             * against a system-dependent default directory.  Otherwise each pathname
             * string is converted into an abstract pathname and the child abstract
             * pathname is resolved against the parent.
             */
            // @ts-ignore
            constructor(parent: string, child: string)
            /**
             * Creates a new <code>File</code> instance from a parent abstract
             * pathname and a child pathname string.
             * <p> If <code>parent</code> is <code>null</code> then the new
             * <code>File</code> instance is created as if by invoking the
             * single-argument <code>File</code> constructor on the given
             * <code>child</code> pathname string.
             * <p> Otherwise the <code>parent</code> abstract pathname is taken to
             * denote a directory, and the <code>child</code> pathname string is taken
             * to denote either a directory or a file.  If the <code>child</code>
             * pathname string is absolute then it is converted into a relative
             * pathname in a system-dependent way.  If <code>parent</code> is the empty
             * abstract pathname then the new <code>File</code> instance is created by
             * converting <code>child</code> into an abstract pathname and resolving
             * the result against a system-dependent default directory.  Otherwise each
             * pathname string is converted into an abstract pathname and the child
             * abstract pathname is resolved against the parent.
             */
            // @ts-ignore
            constructor(parent: java.io.File, child: string)
            /**
             * Creates a new <tt>File</tt> instance by converting the given
             * <tt>file:</tt> URI into an abstract pathname.
             * <p> The exact form of a <tt>file:</tt> URI is system-dependent, hence
             * the transformation performed by this constructor is also
             * system-dependent.
             * <p> For a given abstract pathname <i>f</i> it is guaranteed that
             * <blockquote><tt>
             * new File(</tt><i>&nbsp;f</i><tt>.{@link #toURI() toURI}()).equals(</tt><i>&nbsp;f</i><tt>.{@link #getAbsoluteFile() getAbsoluteFile}())
             * </tt></blockquote>
             * so long as the original abstract pathname, the URI, and the new abstract
             * pathname are all created in (possibly different invocations of) the same
             * Java virtual machine.  This relationship typically does not hold,
             * however, when a <tt>file:</tt> URI that is created in a virtual machine
             * on one operating system is converted into an abstract pathname in a
             * virtual machine on a different operating system.
             */
            // @ts-ignore
            constructor(uri: java.net.URI)
            // @ts-ignore
            public static separatorChar: string;
            // @ts-ignore
            public static separator: string;
            // @ts-ignore
            public static pathSeparatorChar: string;
            // @ts-ignore
            public static pathSeparator: string;
            /**
             * Returns the name of the file or directory denoted by this abstract
             * pathname.  This is just the last name in the pathname's name
             * sequence.  If the pathname's name sequence is empty, then the empty
             * string is returned.
             */
            // @ts-ignore
            public getName(): string;
            /**
             * Returns the pathname string of this abstract pathname's parent, or
             * <code>null</code> if this pathname does not name a parent directory.
             * <p> The <em>parent</em> of an abstract pathname consists of the
             * pathname's prefix, if any, and each name in the pathname's name
             * sequence except for the last.  If the name sequence is empty then
             * the pathname does not name a parent directory.
             */
            // @ts-ignore
            public getParent(): string;
            /**
             * Returns the abstract pathname of this abstract pathname's parent,
             * or <code>null</code> if this pathname does not name a parent
             * directory.
             * <p> The <em>parent</em> of an abstract pathname consists of the
             * pathname's prefix, if any, and each name in the pathname's name
             * sequence except for the last.  If the name sequence is empty then
             * the pathname does not name a parent directory.
             */
            // @ts-ignore
            public getParentFile(): java.io.File;
            /**
             * Converts this abstract pathname into a pathname string.  The resulting
             * string uses the {@link #separator default name-separator character} to
             * separate the names in the name sequence.
             */
            // @ts-ignore
            public getPath(): string;
            /**
             * Tests whether this abstract pathname is absolute.  The definition of
             * absolute pathname is system dependent.  On UNIX systems, a pathname is
             * absolute if its prefix is <code>"/"</code>.  On Microsoft Windows systems, a
             * pathname is absolute if its prefix is a drive specifier followed by
             * <code>"\\"</code>, or if its prefix is <code>"\\\\"</code>.
             */
            // @ts-ignore
            public isAbsolute(): boolean;
            /**
             * Returns the absolute pathname string of this abstract pathname.
             * <p> If this abstract pathname is already absolute, then the pathname
             * string is simply returned as if by the <code>{@link #getPath}</code>
             * method.  If this abstract pathname is the empty abstract pathname then
             * the pathname string of the current user directory, which is named by the
             * system property <code>user.dir</code>, is returned.  Otherwise this
             * pathname is resolved in a system-dependent way.  On UNIX systems, a
             * relative pathname is made absolute by resolving it against the current
             * user directory.  On Microsoft Windows systems, a relative pathname is made absolute
             * by resolving it against the current directory of the drive named by the
             * pathname, if any; if not, it is resolved against the current user
             * directory.
             */
            // @ts-ignore
            public getAbsolutePath(): string;
            /**
             * Returns the absolute form of this abstract pathname.  Equivalent to
             * <code>new&nbsp;File(this.{@link #getAbsolutePath})</code>.
             */
            // @ts-ignore
            public getAbsoluteFile(): java.io.File;
            /**
             * Returns the canonical pathname string of this abstract pathname.
             * <p> A canonical pathname is both absolute and unique.  The precise
             * definition of canonical form is system-dependent.  This method first
             * converts this pathname to absolute form if necessary, as if by invoking the
             * {@link #getAbsolutePath} method, and then maps it to its unique form in a
             * system-dependent way.  This typically involves removing redundant names
             * such as <tt>"."</tt> and <tt>".."</tt> from the pathname, resolving
             * symbolic links (on UNIX platforms), and converting drive letters to a
             * standard case (on Microsoft Windows platforms).
             * <p> Every pathname that denotes an existing file or directory has a
             * unique canonical form.  Every pathname that denotes a nonexistent file
             * or directory also has a unique canonical form.  The canonical form of
             * the pathname of a nonexistent file or directory may be different from
             * the canonical form of the same pathname after the file or directory is
             * created.  Similarly, the canonical form of the pathname of an existing
             * file or directory may be different from the canonical form of the same
             * pathname after the file or directory is deleted.
             */
            // @ts-ignore
            public getCanonicalPath(): string;
            /**
             * Returns the canonical form of this abstract pathname.  Equivalent to
             * <code>new&nbsp;File(this.{@link #getCanonicalPath})</code>.
             */
            // @ts-ignore
            public getCanonicalFile(): java.io.File;
            /**
             * Converts this abstract pathname into a <code>file:</code> URL.  The
             * exact form of the URL is system-dependent.  If it can be determined that
             * the file denoted by this abstract pathname is a directory, then the
             * resulting URL will end with a slash.
             */
            // @ts-ignore
            public toURL(): java.net.URL;
            /**
             * Constructs a <tt>file:</tt> URI that represents this abstract pathname.
             * <p> The exact form of the URI is system-dependent.  If it can be
             * determined that the file denoted by this abstract pathname is a
             * directory, then the resulting URI will end with a slash.
             * <p> For a given abstract pathname <i>f</i>, it is guaranteed that
             * <blockquote><tt>
             * new {@link #File(java.net.URI) File}(</tt><i>&nbsp;f</i><tt>.toURI()).equals(</tt><i>&nbsp;f</i><tt>.{@link #getAbsoluteFile() getAbsoluteFile}())
             * </tt></blockquote>
             * so long as the original abstract pathname, the URI, and the new abstract
             * pathname are all created in (possibly different invocations of) the same
             * Java virtual machine.  Due to the system-dependent nature of abstract
             * pathnames, however, this relationship typically does not hold when a
             * <tt>file:</tt> URI that is created in a virtual machine on one operating
             * system is converted into an abstract pathname in a virtual machine on a
             * different operating system.
             * <p> Note that when this abstract pathname represents a UNC pathname then
             * all components of the UNC (including the server name component) are encoded
             * in the {@code URI} path. The authority component is undefined, meaning
             * that it is represented as {@code null}. The {@link Path} class defines the
             * {@link Path#toUri toUri} method to encode the server name in the authority
             * component of the resulting {@code URI}. The {@link #toPath toPath} method
             * may be used to obtain a {@code Path} representing this abstract pathname.
             */
            // @ts-ignore
            public toURI(): java.net.URI;
            /**
             * Tests whether the application can read the file denoted by this
             * abstract pathname. On some platforms it may be possible to start the
             * Java virtual machine with special privileges that allow it to read
             * files that are marked as unreadable. Consequently this method may return
             * {@code true} even though the file does not have read permissions.
             */
            // @ts-ignore
            public canRead(): boolean;
            /**
             * Tests whether the application can modify the file denoted by this
             * abstract pathname. On some platforms it may be possible to start the
             * Java virtual machine with special privileges that allow it to modify
             * files that are marked read-only. Consequently this method may return
             * {@code true} even though the file is marked read-only.
             */
            // @ts-ignore
            public canWrite(): boolean;
            /**
             * Tests whether the file or directory denoted by this abstract pathname
             * exists.
             */
            // @ts-ignore
            public exists(): boolean;
            /**
             * Tests whether the file denoted by this abstract pathname is a
             * directory.
             * <p> Where it is required to distinguish an I/O exception from the case
             * that the file is not a directory, or where several attributes of the
             * same file are required at the same time, then the {@link
             * java.nio.file.Files#readAttributes(Path,Class,LinkOption[])
             * Files.readAttributes} method may be used.
             */
            // @ts-ignore
            public isDirectory(): boolean;
            /**
             * Tests whether the file denoted by this abstract pathname is a normal
             * file.  A file is <em>normal</em> if it is not a directory and, in
             * addition, satisfies other system-dependent criteria.  Any non-directory
             * file created by a Java application is guaranteed to be a normal file.
             * <p> Where it is required to distinguish an I/O exception from the case
             * that the file is not a normal file, or where several attributes of the
             * same file are required at the same time, then the {@link
             * java.nio.file.Files#readAttributes(Path,Class,LinkOption[])
             * Files.readAttributes} method may be used.
             */
            // @ts-ignore
            public isFile(): boolean;
            /**
             * Tests whether the file named by this abstract pathname is a hidden
             * file.  The exact definition of <em>hidden</em> is system-dependent.  On
             * UNIX systems, a file is considered to be hidden if its name begins with
             * a period character (<code>'.'</code>).  On Microsoft Windows systems, a file is
             * considered to be hidden if it has been marked as such in the filesystem.
             */
            // @ts-ignore
            public isHidden(): boolean;
            /**
             * Returns the time that the file denoted by this abstract pathname was
             * last modified.
             * <p> Where it is required to distinguish an I/O exception from the case
             * where {@code 0L} is returned, or where several attributes of the
             * same file are required at the same time, or where the time of last
             * access or the creation time are required, then the {@link
             * java.nio.file.Files#readAttributes(Path,Class,LinkOption[])
             * Files.readAttributes} method may be used.
             */
            // @ts-ignore
            public lastModified(): number;
            /**
             * Returns the length of the file denoted by this abstract pathname.
             * The return value is unspecified if this pathname denotes a directory.
             * <p> Where it is required to distinguish an I/O exception from the case
             * that {@code 0L} is returned, or where several attributes of the same file
             * are required at the same time, then the {@link
             * java.nio.file.Files#readAttributes(Path,Class,LinkOption[])
             * Files.readAttributes} method may be used.
             */
            // @ts-ignore
            public length(): number;
            /**
             * Atomically creates a new, empty file named by this abstract pathname if
             * and only if a file with this name does not yet exist.  The check for the
             * existence of the file and the creation of the file if it does not exist
             * are a single operation that is atomic with respect to all other
             * filesystem activities that might affect the file.
             * <P>
             * Note: this method should <i>not</i> be used for file-locking, as
             * the resulting protocol cannot be made to work reliably. The
             * {@link java.nio.channels.FileLock FileLock}
             * facility should be used instead.
             */
            // @ts-ignore
            public createNewFile(): boolean;
            /**
             * Deletes the file or directory denoted by this abstract pathname.  If
             * this pathname denotes a directory, then the directory must be empty in
             * order to be deleted.
             * <p> Note that the {@link java.nio.file.Files} class defines the {@link
             * java.nio.file.Files#delete(Path) delete} method to throw an {@link IOException}
             * when a file cannot be deleted. This is useful for error reporting and to
             * diagnose why a file cannot be deleted.
             */
            // @ts-ignore
            public delete(): boolean;
            /**
             * Requests that the file or directory denoted by this abstract
             * pathname be deleted when the virtual machine terminates.
             * Files (or directories) are deleted in the reverse order that
             * they are registered. Invoking this method to delete a file or
             * directory that is already registered for deletion has no effect.
             * Deletion will be attempted only for normal termination of the
             * virtual machine, as defined by the Java Language Specification.
             * <p> Once deletion has been requested, it is not possible to cancel the
             * request.  This method should therefore be used with care.
             * <P>
             * Note: this method should <i>not</i> be used for file-locking, as
             * the resulting protocol cannot be made to work reliably. The
             * {@link java.nio.channels.FileLock FileLock}
             * facility should be used instead.
             */
            // @ts-ignore
            public deleteOnExit(): void;
            /**
             * Returns an array of strings naming the files and directories in the
             * directory denoted by this abstract pathname.
             * <p> If this abstract pathname does not denote a directory, then this
             * method returns {@code null}.  Otherwise an array of strings is
             * returned, one for each file or directory in the directory.  Names
             * denoting the directory itself and the directory's parent directory are
             * not included in the result.  Each string is a file name rather than a
             * complete path.
             * <p> There is no guarantee that the name strings in the resulting array
             * will appear in any specific order; they are not, in particular,
             * guaranteed to appear in alphabetical order.
             * <p> Note that the {@link java.nio.file.Files} class defines the {@link
             * java.nio.file.Files#newDirectoryStream(Path) newDirectoryStream} method to
             * open a directory and iterate over the names of the files in the directory.
             * This may use less resources when working with very large directories, and
             * may be more responsive when working with remote directories.
             */
            // @ts-ignore
            public list(): java.lang.String[];
            /**
             * Returns an array of strings naming the files and directories in the
             * directory denoted by this abstract pathname that satisfy the specified
             * filter.  The behavior of this method is the same as that of the
             * {@link #list()} method, except that the strings in the returned array
             * must satisfy the filter.  If the given {@code filter} is {@code null}
             * then all names are accepted.  Otherwise, a name satisfies the filter if
             * and only if the value {@code true} results when the {@link
             * FilenameFilter#accept FilenameFilter.accept(File,&nbsp;String)} method
             * of the filter is invoked on this abstract pathname and the name of a
             * file or directory in the directory that it denotes.
             */
            // @ts-ignore
            public list(filter: java.io.FilenameFilter): java.lang.String[];
            /**
             * Returns an array of abstract pathnames denoting the files in the
             * directory denoted by this abstract pathname.
             * <p> If this abstract pathname does not denote a directory, then this
             * method returns {@code null}.  Otherwise an array of {@code File} objects
             * is returned, one for each file or directory in the directory.  Pathnames
             * denoting the directory itself and the directory's parent directory are
             * not included in the result.  Each resulting abstract pathname is
             * constructed from this abstract pathname using the {@link #File(File,
             * String) File(File,&nbsp;String)} constructor.  Therefore if this
             * pathname is absolute then each resulting pathname is absolute; if this
             * pathname is relative then each resulting pathname will be relative to
             * the same directory.
             * <p> There is no guarantee that the name strings in the resulting array
             * will appear in any specific order; they are not, in particular,
             * guaranteed to appear in alphabetical order.
             * <p> Note that the {@link java.nio.file.Files} class defines the {@link
             * java.nio.file.Files#newDirectoryStream(Path) newDirectoryStream} method
             * to open a directory and iterate over the names of the files in the
             * directory. This may use less resources when working with very large
             * directories.
             */
            // @ts-ignore
            public listFiles(): java.io.File[];
            /**
             * Returns an array of abstract pathnames denoting the files and
             * directories in the directory denoted by this abstract pathname that
             * satisfy the specified filter.  The behavior of this method is the same
             * as that of the {@link #listFiles()} method, except that the pathnames in
             * the returned array must satisfy the filter.  If the given {@code filter}
             * is {@code null} then all pathnames are accepted.  Otherwise, a pathname
             * satisfies the filter if and only if the value {@code true} results when
             * the {@link FilenameFilter#accept
             * FilenameFilter.accept(File,&nbsp;String)} method of the filter is
             * invoked on this abstract pathname and the name of a file or directory in
             * the directory that it denotes.
             */
            // @ts-ignore
            public listFiles(filter: java.io.FilenameFilter): java.io.File[];
            /**
             * Returns an array of abstract pathnames denoting the files and
             * directories in the directory denoted by this abstract pathname that
             * satisfy the specified filter.  The behavior of this method is the same
             * as that of the {@link #listFiles()} method, except that the pathnames in
             * the returned array must satisfy the filter.  If the given {@code filter}
             * is {@code null} then all pathnames are accepted.  Otherwise, a pathname
             * satisfies the filter if and only if the value {@code true} results when
             * the {@link FileFilter#accept FileFilter.accept(File)} method of the
             * filter is invoked on the pathname.
             */
            // @ts-ignore
            public listFiles(filter: java.io.FileFilter): java.io.File[];
            /**
             * Creates the directory named by this abstract pathname.
             */
            // @ts-ignore
            public mkdir(): boolean;
            /**
             * Creates the directory named by this abstract pathname, including any
             * necessary but nonexistent parent directories.  Note that if this
             * operation fails it may have succeeded in creating some of the necessary
             * parent directories.
             */
            // @ts-ignore
            public mkdirs(): boolean;
            /**
             * Renames the file denoted by this abstract pathname.
             * <p> Many aspects of the behavior of this method are inherently
             * platform-dependent: The rename operation might not be able to move a
             * file from one filesystem to another, it might not be atomic, and it
             * might not succeed if a file with the destination abstract pathname
             * already exists.  The return value should always be checked to make sure
             * that the rename operation was successful.
             * <p> Note that the {@link java.nio.file.Files} class defines the {@link
             * java.nio.file.Files#move move} method to move or rename a file in a
             * platform independent manner.
             */
            // @ts-ignore
            public renameTo(dest: java.io.File): boolean;
            /**
             * Sets the last-modified time of the file or directory named by this
             * abstract pathname.
             * <p> All platforms support file-modification times to the nearest second,
             * but some provide more precision.  The argument will be truncated to fit
             * the supported precision.  If the operation succeeds and no intervening
             * operations on the file take place, then the next invocation of the
             * <code>{@link #lastModified}</code> method will return the (possibly
             * truncated) <code>time</code> argument that was passed to this method.
             */
            // @ts-ignore
            public setLastModified(time: number): boolean;
            /**
             * Marks the file or directory named by this abstract pathname so that
             * only read operations are allowed. After invoking this method the file
             * or directory will not change until it is either deleted or marked
             * to allow write access. On some platforms it may be possible to start the
             * Java virtual machine with special privileges that allow it to modify
             * files that are marked read-only. Whether or not a read-only file or
             * directory may be deleted depends upon the underlying system.
             */
            // @ts-ignore
            public setReadOnly(): boolean;
            /**
             * Sets the owner's or everybody's write permission for this abstract
             * pathname. On some platforms it may be possible to start the Java virtual
             * machine with special privileges that allow it to modify files that
             * disallow write operations.
             * <p> The {@link java.nio.file.Files} class defines methods that operate on
             * file attributes including file permissions. This may be used when finer
             * manipulation of file permissions is required.
             */
            // @ts-ignore
            public setWritable(writable: boolean, ownerOnly: boolean): boolean;
            /**
             * A convenience method to set the owner's write permission for this abstract
             * pathname. On some platforms it may be possible to start the Java virtual
             * machine with special privileges that allow it to modify files that
             * disallow write operations.
             * <p> An invocation of this method of the form <tt>file.setWritable(arg)</tt>
             * behaves in exactly the same way as the invocation
             * <pre>
             * file.setWritable(arg, true) </pre>
             */
            // @ts-ignore
            public setWritable(writable: boolean): boolean;
            /**
             * Sets the owner's or everybody's read permission for this abstract
             * pathname. On some platforms it may be possible to start the Java virtual
             * machine with special privileges that allow it to read files that are
             * marked as unreadable.
             * <p> The {@link java.nio.file.Files} class defines methods that operate on
             * file attributes including file permissions. This may be used when finer
             * manipulation of file permissions is required.
             */
            // @ts-ignore
            public setReadable(readable: boolean, ownerOnly: boolean): boolean;
            /**
             * A convenience method to set the owner's read permission for this abstract
             * pathname. On some platforms it may be possible to start the Java virtual
             * machine with special privileges that allow it to read files that that are
             * marked as unreadable.
             * <p>An invocation of this method of the form <tt>file.setReadable(arg)</tt>
             * behaves in exactly the same way as the invocation
             * <pre>
             * file.setReadable(arg, true) </pre>
             */
            // @ts-ignore
            public setReadable(readable: boolean): boolean;
            /**
             * Sets the owner's or everybody's execute permission for this abstract
             * pathname. On some platforms it may be possible to start the Java virtual
             * machine with special privileges that allow it to execute files that are
             * not marked executable.
             * <p> The {@link java.nio.file.Files} class defines methods that operate on
             * file attributes including file permissions. This may be used when finer
             * manipulation of file permissions is required.
             */
            // @ts-ignore
            public setExecutable(executable: boolean, ownerOnly: boolean): boolean;
            /**
             * A convenience method to set the owner's execute permission for this
             * abstract pathname. On some platforms it may be possible to start the Java
             * virtual machine with special privileges that allow it to execute files
             * that are not marked executable.
             * <p>An invocation of this method of the form <tt>file.setExcutable(arg)</tt>
             * behaves in exactly the same way as the invocation
             * <pre>
             * file.setExecutable(arg, true) </pre>
             */
            // @ts-ignore
            public setExecutable(executable: boolean): boolean;
            /**
             * Tests whether the application can execute the file denoted by this
             * abstract pathname. On some platforms it may be possible to start the
             * Java virtual machine with special privileges that allow it to execute
             * files that are not marked executable. Consequently this method may return
             * {@code true} even though the file does not have execute permissions.
             */
            // @ts-ignore
            public canExecute(): boolean;
            /**
             * List the available filesystem roots.
             * <p> A particular Java platform may support zero or more
             * hierarchically-organized file systems.  Each file system has a
             * {@code root} directory from which all other files in that file system
             * can be reached.  Windows platforms, for example, have a root directory
             * for each active drive; UNIX platforms have a single root directory,
             * namely {@code "/"}.  The set of available filesystem roots is affected
             * by various system-level operations such as the insertion or ejection of
             * removable media and the disconnecting or unmounting of physical or
             * virtual disk drives.
             * <p> This method returns an array of {@code File} objects that denote the
             * root directories of the available filesystem roots.  It is guaranteed
             * that the canonical pathname of any file physically present on the local
             * machine will begin with one of the roots returned by this method.
             * <p> The canonical pathname of a file that resides on some other machine
             * and is accessed via a remote-filesystem protocol such as SMB or NFS may
             * or may not begin with one of the roots returned by this method.  If the
             * pathname of a remote file is syntactically indistinguishable from the
             * pathname of a local file then it will begin with one of the roots
             * returned by this method.  Thus, for example, {@code File} objects
             * denoting the root directories of the mapped network drives of a Windows
             * platform will be returned by this method, while {@code File} objects
             * containing UNC pathnames will not be returned by this method.
             * <p> Unlike most methods in this class, this method does not throw
             * security exceptions.  If a security manager exists and its {@link
             * SecurityManager#checkRead(String)} method denies read access to a
             * particular root directory, then that directory will not appear in the
             * result.
             */
            // @ts-ignore
            public static listRoots(): java.io.File[];
            /**
             * Returns the size of the partition <a href="#partName">named</a> by this
             * abstract pathname.
             */
            // @ts-ignore
            public getTotalSpace(): number;
            /**
             * Returns the number of unallocated bytes in the partition <a
             * href="#partName">named</a> by this abstract path name.
             * <p> The returned number of unallocated bytes is a hint, but not
             * a guarantee, that it is possible to use most or any of these
             * bytes.  The number of unallocated bytes is most likely to be
             * accurate immediately after this call.  It is likely to be made
             * inaccurate by any external I/O operations including those made
             * on the system outside of this virtual machine.  This method
             * makes no guarantee that write operations to this file system
             * will succeed.
             */
            // @ts-ignore
            public getFreeSpace(): number;
            /**
             * Returns the number of bytes available to this virtual machine on the
             * partition <a href="#partName">named</a> by this abstract pathname.  When
             * possible, this method checks for write permissions and other operating
             * system restrictions and will therefore usually provide a more accurate
             * estimate of how much new data can actually be written than {@link
             * #getFreeSpace}.
             * <p> The returned number of available bytes is a hint, but not a
             * guarantee, that it is possible to use most or any of these bytes.  The
             * number of unallocated bytes is most likely to be accurate immediately
             * after this call.  It is likely to be made inaccurate by any external
             * I/O operations including those made on the system outside of this
             * virtual machine.  This method makes no guarantee that write operations
             * to this file system will succeed.
             */
            // @ts-ignore
            public getUsableSpace(): number;
            /**
             * <p> Creates a new empty file in the specified directory, using the
             * given prefix and suffix strings to generate its name.  If this method
             * returns successfully then it is guaranteed that:
             * <ol>
             * <li> The file denoted by the returned abstract pathname did not exist
             * before this method was invoked, and
             * <li> Neither this method nor any of its variants will return the same
             * abstract pathname again in the current invocation of the virtual
             * machine.
             * </ol>
             * This method provides only part of a temporary-file facility.  To arrange
             * for a file created by this method to be deleted automatically, use the
             * <code>{@link #deleteOnExit}</code> method.
             * <p> The <code>prefix</code> argument must be at least three characters
             * long.  It is recommended that the prefix be a short, meaningful string
             * such as <code>"hjb"</code> or <code>"mail"</code>.  The
             * <code>suffix</code> argument may be <code>null</code>, in which case the
             * suffix <code>".tmp"</code> will be used.
             * <p> To create the new file, the prefix and the suffix may first be
             * adjusted to fit the limitations of the underlying platform.  If the
             * prefix is too long then it will be truncated, but its first three
             * characters will always be preserved.  If the suffix is too long then it
             * too will be truncated, but if it begins with a period character
             * (<code>'.'</code>) then the period and the first three characters
             * following it will always be preserved.  Once these adjustments have been
             * made the name of the new file will be generated by concatenating the
             * prefix, five or more internally-generated characters, and the suffix.
             * <p> If the <code>directory</code> argument is <code>null</code> then the
             * system-dependent default temporary-file directory will be used.  The
             * default temporary-file directory is specified by the system property
             * <code>java.io.tmpdir</code>.  On UNIX systems the default value of this
             * property is typically <code>"/tmp"</code> or <code>"/var/tmp"</code>; on
             * Microsoft Windows systems it is typically <code>"C:\\WINNT\\TEMP"</code>.  A different
             * value may be given to this system property when the Java virtual machine
             * is invoked, but programmatic changes to this property are not guaranteed
             * to have any effect upon the temporary directory used by this method.
             */
            // @ts-ignore
            public static createTempFile(prefix: string, suffix: string, directory: java.io.File): java.io.File;
            /**
             * Creates an empty file in the default temporary-file directory, using
             * the given prefix and suffix to generate its name. Invoking this method
             * is equivalent to invoking <code>{@link #createTempFile(java.lang.String,
             * java.lang.String, java.io.File)
             * createTempFile(prefix,&nbsp;suffix,&nbsp;null)}</code>.
             * <p> The {@link
             * java.nio.file.Files#createTempFile(String,String,java.nio.file.attribute.FileAttribute[])
             * Files.createTempFile} method provides an alternative method to create an
             * empty file in the temporary-file directory. Files created by that method
             * may have more restrictive access permissions to files created by this
             * method and so may be more suited to security-sensitive applications.
             */
            // @ts-ignore
            public static createTempFile(prefix: string, suffix: string): java.io.File;
            /**
             * Compares two abstract pathnames lexicographically.  The ordering
             * defined by this method depends upon the underlying system.  On UNIX
             * systems, alphabetic case is significant in comparing pathnames; on Microsoft Windows
             * systems it is not.
             */
            // @ts-ignore
            public compareTo(pathname: java.io.File): number;
            /**
             * Tests this abstract pathname for equality with the given object.
             * Returns <code>true</code> if and only if the argument is not
             * <code>null</code> and is an abstract pathname that denotes the same file
             * or directory as this abstract pathname.  Whether or not two abstract
             * pathnames are equal depends upon the underlying system.  On UNIX
             * systems, alphabetic case is significant in comparing pathnames; on Microsoft Windows
             * systems it is not.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Computes a hash code for this abstract pathname.  Because equality of
             * abstract pathnames is inherently system-dependent, so is the computation
             * of their hash codes.  On UNIX systems, the hash code of an abstract
             * pathname is equal to the exclusive <em>or</em> of the hash code
             * of its pathname string and the decimal value
             * <code>1234321</code>.  On Microsoft Windows systems, the hash
             * code is equal to the exclusive <em>or</em> of the hash code of
             * its pathname string converted to lower case and the decimal
             * value <code>1234321</code>.  Locale is not taken into account on
             * lowercasing the pathname string.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Returns the pathname string of this abstract pathname.  This is just the
             * string returned by the <code>{@link #getPath}</code> method.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Returns a {@link Path java.nio.file.Path} object constructed from the
             * this abstract path. The resulting {@code Path} is associated with the
             * {@link java.nio.file.FileSystems#getDefault default-filesystem}.
             * <p> The first invocation of this method works as if invoking it were
             * equivalent to evaluating the expression:
             * <blockquote><pre>
             * {@link java.nio.file.FileSystems#getDefault FileSystems.getDefault}().{@link
             * java.nio.file.FileSystem#getPath getPath}(this.{@link #getPath getPath}());
             * </pre></blockquote>
             * Subsequent invocations of this method return the same {@code Path}.
             * <p> If this abstract pathname is the empty abstract pathname then this
             * method returns a {@code Path} that may be used to access the current
             * user directory.
             */
            // @ts-ignore
            public toPath(): java.nio.file.Path;
        }
    }
}
