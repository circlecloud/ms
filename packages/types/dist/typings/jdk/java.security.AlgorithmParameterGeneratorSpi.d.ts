declare namespace java {
    namespace security {
        // @ts-ignore
        abstract class AlgorithmParameterGeneratorSpi extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Initializes this parameter generator for a certain size
             * and source of randomness.
             */
            // @ts-ignore
            protected abstract engineInit(size: number, random: java.security.SecureRandom): void;
            /**
             * Generates the parameters.
             */
            // @ts-ignore
            protected abstract engineGenerateParameters(): java.security.AlgorithmParameters;
        }
    }
}
