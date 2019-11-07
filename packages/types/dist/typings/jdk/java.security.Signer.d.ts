// @ts-nocheck
declare namespace java {
    namespace security {
        // @ts-ignore
        abstract class Signer extends java.security.Identity {
            /**
             * Creates a signer. This constructor should only be used for
             * serialization.
             */
            // @ts-ignore
            constructor()
            /**
             * Creates a signer with the specified identity name.
             */
            // @ts-ignore
            constructor(name: string)
            /**
             * Creates a signer with the specified identity name and scope.
             */
            // @ts-ignore
            constructor(name: string, scope: java.security.IdentityScope)
            /**
             * Returns this signer's private key.
             * <p>First, if there is a security manager, its {@code checkSecurityAccess}
             * method is called with {@code "getSignerPrivateKey"}
             * as its argument to see if it's ok to return the private key.
             */
            // @ts-ignore
            public getPrivateKey(): java.security.PrivateKey;
            /**
             * Sets the key pair (public key and private key) for this signer.
             * <p>First, if there is a security manager, its {@code checkSecurityAccess}
             * method is called with {@code "setSignerKeyPair"}
             * as its argument to see if it's ok to set the key pair.
             */
            // @ts-ignore
            public setKeyPair(pair: java.security.KeyPair): void;
            /**
             * Returns a string of information about the signer.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
