declare namespace org {
    namespace bukkit {
        namespace block {
            class NoteBlock {
                /**
                 * Gets the note.
                 */
                public getNote(): org.bukkit.Note;
                /**
                 * Gets the note.
                 */
                public getRawNote(): number;
                /**
                 * Set the note.
                 */
                public setNote(note: org.bukkit.Note): void;
                /**
                 * Set the note.
                 */
                public setRawNote(note: number): void;
                /**
                 * Attempts to play the note at the block.
                 * <p>
                 * If the block represented by this block state is no longer a note block,
                 * this will return false.
                 */
                public play(): boolean;
                /**
                 * Plays an arbitrary note with an arbitrary instrument at the block.
                 * <p>
                 * If the block represented by this block state is no longer a note block,
                 * this will return false.
                 */
                public play(instrument: number, note: number): boolean;
                /**
                 * Plays an arbitrary note with an arbitrary instrument at the block.
                 * <p>
                 * If the block represented by this block state is no longer a note block,
                 * this will return false.
                 */
                public play(instrument: org.bukkit.Instrument, note: org.bukkit.Note): boolean;
            }
        }
    }
}
