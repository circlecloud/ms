// @ts-nocheck
declare namespace java {
    namespace security {
        // @ts-ignore
         class ProtectionDomain extends java.lang.Object {
            /**
             * Creates a new ProtectionDomain with the given CodeSource and
             * Permissions. If the permissions object is not null, then
             * {@code setReadOnly())} will be called on the passed in
             * Permissions object. The only permissions granted to this domain
             * are the ones specified; the current Policy will not be consulted.
             */
            // @ts-ignore
            constructor(codesource: java.security.CodeSource, permissions: java.security.PermissionCollection)
            /**
             * Creates a new ProtectionDomain qualified by the given CodeSource,
             * Permissions, ClassLoader and array of Principals. If the
             * permissions object is not null, then {@code setReadOnly()}
             * will be called on the passed in Permissions object.
             * The permissions granted to this domain are dynamic; they include
             * both the static permissions passed to this constructor, and any
             * permissions granted to this domain by the current Policy at the
             * time a permission is checked.
             * <p>
             * This constructor is typically used by
             * {@link SecureClassLoader ClassLoaders}
             * and {@link DomainCombiner DomainCombiners} which delegate to
             * {@code Policy} to actively associate the permissions granted to
             * this domain. This constructor affords the
             * Policy provider the opportunity to augment the supplied
             * PermissionCollection to reflect policy changes.
             * <p>
             */
            // @ts-ignore
            constructor(codesource: java.security.CodeSource, permissions: java.security.PermissionCollection, classloader: java.lang.ClassLoader, principals: java.security.Principal)
            /**
             * Returns the CodeSource of this domain.
             */
            // @ts-ignore
            public getCodeSource(): java.security.CodeSource;
            /**
             * Returns the ClassLoader of this domain.
             */
            // @ts-ignore
            public getClassLoader(): java.lang.ClassLoader;
            /**
             * Returns an array of principals for this domain.
             */
            // @ts-ignore
            public getPrincipals(): java.security.Principal[];
            /**
             * Returns the static permissions granted to this domain.
             */
            // @ts-ignore
            public getPermissions(): java.security.PermissionCollection;
            /**
             * Check and see if this ProtectionDomain implies the permissions
             * expressed in the Permission object.
             * <p>
             * The set of permissions evaluated is a function of whether the
             * ProtectionDomain was constructed with a static set of permissions
             * or it was bound to a dynamically mapped set of permissions.
             * <p>
             * If the ProtectionDomain was constructed to a
             * {@link #ProtectionDomain(CodeSource, PermissionCollection)
             * statically bound} PermissionCollection then the permission will
             * only be checked against the PermissionCollection supplied at
             * construction.
             * <p>
             * However, if the ProtectionDomain was constructed with
             * the constructor variant which supports
             * {@link #ProtectionDomain(CodeSource, PermissionCollection,
             * ClassLoader, java.security.Principal[]) dynamically binding}
             * permissions, then the permission will be checked against the
             * combination of the PermissionCollection supplied at construction and
             * the current Policy binding.
             * <p>
             */
            // @ts-ignore
            public implies(permission: java.security.Permission): boolean;
            /**
             * Convert a ProtectionDomain to a String.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
