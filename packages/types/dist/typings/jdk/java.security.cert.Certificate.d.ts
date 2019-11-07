// @ts-nocheck
declare namespace java {
    namespace security {
        namespace cert {
            // @ts-ignore
            abstract class Certificate extends java.lang.Object {
                /**
                 * Creates a certificate of the specified type.
                 */
                // @ts-ignore
                constructor(type: string)
                /**
                 * Returns the type of this certificate.
                 */
                // @ts-ignore
                public getType(): string;
                /**
                 * Compares this certificate for equality with the specified
                 * object. If the {@code other} object is an
                 * {@code instanceof} {@code Certificate}, then
                 * its encoded form is retrieved and compared with the
                 * encoded form of this certificate.
                 */
                // @ts-ignore
                public equals(other: java.lang.Object): boolean;
                /**
                 * Returns a hashcode value for this certificate from its
                 * encoded form.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Returns the encoded form of this certificate. It is
                 * assumed that each certificate type would have only a single
                 * form of encoding; for example, X.509 certificates would
                 * be encoded as ASN.1 DER.
                 */
                // @ts-ignore
                public abstract getEncoded(): number[];
                /**
                 * Verifies that this certificate was signed using the
                 * private key that corresponds to the specified public key.
                 */
                // @ts-ignore
                public abstract verify(key: java.security.PublicKey): void;
                /**
                 * Verifies that this certificate was signed using the
                 * private key that corresponds to the specified public key.
                 * This method uses the signature verification engine
                 * supplied by the specified provider. Note that the specified
                 * Provider object does not have to be registered in the provider list.
                 * <p> This method was added to version 1.8 of the Java Platform
                 * Standard Edition. In order to maintain backwards compatibility with
                 * existing service providers, this method cannot be {@code abstract}
                 * and by default throws an {@code UnsupportedOperationException}.
                 */
                // @ts-ignore
                public verify(key: java.security.PublicKey, sigProvider: java.security.Provider): void;
                /**
                 * Returns a string representation of this certificate.
                 */
                // @ts-ignore
                public abstract toString(): string;
                /**
                 * Gets the public key from this certificate.
                 */
                // @ts-ignore
                public abstract getPublicKey(): java.security.PublicKey;
                /**
                 * Replace the Certificate to be serialized.
                 */
                // @ts-ignore
                protected writeReplace(): java.lang.Object;
            }
        }
    }
}
