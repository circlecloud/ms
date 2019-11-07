declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace world {
                    // @ts-ignore
                    interface ChunkPreGenerationEvent extends org.spongepowered.api.event.world.TargetWorldEvent {
                        /**
                         * The object that contains the progress information for the
                         * current {@link ChunkPreGenerate}.
                         */
                        // @ts-ignore
                         getChunkPreGenerate(): org.spongepowered.api.world.ChunkPreGenerate;
                    }
                }
            }
        }
    }
}
