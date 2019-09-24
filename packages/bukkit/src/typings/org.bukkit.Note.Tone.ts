declare namespace org {
    namespace bukkit {
        namespace Note {
            // @ts-ignore
             class Tone {
                public static G: org.bukkit.Note.Tone;
                public static A: org.bukkit.Note.Tone;
                public static B: org.bukkit.Note.Tone;
                public static C: org.bukkit.Note.Tone;
                public static D: org.bukkit.Note.Tone;
                public static E: org.bukkit.Note.Tone;
                public static F: org.bukkit.Note.Tone;
                public static TONES_COUNT: number;
                public static values(): org.bukkit.Note.Tone[];
                public static valueOf(name: string): org.bukkit.Note.Tone;
                /**
                 * Returns the not sharped id of this tone.
                 */
                public getId(): number;
                /**
                 * Returns the id of this tone. These method allows to return the
                 * sharped id of the tone. If the tone couldn't be sharped it always
                 * return the not sharped id of this tone.
                 */
                public getId(sharped: boolean): number;
                /**
                 * Returns if this tone could be sharped.
                 */
                public isSharpable(): boolean;
                /**
                 * Returns if this tone id is the sharped id of the tone.
                 */
                public isSharped(id: number): boolean;
                /**
                 * Returns the tone to id. Also returning the semitones.
                 */
                public static getById(id: number): org.bukkit.Note.Tone;
            }
        }
    }
}
