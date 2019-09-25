declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace effect {
                // @ts-ignore
                interface Viewer {
                    /**
                     * Spawn a {@link ParticleEffect} at a given position.
                     * All players within a default radius around the position will see the
                     * particles.
                     */
                    // @ts-ignore
                     spawnParticles(particleEffect: org.spongepowered.api.effect.particle.ParticleEffect, position: any /*Vector3d*/): void;
                    /**
                     * Spawn a {@link ParticleEffect} at a given position.
                     * All players within a given radius around the position will see the
                     * particles.
                     */
                    // @ts-ignore
                     spawnParticles(particleEffect: org.spongepowered.api.effect.particle.ParticleEffect, position: any /*Vector3d*/, radius: number): void;
                    /**
                     * Plays the given {@link SoundType} at the given position, with the
                     * category {@link SoundCategories#MASTER}. All players within range
                     * will hear the sound with the given volume.
                     */
                    // @ts-ignore
                     playSound(sound: org.spongepowered.api.effect.sound.SoundType, position: any /*Vector3d*/, volume: number): void;
                    /**
                     * Plays the given {@link SoundType} at the given position. All
                     * players within range will hear the sound with the given volume.
                     */
                    // @ts-ignore
                     playSound(sound: org.spongepowered.api.effect.sound.SoundType, category: org.spongepowered.api.effect.sound.SoundCategory, position: any /*Vector3d*/, volume: number): void;
                    /**
                     * Plays the given {@link SoundType} at the given position, with the
                     * category {@link SoundCategories#MASTER}. All players within range
                     * will hear the sound with the given volume.
                     */
                    // @ts-ignore
                     playSound(sound: org.spongepowered.api.effect.sound.SoundType, position: any /*Vector3d*/, volume: number, pitch: number): void;
                    /**
                     * Plays the given {@link SoundType} at the given position, with the
                     * category {@link SoundCategories#MASTER}. All players within range
                     * will hear the sound with the given volume.
                     */
                    // @ts-ignore
                     playSound(sound: org.spongepowered.api.effect.sound.SoundType, category: org.spongepowered.api.effect.sound.SoundCategory, position: any /*Vector3d*/, volume: number, pitch: number): void;
                    /**
                     * Plays the given {@link SoundType} at the given position, with the
                     * category {@link SoundCategories#MASTER}. All players within range
                     * will hear the sound with the given volume.
                     */
                    // @ts-ignore
                     playSound(sound: org.spongepowered.api.effect.sound.SoundType, position: any /*Vector3d*/, volume: number, pitch: number, minVolume: number): void;
                    /**
                     * Plays the given {@link SoundType} at the given position. All
                     * players within range will hear the sound with the given volume.
                     */
                    // @ts-ignore
                     playSound(sound: org.spongepowered.api.effect.sound.SoundType, category: org.spongepowered.api.effect.sound.SoundCategory, position: any /*Vector3d*/, volume: number, pitch: number, minVolume: number): void;
                    /**
                     * Stops all the sounds.
                     */
                    // @ts-ignore
                     stopSounds(): void;
                    /**
                     * Stops all the sounds of the given {@link SoundType}.
                     */
                    // @ts-ignore
                     stopSounds(sound: org.spongepowered.api.effect.sound.SoundType): void;
                    /**
                     * Stops all the sounds that are played in the
                     * given {@link SoundCategory}.
                     */
                    // @ts-ignore
                     stopSounds(category: org.spongepowered.api.effect.sound.SoundCategory): void;
                    /**
                     * Stops all the sounds of the given {@link SoundType} that
                     * are played in the given {@link SoundCategory}.
                     */
                    // @ts-ignore
                     stopSounds(sound: org.spongepowered.api.effect.sound.SoundType, category: org.spongepowered.api.effect.sound.SoundCategory): void;
                    /**
                     * Plays the given {@link RecordType} at the given position. The benefit of playing
                     * {@link RecordType} instead of a {@link SoundType} allows you to stop them through
                     * the {@link #stopRecord(Vector3i)}. Playing a new {@link RecordType} at the same
                     * position will cancel the currently playing one.
                     */
                    // @ts-ignore
                     playRecord(position: any /*Vector3i*/, recordType: org.spongepowered.api.effect.sound.record.RecordType): void;
                    /**
                     * Stops the record that is playing at the given position.
                     */
                    // @ts-ignore
                     stopRecord(position: any /*Vector3i*/): void;
                    /**
                     * Sends a {@link Title} to this player.
                     */
                    // @ts-ignore
                     sendTitle(title: org.spongepowered.api.text.title.Title): void;
                    /**
                     * Removes the currently displayed {@link Title} from the player and resets
                     * all settings back to default values.
                     */
                    // @ts-ignore
                     resetTitle(): void;
                    /**
                     * Removes the currently displayed {@link Title} from the player's screen.
                     */
                    // @ts-ignore
                     clearTitle(): void;
                    /**
                     * Sends a {@link BookView} to this viewer.
                     */
                    // @ts-ignore
                     sendBookView(bookView: org.spongepowered.api.text.BookView): void;
                    /**
                     * Sends a client-only block change.
                     * <p>This will not change the {@link World} in any way.</p>
                     */
                    // @ts-ignore
                     sendBlockChange(vec: any /*Vector3i*/, state: org.spongepowered.api.block.BlockState): void;
                    /**
                     * Sends a client-only block change.
                     * <p>This will not change the {@link World} in any way.</p>
                     */
                    // @ts-ignore
                     sendBlockChange(x: number, y: number, z: number, state: org.spongepowered.api.block.BlockState): void;
                    /**
                     * Resets the client's view of the provided position to what
                     * actually exists in the {@link World}.
                     * <p>This is useful for resetting what the client sees
                     * after sending a {@link #sendBlockChange block change}.</p>
                     */
                    // @ts-ignore
                     resetBlockChange(vec: any /*Vector3i*/): void;
                    /**
                     * Resets the client's view of the provided position to what
                     * actually exists in the {@link World}.
                     * <p>This is useful for resetting what the client sees
                     * after sending a {@link #sendBlockChange block change}.</p>
                     */
                    // @ts-ignore
                     resetBlockChange(x: number, y: number, z: number): void;
                }
            }
        }
    }
}
