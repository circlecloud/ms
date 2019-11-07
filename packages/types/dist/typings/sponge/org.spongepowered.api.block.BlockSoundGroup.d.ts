declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                // @ts-ignore
                interface BlockSoundGroup {
                    /**
                     * Gets the volume used when playing sounds.
                     */
                    // @ts-ignore
                     getVolume(): number;
                    /**
                     * Gets the pitch used when playing sounds.
                     */
                    // @ts-ignore
                     getPitch(): number;
                    /**
                     * Gets the sound played when the block is breaking.
                     */
                    // @ts-ignore
                     getBreakSound(): org.spongepowered.api.effect.sound.SoundType;
                    /**
                     * Gets the sound played when the block is stepped on.
                     */
                    // @ts-ignore
                     getStepSound(): org.spongepowered.api.effect.sound.SoundType;
                    /**
                     * Gets the sound played when the block is placed.
                     */
                    // @ts-ignore
                     getPlaceSound(): org.spongepowered.api.effect.sound.SoundType;
                    /**
                     * Gets the sound played when the block is hit.
                     */
                    // @ts-ignore
                     getHitSound(): org.spongepowered.api.effect.sound.SoundType;
                    /**
                     * Gets the sound played when a {@link Living} entity falls onto the block.
                     */
                    // @ts-ignore
                     getFallSound(): org.spongepowered.api.effect.sound.SoundType;
                }
            }
        }
    }
}
