declare namespace java {
    namespace security {
        namespace cert {
            // @ts-ignore
             class CertificateFactory extends java.lang.Object {
                /**
                 * Creates a CertificateFactory object of the given type, and encapsulates
                 * the given provider implementation (SPI object) in it.
                 */
                // @ts-ignore
                constructor(certFacSpi: java.security.cert.CertificateFactorySpi, provider: java.security.Provider, type: string)
                /**
                 * Returns a certificate factory object that implements the
                 * specified certificate type.
                 * <p> This method traverses the list of registered security Providers,
                 * starting with the most preferred Provider.
                 * A new CertificateFactory object encapsulating the
                 * CertificateFactorySpi implementation from the first
                 * Provider that supports the specified type is returned.
                 * <p> Note that the list of registered providers may be retrieved via
                 * the {@link Security#getProviders() Security.getProviders()} method.
                 */
                // @ts-ignore
                public static getInstance(type: string): java.security.cert.CertificateFactory;
                /**
                 * Returns a certificate factory object for the specified
                 * certificate type.
                 * <p> A new CertificateFactory object encapsulating the
                 * CertificateFactorySpi implementation from the specified provider
                 * is returned.  The specified provider must be registered
                 * in the security provider list.
                 * <p> Note that the list of registered providers may be retrieved via
                 * the {@link Security#getProviders() Security.getProviders()} method.
                 */
                // @ts-ignore
                public static getInstance(type: string, provider: string): java.security.cert.CertificateFactory;
                /**
                 * Returns a certificate factory object for the specified
                 * certificate type.
                 * <p> A new CertificateFactory object encapsulating the
                 * CertificateFactorySpi implementation from the specified Provider
                 * object is returned.  Note that the specified Provider object
                 * does not have to be registered in the provider list.
                 */
                // @ts-ignore
                public static getInstance(type: string, provider: java.security.Provider): java.security.cert.CertificateFactory;
                /**
                 * Returns the provider of this certificate factory.
                 */
                // @ts-ignore
                public getProvider(): java.security.Provider;
                /**
                 * Returns the name of the certificate type associated with this
                 * certificate factory.
                 */
                // @ts-ignore
                public getType(): string;
                /**
                 * Generates a certificate object and initializes it with
                 * the data read from the input stream {@code inStream}.
                 * <p>In order to take advantage of the specialized certificate format
                 * supported by this certificate factory,
                 * the returned certificate object can be typecast to the corresponding
                 * certificate class. For example, if this certificate
                 * factory implements X.509 certificates, the returned certificate object
                 * can be typecast to the {@code X509Certificate} class.
                 * <p>In the case of a certificate factory for X.509 certificates, the
                 * certificate provided in {@code inStream} must be DER-encoded and
                 * may be supplied in binary or printable (Base64) encoding. If the
                 * certificate is provided in Base64 encoding, it must be bounded at
                 * the beginning by -----BEGIN CERTIFICATE-----, and must be bounded at
                 * the end by -----END CERTIFICATE-----.
                 * <p>Note that if the given input stream does not support
                 * {@link java.io.InputStream#mark(int) mark} and
                 * {@link java.io.InputStream#reset() reset}, this method will
                 * consume the entire input stream. Otherwise, each call to this
                 * method consumes one certificate and the read position of the
                 * input stream is positioned to the next available byte after
                 * the inherent end-of-certificate marker. If the data in the input stream
                 * does not contain an inherent end-of-certificate marker (other
                 * than EOF) and there is trailing data after the certificate is parsed, a
                 * {@code CertificateException} is thrown.
                 */
                // @ts-ignore
                public generateCertificate(inStream: java.io.InputStream): java.security.cert.Certificate;
                /**
                 * Returns an iteration of the {@code CertPath} encodings supported
                 * by this certificate factory, with the default encoding first. See
                 * the CertPath Encodings section in the <a href=
                 * "{@docRoot}/../technotes/guides/security/StandardNames.html#CertPathEncodings">
                 * Java Cryptography Architecture Standard Algorithm Name Documentation</a>
                 * for information about standard encoding names and their formats.
                 * <p>
                 * Attempts to modify the returned {@code Iterator} via its
                 * {@code remove} method result in an
                 * {@code UnsupportedOperationException}.
                 */
                // @ts-ignore
                public getCertPathEncodings(): java.util.Iterator;
                /**
                 * Generates a {@code CertPath} object and initializes it with
                 * the data read from the {@code InputStream} inStream. The data
                 * is assumed to be in the default encoding. The name of the default
                 * encoding is the first element of the {@code Iterator} returned by
                 * the {@link #getCertPathEncodings getCertPathEncodings} method.
                 */
                // @ts-ignore
                public generateCertPath(inStream: java.io.InputStream): java.security.cert.CertPath;
                /**
                 * Generates a {@code CertPath} object and initializes it with
                 * the data read from the {@code InputStream} inStream. The data
                 * is assumed to be in the specified encoding. See
                 * the CertPath Encodings section in the <a href=
                 * "{@docRoot}/../technotes/guides/security/StandardNames.html#CertPathEncodings">
                 * Java Cryptography Architecture Standard Algorithm Name Documentation</a>
                 * for information about standard encoding names and their formats.
                 */
                // @ts-ignore
                public generateCertPath(inStream: java.io.InputStream, encoding: string): java.security.cert.CertPath;
                /**
                 * Generates a {@code CertPath} object and initializes it with
                 * a {@code List} of {@code Certificate}s.
                 * <p>
                 * The certificates supplied must be of a type supported by the
                 * {@code CertificateFactory}. They will be copied out of the supplied
                 * {@code List} object.
                 */
                // @ts-ignore
                public generateCertPath(certificates: java.util.List): java.security.cert.CertPath;
                /**
                 * Returns a (possibly empty) collection view of the certificates read
                 * from the given input stream {@code inStream}.
                 * <p>In order to take advantage of the specialized certificate format
                 * supported by this certificate factory, each element in
                 * the returned collection view can be typecast to the corresponding
                 * certificate class. For example, if this certificate
                 * factory implements X.509 certificates, the elements in the returned
                 * collection can be typecast to the {@code X509Certificate} class.
                 * <p>In the case of a certificate factory for X.509 certificates,
                 * {@code inStream} may contain a sequence of DER-encoded certificates
                 * in the formats described for
                 * {@link #generateCertificate(java.io.InputStream) generateCertificate}.
                 * In addition, {@code inStream} may contain a PKCS#7 certificate
                 * chain. This is a PKCS#7 <i>SignedData</i> object, with the only
                 * significant field being <i>certificates</i>. In particular, the
                 * signature and the contents are ignored. This format allows multiple
                 * certificates to be downloaded at once. If no certificates are present,
                 * an empty collection is returned.
                 * <p>Note that if the given input stream does not support
                 * {@link java.io.InputStream#mark(int) mark} and
                 * {@link java.io.InputStream#reset() reset}, this method will
                 * consume the entire input stream.
                 */
                // @ts-ignore
                public generateCertificates(inStream: java.io.InputStream): java.util.Collection;
                /**
                 * Generates a certificate revocation list (CRL) object and initializes it
                 * with the data read from the input stream {@code inStream}.
                 * <p>In order to take advantage of the specialized CRL format
                 * supported by this certificate factory,
                 * the returned CRL object can be typecast to the corresponding
                 * CRL class. For example, if this certificate
                 * factory implements X.509 CRLs, the returned CRL object
                 * can be typecast to the {@code X509CRL} class.
                 * <p>Note that if the given input stream does not support
                 * {@link java.io.InputStream#mark(int) mark} and
                 * {@link java.io.InputStream#reset() reset}, this method will
                 * consume the entire input stream. Otherwise, each call to this
                 * method consumes one CRL and the read position of the input stream
                 * is positioned to the next available byte after the inherent
                 * end-of-CRL marker. If the data in the
                 * input stream does not contain an inherent end-of-CRL marker (other
                 * than EOF) and there is trailing data after the CRL is parsed, a
                 * {@code CRLException} is thrown.
                 */
                // @ts-ignore
                public generateCRL(inStream: java.io.InputStream): java.security.cert.CRL;
                /**
                 * Returns a (possibly empty) collection view of the CRLs read
                 * from the given input stream {@code inStream}.
                 * <p>In order to take advantage of the specialized CRL format
                 * supported by this certificate factory, each element in
                 * the returned collection view can be typecast to the corresponding
                 * CRL class. For example, if this certificate
                 * factory implements X.509 CRLs, the elements in the returned
                 * collection can be typecast to the {@code X509CRL} class.
                 * <p>In the case of a certificate factory for X.509 CRLs,
                 * {@code inStream} may contain a sequence of DER-encoded CRLs.
                 * In addition, {@code inStream} may contain a PKCS#7 CRL
                 * set. This is a PKCS#7 <i>SignedData</i> object, with the only
                 * significant field being <i>crls</i>. In particular, the
                 * signature and the contents are ignored. This format allows multiple
                 * CRLs to be downloaded at once. If no CRLs are present,
                 * an empty collection is returned.
                 * <p>Note that if the given input stream does not support
                 * {@link java.io.InputStream#mark(int) mark} and
                 * {@link java.io.InputStream#reset() reset}, this method will
                 * consume the entire input stream.
                 */
                // @ts-ignore
                public generateCRLs(inStream: java.io.InputStream): java.util.Collection;
            }
        }
    }
}
