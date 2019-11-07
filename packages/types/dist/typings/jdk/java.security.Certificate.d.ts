// @ts-nocheck
declare namespace java {
    namespace security {
        // @ts-ignore
        interface Certificate {
            /**
             * Returns the guarantor of the certificate, that is, the principal
             * guaranteeing that the public key associated with this certificate
             * is that of the principal associated with this certificate. For X.509
             * certificates, the guarantor will typically be a Certificate Authority
             * (such as the United States Postal Service or Verisign, Inc.).
             */
            // @ts-ignore
             getGuarantor(): java.security.Principal;
            /**
             * Returns the principal of the principal-key pair being guaranteed by
             * the guarantor.
             */
            // @ts-ignore
             getPrincipal(): java.security.Principal;
            /**
             * Returns the key of the principal-key pair being guaranteed by
             * the guarantor.
             */
            // @ts-ignore
             getPublicKey(): java.security.PublicKey;
            /**
             * Encodes the certificate to an output stream in a format that can
             * be decoded by the {@code decode} method.
             */
            // @ts-ignore
             encode(stream: java.io.OutputStream): void;
            /**
             * Decodes a certificate from an input stream. The format should be
             * that returned by {@code getFormat} and produced by
             * {@code encode}.
             */
            // @ts-ignore
             decode(stream: java.io.InputStream): void;
            /**
             * Returns the name of the coding format. This is used as a hint to find
             * an appropriate parser. It could be "X.509", "PGP", etc. This is
             * the format produced and understood by the {@code encode}
             * and {@code decode} methods.
             */
            // @ts-ignore
             getFormat(): string;
            /**
             * Returns a string that represents the contents of the certificate.
             */
            // @ts-ignore
             toString(detailed: boolean): string;
        }
    }
}
