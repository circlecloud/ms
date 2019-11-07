// @ts-nocheck
declare namespace org {
    namespace bukkit {
        // @ts-ignore
        interface Warning {
            /**
             * This sets if the deprecation warnings when registering events gets
             * printed when the setting is in the default state.
             */
            // @ts-ignore
             value(): boolean;
            /**
             * This can provide detailed information on why the event is deprecated.
             */
            // @ts-ignore
             reason(): string;
        }
    }
}
