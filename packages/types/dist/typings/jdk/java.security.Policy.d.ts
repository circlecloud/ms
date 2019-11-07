// @ts-nocheck
declare namespace java {
    namespace security {
        // @ts-ignore
        abstract class Policy extends java.lang.Object {
            // @ts-ignore
            constructor()
            // @ts-ignore
            public static UNSUPPORTED_EMPTY_COLLECTION: java.security.PermissionCollection;
            /**
             * Returns the installed Policy object. This value should not be cached,
             * as it may be changed by a call to {@code setPolicy}.
             * This method first calls
             * {@code SecurityManager.checkPermission} with a
             * {@code SecurityPermission("getPolicy")} permission
             * to ensure it's ok to get the Policy object.
             */
            // @ts-ignore
            public static getPolicy(): java.security.Policy;
            /**
             * Sets the system-wide Policy object. This method first calls
             * {@code SecurityManager.checkPermission} with a
             * {@code SecurityPermission("setPolicy")}
             * permission to ensure it's ok to set the Policy.
             */
            // @ts-ignore
            public static setPolicy(p: java.security.Policy): void;
            /**
             * Returns a Policy object of the specified type.
             * <p> This method traverses the list of registered security providers,
             * starting with the most preferred Provider.
             * A new Policy object encapsulating the
             * PolicySpi implementation from the first
             * Provider that supports the specified type is returned.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             */
            // @ts-ignore
            public static getInstance(type: string, params: java.security.Policy.Parameters): java.security.Policy;
            /**
             * Returns a Policy object of the specified type.
             * <p> A new Policy object encapsulating the
             * PolicySpi implementation from the specified provider
             * is returned.   The specified provider must be registered
             * in the provider list.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             */
            // @ts-ignore
            public static getInstance(type: string, params: java.security.Policy.Parameters, provider: string): java.security.Policy;
            /**
             * Returns a Policy object of the specified type.
             * <p> A new Policy object encapsulating the
             * PolicySpi implementation from the specified Provider
             * object is returned.  Note that the specified Provider object
             * does not have to be registered in the provider list.
             */
            // @ts-ignore
            public static getInstance(type: string, params: java.security.Policy.Parameters, provider: java.security.Provider): java.security.Policy;
            /**
             * Return the Provider of this Policy.
             * <p> This Policy instance will only have a Provider if it
             * was obtained via a call to {@code Policy.getInstance}.
             * Otherwise this method returns null.
             */
            // @ts-ignore
            public getProvider(): java.security.Provider;
            /**
             * Return the type of this Policy.
             * <p> This Policy instance will only have a type if it
             * was obtained via a call to {@code Policy.getInstance}.
             * Otherwise this method returns null.
             */
            // @ts-ignore
            public getType(): string;
            /**
             * Return Policy parameters.
             * <p> This Policy instance will only have parameters if it
             * was obtained via a call to {@code Policy.getInstance}.
             * Otherwise this method returns null.
             */
            // @ts-ignore
            public getParameters(): java.security.Policy.Parameters;
            /**
             * Return a PermissionCollection object containing the set of
             * permissions granted to the specified CodeSource.
             * <p> Applications are discouraged from calling this method
             * since this operation may not be supported by all policy implementations.
             * Applications should solely rely on the {@code implies} method
             * to perform policy checks.  If an application absolutely must call
             * a getPermissions method, it should call
             * {@code getPermissions(ProtectionDomain)}.
             * <p> The default implementation of this method returns
             * Policy.UNSUPPORTED_EMPTY_COLLECTION.  This method can be
             * overridden if the policy implementation can return a set of
             * permissions granted to a CodeSource.
             */
            // @ts-ignore
            public getPermissions(codesource: java.security.CodeSource): java.security.PermissionCollection;
            /**
             * Return a PermissionCollection object containing the set of
             * permissions granted to the specified ProtectionDomain.
             * <p> Applications are discouraged from calling this method
             * since this operation may not be supported by all policy implementations.
             * Applications should rely on the {@code implies} method
             * to perform policy checks.
             * <p> The default implementation of this method first retrieves
             * the permissions returned via {@code getPermissions(CodeSource)}
             * (the CodeSource is taken from the specified ProtectionDomain),
             * as well as the permissions located inside the specified ProtectionDomain.
             * All of these permissions are then combined and returned in a new
             * PermissionCollection object.  If {@code getPermissions(CodeSource)}
             * returns Policy.UNSUPPORTED_EMPTY_COLLECTION, then this method
             * returns the permissions contained inside the specified ProtectionDomain
             * in a new PermissionCollection object.
             * <p> This method can be overridden if the policy implementation
             * supports returning a set of permissions granted to a ProtectionDomain.
             */
            // @ts-ignore
            public getPermissions(domain: java.security.ProtectionDomain): java.security.PermissionCollection;
            /**
             * Evaluates the global policy for the permissions granted to
             * the ProtectionDomain and tests whether the permission is
             * granted.
             */
            // @ts-ignore
            public implies(domain: java.security.ProtectionDomain, permission: java.security.Permission): boolean;
            /**
             * Refreshes/reloads the policy configuration. The behavior of this method
             * depends on the implementation. For example, calling {@code refresh}
             * on a file-based policy will cause the file to be re-read.
             * <p> The default implementation of this method does nothing.
             * This method should be overridden if a refresh operation is supported
             * by the policy implementation.
             */
            // @ts-ignore
            public refresh(): void;
        }
    }
}
