declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace user {
                    namespace PardonUserEvent {
                        // @ts-ignore
                        interface TargetPlayer extends org.spongepowered.api.event.user.PardonUserEvent, org.spongepowered.api.event.entity.living.humanoid.player.TargetPlayerEvent {
                            // @ts-ignore
                             getTargetUser(): org.spongepowered.api.entity.living.player.Player;
                        }
                    }
                }
            }
        }
    }
}
