declare namespace java {
    namespace security {
        // @ts-ignore
        abstract class Signature extends java.security.SignatureSpi {
            /**
             * Creates a Signature object for the specified algorithm.
             */
            // @ts-ignore
            constructor(algorithm: string)
            // @ts-ignore
            protected static UNINITIALIZED: number;
            // @ts-ignore
            protected static SIGN: number;
            // @ts-ignore
            protected static VERIFY: number;
            // @ts-ignore
            protected state: number;
            /**
             * Returns a Signature object that implements the specified signature
             * algorithm.
             * <p> This method traverses the list of registered security Providers,
             * starting with the most preferred Provider.
             * A new Signature object encapsulating the
             * SignatureSpi implementation from the first
             * Provider that supports the specified algorithm is returned.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             */
            // @ts-ignore
            public static getInstance(algorithm: string): java.security.Signature;
            /**
             * Returns a Signature object that implements the specified signature
             * algorithm.
             * <p> A new Signature object encapsulating the
             * SignatureSpi implementation from the specified provider
             * is returned.  The specified provider must be registered
             * in the security provider list.
             * <p> Note that the list of registered providers may be retrieved via
             * the {@link Security#getProviders() Security.getProviders()} method.
             */
            // @ts-ignore
            public static getInstance(algorithm: string, provider: string): java.security.Signature;
            /**
             * Returns a Signature object that implements the specified
             * signature algorithm.
             * <p> A new Signature object encapsulating the
             * SignatureSpi implementation from the specified Provider
             * object is returned.  Note that the specified Provider object
             * does not have to be registered in the provider list.
             */
            // @ts-ignore
            public static getInstance(algorithm: string, provider: java.security.Provider): java.security.Signature;
            /**
             * Returns the provider of this signature object.
             */
            // @ts-ignore
            public getProvider(): java.security.Provider;
            /**
             * Initializes this object for verification. If this method is called
             * again with a different argument, it negates the effect
             * of this call.
             */
            // @ts-ignore
            public initVerify(publicKey: java.security.PublicKey): void;
            /**
             * Initializes this object for verification, using the public key from
             * the given certificate.
             * <p>If the certificate is of type X.509 and has a <i>key usage</i>
             * extension field marked as critical, and the value of the <i>key usage</i>
             * extension field implies that the public key in
             * the certificate and its corresponding private key are not
             * supposed to be used for digital signatures, an
             * {@code InvalidKeyException} is thrown.
             */
            // @ts-ignore
            public initVerify(certificate: java.security.cert.Certificate): void;
            /**
             * Initialize this object for signing. If this method is called
             * again with a different argument, it negates the effect
             * of this call.
             */
            // @ts-ignore
            public initSign(privateKey: java.security.PrivateKey): void;
            /**
             * Initialize this object for signing. If this method is called
             * again with a different argument, it negates the effect
             * of this call.
             */
            // @ts-ignore
            public initSign(privateKey: java.security.PrivateKey, random: java.security.SecureRandom): void;
            /**
             * Returns the signature bytes of all the data updated.
             * The format of the signature depends on the underlying
             * signature scheme.
             * <p>A call to this method resets this signature object to the state
             * it was in when previously initialized for signing via a
             * call to {@code initSign(PrivateKey)}. That is, the object is
             * reset and available to generate another signature from the same
             * signer, if desired, via new calls to {@code update} and
             * {@code sign}.
             */
            // @ts-ignore
            public sign(): number[];
            /**
             * Finishes the signature operation and stores the resulting signature
             * bytes in the provided buffer {@code outbuf}, starting at
             * {@code offset}.
             * The format of the signature depends on the underlying
             * signature scheme.
             * <p>This signature object is reset to its initial state (the state it
             * was in after a call to one of the {@code initSign} methods) and
             * can be reused to generate further signatures with the same private key.
             */
            // @ts-ignore
            public sign(outbuf: number, offset: number, len: number): number;
            /**
             * Verifies the passed-in signature.
             * <p>A call to this method resets this signature object to the state
             * it was in when previously initialized for verification via a
             * call to {@code initVerify(PublicKey)}. That is, the object is
             * reset and available to verify another signature from the identity
             * whose public key was specified in the call to {@code initVerify}.
             */
            // @ts-ignore
            public verify(signature: number): boolean;
            /**
             * Verifies the passed-in signature in the specified array
             * of bytes, starting at the specified offset.
             * <p>A call to this method resets this signature object to the state
             * it was in when previously initialized for verification via a
             * call to {@code initVerify(PublicKey)}. That is, the object is
             * reset and available to verify another signature from the identity
             * whose public key was specified in the call to {@code initVerify}.
             */
            // @ts-ignore
            public verify(signature: number, offset: number, length: number): boolean;
            /**
             * Updates the data to be signed or verified by a byte.
             */
            // @ts-ignore
            public update(b: number): void;
            /**
             * Updates the data to be signed or verified, using the specified
             * array of bytes.
             */
            // @ts-ignore
            public update(data: number): void;
            /**
             * Updates the data to be signed or verified, using the specified
             * array of bytes, starting at the specified offset.
             */
            // @ts-ignore
            public update(data: number, off: number, len: number): void;
            /**
             * Updates the data to be signed or verified using the specified
             * ByteBuffer. Processes the {@code data.remaining()} bytes
             * starting at at {@code data.position()}.
             * Upon return, the buffer's position will be equal to its limit;
             * its limit will not have changed.
             */
            // @ts-ignore
            public update(data: java.nio.ByteBuffer): void;
            /**
             * Returns the name of the algorithm for this signature object.
             */
            // @ts-ignore
            public getAlgorithm(): string;
            /**
             * Returns a string representation of this signature object,
             * providing information that includes the state of the object
             * and the name of the algorithm used.
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Sets the specified algorithm parameter to the specified value.
             * This method supplies a general-purpose mechanism through
             * which it is possible to set the various parameters of this object.
             * A parameter may be any settable parameter for the algorithm, such as
             * a parameter size, or a source of random bits for signature generation
             * (if appropriate), or an indication of whether or not to perform
             * a specific but optional computation. A uniform algorithm-specific
             * naming scheme for each parameter is desirable but left unspecified
             * at this time.
             */
            // @ts-ignore
            public setParameter(param: string, value: java.lang.Object): void;
            /**
             * Initializes this signature engine with the specified parameter set.
             */
            // @ts-ignore
            public setParameter(params: java.security.spec.AlgorithmParameterSpec): void;
            /**
             * Returns the parameters used with this signature object.
             * <p>The returned parameters may be the same that were used to initialize
             * this signature, or may contain a combination of default and randomly
             * generated parameter values used by the underlying signature
             * implementation if this signature requires algorithm parameters but
             * was not initialized with any.
             */
            // @ts-ignore
            public getParameters(): java.security.AlgorithmParameters;
            /**
             * Gets the value of the specified algorithm parameter. This method
             * supplies a general-purpose mechanism through which it is possible to
             * get the various parameters of this object. A parameter may be any
             * settable parameter for the algorithm, such as a parameter size, or
             * a source of random bits for signature generation (if appropriate),
             * or an indication of whether or not to perform a specific but optional
             * computation. A uniform algorithm-specific naming scheme for each
             * parameter is desirable but left unspecified at this time.
             */
            // @ts-ignore
            public getParameter(param: string): java.lang.Object;
            /**
             * Returns a clone if the implementation is cloneable.
             */
            // @ts-ignore
            public clone(): java.lang.Object;
        }
    }
}
