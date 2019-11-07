// @ts-nocheck
declare namespace java {
    namespace security {
        namespace spec {
            // @ts-ignore
             class ECGenParameterSpec extends java.lang.Object {
                /**
                 * Creates a parameter specification for EC parameter
                 * generation using a standard (or predefined) name
                 * {@code stdName} in order to generate the corresponding
                 * (precomputed) elliptic curve domain parameters. For the
                 * list of supported names, please consult the documentation
                 * of provider whose implementation will be used.
                 */
                // @ts-ignore
                constructor(stdName: string)
                /**
                 * Returns the standard or predefined name of the
                 * to-be-generated EC domain parameters.
                 */
                // @ts-ignore
                public getName(): string;
            }
        }
    }
}
