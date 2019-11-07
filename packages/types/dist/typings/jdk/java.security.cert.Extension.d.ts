declare namespace java {
    namespace security {
        namespace cert {
            // @ts-ignore
            interface Extension {
                /**
                 * Gets the extensions's object identifier.
                 */
                // @ts-ignore
                 getId(): string;
                /**
                 * Gets the extension's criticality setting.
                 */
                // @ts-ignore
                 isCritical(): boolean;
                /**
                 * Gets the extensions's DER-encoded value. Note, this is the bytes
                 * that are encoded as an OCTET STRING. It does not include the OCTET
                 * STRING tag and length.
                 */
                // @ts-ignore
                 getValue(): number[];
                /**
                 * Generates the extension's DER encoding and writes it to the output
                 * stream.
                 */
                // @ts-ignore
                 encode(out: java.io.OutputStream): void;
            }
        }
    }
}
