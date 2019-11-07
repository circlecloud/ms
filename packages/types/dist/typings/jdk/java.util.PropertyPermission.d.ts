declare namespace java {
    namespace util {
        // @ts-ignore
         class PropertyPermission extends java.security.BasicPermission {
            /**
             * Creates a new PropertyPermission object with the specified name.
             * The name is the name of the system property, and
             * <i>actions</i> contains a comma-separated list of the
             * desired actions granted on the property. Possible actions are
             * "read" and "write".
             */
            // @ts-ignore
            constructor(name: string, actions: string)
            /**
             * Checks if this PropertyPermission object "implies" the specified
             * permission.
             * <P>
             * More specifically, this method returns true if:
             * <ul>
             * <li> <i>p</i> is an instanceof PropertyPermission,
             * <li> <i>p</i>'s actions are a subset of this
             * object's actions, and
             * <li> <i>p</i>'s name is implied by this object's
             * name. For example, "java.*" implies "java.home".
             * </ul>
             */
            // @ts-ignore
            public implies(p: java.security.Permission): boolean;
            /**
             * Checks two PropertyPermission objects for equality. Checks that <i>obj</i> is
             * a PropertyPermission, and has the same name and actions as this object.
             * <P>
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Returns the hash code value for this object.
             * The hash code used is the hash code of this permissions name, that is,
             * <code>getName().hashCode()</code>, where <code>getName</code> is
             * from the Permission superclass.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Returns the "canonical string representation" of the actions.
             * That is, this method always returns present actions in the following order:
             * read, write. For example, if this PropertyPermission object
             * allows both write and read actions, a call to <code>getActions</code>
             * will return the string "read,write".
             */
            // @ts-ignore
            public getActions(): string;
            /**
             * Returns a new PermissionCollection object for storing
             * PropertyPermission objects.
             * <p>
             */
            // @ts-ignore
            public newPermissionCollection(): java.security.PermissionCollection;
        }
    }
}
