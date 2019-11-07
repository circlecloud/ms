// @ts-nocheck
declare namespace org {
    namespace bukkit {
        namespace Note {
            // @ts-ignore
             class Tone extends java.lang.Enum {
                // @ts-ignore
                public static G: org.bukkit.Note.Tone;
                // @ts-ignore
                public static A: org.bukkit.Note.Tone;
                // @ts-ignore
                public static B: org.bukkit.Note.Tone;
                // @ts-ignore
                public static C: org.bukkit.Note.Tone;
                // @ts-ignore
                public static D: org.bukkit.Note.Tone;
                // @ts-ignore
                public static E: org.bukkit.Note.Tone;
                // @ts-ignore
                public static F: org.bukkit.Note.Tone;
                // @ts-ignore
                public static TONES_COUNT: number;
                // @ts-ignore
                public static values(): org.bukkit.Note.Tone[];
                // @ts-ignore
                public static valueOf(name: string): org.bukkit.Note.Tone;
                /**
                 * Returns the not sharped id of this tone.
                 */
                // @ts-ignore
                public getId(): number;
                /**
                 * Returns the id of this tone. These method allows to return the
                 * sharped id of the tone. If the tone couldn't be sharped it always
                 * return the not sharped id of this tone.
                 */
                // @ts-ignore
                public getId(sharped: boolean): number;
                /**
                 * Returns if this tone could be sharped.
                 */
                // @ts-ignore
                public isSharpable(): boolean;
                /**
                 * Returns if this tone id is the sharped id of the tone.
                 */
                // @ts-ignore
                public isSharped(id: number): boolean;
                /**
                 * Returns the tone to id. Also returning the semitones.
                 */
                // @ts-ignore
                public static getById(id: number): org.bukkit.Note.Tone;
            }
        }
    }
}
