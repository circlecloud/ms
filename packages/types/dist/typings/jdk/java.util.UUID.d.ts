// @ts-nocheck
declare namespace java {
    namespace util {
        // @ts-ignore
         class UUID extends java.lang.Object {
            /**
             * Constructs a new {@code UUID} using the specified data.  {@code
             * mostSigBits} is used for the most significant 64 bits of the {@code
             * UUID} and {@code leastSigBits} becomes the least significant 64 bits of
             * the {@code UUID}.
             */
            // @ts-ignore
            constructor(mostSigBits: number, leastSigBits: number)
            /**
             * Static factory to retrieve a type 4 (pseudo randomly generated) UUID.
             * The {@code UUID} is generated using a cryptographically strong pseudo
             * random number generator.
             */
            // @ts-ignore
            public static randomUUID(): java.util.UUID;
            /**
             * Static factory to retrieve a type 3 (name based) {@code UUID} based on
             * the specified byte array.
             */
            // @ts-ignore
            public static nameUUIDFromBytes(name: number): java.util.UUID;
            /**
             * Creates a {@code UUID} from the string standard representation as
             * described in the {@link #toString} method.
             */
            // @ts-ignore
            public static fromString(name: string): java.util.UUID;
            /**
             * Returns the least significant 64 bits of this UUID's 128 bit value.
             */
            // @ts-ignore
            public getLeastSignificantBits(): number;
            /**
             * Returns the most significant 64 bits of this UUID's 128 bit value.
             */
            // @ts-ignore
            public getMostSignificantBits(): number;
            /**
             * The version number associated with this {@code UUID}.  The version
             * number describes how this {@code UUID} was generated.
             * The version number has the following meaning:
             * <ul>
             * <li>1    Time-based UUID
             * <li>2    DCE security UUID
             * <li>3    Name-based UUID
             * <li>4    Randomly generated UUID
             * </ul>
             */
            // @ts-ignore
            public version(): number;
            /**
             * The variant number associated with this {@code UUID}.  The variant
             * number describes the layout of the {@code UUID}.
             * The variant number has the following meaning:
             * <ul>
             * <li>0    Reserved for NCS backward compatibility
             * <li>2    <a href="http://www.ietf.org/rfc/rfc4122.txt">IETF&nbsp;RFC&nbsp;4122</a>
             * (Leach-Salz), used by this class
             * <li>6    Reserved, Microsoft Corporation backward compatibility
             * <li>7    Reserved for future definition
             * </ul>
             */
            // @ts-ignore
            public variant(): number;
            /**
             * The timestamp value associated with this UUID.
             * <p> The 60 bit timestamp value is constructed from the time_low,
             * time_mid, and time_hi fields of this {@code UUID}.  The resulting
             * timestamp is measured in 100-nanosecond units since midnight,
             * October 15, 1582 UTC.
             * <p> The timestamp value is only meaningful in a time-based UUID, which
             * has version type 1.  If this {@code UUID} is not a time-based UUID then
             * this method throws UnsupportedOperationException.
             */
            // @ts-ignore
            public timestamp(): number;
            /**
             * The clock sequence value associated with this UUID.
             * <p> The 14 bit clock sequence value is constructed from the clock
             * sequence field of this UUID.  The clock sequence field is used to
             * guarantee temporal uniqueness in a time-based UUID.
             * <p> The {@code clockSequence} value is only meaningful in a time-based
             * UUID, which has version type 1.  If this UUID is not a time-based UUID
             * then this method throws UnsupportedOperationException.
             */
            // @ts-ignore
            public clockSequence(): number;
            /**
             * The node value associated with this UUID.
             * <p> The 48 bit node value is constructed from the node field of this
             * UUID.  This field is intended to hold the IEEE 802 address of the machine
             * that generated this UUID to guarantee spatial uniqueness.
             * <p> The node value is only meaningful in a time-based UUID, which has
             * version type 1.  If this UUID is not a time-based UUID then this method
             * throws UnsupportedOperationException.
             */
            // @ts-ignore
            public node(): number;
            /**
             * Returns a {@code String} object representing this {@code UUID}.
             * <p> The UUID string representation is as described by this BNF:
             * <blockquote><pre>
             * {@code
             * UUID                   = <time_low> "-" <time_mid> "-"
             * <time_high_and_version> "-"
             * <variant_and_sequence> "-"
             * <node>
             * time_low               = 4*<hexOctet>
             * time_mid               = 2*<hexOctet>
             * time_high_and_version  = 2*<hexOctet>
             * variant_and_sequence   = 2*<hexOctet>
             * node                   = 6*<hexOctet>
             * hexOctet               = <hexDigit><hexDigit>
             * hexDigit               =
             * "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
             * | "a" | "b" | "c" | "d" | "e" | "f"
             * | "A" | "B" | "C" | "D" | "E" | "F"
             * }</pre></blockquote>
             */
            // @ts-ignore
            public toString(): string;
            /**
             * Returns a hash code for this {@code UUID}.
             */
            // @ts-ignore
            public hashCode(): number;
            /**
             * Compares this object to the specified object.  The result is {@code
             * true} if and only if the argument is not {@code null}, is a {@code UUID}
             * object, has the same variant, and contains the same value, bit for bit,
             * as this {@code UUID}.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            /**
             * Compares this UUID with the specified UUID.
             * <p> The first of two UUIDs is greater than the second if the most
             * significant field in which the UUIDs differ is greater for the first
             * UUID.
             */
            // @ts-ignore
            public compareTo(val: java.util.UUID): number;
        }
    }
}
