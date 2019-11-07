// @ts-nocheck
declare namespace java {
    namespace io {
        // @ts-ignore
         class FilePermission extends java.security.Permission {
            /**
             * Creates a new FilePermission object with the specified actions.
             * <i>path</i> is the pathname of a file or directory, and <i>actions</i>
             * contains a comma-separated list of the desired actions granted on the
             * file or directory. Possible actions are
             * "read", "write", "execute", "delete", and "readlink".
             * <p>A pathname that ends in "/*" (where "/" is
             * the file separator character, <code>File.separatorChar</code>)
             * indicates all the files and directories contained in that directory.
             * A pathname that ends with "/-" indicates (recursively) all files and
             * subdirectories contained in that directory. The special pathname
             * "&lt;&lt;ALL FILES&gt;&gt;" matches any file.
             * <p>A pathname consisting of a single "*" indicates all the files
             * in the current directory, while a pathname consisting of a single "-"
             * indicates all the files in the current directory and
             * (recursively) all files and subdirectories contained in the current
             * directory.
             * <p>A pathname containing an empty string represents an empty path.
             */
            // @ts-ignore
            constructor(path: string, actions: string)
            /**
             * Checks if this FilePermission object "implies" the specified permission.
             * <P>
             * More specifically, this method returns true if:
             * <ul>
             * <li> <i>p</i> is an instanceof FilePermission,
             * <li> <i>p</i>'s actions are a proper subset of this
             * object's actions, and
             * <li> <i>p</i>'s pathname is implied by this object's
             * pathname. For example, "/tmp/*" implies "/tmp/foo", since
             * "/tmp/*" encompasses all files in the "/tmp" directory,
             * including the one named "foo".
             * </ul>
             */
            // @ts-ignore
            public implies(p: java.security.Permission): boolean;
            /**
             * Checks two FilePermission objects for equality. Checks that <i>obj</i> is
             * a FilePermission, and has the same pathname and actions as this object.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Returns the hash code value for this object.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Returns the "canonical string representation" of the actions.
             * That is, this method always returns present actions in the following order:
             * read, write, execute, delete, readlink. For example, if this FilePermission
             * object allows both write and read actions, a call to <code>getActions</code>
             * will return the string "read,write".
             */
            // @ts-ignore
            public getActions(): string;
            /**
             * Returns a new PermissionCollection object for storing FilePermission
             * objects.
             * <p>
             * FilePermission objects must be stored in a manner that allows them
             * to be inserted into the collection in any order, but that also enables the
             * PermissionCollection <code>implies</code>
             * method to be implemented in an efficient (and consistent) manner.
             * <p>For example, if you have two FilePermissions:
             * <OL>
             * <LI>  <code>"/tmp/-", "read"</code>
             * <LI>  <code>"/tmp/scratch/foo", "write"</code>
             * </OL>
             * <p>and you are calling the <code>implies</code> method with the FilePermission:
             * <pre>
             * "/tmp/scratch/foo", "read,write",
             * </pre>
             * then the <code>implies</code> function must
             * take into account both the "/tmp/-" and "/tmp/scratch/foo"
             * permissions, so the effective permission is "read,write",
             * and <code>implies</code> returns true. The "implies" semantics for
             * FilePermissions are handled properly by the PermissionCollection object
             * returned by this <code>newPermissionCollection</code> method.
             */
            // @ts-ignore
            public newPermissionCollection(): java.security.PermissionCollection;
        }
    }
}
