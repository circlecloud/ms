declare namespace java {
    namespace security {
        // @ts-ignore
         class AlgorithmParameterGenerator extends java.lang.Object {
            /**
             * Creates an AlgorithmParameterGenerator object.
             */
            // @ts-ignore
            constructor(paramGenSpi: java.security.AlgorithmParameterGeneratorSpi, provider: java.security.Provider, algorithm: string)
            /**
             * Returns the standard name of the algorithm this parameter
             * generator is associated with.
             */
            // @ts-ignore
            public getAlgorithm(): string;
            /**
             * Returns an AlgorithmParameterGenerator object for generating
             * a set of parameters to be used with the specified algorithm.
             * <p> This method traverses the list of registered security Providers,
             * starting with the most preferred Provider.
             * A new AlgorithmParameterGenerator object encapsulating the
             * AlgorithmParameterGeneratorSpi implementation from the first
             * Provider that supports the specified algorithm is returned.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             */
            // @ts-ignore
            public static getInstance(algorithm: string): java.security.AlgorithmParameterGenerator;
            /**
             * Returns an AlgorithmParameterGenerator object for generating
             * a set of parameters to be used with the specified algorithm.
             * <p> A new AlgorithmParameterGenerator object encapsulating the
             * AlgorithmParameterGeneratorSpi implementation from the specified provider
             * is returned.  The specified provider must be registered
             * in the security provider list.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             */
            // @ts-ignore
            public static getInstance(algorithm: string, provider: string): java.security.AlgorithmParameterGenerator;
            /**
             * Returns an AlgorithmParameterGenerator object for generating
             * a set of parameters to be used with the specified algorithm.
             * <p> A new AlgorithmParameterGenerator object encapsulating the
             * AlgorithmParameterGeneratorSpi implementation from the specified Provider
             * object is returned.  Note that the specified Provider object
             * does not have to be registered in the provider list.
             */
            // @ts-ignore
            public static getInstance(algorithm: string, provider: java.security.Provider): java.security.AlgorithmParameterGenerator;
            /**
             * Returns the provider of this algorithm parameter generator object.
             */
            // @ts-ignore
            public getProvider(): java.security.Provider;
            /**
             * Initializes this parameter generator for a certain size.
             * To create the parameters, the {@code SecureRandom}
             * implementation of the highest-priority installed provider is used as
             * the source of randomness.
             * (If none of the installed providers supply an implementation of
             * {@code SecureRandom}, a system-provided source of randomness is
             * used.)
             */
            // @ts-ignore
            public init(size: number): void;
            /**
             * Initializes this parameter generator for a certain size and source
             * of randomness.
             */
            // @ts-ignore
            public init(size: number, random: java.security.SecureRandom): void;
            /**
             * Initializes this parameter generator with a set of algorithm-specific
             * parameter generation values.
             * To generate the parameters, the {@code SecureRandom}
             * implementation of the highest-priority installed provider is used as
             * the source of randomness.
             * (If none of the installed providers supply an implementation of
             * {@code SecureRandom}, a system-provided source of randomness is
             * used.)
             */
            // @ts-ignore
            public init(genParamSpec: java.security.spec.AlgorithmParameterSpec): void;
            /**
             * Initializes this parameter generator with a set of algorithm-specific
             * parameter generation values.
             */
            // @ts-ignore
            public init(genParamSpec: java.security.spec.AlgorithmParameterSpec, random: java.security.SecureRandom): void;
            /**
             * Generates the parameters.
             */
            // @ts-ignore
            public generateParameters(): java.security.AlgorithmParameters;
        }
    }
}
