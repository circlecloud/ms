declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace channel {
                    namespace type {
                        // @ts-ignore
                         class WorldMessageChannel implements org.spongepowered.api.text.channel.MessageChannel {
                            /**
                             * Creates a new {@link MessageChannel channel} specific to the provided
                             * {@link World world}.
                             */
                            constructor(world: org.spongepowered.api.world.World)
                            // @ts-ignore
                            public getMembers(): any[] /*java.util.Collection*/;
                        }
                    }
                }
            }
        }
    }
}
