// @ts-nocheck
declare namespace java {
    namespace security {
        namespace KeyStore {
            namespace Entry {
                // @ts-ignore
                interface Attribute {
                    /**
                     * Returns the attribute's name.
                     */
                    // @ts-ignore
                     getName(): string;
                    /**
                     * Returns the attribute's value.
                     * Multi-valued attributes encode their values as a single string.
                     */
                    // @ts-ignore
                     getValue(): string;
                }
            }
        }
    }
}
