declare namespace java {
    namespace security {
        namespace cert {
            // @ts-ignore
            abstract class CertPath extends java.lang.Object {
                /**
                 * Creates a {@code CertPath} of the specified type.
                 * <p>
                 * This constructor is protected because most users should use a
                 * {@code CertificateFactory} to create {@code CertPath}s.
                 */
                // @ts-ignore
                constructor(type: string)
                /**
                 * Returns the type of {@code Certificate}s in this certification
                 * path. This is the same string that would be returned by
                 * {@link java.security.cert.Certificate#getType() cert.getType()}
                 * for all {@code Certificate}s in the certification path.
                 */
                // @ts-ignore
                public getType(): string;
                /**
                 * Returns an iteration of the encodings supported by this certification
                 * path, with the default encoding first. Attempts to modify the returned
                 * {@code Iterator} via its {@code remove} method result in an
                 * {@code UnsupportedOperationException}.
                 */
                // @ts-ignore
                public abstract getEncodings(): java.util.Iterator;
                /**
                 * Compares this certification path for equality with the specified
                 * object. Two {@code CertPath}s are equal if and only if their
                 * types are equal and their certificate {@code List}s (and by
                 * implication the {@code Certificate}s in those {@code List}s)
                 * are equal. A {@code CertPath} is never equal to an object that is
                 * not a {@code CertPath}.
                 * <p>
                 * This algorithm is implemented by this method. If it is overridden,
                 * the behavior specified here must be maintained.
                 */
                // @ts-ignore
                public equals(other: java.lang.Object): boolean;
                /**
                 * Returns the hashcode for this certification path. The hash code of
                 * a certification path is defined to be the result of the following
                 * calculation:
                 * <pre>{@code
                 * hashCode = path.getType().hashCode();
                 * hashCode = 31*hashCode + path.getCertificates().hashCode();
                 * }</pre>
                 * This ensures that {@code path1.equals(path2)} implies that
                 * {@code path1.hashCode()==path2.hashCode()} for any two certification
                 * paths, {@code path1} and {@code path2}, as required by the
                 * general contract of {@code Object.hashCode}.
                 */
                // @ts-ignore
                public hashCode(): number;
                /**
                 * Returns a string representation of this certification path.
                 * This calls the {@code toString} method on each of the
                 * {@code Certificate}s in the path.
                 */
                // @ts-ignore
                public toString(): string;
                /**
                 * Returns the encoded form of this certification path, using the default
                 * encoding.
                 */
                // @ts-ignore
                public abstract getEncoded(): number[];
                /**
                 * Returns the list of certificates in this certification path.
                 * The {@code List} returned must be immutable and thread-safe.
                 */
                // @ts-ignore
                public abstract getCertificates(): java.util.List;
                /**
                 * Replaces the {@code CertPath} to be serialized with a
                 * {@code CertPathRep} object.
                 */
                // @ts-ignore
                protected writeReplace(): java.lang.Object;
            }
        }
    }
}
