declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace log {
                // @ts-ignore
                 class BungeeLogger extends java.util.logging.Logger {
                    // @ts-ignore
                    constructor(loggerName: string, filePattern: string, reader: ConsoleReader)
                    // @ts-ignore
                    public log(record: java.util.logging.LogRecord): void;
                }
            }
        }
    }
}
