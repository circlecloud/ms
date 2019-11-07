declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace command {
                namespace source {
                    // @ts-ignore
                    interface ProxySource extends org.spongepowered.api.command.CommandSource {
                        /**
                         * Gets the {@link CommandSource} this source is created by.
                         */
                        // @ts-ignore
                         getOriginalSource(): org.spongepowered.api.command.CommandSource;
                    }
                }
            }
        }
    }
}
