// @ts-nocheck
declare namespace java {
    namespace security {
        namespace Provider {
            // @ts-ignore
             class Service extends java.lang.Object {
                /**
                 * Construct a new service.
                 */
                // @ts-ignore
                constructor(provider: java.security.Provider, type: string, algorithm: string, className: string, aliases: java.util.List, attributes: java.util.Map)
                /**
                 * Get the type of this service. For example, {@code MessageDigest}.
                 */
                // @ts-ignore
                public getType(): string;
                /**
                 * Return the name of the algorithm of this service. For example,
                 * {@code SHA-1}.
                 */
                // @ts-ignore
                public getAlgorithm(): string;
                /**
                 * Return the Provider of this service.
                 */
                // @ts-ignore
                public getProvider(): java.security.Provider;
                /**
                 * Return the name of the class implementing this service.
                 */
                // @ts-ignore
                public getClassName(): string;
                /**
                 * Return the value of the specified attribute or null if this
                 * attribute is not set for this Service.
                 */
                // @ts-ignore
                public getAttribute(name: string): string;
                /**
                 * Return a new instance of the implementation described by this
                 * service. The security provider framework uses this method to
                 * construct implementations. Applications will typically not need
                 * to call it.
                 * <p>The default implementation uses reflection to invoke the
                 * standard constructor for this type of service.
                 * Security providers can override this method to implement
                 * instantiation in a different way.
                 * For details and the values of constructorParameter that are
                 * valid for the various types of services see the
                 * <a href="../../../technotes/guides/security/crypto/CryptoSpec.html">
                 * Java Cryptography Architecture API Specification &amp;
                 * Reference</a>.
                 */
                // @ts-ignore
                public newInstance(constructorParameter: java.lang.Object): java.lang.Object;
                /**
                 * Test whether this Service can use the specified parameter.
                 * Returns false if this service cannot use the parameter. Returns
                 * true if this service can use the parameter, if a fast test is
                 * infeasible, or if the status is unknown.
                 * <p>The security provider framework uses this method with
                 * some types of services to quickly exclude non-matching
                 * implementations for consideration.
                 * Applications will typically not need to call it.
                 * <p>For details and the values of parameter that are valid for the
                 * various types of services see the top of this class and the
                 * <a href="../../../technotes/guides/security/crypto/CryptoSpec.html">
                 * Java Cryptography Architecture API Specification &amp;
                 * Reference</a>.
                 * Security providers can override it to implement their own test.
                 */
                // @ts-ignore
                public supportsParameter(parameter: java.lang.Object): boolean;
                /**
                 * Return a String representation of this service.
                 */
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
