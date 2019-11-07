declare namespace java {
    namespace security {
        // @ts-ignore
        abstract class SecureRandomSpi extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Reseeds this random object. The given seed supplements, rather than
             * replaces, the existing seed. Thus, repeated calls are guaranteed
             * never to reduce randomness.
             */
            // @ts-ignore
            protected abstract engineSetSeed(seed: number): void;
            /**
             * Generates a user-specified number of random bytes.
             * <p> If a call to {@code engineSetSeed} had not occurred previously,
             * the first call to this method forces this SecureRandom implementation
             * to seed itself.  This self-seeding will not occur if
             * {@code engineSetSeed} was previously called.
             */
            // @ts-ignore
            protected abstract engineNextBytes(bytes: number): void;
            /**
             * Returns the given number of seed bytes.  This call may be used to
             * seed other random number generators.
             */
            // @ts-ignore
            protected abstract engineGenerateSeed(numBytes: number): number[];
        }
    }
}
