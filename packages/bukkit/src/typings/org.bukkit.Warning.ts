declare namespace org {
    namespace bukkit {
        // @ts-ignore
        interface Warning {
            /**
             * This sets if the deprecation warnings when registering events gets
             * printed when the setting is in the default state.
             */
             value(): boolean;
            /**
             * This can provide detailed information on why the event is deprecated.
             */
             reason(): string;
        }
    }
}
