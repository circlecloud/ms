declare namespace java {
    namespace security {
        // @ts-ignore
         class UnresolvedPermission extends java.security.Permission {
            /**
             * Creates a new UnresolvedPermission containing the permission
             * information needed later to actually create a Permission of the
             * specified class, when the permission is resolved.
             */
            // @ts-ignore
            constructor(type: string, name: string, actions: string, certs: java.security.cert.Certificate)
            /**
             * This method always returns false for unresolved permissions.
             * That is, an UnresolvedPermission is never considered to
             * imply another permission.
             */
            // @ts-ignore
            public implies(p: java.security.Permission): boolean;
            /**
             * Checks two UnresolvedPermission objects for equality.
             * Checks that <i>obj</i> is an UnresolvedPermission, and has
             * the same type (class) name, permission name, actions, and
             * certificates as this object.
             * <p> To determine certificate equality, this method only compares
             * actual signer certificates.  Supporting certificate chains
             * are not taken into consideration by this method.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Returns the hash code value for this object.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Returns the canonical string representation of the actions,
             * which currently is the empty string "", since there are no actions for
             * an UnresolvedPermission. That is, the actions for the
             * permission that will be created when this UnresolvedPermission
             * is resolved may be non-null, but an UnresolvedPermission
             * itself is never considered to have any actions.
             */
            // @ts-ignore
            public getActions(): string;
            /**
             * Get the type (class name) of the underlying permission that
             * has not been resolved.
             */
            // @ts-ignore
            public getUnresolvedType(): string;
            /**
             * Get the target name of the underlying permission that
             * has not been resolved.
             */
            // @ts-ignore
            public getUnresolvedName(): string;
            /**
             * Get the actions for the underlying permission that
             * has not been resolved.
             */
            // @ts-ignore
            public getUnresolvedActions(): string;
            /**
             * Get the signer certificates (without any supporting chain)
             * for the underlying permission that has not been resolved.
             */
            // @ts-ignore
            public getUnresolvedCerts(): java.security.cert.Certificate[];
            /**
             * Returns a string describing this UnresolvedPermission.  The convention
             * is to specify the class name, the permission name, and the actions, in
             * the following format: '(unresolved "ClassName" "name" "actions")'.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Returns a new PermissionCollection object for storing
             * UnresolvedPermission  objects.
             * <p>
             */
            // @ts-ignore
            public newPermissionCollection(): java.security.PermissionCollection;
        }
    }
}
