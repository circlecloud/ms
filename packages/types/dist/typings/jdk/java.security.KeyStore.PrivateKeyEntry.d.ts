declare namespace java {
    namespace security {
        namespace KeyStore {
            // @ts-ignore
             class PrivateKeyEntry extends java.lang.Object {
                /**
                 * Constructs a {@code PrivateKeyEntry} with a
                 * {@code PrivateKey} and corresponding certificate chain.
                 * <p> The specified {@code chain} is cloned before it is stored
                 * in the new {@code PrivateKeyEntry} object.
                 */
                // @ts-ignore
                constructor(privateKey: java.security.PrivateKey, chain: java.security.cert.Certificate)
                /**
                 * Constructs a {@code PrivateKeyEntry} with a {@code PrivateKey} and
                 * corresponding certificate chain and associated entry attributes.
                 * <p> The specified {@code chain} and {@code attributes} are cloned
                 * before they are stored in the new {@code PrivateKeyEntry} object.
                 */
                // @ts-ignore
                constructor(privateKey: java.security.PrivateKey, chain: java.security.cert.Certificate, attributes: java.util.Set)
                /**
                 * Gets the {@code PrivateKey} from this entry.
                 */
                // @ts-ignore
                public getPrivateKey(): java.security.PrivateKey;
                /**
                 * Gets the {@code Certificate} chain from this entry.
                 * <p> The stored chain is cloned before being returned.
                 */
                // @ts-ignore
                public getCertificateChain(): java.security.cert.Certificate[];
                /**
                 * Gets the end entity {@code Certificate}
                 * from the certificate chain in this entry.
                 */
                // @ts-ignore
                public getCertificate(): java.security.cert.Certificate;
                /**
                 * Retrieves the attributes associated with an entry.
                 * <p>
                 */
                // @ts-ignore
                public getAttributes(): java.util.Set;
                /**
                 * Returns a string representation of this PrivateKeyEntry.
                 */
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
