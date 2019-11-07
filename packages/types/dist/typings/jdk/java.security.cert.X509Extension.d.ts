// @ts-nocheck
declare namespace java {
    namespace security {
        namespace cert {
            // @ts-ignore
            interface X509Extension {
                /**
                 * Check if there is a critical extension that is not supported.
                 */
                // @ts-ignore
                 hasUnsupportedCriticalExtension(): boolean;
                /**
                 * Gets a Set of the OID strings for the extension(s) marked
                 * CRITICAL in the certificate/CRL managed by the object
                 * implementing this interface.
                 * Here is sample code to get a Set of critical extensions from an
                 * X509Certificate and print the OIDs:
                 * <pre>{@code
                 * X509Certificate cert = null;
                 * try (InputStream inStrm = new FileInputStream("DER-encoded-Cert")) {
                 * CertificateFactory cf = CertificateFactory.getInstance("X.509");
                 * cert = (X509Certificate)cf.generateCertificate(inStrm);
                 * }
                 * Set<String> critSet = cert.getCriticalExtensionOIDs();
                 * if (critSet != null && !critSet.isEmpty()) {
                 * System.out.println("Set of critical extensions:");
                 * for (String oid : critSet) {
                 * System.out.println(oid);
                 * }
                 * }
                 * }</pre>
                 */
                // @ts-ignore
                 getCriticalExtensionOIDs(): java.util.Set;
                /**
                 * Gets a Set of the OID strings for the extension(s) marked
                 * NON-CRITICAL in the certificate/CRL managed by the object
                 * implementing this interface.
                 * Here is sample code to get a Set of non-critical extensions from an
                 * X509CRL revoked certificate entry and print the OIDs:
                 * <pre>{@code
                 * CertificateFactory cf = null;
                 * X509CRL crl = null;
                 * try (InputStream inStrm = new FileInputStream("DER-encoded-CRL")) {
                 * cf = CertificateFactory.getInstance("X.509");
                 * crl = (X509CRL)cf.generateCRL(inStrm);
                 * }
                 * byte[] certData = <DER-encoded certificate data>
                 * ByteArrayInputStream bais = new ByteArrayInputStream(certData);
                 * X509Certificate cert = (X509Certificate)cf.generateCertificate(bais);
                 * X509CRLEntry badCert =
                 * crl.getRevokedCertificate(cert.getSerialNumber());
                 * if (badCert != null) {
                 * Set<String> nonCritSet = badCert.getNonCriticalExtensionOIDs();
                 * if (nonCritSet != null)
                 * for (String oid : nonCritSet) {
                 * System.out.println(oid);
                 * }
                 * }
                 * }</pre>
                 */
                // @ts-ignore
                 getNonCriticalExtensionOIDs(): java.util.Set;
                /**
                 * Gets the DER-encoded OCTET string for the extension value
                 * (<em>extnValue</em>) identified by the passed-in {@code oid}
                 * String.
                 * The {@code oid} string is
                 * represented by a set of nonnegative whole numbers separated
                 * by periods.
                 * <p>For example:<br>
                 * <table border=groove summary="Examples of OIDs and extension names">
                 * <tr>
                 * <th>OID <em>(Object Identifier)</em></th>
                 * <th>Extension Name</th></tr>
                 * <tr><td>2.5.29.14</td>
                 * <td>SubjectKeyIdentifier</td></tr>
                 * <tr><td>2.5.29.15</td>
                 * <td>KeyUsage</td></tr>
                 * <tr><td>2.5.29.16</td>
                 * <td>PrivateKeyUsage</td></tr>
                 * <tr><td>2.5.29.17</td>
                 * <td>SubjectAlternativeName</td></tr>
                 * <tr><td>2.5.29.18</td>
                 * <td>IssuerAlternativeName</td></tr>
                 * <tr><td>2.5.29.19</td>
                 * <td>BasicConstraints</td></tr>
                 * <tr><td>2.5.29.30</td>
                 * <td>NameConstraints</td></tr>
                 * <tr><td>2.5.29.33</td>
                 * <td>PolicyMappings</td></tr>
                 * <tr><td>2.5.29.35</td>
                 * <td>AuthorityKeyIdentifier</td></tr>
                 * <tr><td>2.5.29.36</td>
                 * <td>PolicyConstraints</td></tr>
                 * </table>
                 */
                // @ts-ignore
                 getExtensionValue(oid: string): number[];
            }
        }
    }
}
