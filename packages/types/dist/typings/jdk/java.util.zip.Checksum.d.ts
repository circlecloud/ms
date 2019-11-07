declare namespace java {
    namespace util {
        namespace zip {
            // @ts-ignore
            interface Checksum {
                /**
                 * Updates the current checksum with the specified byte.
                 */
                // @ts-ignore
                 update(b: number): void;
                /**
                 * Updates the current checksum with the specified array of bytes.
                 */
                // @ts-ignore
                 update(b: number, off: number, len: number): void;
                /**
                 * Returns the current checksum value.
                 */
                // @ts-ignore
                 getValue(): number;
                /**
                 * Resets the checksum to its initial value.
                 */
                // @ts-ignore
                 reset(): void;
            }
        }
    }
}
