declare namespace java {
    namespace security {
        // @ts-ignore
         class SignedObject extends java.lang.Object {
            /**
             * Constructs a SignedObject from any Serializable object.
             * The given object is signed with the given signing key, using the
             * designated signature engine.
             */
            // @ts-ignore
            constructor(object: java.io.Serializable, signingKey: java.security.PrivateKey, signingEngine: java.security.Signature)
            /**
             * Retrieves the encapsulated object.
             * The encapsulated object is de-serialized before it is returned.
             */
            // @ts-ignore
            public getObject(): java.lang.Object;
            /**
             * Retrieves the signature on the signed object, in the form of a
             * byte array.
             */
            // @ts-ignore
            public getSignature(): number[];
            /**
             * Retrieves the name of the signature algorithm.
             */
            // @ts-ignore
            public getAlgorithm(): string;
            /**
             * Verifies that the signature in this SignedObject is the valid
             * signature for the object stored inside, with the given
             * verification key, using the designated verification engine.
             */
            // @ts-ignore
            public verify(verificationKey: java.security.PublicKey, verificationEngine: java.security.Signature): boolean;
        }
    }
}
