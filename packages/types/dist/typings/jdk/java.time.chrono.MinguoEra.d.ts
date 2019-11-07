declare namespace java {
    namespace time {
        namespace chrono {
            // @ts-ignore
             class MinguoEra extends java.lang.Enum {
                // @ts-ignore
                public static BEFORE_ROC: java.time.chrono.MinguoEra;
                // @ts-ignore
                public static ROC: java.time.chrono.MinguoEra;
                // @ts-ignore
                public static values(): java.time.chrono.MinguoEra[];
                // @ts-ignore
                public static valueOf(name: string): java.time.chrono.MinguoEra;
                /**
                 * Obtains an instance of {@code MinguoEra} from an {@code int} value.
                 * <p>
                 * {@code MinguoEra} is an enum representing the Minguo eras of BEFORE_ROC/ROC.
                 * This factory allows the enum to be obtained from the {@code int} value.
                 */
                // @ts-ignore
                public static of(minguoEra: number): java.time.chrono.MinguoEra;
                /**
                 * Gets the numeric era {@code int} value.
                 * <p>
                 * The era BEFORE_ROC has the value 0, while the era ROC has the value 1.
                 */
                // @ts-ignore
                public getValue(): number;
            }
        }
    }
}
