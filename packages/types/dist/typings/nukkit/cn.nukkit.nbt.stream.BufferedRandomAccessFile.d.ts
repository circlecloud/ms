declare namespace cn {
    namespace nukkit {
        namespace nbt {
            namespace stream {
                // @ts-ignore
                 class BufferedRandomAccessFile extends java.io.RandomAccessFile {
                    /**
                     * Open a new <code>BufferedRandomAccessFile</code> on <code>file</code>
                     * in mode <code>mode</code>, which should be "r" for reading only, or
                     * "rw" for reading and writing.
                     */
                    // @ts-ignore
                    constructor(file: java.io.File, mode: string)
                    // @ts-ignore
                    constructor(file: java.io.File, mode: string, size: number)
                    /**
                     * Open a new <code>BufferedRandomAccessFile</code> on the file named
                     * <code>name</code> in mode <code>mode</code>, which should be "r" for
                     * reading only, or "rw" for reading and writing.
                     */
                    // @ts-ignore
                    constructor(name: string, mode: string)
                    // @ts-ignore
                    constructor(name: string, mode: string, size: number)
                    // @ts-ignore
                    public static BuffSz_: number;
                    // @ts-ignore
                    public close(): void;
                    /**
                     * Flush any bytes in the file's buffer that have not yet been written to
                     * disk. If the file was created read-only, this method is a no-op.
                     */
                    // @ts-ignore
                    public flush(): void;
                    // @ts-ignore
                    public seek(pos: number): void;
                    // @ts-ignore
                    public seekUnsafe(pos: number): void;
                    // @ts-ignore
                    public getFilePointer(): number;
                    // @ts-ignore
                    public length(): number;
                    // @ts-ignore
                    public read(): number;
                    // @ts-ignore
                    public read1(): number;
                    // @ts-ignore
                    public read(b: number): number;
                    // @ts-ignore
                    public read(b: number, off: number, len: number): number;
                    // @ts-ignore
                    public readCurrent(): number;
                    // @ts-ignore
                    public writeCurrent(b: number): void;
                    // @ts-ignore
                    public write(b: number): void;
                    // @ts-ignore
                    public write(b: number): void;
                    // @ts-ignore
                    public write(b: number, off: number, len: number): void;
                }
            }
        }
    }
}
