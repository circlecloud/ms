// @ts-nocheck
declare namespace java {
    namespace security {
        // @ts-ignore
         class Timestamp extends java.lang.Object {
            /**
             * Constructs a Timestamp.
             */
            // @ts-ignore
            constructor(timestamp: java.util.Date, signerCertPath: java.security.cert.CertPath)
            /**
             * Returns the date and time when the timestamp was generated.
             */
            // @ts-ignore
            public getTimestamp(): java.util.Date;
            /**
             * Returns the certificate path for the Timestamping Authority.
             */
            // @ts-ignore
            public getSignerCertPath(): java.security.cert.CertPath;
            /**
             * Returns the hash code value for this timestamp.
             * The hash code is generated using the date and time of the timestamp
             * and the TSA's certificate path.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Tests for equality between the specified object and this
             * timestamp. Two timestamps are considered equal if the date and time of
             * their timestamp's and their signer's certificate paths are equal.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Returns a string describing this timestamp.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
