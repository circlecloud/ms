declare namespace java {
    namespace security {
        namespace spec {
            // @ts-ignore
            interface ECField {
                /**
                 * Returns the field size in bits. Note: For prime finite
                 * field ECFieldFp, size of prime p in bits is returned.
                 * For characteristic 2 finite field ECFieldF2m, m is returned.
                 */
                // @ts-ignore
                 getFieldSize(): number;
            }
        }
    }
}
