declare namespace java {
    namespace security {
        // @ts-ignore
         class DomainLoadStoreParameter extends java.lang.Object {
            /**
             * Constructs a DomainLoadStoreParameter for a keystore domain with
             * the parameters used to protect keystore data.
             */
            // @ts-ignore
            constructor(configuration: java.net.URI, protectionParams: java.util.Map)
            /**
             * Gets the identifier for the domain configuration data.
             */
            // @ts-ignore
            public getConfiguration(): java.net.URI;
            /**
             * Gets the keystore protection parameters for keystores in this
             * domain.
             */
            // @ts-ignore
            public getProtectionParams(): java.util.Map;
            /**
             * Gets the keystore protection parameters for this domain.
             * Keystore domains do not support a protection parameter.
             */
            // @ts-ignore
            public getProtectionParameter(): java.security.KeyStore.ProtectionParameter;
        }
    }
}
