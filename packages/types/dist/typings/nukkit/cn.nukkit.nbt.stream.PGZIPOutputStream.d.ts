declare namespace cn {
    namespace nukkit {
        namespace nbt {
            namespace stream {
                // @ts-ignore
                 class PGZIPOutputStream extends java.io.FilterOutputStream {
                    // @ts-ignore
                    constructor(out: java.io.OutputStream, executor: java.util.concurrent.ExecutorService, nthreads: number)
                    /**
                     * Creates a PGZIPOutputStream
                     * using {@link PGZIPOutputStream#getSharedThreadPool()}.
                     */
                    // @ts-ignore
                    constructor(out: java.io.OutputStream, nthreads: number)
                    /**
                     * Creates a PGZIPOutputStream
                     * using {@link PGZIPOutputStream#getSharedThreadPool()}
                     * and {@link Runtime#availableProcessors()}.
                     */
                    // @ts-ignore
                    constructor(out: java.io.OutputStream)
                    // @ts-ignore
                    public static getSharedThreadPool(): java.util.concurrent.ExecutorService;
                    // @ts-ignore
                    protected newDeflater(): java.util.zip.Deflater;
                    // @ts-ignore
                    public setStrategy(strategy: number): void;
                    // @ts-ignore
                    public setLevel(level: number): void;
                    // @ts-ignore
                    protected static newDeflaterOutputStream(out: java.io.OutputStream, deflater: java.util.zip.Deflater): java.util.zip.DeflaterOutputStream;
                    // @ts-ignore
                    public write(b: number): void;
                    // @ts-ignore
                    public write(b: number): void;
                    // @ts-ignore
                    public write(b: number, off: number, len: number): void;
                    // @ts-ignore
                    public flush(): void;
                    // @ts-ignore
                    public close(): void;
                }
            }
        }
    }
}
