declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    // @ts-ignore
                    interface NoteBlock extends org.bukkit.block.data.Powerable {
                        /**
                         * Gets the value of the 'instrument' property.
                         */
                        // @ts-ignore
                         getInstrument(): org.bukkit.Instrument;
                        /**
                         * Sets the value of the 'instrument' property.
                         */
                        // @ts-ignore
                         setInstrument(instrument: org.bukkit.Instrument): void;
                        /**
                         * Gets the value of the 'note' property.
                         */
                        // @ts-ignore
                         getNote(): org.bukkit.Note;
                        /**
                         * Sets the value of the 'note' property.
                         */
                        // @ts-ignore
                         setNote(note: org.bukkit.Note): void;
                    }
                }
            }
        }
    }
}
