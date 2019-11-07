declare namespace java {
    namespace time {
        namespace chrono {
            // @ts-ignore
             class IsoEra extends java.lang.Enum {
                // @ts-ignore
                public static BCE: java.time.chrono.IsoEra;
                // @ts-ignore
                public static CE: java.time.chrono.IsoEra;
                // @ts-ignore
                public static values(): java.time.chrono.IsoEra[];
                // @ts-ignore
                public static valueOf(name: string): java.time.chrono.IsoEra;
                /**
                 * Obtains an instance of {@code IsoEra} from an {@code int} value.
                 * <p>
                 * {@code IsoEra} is an enum representing the ISO eras of BCE/CE.
                 * This factory allows the enum to be obtained from the {@code int} value.
                 */
                // @ts-ignore
                public static of(isoEra: number): java.time.chrono.IsoEra;
                /**
                 * Gets the numeric era {@code int} value.
                 * <p>
                 * The era BCE has the value 0, while the era CE has the value 1.
                 */
                // @ts-ignore
                public getValue(): number;
            }
        }
    }
}
