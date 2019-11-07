// @ts-nocheck
declare namespace java {
    namespace security {
        // @ts-ignore
         class CodeSigner extends java.lang.Object {
            /**
             * Constructs a CodeSigner object.
             */
            // @ts-ignore
            constructor(signerCertPath: java.security.cert.CertPath, timestamp: java.security.Timestamp)
            /**
             * Returns the signer's certificate path.
             */
            // @ts-ignore
            public getSignerCertPath(): java.security.cert.CertPath;
            /**
             * Returns the signature timestamp.
             */
            // @ts-ignore
            public getTimestamp(): java.security.Timestamp;
            /**
             * Returns the hash code value for this code signer.
             * The hash code is generated using the signer's certificate path and the
             * timestamp, if present.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Tests for equality between the specified object and this
             * code signer. Two code signers are considered equal if their
             * signer certificate paths are equal and if their timestamps are equal,
             * if present in both.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Returns a string describing this code signer.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
