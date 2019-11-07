// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace advancement {
                    // @ts-ignore
                    interface AdvancementEvent extends org.spongepowered.api.event.entity.living.humanoid.player.TargetPlayerEvent {
                        /**
                         * Gets the {@link Advancement} that is being targeted.
                         */
                        // @ts-ignore
                         getAdvancement(): org.spongepowered.api.advancement.Advancement;
                    }
                }
            }
        }
    }
}
