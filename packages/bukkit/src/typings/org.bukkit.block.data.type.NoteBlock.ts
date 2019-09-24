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
                         getInstrument(): org.bukkit.Instrument;
                        /**
                         * Sets the value of the 'instrument' property.
                         */
                         setInstrument(instrument: org.bukkit.Instrument): void;
                        /**
                         * Gets the value of the 'note' property.
                         */
                         getNote(): org.bukkit.Note;
                        /**
                         * Sets the value of the 'note' property.
                         */
                         setNote(note: org.bukkit.Note): void;
                    }
                }
            }
        }
    }
}
