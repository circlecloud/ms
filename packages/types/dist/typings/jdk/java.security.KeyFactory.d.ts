declare namespace java {
    namespace security {
        // @ts-ignore
         class KeyFactory extends java.lang.Object {
            /**
             * Creates a KeyFactory object.
             */
            // @ts-ignore
            constructor(keyFacSpi: java.security.KeyFactorySpi, provider: java.security.Provider, algorithm: string)
            /**
             * Returns a KeyFactory object that converts
             * public/private keys of the specified algorithm.
             * <p> This method traverses the list of registered security Providers,
             * starting with the most preferred Provider.
             * A new KeyFactory object encapsulating the
             * KeyFactorySpi implementation from the first
             * Provider that supports the specified algorithm is returned.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             */
            // @ts-ignore
            public static getInstance(algorithm: string): java.security.KeyFactory;
            /**
             * Returns a KeyFactory object that converts
             * public/private keys of the specified algorithm.
             * <p> A new KeyFactory object encapsulating the
             * KeyFactorySpi implementation from the specified provider
             * is returned.  The specified provider must be registered
             * in the security provider list.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             */
            // @ts-ignore
            public static getInstance(algorithm: string, provider: string): java.security.KeyFactory;
            /**
             * Returns a KeyFactory object that converts
             * public/private keys of the specified algorithm.
             * <p> A new KeyFactory object encapsulating the
             * KeyFactorySpi implementation from the specified Provider
             * object is returned.  Note that the specified Provider object
             * does not have to be registered in the provider list.
             */
            // @ts-ignore
            public static getInstance(algorithm: string, provider: java.security.Provider): java.security.KeyFactory;
            /**
             * Returns the provider of this key factory object.
             */
            // @ts-ignore
            public getProvider(): java.security.Provider;
            /**
             * Gets the name of the algorithm
             * associated with this {@code KeyFactory}.
             */
            // @ts-ignore
            public getAlgorithm(): string;
            /**
             * Generates a public key object from the provided key specification
             * (key material).
             */
            // @ts-ignore
            public generatePublic(keySpec: java.security.spec.KeySpec): java.security.PublicKey;
            /**
             * Generates a private key object from the provided key specification
             * (key material).
             */
            // @ts-ignore
            public generatePrivate(keySpec: java.security.spec.KeySpec): java.security.PrivateKey;
            /**
             * Returns a specification (key material) of the given key object.
             * {@code keySpec} identifies the specification class in which
             * the key material should be returned. It could, for example, be
             * {@code DSAPublicKeySpec.class}, to indicate that the
             * key material should be returned in an instance of the
             * {@code DSAPublicKeySpec} class.
             */
            // @ts-ignore
            public getKeySpec(key: java.security.Key, keySpec: java.lang.Class): java.security.spec.KeySpec;
            /**
             * Translates a key object, whose provider may be unknown or potentially
             * untrusted, into a corresponding key object of this key factory.
             */
            // @ts-ignore
            public translateKey(key: java.security.Key): java.security.Key;
        }
    }
}
