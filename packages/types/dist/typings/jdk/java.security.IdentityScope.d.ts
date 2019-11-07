// @ts-nocheck
declare namespace java {
    namespace security {
        // @ts-ignore
        abstract class IdentityScope extends java.security.Identity {
            /**
             * This constructor is used for serialization only and should not
             * be used by subclasses.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a new identity scope with the specified name.
             */
            // @ts-ignore
            constructor(name: string)
            /**
             * Constructs a new identity scope with the specified name and scope.
             */
            // @ts-ignore
            constructor(name: string, scope: java.security.IdentityScope)
            /**
             * Returns the system's identity scope.
             */
            // @ts-ignore
            public static getSystemScope(): java.security.IdentityScope;
            /**
             * Sets the system's identity scope.
             * <p>First, if there is a security manager, its
             * {@code checkSecurityAccess}
             * method is called with {@code "setSystemScope"}
             * as its argument to see if it's ok to set the identity scope.
             */
            // @ts-ignore
            protected static setSystemScope(scope: java.security.IdentityScope): void;
            /**
             * Returns the number of identities within this identity scope.
             */
            // @ts-ignore
            public abstract size(): number;
            /**
             * Returns the identity in this scope with the specified name (if any).
             */
            // @ts-ignore
            public abstract getIdentity(name: string): java.security.Identity;
            /**
             * Retrieves the identity whose name is the same as that of the
             * specified principal. (Note: Identity implements Principal.)
             */
            // @ts-ignore
            public getIdentity(principal: java.security.Principal): java.security.Identity;
            /**
             * Adds an identity to this identity scope.
             */
            // @ts-ignore
            public abstract addIdentity(identity: java.security.Identity): void;
            /**
             * Removes an identity from this identity scope.
             */
            // @ts-ignore
            public abstract removeIdentity(identity: java.security.Identity): void;
            /**
             * Returns an enumeration of all identities in this identity scope.
             */
            // @ts-ignore
            public abstract identities(): java.util.Enumeration;
            /**
             * Returns a string representation of this identity scope, including
             * its name, its scope name, and the number of identities in this
             * identity scope.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
