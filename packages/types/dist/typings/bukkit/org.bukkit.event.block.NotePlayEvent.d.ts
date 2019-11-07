declare namespace org {
    namespace bukkit {
        namespace event {
            namespace block {
                // @ts-ignore
                 class NotePlayEvent extends org.bukkit.event.block.BlockEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(block: org.bukkit.block.Block, instrument: org.bukkit.Instrument, note: org.bukkit.Note)
                    // @ts-ignore
                    public isCancelled(): boolean;
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void;
                    /**
                     * Gets the {@link Instrument} to be used.
                     */
                    // @ts-ignore
                    public getInstrument(): org.bukkit.Instrument;
                    /**
                     * Gets the {@link Note} to be played.
                     */
                    // @ts-ignore
                    public getNote(): org.bukkit.Note;
                    /**
                     * Overrides the {@link Instrument} to be used.
                     */
                    // @ts-ignore
                    public setInstrument(instrument: org.bukkit.Instrument): void;
                    /**
                     * Overrides the {@link Note} to be played.
                     */
                    // @ts-ignore
                    public setNote(note: org.bukkit.Note): void;
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList;
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList;
                }
            }
        }
    }
}
