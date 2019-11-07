declare namespace java {
    namespace security {
        // @ts-ignore
        abstract class SignatureSpi extends java.lang.Object {
            // @ts-ignore
            constructor()
            // @ts-ignore
            protected appRandom: java.security.SecureRandom;
            /**
             * Initializes this signature object with the specified
             * public key for verification operations.
             */
            // @ts-ignore
            protected abstract engineInitVerify(publicKey: java.security.PublicKey): void;
            /**
             * Initializes this signature object with the specified
             * private key for signing operations.
             */
            // @ts-ignore
            protected abstract engineInitSign(privateKey: java.security.PrivateKey): void;
            /**
             * Initializes this signature object with the specified
             * private key and source of randomness for signing operations.
             * <p>This concrete method has been added to this previously-defined
             * abstract class. (For backwards compatibility, it cannot be abstract.)
             */
            // @ts-ignore
            protected engineInitSign(privateKey: java.security.PrivateKey, random: java.security.SecureRandom): void;
            /**
             * Updates the data to be signed or verified
             * using the specified byte.
             */
            // @ts-ignore
            protected abstract engineUpdate(b: number): void;
            /**
             * Updates the data to be signed or verified using the specified
             * ByteBuffer. Processes the {@code data.remaining()} bytes
             * starting at at {@code data.position()}.
             * Upon return, the buffer's position will be equal to its limit;
             * its limit will not have changed.
             */
            // @ts-ignore
            protected engineUpdate(input: java.nio.ByteBuffer): void;
            /**
             * Returns the signature bytes of all the data
             * updated so far.
             * The format of the signature depends on the underlying
             * signature scheme.
             */
            // @ts-ignore
            protected abstract engineSign(): number[];
            /**
             * Finishes this signature operation and stores the resulting signature
             * bytes in the provided buffer {@code outbuf}, starting at
             * {@code offset}.
             * The format of the signature depends on the underlying
             * signature scheme.
             * <p>The signature implementation is reset to its initial state
             * (the state it was in after a call to one of the
             * {@code engineInitSign} methods)
             * and can be reused to generate further signatures with the same private
             * key.
             * This method should be abstract, but we leave it concrete for
             * binary compatibility.  Knowledgeable providers should override this
             * method.
             */
            // @ts-ignore
            protected engineSign(outbuf: number, offset: number, len: number): number;
            /**
             * Verifies the passed-in signature.
             */
            // @ts-ignore
            protected abstract engineVerify(sigBytes: number): boolean;
            /**
             * Verifies the passed-in signature in the specified array
             * of bytes, starting at the specified offset.
             * <p> Note: Subclasses should overwrite the default implementation.
             */
            // @ts-ignore
            protected engineVerify(sigBytes: number, offset: number, length: number): boolean;
            /**
             * Sets the specified algorithm parameter to the specified
             * value. This method supplies a general-purpose mechanism through
             * which it is possible to set the various parameters of this object.
             * A parameter may be any settable parameter for the algorithm, such as
             * a parameter size, or a source of random bits for signature generation
             * (if appropriate), or an indication of whether or not to perform
             * a specific but optional computation. A uniform algorithm-specific
             * naming scheme for each parameter is desirable but left unspecified
             * at this time.
             */
            // @ts-ignore
            protected abstract engineSetParameter(param: string, value: java.lang.Object): void;
            /**
             * <p>This method is overridden by providers to initialize
             * this signature engine with the specified parameter set.
             */
            // @ts-ignore
            protected engineSetParameter(params: java.security.spec.AlgorithmParameterSpec): void;
            /**
             * <p>This method is overridden by providers to return the
             * parameters used with this signature engine, or null
             * if this signature engine does not use any parameters.
             * <p>The returned parameters may be the same that were used to initialize
             * this signature engine, or may contain a combination of default and
             * randomly generated parameter values used by the underlying signature
             * implementation if this signature engine requires algorithm parameters
             * but was not initialized with any.
             */
            // @ts-ignore
            protected engineGetParameters(): java.security.AlgorithmParameters;
            /**
             * Gets the value of the specified algorithm parameter.
             * This method supplies a general-purpose mechanism through which it
             * is possible to get the various parameters of this object. A parameter
             * may be any settable parameter for the algorithm, such as a parameter
             * size, or  a source of random bits for signature generation (if
             * appropriate), or an indication of whether or not to perform a
             * specific but optional computation. A uniform algorithm-specific
             * naming scheme for each parameter is desirable but left unspecified
             * at this time.
             */
            // @ts-ignore
            protected abstract engineGetParameter(param: string): java.lang.Object;
            /**
             * Returns a clone if the implementation is cloneable.
             */
            // @ts-ignore
            public clone(): java.lang.Object;
        }
    }
}
