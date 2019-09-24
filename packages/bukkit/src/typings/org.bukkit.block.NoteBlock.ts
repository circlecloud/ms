declare namespace org {
    namespace bukkit {
        namespace block {
            // @ts-ignore
            interface NoteBlock extends org.bukkit.block.BlockState {
                /**
                 * Gets the note.
                 */
                 getNote(): org.bukkit.Note;
                /**
                 * Gets the note.
                 */
                 getRawNote(): number;
                /**
                 * Set the note.
                 */
                 setNote(note: org.bukkit.Note): void;
                /**
                 * Set the note.
                 */
                 setRawNote(note: number): void;
                /**
                 * Attempts to play the note at the block.
                 * <p>
                 * If the block represented by this block state is no longer a note block,
                 * this will return false.
                 */
                 play(): boolean;
                /**
                 * Plays an arbitrary note with an arbitrary instrument at the block.
                 * <p>
                 * If the block represented by this block state is no longer a note block,
                 * this will return false.
                 */
                 play(instrument: number, note: number): boolean;
                /**
                 * Plays an arbitrary note with an arbitrary instrument at the block.
                 * <p>
                 * If the block represented by this block state is no longer a note block,
                 * this will return false.
                 */
                 play(instrument: org.bukkit.Instrument, note: org.bukkit.Note): boolean;
            }
        }
    }
}
