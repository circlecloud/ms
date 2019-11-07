// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace sound {
                    // @ts-ignore
                    interface PlaySoundEvent extends org.spongepowered.api.event.Event, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets the location of the sound being played.
                         */
                        // @ts-ignore
                         getLocation(): org.spongepowered.api.world.Location;
                        /**
                         * Gets the {@link SoundCategory} for the sound being played
                         */
                        // @ts-ignore
                         getSoundCategory(): org.spongepowered.api.effect.sound.SoundCategory;
                        /**
                         * Gets the {@link SoundType} for the sound being played
                         */
                        // @ts-ignore
                         getSoundType(): org.spongepowered.api.effect.sound.SoundType;
                        /**
                         * Gets the volume of the sound being played
                         */
                        // @ts-ignore
                         getVolume(): number;
                        /**
                         * Gets the pitch of the sound being played
                         */
                        // @ts-ignore
                         getPitch(): number;
                    }
                }
            }
        }
    }
}
