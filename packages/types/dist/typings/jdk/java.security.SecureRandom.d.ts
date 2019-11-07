// @ts-nocheck
declare namespace java {
    namespace security {
        // @ts-ignore
         class SecureRandom extends java.util.Random {
            /**
             * Constructs a secure random number generator (RNG) implementing the
             * default random number algorithm.
             * <p> This constructor traverses the list of registered security Providers,
             * starting with the most preferred Provider.
             * A new SecureRandom object encapsulating the
             * SecureRandomSpi implementation from the first
             * Provider that supports a SecureRandom (RNG) algorithm is returned.
             * If none of the Providers support a RNG algorithm,
             * then an implementation-specific default is returned.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             * <p> See the SecureRandom section in the <a href=
             * "{@docRoot}/../technotes/guides/security/StandardNames.html#SecureRandom">
             * Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             * for information about standard RNG algorithm names.
             * <p> The returned SecureRandom object has not been seeded.  To seed the
             * returned object, call the {@code setSeed} method.
             * If {@code setSeed} is not called, the first call to
             * {@code nextBytes} will force the SecureRandom object to seed itself.
             * This self-seeding will not occur if {@code setSeed} was
             * previously called.
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs a secure random number generator (RNG) implementing the
             * default random number algorithm.
             * The SecureRandom instance is seeded with the specified seed bytes.
             * <p> This constructor traverses the list of registered security Providers,
             * starting with the most preferred Provider.
             * A new SecureRandom object encapsulating the
             * SecureRandomSpi implementation from the first
             * Provider that supports a SecureRandom (RNG) algorithm is returned.
             * If none of the Providers support a RNG algorithm,
             * then an implementation-specific default is returned.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             * <p> See the SecureRandom section in the <a href=
             * "{@docRoot}/../technotes/guides/security/StandardNames.html#SecureRandom">
             * Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             * for information about standard RNG algorithm names.
             */
            // @ts-ignore
            constructor(seed: number)
            /**
             * Creates a SecureRandom object.
             */
            // @ts-ignore
            constructor(secureRandomSpi: java.security.SecureRandomSpi, provider: java.security.Provider)
            /**
             * Returns a SecureRandom object that implements the specified
             * Random Number Generator (RNG) algorithm.
             * <p> This method traverses the list of registered security Providers,
             * starting with the most preferred Provider.
             * A new SecureRandom object encapsulating the
             * SecureRandomSpi implementation from the first
             * Provider that supports the specified algorithm is returned.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             * <p> The returned SecureRandom object has not been seeded.  To seed the
             * returned object, call the {@code setSeed} method.
             * If {@code setSeed} is not called, the first call to
             * {@code nextBytes} will force the SecureRandom object to seed itself.
             * This self-seeding will not occur if {@code setSeed} was
             * previously called.
             */
            // @ts-ignore
            public static getInstance(algorithm: string): java.security.SecureRandom;
            /**
             * Returns a SecureRandom object that implements the specified
             * Random Number Generator (RNG) algorithm.
             * <p> A new SecureRandom object encapsulating the
             * SecureRandomSpi implementation from the specified provider
             * is returned.  The specified provider must be registered
             * in the security provider list.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             * <p> The returned SecureRandom object has not been seeded.  To seed the
             * returned object, call the {@code setSeed} method.
             * If {@code setSeed} is not called, the first call to
             * {@code nextBytes} will force the SecureRandom object to seed itself.
             * This self-seeding will not occur if {@code setSeed} was
             * previously called.
             */
            // @ts-ignore
            public static getInstance(algorithm: string, provider: string): java.security.SecureRandom;
            /**
             * Returns a SecureRandom object that implements the specified
             * Random Number Generator (RNG) algorithm.
             * <p> A new SecureRandom object encapsulating the
             * SecureRandomSpi implementation from the specified Provider
             * object is returned.  Note that the specified Provider object
             * does not have to be registered in the provider list.
             * <p> The returned SecureRandom object has not been seeded.  To seed the
             * returned object, call the {@code setSeed} method.
             * If {@code setSeed} is not called, the first call to
             * {@code nextBytes} will force the SecureRandom object to seed itself.
             * This self-seeding will not occur if {@code setSeed} was
             * previously called.
             */
            // @ts-ignore
            public static getInstance(algorithm: string, provider: java.security.Provider): java.security.SecureRandom;
            /**
             * Returns the provider of this SecureRandom object.
             */
            // @ts-ignore
            public getProvider(): java.security.Provider;
            /**
             * Returns the name of the algorithm implemented by this SecureRandom
             * object.
             */
            // @ts-ignore
            public getAlgorithm(): string;
            /**
             * Reseeds this random object. The given seed supplements, rather than
             * replaces, the existing seed. Thus, repeated calls are guaranteed
             * never to reduce randomness.
             */
            // @ts-ignore
            public setSeed(seed: number): void;
            /**
             * Reseeds this random object, using the eight bytes contained
             * in the given {@code long seed}. The given seed supplements,
             * rather than replaces, the existing seed. Thus, repeated calls
             * are guaranteed never to reduce randomness.
             * <p>This method is defined for compatibility with
             * {@code java.util.Random}.
             */
            // @ts-ignore
            public setSeed(seed: number): void;
            /**
             * Generates a user-specified number of random bytes.
             * <p> If a call to {@code setSeed} had not occurred previously,
             * the first call to this method forces this SecureRandom object
             * to seed itself.  This self-seeding will not occur if
             * {@code setSeed} was previously called.
             */
            // @ts-ignore
            public nextBytes(bytes: number): void;
            /**
             * Generates an integer containing the user-specified number of
             * pseudo-random bits (right justified, with leading zeros).  This
             * method overrides a {@code java.util.Random} method, and serves
             * to provide a source of random bits to all of the methods inherited
             * from that class (for example, {@code nextInt},
             * {@code nextLong}, and {@code nextFloat}).
             */
            // @ts-ignore
            protected next(numBits: number): number;
            /**
             * Returns the given number of seed bytes, computed using the seed
             * generation algorithm that this class uses to seed itself.  This
             * call may be used to seed other random number generators.
             * <p>This method is only included for backwards compatibility.
             * The caller is encouraged to use one of the alternative
             * {@code getInstance} methods to obtain a SecureRandom object, and
             * then call the {@code generateSeed} method to obtain seed bytes
             * from that object.
             */
            // @ts-ignore
            public static getSeed(numBytes: number): number[];
            /**
             * Returns the given number of seed bytes, computed using the seed
             * generation algorithm that this class uses to seed itself.  This
             * call may be used to seed other random number generators.
             */
            // @ts-ignore
            public generateSeed(numBytes: number): number[];
            /**
             * Returns a {@code SecureRandom} object that was selected by using
             * the algorithms/providers specified in the {@code
             * securerandom.strongAlgorithms} {@link Security} property.
             * <p>
             * Some situations require strong random values, such as when
             * creating high-value/long-lived secrets like RSA public/private
             * keys.  To help guide applications in selecting a suitable strong
             * {@code SecureRandom} implementation, Java distributions
             * include a list of known strong {@code SecureRandom}
             * implementations in the {@code securerandom.strongAlgorithms}
             * Security property.
             * <p>
             * Every implementation of the Java platform is required to
             * support at least one strong {@code SecureRandom} implementation.
             */
            // @ts-ignore
            public static getInstanceStrong(): java.security.SecureRandom;
        }
    }
}
