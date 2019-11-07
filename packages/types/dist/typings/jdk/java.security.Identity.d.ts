declare namespace java {
    namespace security {
        // @ts-ignore
        abstract class Identity extends java.lang.Object {
            /**
             * Constructor for serialization only.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs an identity with the specified name and scope.
             */
            // @ts-ignore
            constructor(name: string, scope: java.security.IdentityScope)
            /**
             * Constructs an identity with the specified name and no scope.
             */
            // @ts-ignore
            constructor(name: string)
            /**
             * Returns this identity's name.
             */
            // @ts-ignore
            public getName(): string;
            /**
             * Returns this identity's scope.
             */
            // @ts-ignore
            public getScope(): java.security.IdentityScope;
            /**
             * Returns this identity's public key.
             */
            // @ts-ignore
            public getPublicKey(): java.security.PublicKey;
            /**
             * Sets this identity's public key. The old key and all of this
             * identity's certificates are removed by this operation.
             * <p>First, if there is a security manager, its {@code checkSecurityAccess}
             * method is called with {@code "setIdentityPublicKey"}
             * as its argument to see if it's ok to set the public key.
             */
            // @ts-ignore
            public setPublicKey(key: java.security.PublicKey): void;
            /**
             * Specifies a general information string for this identity.
             * <p>First, if there is a security manager, its {@code checkSecurityAccess}
             * method is called with {@code "setIdentityInfo"}
             * as its argument to see if it's ok to specify the information string.
             */
            // @ts-ignore
            public setInfo(info: string): void;
            /**
             * Returns general information previously specified for this identity.
             */
            // @ts-ignore
            public getInfo(): string;
            /**
             * Adds a certificate for this identity. If the identity has a public
             * key, the public key in the certificate must be the same, and if
             * the identity does not have a public key, the identity's
             * public key is set to be that specified in the certificate.
             * <p>First, if there is a security manager, its {@code checkSecurityAccess}
             * method is called with {@code "addIdentityCertificate"}
             * as its argument to see if it's ok to add a certificate.
             */
            // @ts-ignore
            public addCertificate(certificate: java.security.Certificate): void;
            /**
             * Removes a certificate from this identity.
             * <p>First, if there is a security manager, its {@code checkSecurityAccess}
             * method is called with {@code "removeIdentityCertificate"}
             * as its argument to see if it's ok to remove a certificate.
             */
            // @ts-ignore
            public removeCertificate(certificate: java.security.Certificate): void;
            /**
             * Returns a copy of all the certificates for this identity.
             */
            // @ts-ignore
            public certificates(): java.security.Certificate[];
            /**
             * Tests for equality between the specified object and this identity.
             * This first tests to see if the entities actually refer to the same
             * object, in which case it returns true. Next, it checks to see if
             * the entities have the same name and the same scope. If they do,
             * the method returns true. Otherwise, it calls
             * {@link #identityEquals(Identity) identityEquals}, which subclasses should
             * override.
             */
            // @ts-ignore
            public equals(identity: java.lang.Object): boolean;
            /**
             * Tests for equality between the specified identity and this identity.
             * This method should be overriden by subclasses to test for equality.
             * The default behavior is to return true if the names and public keys
             * are equal.
             */
            // @ts-ignore
            protected identityEquals(identity: java.security.Identity): boolean;
            /**
             * Returns a short string describing this identity, telling its
             * name and its scope (if any).
             * <p>First, if there is a security manager, its {@code checkSecurityAccess}
             * method is called with {@code "printIdentity"}
             * as its argument to see if it's ok to return the string.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Returns a string representation of this identity, with
             * optionally more details than that provided by the
             * {@code toString} method without any arguments.
             * <p>First, if there is a security manager, its {@code checkSecurityAccess}
             * method is called with {@code "printIdentity"}
             * as its argument to see if it's ok to return the string.
             */
            // @ts-ignore
            public toString(detailed: boolean): string;
            /**
             * Returns a hashcode for this identity.
             */
            // @ts-ignore
            public hashCode(): number;
        }
    }
}
