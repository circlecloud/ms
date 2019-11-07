// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace boss {
                namespace ServerBossBar {
                    // @ts-ignore
                    interface Builder extends org.spongepowered.api.util.ResettableBuilder {
                        /**
                         * Sets the name of the boss bar.
                         */
                        // @ts-ignore
                         name(name: org.spongepowered.api.text.Text): org.spongepowered.api.boss.ServerBossBar.Builder;
                        /**
                         * Sets the percent.
                         * <p>The percent must be between {@code 0.0} and {@code 1.0}.</p>
                         */
                        // @ts-ignore
                         percent(percent: number): org.spongepowered.api.boss.ServerBossBar.Builder;
                        /**
                         * Sets the color.
                         */
                        // @ts-ignore
                         color(color: org.spongepowered.api.boss.BossBarColor): org.spongepowered.api.boss.ServerBossBar.Builder;
                        /**
                         * Sets the overlay.
                         */
                        // @ts-ignore
                         overlay(overlay: org.spongepowered.api.boss.BossBarOverlay): org.spongepowered.api.boss.ServerBossBar.Builder;
                        /**
                         * Sets if the sky should darken.
                         */
                        // @ts-ignore
                         darkenSky(darkenSky: boolean): org.spongepowered.api.boss.ServerBossBar.Builder;
                        /**
                         * Sets if the end boss music should be played.
                         */
                        // @ts-ignore
                         playEndBossMusic(playEndBossMusic: boolean): org.spongepowered.api.boss.ServerBossBar.Builder;
                        /**
                         * Sets if fog should be created.
                         */
                        // @ts-ignore
                         createFog(createFog: boolean): org.spongepowered.api.boss.ServerBossBar.Builder;
                        /**
                         * Sets if the boss bar is visible.
                         */
                        // @ts-ignore
                         visible(visible: boolean): org.spongepowered.api.boss.ServerBossBar.Builder;
                        /**
                         * Build the boss bar from the values in this builder.
                         */
                        // @ts-ignore
                         build(): org.spongepowered.api.boss.ServerBossBar;
                    }
                }
            }
        }
    }
}
