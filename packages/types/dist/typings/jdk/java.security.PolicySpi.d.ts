declare namespace java {
    namespace security {
        // @ts-ignore
        abstract class PolicySpi extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Check whether the policy has granted a Permission to a ProtectionDomain.
             */
            // @ts-ignore
            protected abstract engineImplies(domain: java.security.ProtectionDomain, permission: java.security.Permission): boolean;
            /**
             * Refreshes/reloads the policy configuration. The behavior of this method
             * depends on the implementation. For example, calling {@code refresh}
             * on a file-based policy will cause the file to be re-read.
             * <p> The default implementation of this method does nothing.
             * This method should be overridden if a refresh operation is supported
             * by the policy implementation.
             */
            // @ts-ignore
            protected engineRefresh(): void;
            /**
             * Return a PermissionCollection object containing the set of
             * permissions granted to the specified CodeSource.
             * <p> The default implementation of this method returns
             * Policy.UNSUPPORTED_EMPTY_COLLECTION object.  This method can be
             * overridden if the policy implementation can return a set of
             * permissions granted to a CodeSource.
             */
            // @ts-ignore
            protected engineGetPermissions(codesource: java.security.CodeSource): java.security.PermissionCollection;
            /**
             * Return a PermissionCollection object containing the set of
             * permissions granted to the specified ProtectionDomain.
             * <p> The default implementation of this method returns
             * Policy.UNSUPPORTED_EMPTY_COLLECTION object.  This method can be
             * overridden if the policy implementation can return a set of
             * permissions granted to a ProtectionDomain.
             */
            // @ts-ignore
            protected engineGetPermissions(domain: java.security.ProtectionDomain): java.security.PermissionCollection;
        }
    }
}
