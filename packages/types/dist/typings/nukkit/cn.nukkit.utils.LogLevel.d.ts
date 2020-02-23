declare namespace cn {
    namespace nukkit {
        namespace utils {
            // @ts-ignore
             class LogLevel extends java.lang.Enum {
                // @ts-ignore
                public static NONE: cn.nukkit.utils.LogLevel;
                // @ts-ignore
                public static EMERGENCY: cn.nukkit.utils.LogLevel;
                // @ts-ignore
                public static ALERT: cn.nukkit.utils.LogLevel;
                // @ts-ignore
                public static CRITICAL: cn.nukkit.utils.LogLevel;
                // @ts-ignore
                public static ERROR: cn.nukkit.utils.LogLevel;
                // @ts-ignore
                public static WARNING: cn.nukkit.utils.LogLevel;
                // @ts-ignore
                public static NOTICE: cn.nukkit.utils.LogLevel;
                // @ts-ignore
                public static INFO: cn.nukkit.utils.LogLevel;
                // @ts-ignore
                public static DEBUG: cn.nukkit.utils.LogLevel;
                // @ts-ignore
                public static DEFAULT_LEVEL: cn.nukkit.utils.LogLevel;
                // @ts-ignore
                public static values(): cn.nukkit.utils.LogLevel[];
                // @ts-ignore
                public static valueOf(name: string): cn.nukkit.utils.LogLevel;
                // @ts-ignore
                public log(logger: cn.nukkit.utils.MainLogger, message: string): void;
                // @ts-ignore
                public log(logger: cn.nukkit.utils.MainLogger, message: string, throwable: java.lang.Throwable): void;
                // @ts-ignore
                public getLevel(): number;
            }
        }
    }
}
