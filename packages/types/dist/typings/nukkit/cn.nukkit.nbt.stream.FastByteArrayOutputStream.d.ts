declare namespace cn {
    namespace nukkit {
        namespace nbt {
            namespace stream {
                // @ts-ignore
                 class FastByteArrayOutputStream extends java.io.OutputStream {
                    /**
                     * Creates a new array output stream with an initial capacity of {@link #DEFAULT_INITIAL_CAPACITY} bytes.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Creates a new array output stream with a given initial capacity.
                     */
                    // @ts-ignore
                    constructor(initialCapacity: number)
                    /**
                     * Creates a new array output stream wrapping a given byte array.
                     */
                    // @ts-ignore
                    constructor(a: number)
                    // @ts-ignore
                    public static ONEOVERPHI: number;
                    // @ts-ignore
                    public static DEFAULT_INITIAL_CAPACITY: number;
                    // @ts-ignore
                    public array: number[];
                    // @ts-ignore
                    public length: number;
                    /**
                     * Marks this array output stream as empty.
                     */
                    // @ts-ignore
                    public reset(): cn.nukkit.nbt.stream.FastByteArrayOutputStream;
                    // @ts-ignore
                    public write(b: number): void;
                    // @ts-ignore
                    public static ensureOffsetLength(arrayLength: number, offset: number, length: number): void;
                    // @ts-ignore
                    public static grow(array: number, length: number): number[];
                    // @ts-ignore
                    public static grow(array: number, length: number, preserve: number): number[];
                    // @ts-ignore
                    public write(b: number, off: number, len: number): void;
                    // @ts-ignore
                    public position(newPosition: number): void;
                    // @ts-ignore
                    public position(): number;
                    // @ts-ignore
                    public length(): number;
                    // @ts-ignore
                    public toByteArray(): number[];
                }
            }
        }
    }
}
