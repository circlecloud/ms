declare namespace java {
    namespace util {
        namespace jar {
            // @ts-ignore
             class JarEntry extends java.util.zip.ZipEntry {
                /**
                 * Creates a new <code>JarEntry</code> for the specified JAR file
                 * entry name.
                 */
                // @ts-ignore
                constructor(name: string)
                /**
                 * Creates a new <code>JarEntry</code> with fields taken from the
                 * specified <code>ZipEntry</code> object.
                 */
                // @ts-ignore
                constructor(ze: java.util.zip.ZipEntry)
                /**
                 * Creates a new <code>JarEntry</code> with fields taken from the
                 * specified <code>JarEntry</code> object.
                 */
                // @ts-ignore
                constructor(je: java.util.jar.JarEntry)
                /**
                 * Returns the <code>Manifest</code> <code>Attributes</code> for this
                 * entry, or <code>null</code> if none.
                 */
                // @ts-ignore
                public getAttributes(): java.util.jar.Attributes;
                /**
                 * Returns the <code>Certificate</code> objects for this entry, or
                 * <code>null</code> if none. This method can only be called once
                 * the <code>JarEntry</code> has been completely verified by reading
                 * from the entry input stream until the end of the stream has been
                 * reached. Otherwise, this method will return <code>null</code>.
                 * <p>The returned certificate array comprises all the signer certificates
                 * that were used to verify this entry. Each signer certificate is
                 * followed by its supporting certificate chain (which may be empty).
                 * Each signer certificate and its supporting certificate chain are ordered
                 * bottom-to-top (i.e., with the signer certificate first and the (root)
                 * certificate authority last).
                 */
                // @ts-ignore
                public getCertificates(): java.security.cert.Certificate[];
                /**
                 * Returns the <code>CodeSigner</code> objects for this entry, or
                 * <code>null</code> if none. This method can only be called once
                 * the <code>JarEntry</code> has been completely verified by reading
                 * from the entry input stream until the end of the stream has been
                 * reached. Otherwise, this method will return <code>null</code>.
                 * <p>The returned array comprises all the code signers that have signed
                 * this entry.
                 */
                // @ts-ignore
                public getCodeSigners(): java.security.CodeSigner[];
            }
        }
    }
}
