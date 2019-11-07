declare namespace java {
    namespace security {
        // @ts-ignore
        abstract class KeyPairGeneratorSpi extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Initializes the key pair generator for a certain keysize, using
             * the default parameter set.
             */
            // @ts-ignore
            public abstract initialize(keysize: number, random: java.security.SecureRandom): void;
            /**
             * Initializes the key pair generator using the specified parameter
             * set and user-provided source of randomness.
             * <p>This concrete method has been added to this previously-defined
             * abstract class. (For backwards compatibility, it cannot be abstract.)
             * It may be overridden by a provider to initialize the key pair
             * generator. Such an override
             * is expected to throw an InvalidAlgorithmParameterException if
             * a parameter is inappropriate for this key pair generator.
             * If this method is not overridden, it always throws an
             * UnsupportedOperationException.
             */
            // @ts-ignore
            public initialize(params: java.security.spec.AlgorithmParameterSpec, random: java.security.SecureRandom): void;
            /**
             * Generates a key pair. Unless an initialization method is called
             * using a KeyPairGenerator interface, algorithm-specific defaults
             * will be used. This will generate a new key pair every time it
             * is called.
             */
            // @ts-ignore
            public abstract generateKeyPair(): java.security.KeyPair;
        }
    }
}
