declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace channel {
                    namespace type {
                        // @ts-ignore
                         class PermissionMessageChannel implements org.spongepowered.api.text.channel.MessageChannel {
                            /**
                             * Creates a new {@link MessageChannel} with the provided {@link String permission}
                             * required to be considered a "target" {@link MessageReceiver}.
                             */
                            constructor(permission: string)
                            // @ts-ignore
                            protected permission: string;
                            /**
                             * Gets the {@link String} permission required to be included in this
                             * {@link MessageChannel}.
                             */
                            // @ts-ignore
                            public getPermission(): string;
                            // @ts-ignore
                            public getMembers(): any[] /*java.util.Collection*/;
                        }
                    }
                }
            }
        }
    }
}
