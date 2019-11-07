// @ts-nocheck
declare namespace java {
    namespace security {
        // @ts-ignore
        interface Key {
            // @ts-ignore
             serialVersionUID: number;
            /**
             * Returns the standard algorithm name for this key. For
             * example, "DSA" would indicate that this key is a DSA key.
             * See Appendix A in the <a href=
             * "../../../technotes/guides/security/crypto/CryptoSpec.html#AppA">
             * Java Cryptography Architecture API Specification &amp; Reference </a>
             * for information about standard algorithm names.
             */
            // @ts-ignore
             getAlgorithm(): string;
            /**
             * Returns the name of the primary encoding format of this key,
             * or null if this key does not support encoding.
             * The primary encoding format is
             * named in terms of the appropriate ASN.1 data format, if an
             * ASN.1 specification for this key exists.
             * For example, the name of the ASN.1 data format for public
             * keys is <I>SubjectPublicKeyInfo</I>, as
             * defined by the X.509 standard; in this case, the returned format is
             * {@code "X.509"}. Similarly,
             * the name of the ASN.1 data format for private keys is
             * <I>PrivateKeyInfo</I>,
             * as defined by the PKCS #8 standard; in this case, the returned format is
             * {@code "PKCS#8"}.
             */
            // @ts-ignore
             getFormat(): string;
            /**
             * Returns the key in its primary encoding format, or null
             * if this key does not support encoding.
             */
            // @ts-ignore
             getEncoded(): number[];
        }
    }
}
