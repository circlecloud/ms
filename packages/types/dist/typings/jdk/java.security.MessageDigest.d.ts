// @ts-nocheck
declare namespace java {
    namespace security {
        // @ts-ignore
        abstract class MessageDigest extends java.security.MessageDigestSpi {
            /**
             * Creates a message digest with the specified algorithm name.
             */
            // @ts-ignore
            constructor(algorithm: string)
            /**
             * Returns a MessageDigest object that implements the specified digest
             * algorithm.
             * <p> This method traverses the list of registered security Providers,
             * starting with the most preferred Provider.
             * A new MessageDigest object encapsulating the
             * MessageDigestSpi implementation from the first
             * Provider that supports the specified algorithm is returned.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             */
            // @ts-ignore
            public static getInstance(algorithm: string): java.security.MessageDigest;
            /**
             * Returns a MessageDigest object that implements the specified digest
             * algorithm.
             * <p> A new MessageDigest object encapsulating the
             * MessageDigestSpi implementation from the specified provider
             * is returned.  The specified provider must be registered
             * in the security provider list.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             */
            // @ts-ignore
            public static getInstance(algorithm: string, provider: string): java.security.MessageDigest;
            /**
             * Returns a MessageDigest object that implements the specified digest
             * algorithm.
             * <p> A new MessageDigest object encapsulating the
             * MessageDigestSpi implementation from the specified Provider
             * object is returned.  Note that the specified Provider object
             * does not have to be registered in the provider list.
             */
            // @ts-ignore
            public static getInstance(algorithm: string, provider: java.security.Provider): java.security.MessageDigest;
            /**
             * Returns the provider of this message digest object.
             */
            // @ts-ignore
            public getProvider(): java.security.Provider;
            /**
             * Updates the digest using the specified byte.
             */
            // @ts-ignore
            public update(input: number): void;
            /**
             * Updates the digest using the specified array of bytes, starting
             * at the specified offset.
             */
            // @ts-ignore
            public update(input: number, offset: number, len: number): void;
            /**
             * Updates the digest using the specified array of bytes.
             */
            // @ts-ignore
            public update(input: number): void;
            /**
             * Update the digest using the specified ByteBuffer. The digest is
             * updated using the {@code input.remaining()} bytes starting
             * at {@code input.position()}.
             * Upon return, the buffer's position will be equal to its limit;
             * its limit will not have changed.
             */
            // @ts-ignore
            public update(input: java.nio.ByteBuffer): void;
            /**
             * Completes the hash computation by performing final operations
             * such as padding. The digest is reset after this call is made.
             */
            // @ts-ignore
            public digest(): number[];
            /**
             * Completes the hash computation by performing final operations
             * such as padding. The digest is reset after this call is made.
             */
            // @ts-ignore
            public digest(buf: number, offset: number, len: number): number;
            /**
             * Performs a final update on the digest using the specified array
             * of bytes, then completes the digest computation. That is, this
             * method first calls {@link #update(byte[]) update(input)},
             * passing the <i>input</i> array to the {@code update} method,
             * then calls {@link #digest() digest()}.
             */
            // @ts-ignore
            public digest(input: number): number[];
            /**
             * Returns a string representation of this message digest object.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Compares two digests for equality. Does a simple byte compare.
             */
            // @ts-ignore
            public static isEqual(digesta: number, digestb: number): boolean;
            /**
             * Resets the digest for further use.
             */
            // @ts-ignore
            public reset(): void;
            /**
             * Returns a string that identifies the algorithm, independent of
             * implementation details. The name should be a standard
             * Java Security name (such as "SHA-256").
             * See the MessageDigest section in the <a href=
             * "{@docRoot}/../technotes/guides/security/StandardNames.html#MessageDigest">
             * Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             * for information about standard algorithm names.
             */
            // @ts-ignore
            public getAlgorithm(): string;
            /**
             * Returns the length of the digest in bytes, or 0 if this operation is
             * not supported by the provider and the implementation is not cloneable.
             */
            // @ts-ignore
            public getDigestLength(): number;
            /**
             * Returns a clone if the implementation is cloneable.
             */
            // @ts-ignore
            public clone(): java.lang.Object;
        }
    }
}
