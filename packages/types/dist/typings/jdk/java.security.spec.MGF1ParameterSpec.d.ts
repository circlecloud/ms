declare namespace java {
    namespace security {
        namespace spec {
            // @ts-ignore
             class MGF1ParameterSpec extends java.lang.Object {
                /**
                 * Constructs a parameter set for mask generation function MGF1
                 * as defined in the PKCS #1 standard.
                 */
                // @ts-ignore
                constructor(mdName: string)
                // @ts-ignore
                public static SHA1: java.security.spec.MGF1ParameterSpec;
                // @ts-ignore
                public static SHA224: java.security.spec.MGF1ParameterSpec;
                // @ts-ignore
                public static SHA256: java.security.spec.MGF1ParameterSpec;
                // @ts-ignore
                public static SHA384: java.security.spec.MGF1ParameterSpec;
                // @ts-ignore
                public static SHA512: java.security.spec.MGF1ParameterSpec;
                /**
                 * Returns the algorithm name of the message digest used by the mask
                 * generation function.
                 */
                // @ts-ignore
                public getDigestAlgorithm(): string;
            }
        }
    }
}
