declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace args {
                    namespace ArgumentParseException {
                        // @ts-ignore
                         class WithUsage extends org.spongepowered.api.command.args.ArgumentParseException {
                            constructor(wrapped: org.spongepowered.api.command.args.ArgumentParseException, usage: org.spongepowered.api.text.Text)
                            /**
                             * Gets the usage associated with this exception.
                             */
                            // @ts-ignore
                            public getUsage(): org.spongepowered.api.text.Text;
                        }
                    }
                }
            }
        }
    }
}
