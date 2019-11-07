// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace living {
                        namespace humanoid {
                            namespace player {
                                namespace ResourcePackStatusEvent {
                                    // @ts-ignore
                                     class ResourcePackStatus extends java.lang.Enum {
                                        // @ts-ignore
                                        public static ACCEPTED: org.spongepowered.api.event.entity.living.humanoid.player.ResourcePackStatusEvent.ResourcePackStatus;
                                        // @ts-ignore
                                        public static DECLINED: org.spongepowered.api.event.entity.living.humanoid.player.ResourcePackStatusEvent.ResourcePackStatus;
                                        // @ts-ignore
                                        public static FAILED: org.spongepowered.api.event.entity.living.humanoid.player.ResourcePackStatusEvent.ResourcePackStatus;
                                        // @ts-ignore
                                        public static SUCCESSFULLY_LOADED: org.spongepowered.api.event.entity.living.humanoid.player.ResourcePackStatusEvent.ResourcePackStatus;
                                        // @ts-ignore
                                        public static values(): org.spongepowered.api.event.entity.living.humanoid.player.ResourcePackStatusEvent.ResourcePackStatus[];
                                        // @ts-ignore
                                        public static valueOf(name: string): org.spongepowered.api.event.entity.living.humanoid.player.ResourcePackStatusEvent.ResourcePackStatus;
                                        /**
                                         * Gets if this status indicates that the pack was successfully set.
                                         */
                                        // @ts-ignore
                                        public wasSuccessful(): java.util.Optional;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
