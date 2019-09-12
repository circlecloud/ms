declare namespace org {
    namespace bukkit {
        class Note {
            /**
             * Creates a new note.
             */
            constructor(note: number)
            /**
             * Creates a new note.
             */
            constructor(octave: number, tone: org.bukkit.Note.Tone, sharped: boolean)
            /**
             * Creates a new note for a flat tone, such as A-flat.
             */
            public static flat(octave: number, tone: org.bukkit.Note.Tone): org.bukkit.Note;
            /**
             * Creates a new note for a sharp tone, such as A-sharp.
             */
            public static sharp(octave: number, tone: org.bukkit.Note.Tone): org.bukkit.Note;
            /**
             * Creates a new note for a natural tone, such as A-natural.
             */
            public static natural(octave: number, tone: org.bukkit.Note.Tone): org.bukkit.Note;
            public sharped(): org.bukkit.Note;
            public flattened(): org.bukkit.Note;
            /**
             * Returns the internal id of this note.
             */
            public getId(): number;
            /**
             * Returns the octave of this note.
             */
            public getOctave(): number;
            /**
             * Returns the tone of this note.
             */
            public getTone(): org.bukkit.Note.Tone;
            /**
             * Returns if this note is sharped.
             */
            public isSharped(): boolean;
            public hashCode(): number;
            public equals(obj: any): boolean;
            public toString(): string;
        }
    }
}
