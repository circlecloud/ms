// @ts-nocheck
declare namespace java {
    namespace security {
        namespace spec {
            // @ts-ignore
             class PSSParameterSpec extends java.lang.Object {
                /**
                 * Creates a new {@code PSSParameterSpec} as defined in
                 * the PKCS #1 standard using the specified message digest,
                 * mask generation function, parameters for mask generation
                 * function, salt length, and trailer field values.
                 */
                // @ts-ignore
                constructor(mdName: string, mgfName: string, mgfSpec: java.security.spec.AlgorithmParameterSpec, saltLen: number, trailerField: number)
                /**
                 * Creates a new {@code PSSParameterSpec}
                 * using the specified salt length and other default values as
                 * defined in PKCS#1.
                 */
                // @ts-ignore
                constructor(saltLen: number)
                // @ts-ignore
                public static DEFAULT: java.security.spec.PSSParameterSpec;
                /**
                 * Returns the message digest algorithm name.
                 */
                // @ts-ignore
                public getDigestAlgorithm(): string;
                /**
                 * Returns the mask generation function algorithm name.
                 */
                // @ts-ignore
                public getMGFAlgorithm(): string;
                /**
                 * Returns the parameters for the mask generation function.
                 */
                // @ts-ignore
                public getMGFParameters(): java.security.spec.AlgorithmParameterSpec;
                /**
                 * Returns the salt length in bits.
                 */
                // @ts-ignore
                public getSaltLength(): number;
                /**
                 * Returns the value for the trailer field, i.e. bc in PKCS#1 v2.1.
                 */
                // @ts-ignore
                public getTrailerField(): number;
            }
        }
    }
}
