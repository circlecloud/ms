declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace log {
                // @ts-ignore
                 class LogDispatcher extends java.lang.Thread {
                    // @ts-ignore
                    constructor(logger: net.md_5.bungee.log.BungeeLogger)
                    // @ts-ignore
                    public run(): void;
                    // @ts-ignore
                    public queue(record: java.util.logging.LogRecord): void;
                }
            }
        }
    }
}
