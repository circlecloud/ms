// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace complex {
                        // @ts-ignore
                        interface EnderDragon extends org.spongepowered.api.entity.living.complex.ComplexLiving, org.spongepowered.api.entity.living.monster.Boss, org.spongepowered.api.entity.living.Aerial, org.spongepowered.api.entity.projectile.ProjectileLauncher {
                            // @ts-ignore
                             getParts(): java.util.Set;
                            /**
                             * Returns the current {@code EnderCrystal} that is healing this
                             * ender dragon.
                             */
                            // @ts-ignore
                             getHealingCrystal(): java.util.Optional;
                            /**
                             * Gets the boss bar this dragon uses.
                             */
                            // @ts-ignore
                             getBossBar(): org.spongepowered.api.boss.ServerBossBar;
                            /**
                             * Gets the phase manager.
                             * <p>The phase manager controls the active {@link EnderDragonPhase} of
                             * the dragon in The End.</p>
                             */
                            // @ts-ignore
                             getPhaseManager(): org.spongepowered.api.entity.living.complex.dragon.phase.EnderDragonPhaseManager;
                        }
                    }
                }
            }
        }
    }
}
