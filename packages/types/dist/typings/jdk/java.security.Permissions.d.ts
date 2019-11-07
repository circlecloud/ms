declare namespace java {
    namespace security {
        // @ts-ignore
         class Permissions extends java.security.PermissionCollection {
            /**
             * Creates a new Permissions object containing no PermissionCollections.
             */
            // @ts-ignore
            constructor()
            /**
             * Adds a permission object to the PermissionCollection for the class the
             * permission belongs to. For example, if <i>permission</i> is a
             * FilePermission, it is added to the FilePermissionCollection stored
             * in this Permissions object.
             * This method creates
             * a new PermissionCollection object (and adds the permission to it)
             * if an appropriate collection does not yet exist. <p>
             */
            // @ts-ignore
            public add(permission: java.security.Permission): void;
            /**
             * Checks to see if this object's PermissionCollection for permissions of
             * the specified permission's class implies the permissions
             * expressed in the <i>permission</i> object. Returns true if the
             * combination of permissions in the appropriate PermissionCollection
             * (e.g., a FilePermissionCollection for a FilePermission) together
             * imply the specified permission.
             * <p>For example, suppose there is a FilePermissionCollection in this
             * Permissions object, and it contains one FilePermission that specifies
             * "read" access for  all files in all subdirectories of the "/tmp"
             * directory, and another FilePermission that specifies "write" access
             * for all files in the "/tmp/scratch/foo" directory.
             * Then if the {@code implies} method
             * is called with a permission specifying both "read" and "write" access
             * to files in the "/tmp/scratch/foo" directory, {@code true} is
             * returned.
             * <p>Additionally, if this PermissionCollection contains the
             * AllPermission, this method will always return true.
             * <p>
             */
            // @ts-ignore
            public implies(permission: java.security.Permission): boolean;
            /**
             * Returns an enumeration of all the Permission objects in all the
             * PermissionCollections in this Permissions object.
             */
            // @ts-ignore
            public elements(): java.util.Enumeration;
        }
    }
}
