declare namespace org {
    namespace bukkit {
        class Warning {
            /**
             * This sets if the deprecation warnings when registering events gets
             * printed when the setting is in the default state.
             */
            public value(): boolean;
            /**
             * This can provide detailed information on why the event is deprecated.
             */
            public reason(): string;
        }
    }
}
