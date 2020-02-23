declare namespace cn {
    namespace nukkit {
        namespace utils {
            // @ts-ignore
            interface Logger {
                // @ts-ignore
                 emergency(message: string): void;
                // @ts-ignore
                 alert(message: string): void;
                // @ts-ignore
                 critical(message: string): void;
                // @ts-ignore
                 error(message: string): void;
                // @ts-ignore
                 warning(message: string): void;
                // @ts-ignore
                 notice(message: string): void;
                // @ts-ignore
                 info(message: string): void;
                // @ts-ignore
                 debug(message: string): void;
                // @ts-ignore
                 log(level: cn.nukkit.utils.LogLevel, message: string): void;
                // @ts-ignore
                 emergency(message: string, t: java.lang.Throwable): void;
                // @ts-ignore
                 alert(message: string, t: java.lang.Throwable): void;
                // @ts-ignore
                 critical(message: string, t: java.lang.Throwable): void;
                // @ts-ignore
                 error(message: string, t: java.lang.Throwable): void;
                // @ts-ignore
                 warning(message: string, t: java.lang.Throwable): void;
                // @ts-ignore
                 notice(message: string, t: java.lang.Throwable): void;
                // @ts-ignore
                 info(message: string, t: java.lang.Throwable): void;
                // @ts-ignore
                 debug(message: string, t: java.lang.Throwable): void;
                // @ts-ignore
                 log(level: cn.nukkit.utils.LogLevel, message: string, t: java.lang.Throwable): void;
            }
        }
    }
}
