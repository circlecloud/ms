// @ts-nocheck
declare namespace org {
    namespace bukkit {
        // @ts-ignore
         class Note extends java.lang.Object {
            /**
             * Creates a new note.
             */
            // @ts-ignore
            constructor(note: number)
            /**
             * Creates a new note.
             */
            // @ts-ignore
            constructor(octave: number, tone: org.bukkit.Note.Tone, sharped: boolean)
            /**
             * Creates a new note for a flat tone, such as A-flat.
             */
            // @ts-ignore
            public static flat(octave: number, tone: org.bukkit.Note.Tone): org.bukkit.Note;
            /**
             * Creates a new note for a sharp tone, such as A-sharp.
             */
            // @ts-ignore
            public static sharp(octave: number, tone: org.bukkit.Note.Tone): org.bukkit.Note;
            /**
             * Creates a new note for a natural tone, such as A-natural.
             */
            // @ts-ignore
            public static natural(octave: number, tone: org.bukkit.Note.Tone): org.bukkit.Note;
            // @ts-ignore
            public sharped(): org.bukkit.Note;
            // @ts-ignore
            public flattened(): org.bukkit.Note;
            /**
             * Returns the internal id of this note.
             */
            // @ts-ignore
            public getId(): number;
            /**
             * Returns the octave of this note.
             */
            // @ts-ignore
            public getOctave(): number;
            /**
             * Returns the tone of this note.
             */
            // @ts-ignore
            public getTone(): org.bukkit.Note.Tone;
            /**
             * Returns if this note is sharped.
             */
            // @ts-ignore
            public isSharped(): boolean;
            // @ts-ignore
            public hashCode(): number;
            // @ts-ignore
            public equals(obj: java.lang.Object): boolean;
            // @ts-ignore
            public toString(): string;
        }
    }
}
