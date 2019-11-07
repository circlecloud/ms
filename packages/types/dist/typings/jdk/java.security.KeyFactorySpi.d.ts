// @ts-nocheck
declare namespace java {
    namespace security {
        // @ts-ignore
        abstract class KeyFactorySpi extends java.lang.Object {
            // @ts-ignore
            constructor()
            /**
             * Generates a public key object from the provided key
             * specification (key material).
             */
            // @ts-ignore
            protected abstract engineGeneratePublic(keySpec: java.security.spec.KeySpec): java.security.PublicKey;
            /**
             * Generates a private key object from the provided key
             * specification (key material).
             */
            // @ts-ignore
            protected abstract engineGeneratePrivate(keySpec: java.security.spec.KeySpec): java.security.PrivateKey;
            /**
             * Returns a specification (key material) of the given key
             * object.
             * {@code keySpec} identifies the specification class in which
             * the key material should be returned. It could, for example, be
             * {@code DSAPublicKeySpec.class}, to indicate that the
             * key material should be returned in an instance of the
             * {@code DSAPublicKeySpec} class.
             */
            // @ts-ignore
            protected abstract engineGetKeySpec(key: java.security.Key, keySpec: java.lang.Class): java.security.spec.KeySpec;
            /**
             * Translates a key object, whose provider may be unknown or
             * potentially untrusted, into a corresponding key object of this key
             * factory.
             */
            // @ts-ignore
            protected abstract engineTranslateKey(key: java.security.Key): java.security.Key;
        }
    }
}
