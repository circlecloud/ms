declare namespace java {
    namespace security {
        // @ts-ignore
        abstract class KeyPairGenerator extends java.security.KeyPairGeneratorSpi {
            /**
             * Creates a KeyPairGenerator object for the specified algorithm.
             */
            // @ts-ignore
            constructor(algorithm: string)
            /**
             * Returns the standard name of the algorithm for this key pair generator.
             * See the KeyPairGenerator section in the <a href=
             * "{@docRoot}/../technotes/guides/security/StandardNames.html#KeyPairGenerator">
             * Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             * for information about standard algorithm names.
             */
            // @ts-ignore
            public getAlgorithm(): string;
            /**
             * Returns a KeyPairGenerator object that generates public/private
             * key pairs for the specified algorithm.
             * <p> This method traverses the list of registered security Providers,
             * starting with the most preferred Provider.
             * A new KeyPairGenerator object encapsulating the
             * KeyPairGeneratorSpi implementation from the first
             * Provider that supports the specified algorithm is returned.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             */
            // @ts-ignore
            public static getInstance(algorithm: string): java.security.KeyPairGenerator;
            /**
             * Returns a KeyPairGenerator object that generates public/private
             * key pairs for the specified algorithm.
             * <p> A new KeyPairGenerator object encapsulating the
             * KeyPairGeneratorSpi implementation from the specified provider
             * is returned.  The specified provider must be registered
             * in the security provider list.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             */
            // @ts-ignore
            public static getInstance(algorithm: string, provider: string): java.security.KeyPairGenerator;
            /**
             * Returns a KeyPairGenerator object that generates public/private
             * key pairs for the specified algorithm.
             * <p> A new KeyPairGenerator object encapsulating the
             * KeyPairGeneratorSpi implementation from the specified Provider
             * object is returned.  Note that the specified Provider object
             * does not have to be registered in the provider list.
             */
            // @ts-ignore
            public static getInstance(algorithm: string, provider: java.security.Provider): java.security.KeyPairGenerator;
            /**
             * Returns the provider of this key pair generator object.
             */
            // @ts-ignore
            public getProvider(): java.security.Provider;
            /**
             * Initializes the key pair generator for a certain keysize using
             * a default parameter set and the {@code SecureRandom}
             * implementation of the highest-priority installed provider as the source
             * of randomness.
             * (If none of the installed providers supply an implementation of
             * {@code SecureRandom}, a system-provided source of randomness is
             * used.)
             */
            // @ts-ignore
            public initialize(keysize: number): void;
            /**
             * Initializes the key pair generator for a certain keysize with
             * the given source of randomness (and a default parameter set).
             */
            // @ts-ignore
            public initialize(keysize: number, random: java.security.SecureRandom): void;
            /**
             * Initializes the key pair generator using the specified parameter
             * set and the {@code SecureRandom}
             * implementation of the highest-priority installed provider as the source
             * of randomness.
             * (If none of the installed providers supply an implementation of
             * {@code SecureRandom}, a system-provided source of randomness is
             * used.).
             * <p>This concrete method has been added to this previously-defined
             * abstract class.
             * This method calls the KeyPairGeneratorSpi
             * {@link KeyPairGeneratorSpi#initialize(
             * java.security.spec.AlgorithmParameterSpec,
             * java.security.SecureRandom) initialize} method,
             * passing it {@code params} and a source of randomness (obtained
             * from the highest-priority installed provider or system-provided if none
             * of the installed providers supply one).
             * That {@code initialize} method always throws an
             * UnsupportedOperationException if it is not overridden by the provider.
             */
            // @ts-ignore
            public initialize(params: java.security.spec.AlgorithmParameterSpec): void;
            /**
             * Initializes the key pair generator with the given parameter
             * set and source of randomness.
             * <p>This concrete method has been added to this previously-defined
             * abstract class.
             * This method calls the KeyPairGeneratorSpi {@link
             * KeyPairGeneratorSpi#initialize(
             * java.security.spec.AlgorithmParameterSpec,
             * java.security.SecureRandom) initialize} method,
             * passing it {@code params} and {@code random}.
             * That {@code initialize}
             * method always throws an
             * UnsupportedOperationException if it is not overridden by the provider.
             */
            // @ts-ignore
            public initialize(params: java.security.spec.AlgorithmParameterSpec, random: java.security.SecureRandom): void;
            /**
             * Generates a key pair.
             * <p>If this KeyPairGenerator has not been initialized explicitly,
             * provider-specific defaults will be used for the size and other
             * (algorithm-specific) values of the generated keys.
             * <p>This will generate a new key pair every time it is called.
             * <p>This method is functionally equivalent to
             * {@link #generateKeyPair() generateKeyPair}.
             */
            // @ts-ignore
            public genKeyPair(): java.security.KeyPair;
            /**
             * Generates a key pair.
             * <p>If this KeyPairGenerator has not been initialized explicitly,
             * provider-specific defaults will be used for the size and other
             * (algorithm-specific) values of the generated keys.
             * <p>This will generate a new key pair every time it is called.
             * <p>This method is functionally equivalent to
             * {@link #genKeyPair() genKeyPair}.
             */
            // @ts-ignore
            public generateKeyPair(): java.security.KeyPair;
        }
    }
}
