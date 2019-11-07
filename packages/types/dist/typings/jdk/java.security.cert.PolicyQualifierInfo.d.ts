declare namespace java {
    namespace security {
        namespace cert {
            // @ts-ignore
             class PolicyQualifierInfo extends java.lang.Object {
                /**
                 * Creates an instance of {@code PolicyQualifierInfo} from the
                 * encoded bytes. The encoded byte array is copied on construction.
                 */
                // @ts-ignore
                constructor(encoded: number)
                /**
                 * Returns the {@code policyQualifierId} field of this
                 * {@code PolicyQualifierInfo}. The {@code policyQualifierId}
                 * is an Object Identifier (OID) represented by a set of nonnegative
                 * integers separated by periods.
                 */
                // @ts-ignore
                public getPolicyQualifierId(): string;
                /**
                 * Returns the ASN.1 DER encoded form of this
                 * {@code PolicyQualifierInfo}.
                 */
                // @ts-ignore
                public getEncoded(): number[];
                /**
                 * Returns the ASN.1 DER encoded form of the {@code qualifier}
                 * field of this {@code PolicyQualifierInfo}.
                 */
                // @ts-ignore
                public getPolicyQualifier(): number[];
                /**
                 * Return a printable representation of this
                 * {@code PolicyQualifierInfo}.
                 */
                // @ts-ignore
                public toString(): string;
            }
        }
    }
}
