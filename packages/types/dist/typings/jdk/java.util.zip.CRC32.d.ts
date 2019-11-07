declare namespace java {
    namespace util {
        namespace zip {
            // @ts-ignore
             class CRC32 extends java.lang.Object {
                /**
                 * Creates a new CRC32 object.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Updates the CRC-32 checksum with the specified byte (the low
                 * eight bits of the argument b).
                 */
                // @ts-ignore
                public update(b: number): void;
                /**
                 * Updates the CRC-32 checksum with the specified array of bytes.
                 */
                // @ts-ignore
                public update(b: number, off: number, len: number): void;
                /**
                 * Updates the CRC-32 checksum with the specified array of bytes.
                 */
                // @ts-ignore
                public update(b: number): void;
                /**
                 * Updates the checksum with the bytes from the specified buffer.
                 * The checksum is updated using
                 * buffer.{@link java.nio.Buffer#remaining() remaining()}
                 * bytes starting at
                 * buffer.{@link java.nio.Buffer#position() position()}
                 * Upon return, the buffer's position will
                 * be updated to its limit; its limit will not have been changed.
                 */
                // @ts-ignore
                public update(buffer: java.nio.ByteBuffer): void;
                /**
                 * Resets CRC-32 to initial value.
                 */
                // @ts-ignore
                public reset(): void;
                /**
                 * Returns CRC-32 value.
                 */
                // @ts-ignore
                public getValue(): number;
            }
        }
    }
}
