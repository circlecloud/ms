declare namespace cn {
    namespace nukkit {
        namespace plugin {
            // @ts-ignore
             class PluginLogger extends java.lang.Object implements cn.nukkit.utils.Logger {
                // @ts-ignore
                constructor(context: cn.nukkit.plugin.Plugin)
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
                public log(level: cn.nukkit.utils.LogLevel, message: string): void;
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
