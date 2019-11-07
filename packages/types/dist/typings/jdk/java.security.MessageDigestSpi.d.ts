// @ts-nocheck
declare namespace java {
    namespace security {
        // @ts-ignore
        abstract class MessageDigestSpi extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Returns the digest length in bytes.
             * <p>This concrete method has been added to this previously-defined
             * abstract class. (For backwards compatibility, it cannot be abstract.)
             * <p>The default behavior is to return 0.
             * <p>This method may be overridden by a provider to return the digest
             * length.
             */
            // @ts-ignore
            protected engineGetDigestLength(): number;
            /**
             * Updates the digest using the specified byte.
             */
            // @ts-ignore
            protected abstract engineUpdate(input: number): void;
            /**
             * Update the digest using the specified ByteBuffer. The digest is
             * updated using the {@code input.remaining()} bytes starting
             * at {@code input.position()}.
             * Upon return, the buffer's position will be equal to its limit;
             * its limit will not have changed.
             */
            // @ts-ignore
            protected engineUpdate(input: java.nio.ByteBuffer): void;
            /**
             * Completes the hash computation by performing final
             * operations such as padding. Once {@code engineDigest} has
             * been called, the engine should be reset (see
             * {@link #engineReset() engineReset}).
             * Resetting is the responsibility of the
             * engine implementor.
             */
            // @ts-ignore
            protected abstract engineDigest(): number[];
            /**
             * Completes the hash computation by performing final
             * operations such as padding. Once {@code engineDigest} has
             * been called, the engine should be reset (see
             * {@link #engineReset() engineReset}).
             * Resetting is the responsibility of the
             * engine implementor.
             * This method should be abstract, but we leave it concrete for
             * binary compatibility.  Knowledgeable providers should override this
             * method.
             */
            // @ts-ignore
            protected engineDigest(buf: number, offset: number, len: number): number;
            /**
             * Resets the digest for further use.
             */
            // @ts-ignore
            protected abstract engineReset(): void;
            /**
             * Returns a clone if the implementation is cloneable.
             */
            // @ts-ignore
            public clone(): java.lang.Object;
        }
    }
}
