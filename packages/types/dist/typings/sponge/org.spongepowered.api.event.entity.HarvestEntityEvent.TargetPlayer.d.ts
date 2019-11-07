// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace HarvestEntityEvent {
                        // @ts-ignore
                        interface TargetPlayer extends org.spongepowered.api.event.entity.HarvestEntityEvent.TargetHumanoid, org.spongepowered.api.event.entity.living.humanoid.player.TargetPlayerEvent {
                            /**
                             * Gets whether the player keeps their inventory on death.
                             */
                            // @ts-ignore
                             keepsInventory(): boolean;
                            /**
                             * Sets if the player keeps their inventory on death.
                             */
                            // @ts-ignore
                             setKeepsInventory(keepInventory: boolean): void;
                            /**
                             * Gets whether the player keeps all of their EXP on death.
                             */
                            // @ts-ignore
                             keepsLevel(): boolean;
                            /**
                             * Sets if the player keeps all of their EXP on death.
                             */
                            // @ts-ignore
                             setKeepsLevel(keepLevel: boolean): void;
                            /**
                             * Gets the new level the player will have after death.
                             */
                            // @ts-ignore
                             getLevel(): number;
                            /**
                             * Sets the new level the player will have after death.
                             */
                            // @ts-ignore
                             setLevel(level: number): void;
                        }
                    }
                }
            }
        }
    }
}
