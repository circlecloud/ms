declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class NotePlayEvent implements org.bukkit.event.Cancellable {
                    constructor(block: org.bukkit.block.Block, instrument: org.bukkit.Instrument, note: org.bukkit.Note)
                    public isCancelled(): boolean;
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Gets the {@link Instrument} to be used.
                     */
                    public getInstrument(): org.bukkit.Instrument;
                    /**
                     * Gets the {@link Note} to be played.
                     */
                    public getNote(): org.bukkit.Note;
                    /**
                     * Overrides the {@link Instrument} to be used.
                     */
                    public setInstrument(instrument: org.bukkit.Instrument): void;
                    /**
                     * Overrides the {@link Note} to be played.
                     */
                    public setNote(note: org.bukkit.Note): void;
                    public getHandlers(): org.bukkit.event.HandlerList;
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
