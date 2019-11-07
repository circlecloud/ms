declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace block {
                namespace tileentity {
                    // @ts-ignore
                    interface Note extends org.spongepowered.api.block.tileentity.TileEntity {
                        /**
                         * Attempts to play the currently stored {@link NotePitch} from this
                         * {@link Note} tile entity.
                         */
                        // @ts-ignore
                         playNote(): void;
                        /**
                         * Retrieves the {@link NoteData} for this note block.
                         */
                        // @ts-ignore
                         getNoteData(): org.spongepowered.api.data.manipulator.mutable.tileentity.NoteData;
                        /**
                         * Gets the {@link Value} for the {@link NotePitch}.
                         */
                        // @ts-ignore
                         note(): org.spongepowered.api.data.value.mutable.Value;
                    }
                }
            }
        }
    }
}
