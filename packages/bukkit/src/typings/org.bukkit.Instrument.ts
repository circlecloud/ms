declare namespace org {
    namespace bukkit {
        // @ts-ignore
         class Instrument {
            public static PIANO: org.bukkit.Instrument;
            public static BASS_DRUM: org.bukkit.Instrument;
            public static SNARE_DRUM: org.bukkit.Instrument;
            public static STICKS: org.bukkit.Instrument;
            public static BASS_GUITAR: org.bukkit.Instrument;
            public static FLUTE: org.bukkit.Instrument;
            public static BELL: org.bukkit.Instrument;
            public static GUITAR: org.bukkit.Instrument;
            public static CHIME: org.bukkit.Instrument;
            public static XYLOPHONE: org.bukkit.Instrument;
            public static IRON_XYLOPHONE: org.bukkit.Instrument;
            public static COW_BELL: org.bukkit.Instrument;
            public static DIDGERIDOO: org.bukkit.Instrument;
            public static BIT: org.bukkit.Instrument;
            public static BANJO: org.bukkit.Instrument;
            public static PLING: org.bukkit.Instrument;
            public static values(): org.bukkit.Instrument[];
            public static valueOf(name: string): org.bukkit.Instrument;
            public getType(): number;
            /**
             * Get an instrument by its type ID.
             */
            public static getByType(type: number): org.bukkit.Instrument;
        }
    }
}
