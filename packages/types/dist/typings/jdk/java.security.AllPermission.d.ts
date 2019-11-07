declare namespace java {
    namespace security {
        // @ts-ignore
         class AllPermission extends java.security.Permission {
            /**
             * Creates a new AllPermission object.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a new AllPermission object. This
             * constructor exists for use by the {@code Policy} object
             * to instantiate new Permission objects.
             */
            // @ts-ignore
            constructor(name: string, actions: string)
            /**
             * Checks if the specified permission is "implied" by
             * this object. This method always returns true.
             */
            // @ts-ignore
            public implies(p: java.security.Permission): boolean;
            /**
             * Checks two AllPermission objects for equality. Two AllPermission
             * objects are always equal.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Returns the hash code value for this object.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Returns the canonical string representation of the actions.
             */
            // @ts-ignore
            public getActions(): string;
            /**
             * Returns a new PermissionCollection object for storing AllPermission
             * objects.
             * <p>
             */
            // @ts-ignore
            public newPermissionCollection(): java.security.PermissionCollection;
        }
    }
}
