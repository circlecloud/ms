// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace block {
            // @ts-ignore
            interface NoteBlock extends org.bukkit.block.BlockState {
                /**
                 * Gets the note.
                 */
                // @ts-ignore
                 getNote(): org.bukkit.Note;
                /**
                 * Gets the note.
                 */
                // @ts-ignore
                 getRawNote(): number;
                /**
                 * Set the note.
                 */
                // @ts-ignore
                 setNote(note: org.bukkit.Note): void;
                /**
                 * Set the note.
                 */
                // @ts-ignore
                 setRawNote(note: number): void;
                /**
                 * Attempts to play the note at the block.
                 * <p>
                 * If the block represented by this block state is no longer a note block,
                 * this will return false.
                 */
                // @ts-ignore
                 play(): boolean;
                /**
                 * Plays an arbitrary note with an arbitrary instrument at the block.
                 * <p>
                 * If the block represented by this block state is no longer a note block,
                 * this will return false.
                 */
                // @ts-ignore
                 play(instrument: number, note: number): boolean;
                /**
                 * Plays an arbitrary note with an arbitrary instrument at the block.
                 * <p>
                 * If the block represented by this block state is no longer a note block,
                 * this will return false.
                 */
                // @ts-ignore
                 play(instrument: org.bukkit.Instrument, note: org.bukkit.Note): boolean;
            }
        }
    }
}
