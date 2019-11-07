declare namespace java {
    namespace security {
        namespace cert {
            // @ts-ignore
            abstract class CertStoreSpi extends java.lang.Object {
                /**
                 * The sole constructor.
                 */
                // @ts-ignore
                constructor(params: java.security.cert.CertStoreParameters)
                /**
                 * Returns a {@code Collection} of {@code Certificate}s that
                 * match the specified selector. If no {@code Certificate}s
                 * match the selector, an empty {@code Collection} will be returned.
                 * <p>
                 * For some {@code CertStore} types, the resulting
                 * {@code Collection} may not contain <b>all</b> of the
                 * {@code Certificate}s that match the selector. For instance,
                 * an LDAP {@code CertStore} may not search all entries in the
                 * directory. Instead, it may just search entries that are likely to
                 * contain the {@code Certificate}s it is looking for.
                 * <p>
                 * Some {@code CertStore} implementations (especially LDAP
                 * {@code CertStore}s) may throw a {@code CertStoreException}
                 * unless a non-null {@code CertSelector} is provided that includes
                 * specific criteria that can be used to find the certificates. Issuer
                 * and/or subject names are especially useful criteria.
                 */
                // @ts-ignore
                public abstract engineGetCertificates(selector: java.security.cert.CertSelector): java.util.Collection;
                /**
                 * Returns a {@code Collection} of {@code CRL}s that
                 * match the specified selector. If no {@code CRL}s
                 * match the selector, an empty {@code Collection} will be returned.
                 * <p>
                 * For some {@code CertStore} types, the resulting
                 * {@code Collection} may not contain <b>all</b> of the
                 * {@code CRL}s that match the selector. For instance,
                 * an LDAP {@code CertStore} may not search all entries in the
                 * directory. Instead, it may just search entries that are likely to
                 * contain the {@code CRL}s it is looking for.
                 * <p>
                 * Some {@code CertStore} implementations (especially LDAP
                 * {@code CertStore}s) may throw a {@code CertStoreException}
                 * unless a non-null {@code CRLSelector} is provided that includes
                 * specific criteria that can be used to find the CRLs. Issuer names
                 * and/or the certificate to be checked are especially useful.
                 */
                // @ts-ignore
                public abstract engineGetCRLs(selector: java.security.cert.CRLSelector): java.util.Collection;
            }
        }
    }
}
