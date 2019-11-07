// @ts-nocheck
declare namespace java {
    namespace security {
        // @ts-ignore
        abstract class PermissionCollection extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Adds a permission object to the current collection of permission objects.
             */
            // @ts-ignore
            public abstract add(permission: java.security.Permission): void;
            /**
             * Checks to see if the specified permission is implied by
             * the collection of Permission objects held in this PermissionCollection.
             */
            // @ts-ignore
            public abstract implies(permission: java.security.Permission): boolean;
            /**
             * Returns an enumeration of all the Permission objects in the collection.
             */
            // @ts-ignore
            public abstract elements(): java.util.Enumeration;
            /**
             * Marks this PermissionCollection object as "readonly". After
             * a PermissionCollection object
             * is marked as readonly, no new Permission objects can be added to it
             * using {@code add}.
             */
            // @ts-ignore
            public setReadOnly(): void;
            /**
             * Returns true if this PermissionCollection object is marked as readonly.
             * If it is readonly, no new Permission objects can be added to it
             * using {@code add}.
             * <p>By default, the object is <i>not</i> readonly. It can be set to
             * readonly by a call to {@code setReadOnly}.
             */
            // @ts-ignore
            public isReadOnly(): boolean;
            /**
             * Returns a string describing this PermissionCollection object,
             * providing information about all the permissions it contains.
             * The format is:
             * <pre>
             * super.toString() (
             * // enumerate all the Permission
             * // objects and call toString() on them,
             * // one per line..
             * )</pre>
             * {@code super.toString} is a call to the {@code toString}
             * method of this
             * object's superclass, which is Object. The result is
             * this PermissionCollection's type name followed by this object's
             * hashcode, thus enabling clients to differentiate different
             * PermissionCollections object, even if they contain the same permissions.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
