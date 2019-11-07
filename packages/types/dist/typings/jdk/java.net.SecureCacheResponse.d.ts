// @ts-nocheck
declare namespace java {
    namespace net {
        // @ts-ignore
        abstract class SecureCacheResponse extends java.net.CacheResponse {
            // @ts-ignore
            constructor()
            /**
             * Returns the cipher suite in use on the original connection that
             * retrieved the network resource.
             */
            // @ts-ignore
            public abstract getCipherSuite(): string;
            /**
             * Returns the certificate chain that were sent to the server during
             * handshaking of the original connection that retrieved the
             * network resource.  Note: This method is useful only
             * when using certificate-based cipher suites.
             */
            // @ts-ignore
            public abstract getLocalCertificateChain(): java.util.List;
            /**
             * Returns the server's certificate chain, which was established as
             * part of defining the session in the original connection that
             * retrieved the network resource, from cache.  Note: This method
             * can be used only when using certificate-based cipher suites;
             * using it with non-certificate-based cipher suites, such as
             * Kerberos, will throw an SSLPeerUnverifiedException.
             */
            // @ts-ignore
            public abstract getServerCertificateChain(): java.util.List;
            /**
             * Returns the server's principal which was established as part of
             * defining the session during the original connection that
             * retrieved the network resource.
             */
            // @ts-ignore
            public abstract getPeerPrincipal(): java.security.Principal;
            /**
             * Returns the principal that was sent to the server during
             * handshaking in the original connection that retrieved the
             * network resource.
             */
            // @ts-ignore
            public abstract getLocalPrincipal(): java.security.Principal;
        }
    }
}
