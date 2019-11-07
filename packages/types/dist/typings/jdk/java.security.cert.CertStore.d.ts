// @ts-nocheck
declare namespace java {
    namespace security {
        namespace cert {
            // @ts-ignore
             class CertStore extends java.lang.Object {
                /**
                 * Creates a {@code CertStore} object of the given type, and
                 * encapsulates the given provider implementation (SPI object) in it.
                 */
                // @ts-ignore
                constructor(storeSpi: java.security.cert.CertStoreSpi, provider: java.security.Provider, type: string, params: java.security.cert.CertStoreParameters)
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
                 * unless a non-null {@code CertSelector} is provided that
                 * includes specific criteria that can be used to find the certificates.
                 * Issuer and/or subject names are especially useful criteria.
                 */
                // @ts-ignore
                public getCertificates(selector: java.security.cert.CertSelector): java.util.Collection;
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
                 * unless a non-null {@code CRLSelector} is provided that
                 * includes specific criteria that can be used to find the CRLs.
                 * Issuer names and/or the certificate to be checked are especially useful.
                 */
                // @ts-ignore
                public getCRLs(selector: java.security.cert.CRLSelector): java.util.Collection;
                /**
                 * Returns a {@code CertStore} object that implements the specified
                 * {@code CertStore} type and is initialized with the specified
                 * parameters.
                 * <p> This method traverses the list of registered security Providers,
                 * starting with the most preferred Provider.
                 * A new CertStore object encapsulating the
                 * CertStoreSpi implementation from the first
                 * Provider that supports the specified type is returned.
                 * <p> Note that the list of registered providers may be retrieved via
                 * the {@link Security#getProviders() Security.getProviders()} method.
                 * <p>The {@code CertStore} that is returned is initialized with the
                 * specified {@code CertStoreParameters}. The type of parameters
                 * needed may vary between different types of {@code CertStore}s.
                 * Note that the specified {@code CertStoreParameters} object is
                 * cloned.
                 */
                // @ts-ignore
                public static getInstance(type: string, params: java.security.cert.CertStoreParameters): java.security.cert.CertStore;
                /**
                 * Returns a {@code CertStore} object that implements the specified
                 * {@code CertStore} type.
                 * <p> A new CertStore object encapsulating the
                 * CertStoreSpi implementation from the specified provider
                 * is returned.  The specified provider must be registered
                 * in the security provider list.
                 * <p> Note that the list of registered providers may be retrieved via
                 * the {@link Security#getProviders() Security.getProviders()} method.
                 * <p>The {@code CertStore} that is returned is initialized with the
                 * specified {@code CertStoreParameters}. The type of parameters
                 * needed may vary between different types of {@code CertStore}s.
                 * Note that the specified {@code CertStoreParameters} object is
                 * cloned.
                 */
                // @ts-ignore
                public static getInstance(type: string, params: java.security.cert.CertStoreParameters, provider: string): java.security.cert.CertStore;
                /**
                 * Returns a {@code CertStore} object that implements the specified
                 * {@code CertStore} type.
                 * <p> A new CertStore object encapsulating the
                 * CertStoreSpi implementation from the specified Provider
                 * object is returned.  Note that the specified Provider object
                 * does not have to be registered in the provider list.
                 * <p>The {@code CertStore} that is returned is initialized with the
                 * specified {@code CertStoreParameters}. The type of parameters
                 * needed may vary between different types of {@code CertStore}s.
                 * Note that the specified {@code CertStoreParameters} object is
                 * cloned.
                 */
                // @ts-ignore
                public static getInstance(type: string, params: java.security.cert.CertStoreParameters, provider: java.security.Provider): java.security.cert.CertStore;
                /**
                 * Returns the parameters used to initialize this {@code CertStore}.
                 * Note that the {@code CertStoreParameters} object is cloned before
                 * it is returned.
                 */
                // @ts-ignore
                public getCertStoreParameters(): java.security.cert.CertStoreParameters;
                /**
                 * Returns the type of this {@code CertStore}.
                 */
                // @ts-ignore
                public getType(): string;
                /**
                 * Returns the provider of this {@code CertStore}.
                 */
                // @ts-ignore
                public getProvider(): java.security.Provider;
                /**
                 * Returns the default {@code CertStore} type as specified by the
                 * {@code certstore.type} security property, or the string
                 * {@literal "LDAP"} if no such property exists.
                 * <p>The default {@code CertStore} type can be used by applications
                 * that do not want to use a hard-coded type when calling one of the
                 * {@code getInstance} methods, and want to provide a default
                 * {@code CertStore} type in case a user does not specify its own.
                 * <p>The default {@code CertStore} type can be changed by setting
                 * the value of the {@code certstore.type} security property to the
                 * desired type.
                 */
                // @ts-ignore
                public static getDefaultType(): string;
            }
        }
    }
}
