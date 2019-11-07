declare namespace java {
    namespace security {
        // @ts-ignore
         class KeyPair extends java.lang.Object {
            /**
             * Constructs a key pair from the given public key and private key.
             * <p>Note that this constructor only stores references to the public
             * and private key components in the generated key pair. This is safe,
             * because {@code Key} objects are immutable.
             */
            // @ts-ignore
            constructor(publicKey: java.security.PublicKey, privateKey: java.security.PrivateKey)
            /**
             * Returns a reference to the public key component of this key pair.
             */
            // @ts-ignore
            public getPublic(): java.security.PublicKey;
            /**
             * Returns a reference to the private key component of this key pair.
             */
            // @ts-ignore
            public getPrivate(): java.security.PrivateKey;
        }
    }
}
