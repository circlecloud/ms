declare namespace java {
    namespace security {
        namespace cert {
            // @ts-ignore
            abstract class CRL extends java.lang.Object {
                /**
                 * Creates a CRL of the specified type.
                 */
                // @ts-ignore
                constructor(type: string)
                /**
                 * Returns the type of this CRL.
                 */
                // @ts-ignore
                public getType(): string;
                /**
                 * Returns a string representation of this CRL.
                 */
                // @ts-ignore
                public abstract toString(): string;
                /**
                 * Checks whether the given certificate is on this CRL.
                 */
                // @ts-ignore
                public abstract isRevoked(cert: java.security.cert.Certificate): boolean;
            }
        }
    }
}
