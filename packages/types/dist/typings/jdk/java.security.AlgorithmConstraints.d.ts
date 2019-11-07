// @ts-nocheck
declare namespace java {
    namespace security {
        // @ts-ignore
        interface AlgorithmConstraints {
            /**
             * Determines whether an algorithm is granted permission for the
             * specified cryptographic primitives.
             */
            // @ts-ignore
             permits(primitives: java.util.Set, algorithm: string, parameters: java.security.AlgorithmParameters): boolean;
            /**
             * Determines whether a key is granted permission for the specified
             * cryptographic primitives.
             * <p>
             * This method is usually used to check key size and key usage.
             */
            // @ts-ignore
             permits(primitives: java.util.Set, key: java.security.Key): boolean;
            /**
             * Determines whether an algorithm and the corresponding key are granted
             * permission for the specified cryptographic primitives.
             */
            // @ts-ignore
             permits(primitives: java.util.Set, algorithm: string, key: java.security.Key, parameters: java.security.AlgorithmParameters): boolean;
        }
    }
}
