declare namespace org {
    namespace bukkit {
        namespace Warning {
            class WarningState {
                public static ON: org.bukkit.Warning.WarningState;
                public static OFF: org.bukkit.Warning.WarningState;
                public static DEFAULT: org.bukkit.Warning.WarningState;
                public static values(): org.bukkit.Warning.WarningState[];
                public static valueOf(name: string): org.bukkit.Warning.WarningState;
                /**
                 * This method checks the provided warning should be printed for this
                 * state
                 */
                public printFor(warning: org.bukkit.Warning): boolean;
                /**
                 * This method returns the corresponding warning state for the given
                 * string value.
                 */
                public static value(value: string): org.bukkit.Warning.WarningState;
            }
        }
    }
}
