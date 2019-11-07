// @ts-nocheck
declare namespace java {
    namespace security {
        // @ts-ignore
         class PKCS12Attribute extends java.lang.Object {
            /**
             * Constructs a PKCS12 attribute from its name and value.
             * The name is an ASN.1 Object Identifier represented as a list of
             * dot-separated integers.
             * A string value is represented as the string itself.
             * A binary value is represented as a string of colon-separated
             * pairs of hexadecimal digits.
             * Multi-valued attributes are represented as a comma-separated
             * list of values, enclosed in square brackets. See
             * {@link Arrays#toString(java.lang.Object[])}.
             * <p>
             * A string value will be DER-encoded as an ASN.1 UTF8String and a
             * binary value will be DER-encoded as an ASN.1 Octet String.
             */
            // @ts-ignore
            constructor(name: string, value: string)
            /**
             * Constructs a PKCS12 attribute from its ASN.1 DER encoding.
             * The DER encoding is specified by the following ASN.1 definition:
             * <pre>
             * Attribute ::= SEQUENCE {
             * type   AttributeType,
             * values SET OF AttributeValue
             * }
             * AttributeType ::= OBJECT IDENTIFIER
             * AttributeValue ::= ANY defined by type
             * </pre>
             */
            // @ts-ignore
            constructor(encoded: number)
            /**
             * Returns the attribute's ASN.1 Object Identifier represented as a
             * list of dot-separated integers.
             */
            // @ts-ignore
            public getName(): string;
            /**
             * Returns the attribute's ASN.1 DER-encoded value as a string.
             * An ASN.1 DER-encoded value is returned in one of the following
             * {@code String} formats:
             * <ul>
             * <li> the DER encoding of a basic ASN.1 type that has a natural
             * string representation is returned as the string itself.
             * Such types are currently limited to BOOLEAN, INTEGER,
             * OBJECT IDENTIFIER, UTCTime, GeneralizedTime and the
             * following six ASN.1 string types: UTF8String,
             * PrintableString, T61String, IA5String, BMPString and
             * GeneralString.
             * <li> the DER encoding of any other ASN.1 type is not decoded but
             * returned as a binary string of colon-separated pairs of
             * hexadecimal digits.
             * </ul>
             * Multi-valued attributes are represented as a comma-separated
             * list of values, enclosed in square brackets. See
             * {@link Arrays#toString(java.lang.Object[])}.
             */
            // @ts-ignore
            public getValue(): string;
            /**
             * Returns the attribute's ASN.1 DER encoding.
             */
            // @ts-ignore
            public getEncoded(): number[];
            /**
             * Compares this {@code PKCS12Attribute} and a specified object for
             * equality.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Returns the hashcode for this {@code PKCS12Attribute}.
             * The hash code is computed from its DER encoding.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Returns a string representation of this {@code PKCS12Attribute}.
             */
            // @ts-ignore
            public toString(): string;
        }
    }
}
