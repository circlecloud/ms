declare namespace java {
    namespace util {
        // @ts-ignore
        interface Formattable {
            /**
             * Formats the object using the provided {@link Formatter formatter}.
             */
            // @ts-ignore
             formatTo(formatter: java.util.Formatter, flags: number, width: number, precision: number): void;
        }
    }
}
