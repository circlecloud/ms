declare namespace java {
    namespace security {
        // @ts-ignore
        abstract class AlgorithmParametersSpi extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Initializes this parameters object using the parameters
             * specified in {@code paramSpec}.
             */
            // @ts-ignore
            protected abstract engineInit(paramSpec: java.security.spec.AlgorithmParameterSpec): void;
            /**
             * Returns a (transparent) specification of this parameters
             * object.
             * {@code paramSpec} identifies the specification class in which
             * the parameters should be returned. It could, for example, be
             * {@code DSAParameterSpec.class}, to indicate that the
             * parameters should be returned in an instance of the
             * {@code DSAParameterSpec} class.
             */
            // @ts-ignore
            protected abstract engineGetParameterSpec(paramSpec: java.lang.Class): java.security.spec.AlgorithmParameterSpec;
            /**
             * Returns the parameters in their primary encoding format.
             * The primary encoding format for parameters is ASN.1, if an ASN.1
             * specification for this type of parameters exists.
             */
            // @ts-ignore
            protected abstract engineGetEncoded(): number[];
            /**
             * Returns a formatted string describing the parameters.
             */
            // @ts-ignore
            protected abstract engineToString(): string;
        }
    }
}
