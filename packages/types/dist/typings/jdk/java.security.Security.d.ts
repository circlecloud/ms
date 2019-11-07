declare namespace java {
    namespace security {
        // @ts-ignore
         class Security extends java.lang.Object {
            /**
             * Gets a specified property for an algorithm. The algorithm name
             * should be a standard name. See the <a href=
             * "{@docRoot}/../technotes/guides/security/StandardNames.html">
             * Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             * for information about standard algorithm names.
             * One possible use is by specialized algorithm parsers, which may map
             * classes to algorithms which they understand (much like Key parsers
             * do).
             */
            // @ts-ignore
            public static getAlgorithmProperty(algName: string, propName: string): string;
            /**
             * Adds a new provider, at a specified position. The position is
             * the preference order in which providers are searched for
             * requested algorithms.  The position is 1-based, that is,
             * 1 is most preferred, followed by 2, and so on.
             * <p>If the given provider is installed at the requested position,
             * the provider that used to be at that position, and all providers
             * with a position greater than {@code position}, are shifted up
             * one position (towards the end of the list of installed providers).
             * <p>A provider cannot be added if it is already installed.
             * <p>If there is a security manager, the
             * {@link java.lang.SecurityManager#checkSecurityAccess} method is called
             * with the {@code "insertProvider"} permission target name to see if
             * it's ok to add a new provider. If this permission check is denied,
             * {@code checkSecurityAccess} is called again with the
             * {@code "insertProvider."+provider.getName()} permission target name. If
             * both checks are denied, a {@code SecurityException} is thrown.
             */
            // @ts-ignore
            public static insertProviderAt(provider: java.security.Provider, position: number): number;
            /**
             * Adds a provider to the next position available.
             * <p>If there is a security manager, the
             * {@link java.lang.SecurityManager#checkSecurityAccess} method is called
             * with the {@code "insertProvider"} permission target name to see if
             * it's ok to add a new provider. If this permission check is denied,
             * {@code checkSecurityAccess} is called again with the
             * {@code "insertProvider."+provider.getName()} permission target name. If
             * both checks are denied, a {@code SecurityException} is thrown.
             */
            // @ts-ignore
            public static addProvider(provider: java.security.Provider): number;
            /**
             * Removes the provider with the specified name.
             * <p>When the specified provider is removed, all providers located
             * at a position greater than where the specified provider was are shifted
             * down one position (towards the head of the list of installed
             * providers).
             * <p>This method returns silently if the provider is not installed or
             * if name is null.
             * <p>First, if there is a security manager, its
             * {@code checkSecurityAccess}
             * method is called with the string {@code "removeProvider."+name}
             * to see if it's ok to remove the provider.
             * If the default implementation of {@code checkSecurityAccess}
             * is used (i.e., that method is not overriden), then this will result in
             * a call to the security manager's {@code checkPermission} method
             * with a {@code SecurityPermission("removeProvider."+name)}
             * permission.
             */
            // @ts-ignore
            public static removeProvider(name: string): void;
            /**
             * Returns an array containing all the installed providers. The order of
             * the providers in the array is their preference order.
             */
            // @ts-ignore
            public static getProviders(): java.security.Provider[];
            /**
             * Returns the provider installed with the specified name, if
             * any. Returns null if no provider with the specified name is
             * installed or if name is null.
             */
            // @ts-ignore
            public static getProvider(name: string): java.security.Provider;
            /**
             * Returns an array containing all installed providers that satisfy the
             * specified selection criterion, or null if no such providers have been
             * installed. The returned providers are ordered
             * according to their
             * {@linkplain #insertProviderAt(java.security.Provider, int) preference order}.
             * <p> A cryptographic service is always associated with a particular
             * algorithm or type. For example, a digital signature service is
             * always associated with a particular algorithm (e.g., DSA),
             * and a CertificateFactory service is always associated with
             * a particular certificate type (e.g., X.509).
             * <p>The selection criterion must be specified in one of the following two
             * formats:
             * <ul>
             * <li> <i>{@literal <crypto_service>.<algorithm_or_type>}</i>
             * <p> The cryptographic service name must not contain any dots.
             * <p> A
             * provider satisfies the specified selection criterion iff the provider
             * implements the
             * specified algorithm or type for the specified cryptographic service.
             * <p> For example, "CertificateFactory.X.509"
             * would be satisfied by any provider that supplied
             * a CertificateFactory implementation for X.509 certificates.
             * <li> <i>{@literal <crypto_service>.<algorithm_or_type>
             * <attribute_name>:<attribute_value>}</i>
             * <p> The cryptographic service name must not contain any dots. There
             * must be one or more space characters between the
             * <i>{@literal <algorithm_or_type>}</i> and the
             * <i>{@literal <attribute_name>}</i>.
             * <p> A provider satisfies this selection criterion iff the
             * provider implements the specified algorithm or type for the specified
             * cryptographic service and its implementation meets the
             * constraint expressed by the specified attribute name/value pair.
             * <p> For example, "Signature.SHA1withDSA KeySize:1024" would be
             * satisfied by any provider that implemented
             * the SHA1withDSA signature algorithm with a keysize of 1024 (or larger).
             * </ul>
             * <p> See the <a href=
             * "{@docRoot}/../technotes/guides/security/StandardNames.html">
             * Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             * for information about standard cryptographic service names, standard
             * algorithm names and standard attribute names.
             */
            // @ts-ignore
            public static getProviders(filter: string): java.security.Provider[];
            /**
             * Returns an array containing all installed providers that satisfy the
             * specified* selection criteria, or null if no such providers have been
             * installed. The returned providers are ordered
             * according to their
             * {@linkplain #insertProviderAt(java.security.Provider, int)
             * preference order}.
             * <p>The selection criteria are represented by a map.
             * Each map entry represents a selection criterion.
             * A provider is selected iff it satisfies all selection
             * criteria. The key for any entry in such a map must be in one of the
             * following two formats:
             * <ul>
             * <li> <i>{@literal <crypto_service>.<algorithm_or_type>}</i>
             * <p> The cryptographic service name must not contain any dots.
             * <p> The value associated with the key must be an empty string.
             * <p> A provider
             * satisfies this selection criterion iff the provider implements the
             * specified algorithm or type for the specified cryptographic service.
             * <li>  <i>{@literal <crypto_service>}.
             * {@literal <algorithm_or_type> <attribute_name>}</i>
             * <p> The cryptographic service name must not contain any dots. There
             * must be one or more space characters between the
             * <i>{@literal <algorithm_or_type>}</i>
             * and the <i>{@literal <attribute_name>}</i>.
             * <p> The value associated with the key must be a non-empty string.
             * A provider satisfies this selection criterion iff the
             * provider implements the specified algorithm or type for the specified
             * cryptographic service and its implementation meets the
             * constraint expressed by the specified attribute name/value pair.
             * </ul>
             * <p> See the <a href=
             * "../../../technotes/guides/security/StandardNames.html">
             * Java Cryptography Architecture Standard Algorithm Name Documentation</a>
             * for information about standard cryptographic service names, standard
             * algorithm names and standard attribute names.
             */
            // @ts-ignore
            public static getProviders(filter: java.util.Map): java.security.Provider[];
            /**
             * Gets a security property value.
             * <p>First, if there is a security manager, its
             * {@code checkPermission}  method is called with a
             * {@code java.security.SecurityPermission("getProperty."+key)}
             * permission to see if it's ok to retrieve the specified
             * security property value..
             */
            // @ts-ignore
            public static getProperty(key: string): string;
            /**
             * Sets a security property value.
             * <p>First, if there is a security manager, its
             * {@code checkPermission} method is called with a
             * {@code java.security.SecurityPermission("setProperty."+key)}
             * permission to see if it's ok to set the specified
             * security property value.
             */
            // @ts-ignore
            public static setProperty(key: string, datum: string): void;
            /**
             * Returns a Set of Strings containing the names of all available
             * algorithms or types for the specified Java cryptographic service
             * (e.g., Signature, MessageDigest, Cipher, Mac, KeyStore). Returns
             * an empty Set if there is no provider that supports the
             * specified service or if serviceName is null. For a complete list
             * of Java cryptographic services, please see the
             * <a href="../../../technotes/guides/security/crypto/CryptoSpec.html">Java
             * Cryptography Architecture API Specification &amp; Reference</a>.
             * Note: the returned set is immutable.
             */
            // @ts-ignore
            public static getAlgorithms(serviceName: string): java.util.Set;
        }
    }
}
