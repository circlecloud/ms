// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace Warning {
            // @ts-ignore
             class WarningState extends java.lang.Enum {
                // @ts-ignore
                public static ON: org.bukkit.Warning.WarningState;
                // @ts-ignore
                public static OFF: org.bukkit.Warning.WarningState;
                // @ts-ignore
                public static DEFAULT: org.bukkit.Warning.WarningState;
                // @ts-ignore
                public static values(): org.bukkit.Warning.WarningState[];
                // @ts-ignore
                public static valueOf(name: string): org.bukkit.Warning.WarningState;
                /**
                 * This method checks the provided warning should be printed for this
                 * state
                 */
                // @ts-ignore
                public printFor(warning: org.bukkit.Warning): boolean;
                /**
                 * This method returns the corresponding warning state for the given
                 * string value.
                 */
                // @ts-ignore
                public static value(value: string): org.bukkit.Warning.WarningState;
            }
        }
    }
}
