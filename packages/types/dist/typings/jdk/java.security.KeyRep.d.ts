declare namespace java {
    namespace security {
        // @ts-ignore
         class KeyRep extends java.lang.Object {
            /**
             * Construct the alternate Key class.
             * <p>
             */
            // @ts-ignore
            constructor(type: java.security.KeyRep.Type, algorithm: string, format: string, encoded: number)
            /**
             * Resolve the Key object.
             * <p> This method supports three Type/format combinations:
             * <ul>
             * <li> Type.SECRET/"RAW" - returns a SecretKeySpec object
             * constructed using encoded key bytes and algorithm
             * <li> Type.PUBLIC/"X.509" - gets a KeyFactory instance for
             * the key algorithm, constructs an X509EncodedKeySpec with the
             * encoded key bytes, and generates a public key from the spec
             * <li> Type.PRIVATE/"PKCS#8" - gets a KeyFactory instance for
             * the key algorithm, constructs a PKCS8EncodedKeySpec with the
             * encoded key bytes, and generates a private key from the spec
             * </ul>
             * <p>
             */
            // @ts-ignore
            protected readResolve(): java.lang.Object;
        }
    }
}
