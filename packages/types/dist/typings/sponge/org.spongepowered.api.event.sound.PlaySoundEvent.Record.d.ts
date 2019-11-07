// @ts-nocheck
declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace sound {
                    namespace PlaySoundEvent {
                        // @ts-ignore
                        interface Record extends org.spongepowered.api.event.sound.PlaySoundEvent {
                            /**
                             * Gets the {@link Jukebox} associated with this event.
                             */
                            // @ts-ignore
                             getJukebox(): org.spongepowered.api.block.tileentity.Jukebox;
                            /**
                             * Gets the {@link RecordType} associated with this event.
                             */
                            // @ts-ignore
                             getRecordType(): org.spongepowered.api.effect.sound.record.RecordType;
                        }
                    }
                }
            }
        }
    }
}
