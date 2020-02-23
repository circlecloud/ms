declare namespace cn {
    namespace nukkit {
        namespace raknet {
            namespace server {
                // @ts-ignore
                 class RakNetServer extends java.lang.Thread {
                    // @ts-ignore
                    constructor(logger: cn.nukkit.utils.ThreadedLogger, port: number)
                    // @ts-ignore
                    constructor(logger: cn.nukkit.utils.ThreadedLogger, port: number, interfaz: string)
                    // @ts-ignore
                    protected port: number;
                    // @ts-ignore
                    protected interfaz: string;
                    // @ts-ignore
                    protected logger: cn.nukkit.utils.ThreadedLogger;
                    // @ts-ignore
                    protected externalQueue: java.util.concurrent.ConcurrentLinkedQueue;
                    // @ts-ignore
                    protected internalQueue: java.util.concurrent.ConcurrentLinkedQueue;
                    // @ts-ignore
                    public isShutdown(): boolean;
                    // @ts-ignore
                    public shutdown(): void;
                    // @ts-ignore
                    public getPort(): number;
                    // @ts-ignore
                    public getInterface(): string;
                    // @ts-ignore
                    public getLogger(): cn.nukkit.utils.ThreadedLogger;
                    // @ts-ignore
                    public getExternalQueue(): java.util.concurrent.ConcurrentLinkedQueue;
                    // @ts-ignore
                    public getInternalQueue(): java.util.concurrent.ConcurrentLinkedQueue;
                    // @ts-ignore
                    public pushMainToThreadPacket(data: number): void;
                    // @ts-ignore
                    public readMainToThreadPacket(): number[];
                    // @ts-ignore
                    public pushThreadToMainPacket(data: number): void;
                    // @ts-ignore
                    public readThreadToMainPacket(): number[];
                    // @ts-ignore
                    public run(): void;
                }
            }
        }
    }
}
