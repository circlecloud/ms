declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace log {
                // @ts-ignore
                 class ColouredWriter extends java.util.logging.Handler {
                    // @ts-ignore
                    constructor(console: ConsoleReader)
                    // @ts-ignore
                    public print(s: string): void;
                    // @ts-ignore
                    public publish(record: java.util.logging.LogRecord): void;
                    // @ts-ignore
                    public flush(): void;
                    // @ts-ignore
                    public close(): void;
                }
            }
        }
    }
}
