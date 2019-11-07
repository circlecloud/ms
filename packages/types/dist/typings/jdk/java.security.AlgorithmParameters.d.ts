declare namespace java {
    namespace security {
        // @ts-ignore
         class AlgorithmParameters extends java.lang.Object {
            /**
             * Creates an AlgorithmParameters object.
             */
            // @ts-ignore
            constructor(paramSpi: java.security.AlgorithmParametersSpi, provider: java.security.Provider, algorithm: string)
            /**
             * Returns the name of the algorithm associated with this parameter object.
             */
            // @ts-ignore
            public getAlgorithm(): string;
            /**
             * Returns a parameter object for the specified algorithm.
             * <p> This method traverses the list of registered security Providers,
             * starting with the most preferred Provider.
             * A new AlgorithmParameters object encapsulating the
             * AlgorithmParametersSpi implementation from the first
             * Provider that supports the specified algorithm is returned.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             * <p> The returned parameter object must be initialized via a call to
             * {@code init}, using an appropriate parameter specification or
             * parameter encoding.
             */
            // @ts-ignore
            public static getInstance(algorithm: string): java.security.AlgorithmParameters;
            /**
             * Returns a parameter object for the specified algorithm.
             * <p> A new AlgorithmParameters object encapsulating the
             * AlgorithmParametersSpi implementation from the specified provider
             * is returned.  The specified provider must be registered
             * in the security provider list.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             * <p>The returned parameter object must be initialized via a call to
             * {@code init}, using an appropriate parameter specification or
             * parameter encoding.
             */
            // @ts-ignore
            public static getInstance(algorithm: string, provider: string): java.security.AlgorithmParameters;
            /**
             * Returns a parameter object for the specified algorithm.
             * <p> A new AlgorithmParameters object encapsulating the
             * AlgorithmParametersSpi implementation from the specified Provider
             * object is returned.  Note that the specified Provider object
             * does not have to be registered in the provider list.
             * <p>The returned parameter object must be initialized via a call to
             * {@code init}, using an appropriate parameter specification or
             * parameter encoding.
             */
            // @ts-ignore
            public static getInstance(algorithm: string, provider: java.security.Provider): java.security.AlgorithmParameters;
            /**
             * Returns the provider of this parameter object.
             */
            // @ts-ignore
            public getProvider(): java.security.Provider;
            /**
             * Initializes this parameter object using the parameters
             * specified in {@code paramSpec}.
             */
            // @ts-ignore
            public init(paramSpec: java.security.spec.AlgorithmParameterSpec): void;
            /**
             * Imports the specified parameters and decodes them according to the
             * primary decoding format for parameters. The primary decoding
             * format for parameters is ASN.1, if an ASN.1 specification for this type
             * of parameters exists.
             */
            // @ts-ignore
            public init(params: number): void;
            /**
             * Imports the parameters from {@code params} and decodes them
             * according to the specified decoding scheme.
             * If {@code format} is null, the
             * primary decoding format for parameters is used. The primary decoding
             * format is ASN.1, if an ASN.1 specification for these parameters
             * exists.
             */
            // @ts-ignore
            public init(params: number, format: string): void;
            /**
             * Returns a (transparent) specification of this parameter object.
             * {@code paramSpec} identifies the specification class in which
             * the parameters should be returned. It could, for example, be
             * {@code DSAParameterSpec.class}, to indicate that the
             * parameters should be returned in an instance of the
             * {@code DSAParameterSpec} class.
             */
            // @ts-ignore
            public getParameterSpec(paramSpec: java.lang.Class): java.security.spec.AlgorithmParameterSpec;
            /**
             * Returns the parameters in their primary encoding format.
             * The primary encoding format for parameters is ASN.1, if an ASN.1
             * specification for this type of parameters exists.
             */
            // @ts-ignore
            public getEncoded(): number[];
            /**
             * Returns the parameters encoded in the specified scheme.
             * If {@code format} is null, the
             * primary encoding format for parameters is used. The primary encoding
             * format is ASN.1, if an ASN.1 specification for these parameters
             * exists.
             */
            // @ts-ignore
            public getEncoded(format: string): number[];
            /**
             * Returns a formatted string describing the parameters.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
