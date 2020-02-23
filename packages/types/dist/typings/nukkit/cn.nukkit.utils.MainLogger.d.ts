declare namespace cn {
    namespace nukkit {
        namespace utils {
            // @ts-ignore
             class MainLogger extends cn.nukkit.utils.ThreadedLogger {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static getLogger(): cn.nukkit.utils.MainLogger;
                // @ts-ignore
                public emergency(message: string): void;
                // @ts-ignore
                public alert(message: string): void;
                // @ts-ignore
                public critical(message: string): void;
                // @ts-ignore
                public error(message: string): void;
                // @ts-ignore
                public warning(message: string): void;
                // @ts-ignore
                public notice(message: string): void;
                // @ts-ignore
                public info(message: string): void;
                // @ts-ignore
                public debug(message: string): void;
                // @ts-ignore
                public setLogDebug(logDebug: java.lang.Boolean): void;
                // @ts-ignore
                public logException(t: java.lang.Throwable): void;
                // @ts-ignore
                public log(level: cn.nukkit.utils.LogLevel, message: string): void;
                // @ts-ignore
                public shutdown(): void;
                // @ts-ignore
                public emergency(message: string, t: java.lang.Throwable): void;
                // @ts-ignore
                public alert(message: string, t: java.lang.Throwable): void;
                // @ts-ignore
                public critical(message: string, t: java.lang.Throwable): void;
                // @ts-ignore
                public error(message: string, t: java.lang.Throwable): void;
                // @ts-ignore
                public warning(message: string, t: java.lang.Throwable): void;
                // @ts-ignore
                public notice(message: string, t: java.lang.Throwable): void;
                // @ts-ignore
                public info(message: string, t: java.lang.Throwable): void;
                // @ts-ignore
                public debug(message: string, t: java.lang.Throwable): void;
                // @ts-ignore
                public log(level: cn.nukkit.utils.LogLevel, message: string, t: java.lang.Throwable): void;
            }
        }
    }
}
