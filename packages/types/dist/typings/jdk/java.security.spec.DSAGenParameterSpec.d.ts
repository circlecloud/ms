declare namespace java {
    namespace security {
        namespace spec {
            // @ts-ignore
             class DSAGenParameterSpec extends java.lang.Object {
                /**
                 * Creates a domain parameter specification for DSA parameter
                 * generation using {@code primePLen} and {@code subprimeQLen}.
                 * The value of {@code subprimeQLen} is also used as the default
                 * length of the domain parameter seed in bits.
                 */
                // @ts-ignore
                constructor(primePLen: number, subprimeQLen: number)
                /**
                 * Creates a domain parameter specification for DSA parameter
                 * generation using {@code primePLen}, {@code subprimeQLen},
                 * and {@code seedLen}.
                 */
                // @ts-ignore
                constructor(primePLen: number, subprimeQLen: number, seedLen: number)
                /**
                 * Returns the desired length of the prime P of the
                 * to-be-generated DSA domain parameters in bits.
                 */
                // @ts-ignore
                public getPrimePLength(): number;
                /**
                 * Returns the desired length of the sub-prime Q of the
                 * to-be-generated DSA domain parameters in bits.
                 */
                // @ts-ignore
                public getSubprimeQLength(): number;
                /**
                 * Returns the desired length of the domain parameter seed in bits.
                 */
                // @ts-ignore
                public getSeedLength(): number;
            }
        }
    }
}
