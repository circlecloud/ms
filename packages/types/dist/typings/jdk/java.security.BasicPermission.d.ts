// @ts-nocheck
declare namespace java {
    namespace security {
        // @ts-ignore
        abstract class BasicPermission extends java.security.Permission {
            /**
             * Creates a new BasicPermission with the specified name.
             * Name is the symbolic name of the permission, such as
             * "setFactory",
             * "print.queueJob", or "topLevelWindow", etc.
             */
            // @ts-ignore
            constructor(name: string)
            /**
             * Creates a new BasicPermission object with the specified name.
             * The name is the symbolic name of the BasicPermission, and the
             * actions String is currently unused.
             */
            // @ts-ignore
            constructor(name: string, actions: string)
            /**
             * Checks if the specified permission is "implied" by
             * this object.
             * <P>
             * More specifically, this method returns true if:
             * <ul>
             * <li> <i>p</i>'s class is the same as this object's class, and
             * <li> <i>p</i>'s name equals or (in the case of wildcards)
             * is implied by this object's
             * name. For example, "a.b.*" implies "a.b.c".
             * </ul>
             */
            // @ts-ignore
            public implies(p: java.security.Permission): boolean;
            /**
             * Checks two BasicPermission objects for equality.
             * Checks that <i>obj</i>'s class is the same as this object's class
             * and has the same name as this object.
             * <P>
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Returns the hash code value for this object.
             * The hash code used is the hash code of the name, that is,
             * {@code getName().hashCode()}, where {@code getName} is
             * from the Permission superclass.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Returns the canonical string representation of the actions,
             * which currently is the empty string "", since there are no actions for
             * a BasicPermission.
             */
            // @ts-ignore
            public getActions(): string;
            /**
             * Returns a new PermissionCollection object for storing BasicPermission
             * objects.
             * <p>BasicPermission objects must be stored in a manner that allows them
             * to be inserted in any order, but that also enables the
             * PermissionCollection {@code implies} method
             * to be implemented in an efficient (and consistent) manner.
             */
            // @ts-ignore
            public newPermissionCollection(): java.security.PermissionCollection;
        }
    }
}
