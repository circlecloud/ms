// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace boss {
                // @ts-ignore
                interface BossBar extends org.spongepowered.api.util.Identifiable {
                    /**
                     * Gets the name of this boss bar.
                     */
                    // @ts-ignore
                     getName(): org.spongepowered.api.text.Text;
                    /**
                     * Sets the name of this boss bar.
                     */
                    // @ts-ignore
                     setName(name: org.spongepowered.api.text.Text): org.spongepowered.api.boss.BossBar;
                    /**
                     * Gets the percent.
                     */
                    // @ts-ignore
                     getPercent(): number;
                    /**
                     * Sets the percent.
                     * <p>The percent must be between {@code 0.0} and {@code 1.0}.</p>
                     */
                    // @ts-ignore
                     setPercent(percent: number): org.spongepowered.api.boss.BossBar;
                    /**
                     * Gets the color.
                     */
                    // @ts-ignore
                     getColor(): org.spongepowered.api.boss.BossBarColor;
                    /**
                     * Sets the color.
                     */
                    // @ts-ignore
                     setColor(color: org.spongepowered.api.boss.BossBarColor): org.spongepowered.api.boss.BossBar;
                    /**
                     * Gets the overlay.
                     */
                    // @ts-ignore
                     getOverlay(): org.spongepowered.api.boss.BossBarOverlay;
                    /**
                     * Sets the overlay.
                     */
                    // @ts-ignore
                     setOverlay(overlay: org.spongepowered.api.boss.BossBarOverlay): org.spongepowered.api.boss.BossBar;
                    /**
                     * If the sky should darken.
                     */
                    // @ts-ignore
                     shouldDarkenSky(): boolean;
                    /**
                     * Sets if the sky should darken.
                     */
                    // @ts-ignore
                     setDarkenSky(darkenSky: boolean): org.spongepowered.api.boss.BossBar;
                    /**
                     * If the end boss music should be played.
                     */
                    // @ts-ignore
                     shouldPlayEndBossMusic(): boolean;
                    /**
                     * Sets if the end boss music should be played.
                     */
                    // @ts-ignore
                     setPlayEndBossMusic(playEndBossMusic: boolean): org.spongepowered.api.boss.BossBar;
                    /**
                     * If fog should be created.
                     */
                    // @ts-ignore
                     shouldCreateFog(): boolean;
                    /**
                     * Sets if fog should be created.
                     */
                    // @ts-ignore
                     setCreateFog(createFog: boolean): org.spongepowered.api.boss.BossBar;
                }
            }
        }
    }
}
